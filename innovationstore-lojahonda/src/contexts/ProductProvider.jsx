import axios from "axios"
import { createContext, useContext, useState, useCallback, useReducer, useEffect } from "react"
import { buscaProduto, buscaValorProduto } from "../services/api"

const ProductContext = createContext()

const initialState = {
  price: 0,
  productQuantity: 0,
  batidas: 0,
  entrega: 0,
  codprod: 0,
  codImp: 0,
  codColor: 0,
}

function reducerPriceProduct(state, action) {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload }
    case "SET_PRODUCT_QUANTITY":
      return { ...state, productQuantity: action.payload, codprod: state.codprod }
    case "SET_BATIDAS":
      return { ...state, batidas: action.payload, codprod: state.codprod }
    case "SET_ENTREGA":
      return { ...state, entrega: action.payload, codprod: state.codprod }
    case "SET_CODPROD":
      return { ...state, codprod: action.payload }
    case "SET_CODIMP":
      return { ...state, codImp: action.payload, codprod: state.codprod }
    case "SET_CODCOLOR":
      return { ...state, codColor: action.payload, codprod: state.codprod }
    default:
      throw new Error()
  }
}

const initialStateResumo = {
  step: 1,
}

function reducerResumoProduct(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 }
    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 }

    default:
      return state
  }
}

export function ProductProvider({ children }) {
  const [price, setPrice] = useState(0)
  const [state, dispatch] = useReducer(reducerPriceProduct, initialState)
  const [resumo, dispatchResumo] = useReducer(reducerResumoProduct, initialStateResumo)
  const [cubagens, setCubagens] = useState([])

  const [loading, setLoading] = useState(true)

  function handleSetPrice(price) {
    dispatch({ type: "SET_PRICE", payload: price })
  }

  function handleSetProductQuantity(productQuantity) {
    dispatch({
      type: "SET_PRODUCT_QUANTITY",
      payload: productQuantity,
    })
  }

  function handleSetCodprod(codprod) {
    dispatch({
      type: "SET_CODPROD",
      payload: codprod,
    })
  }

  function handleSetBatidas(batidas) {
    dispatch({
      type: "SET_BATIDAS",
      payload: batidas,
    })
  }

  function handleSetEntrega(entrega) {
    dispatch({
      type: "SET_ENTREGA",
      payload: entrega,
    })
  }

  function handleSetCodImp(codImp) {
    dispatch({
      type: "SET_CODIMP",
      payload: codImp,
    })
  }

  function handleSetCodColor(codColor) {
    dispatch({
      type: "SET_CODCOLOR",
      payload: codColor,
    })
  }

  const calculateProduct = useCallback(async () => {
    setLoading(true)
    const fields = [
      state.codprod,
      state.codImp.codigo_impressao,
      state.codColor,
      state.batidas,
      state.productQuantity,
      state.entrega,
    ]

    if (fields.some((field) => !field)) {
      setLoading(false)
      return
    }

    const { codigo_impressao } = state?.codImp

    const params = {
      codigo_produto: state.codprod,
      codigo_impressao: codigo_impressao,
      quantidade: state.productQuantity,
      codigo_cor: state.codColor.codigo_cor,
      batidas: state.batidas,
      prazo_entrega: parseInt(state?.entrega?.prazo),
    }

    const response = await buscaValorProduto.post("", params)

    setPrice(response.data)

    setLoading(false)
    return response.data.preco
  }, [state])

  useEffect(() => {
    calculateProduct()
  }, [calculateProduct])

  function nextStep() {
    dispatchResumo({ type: "NEXT_STEP" })
  }

  function previousStep() {
    dispatchResumo({ type: "PREVIOUS_STEP" })
  }

  const getCubagensProduct = useCallback(async () => {
    const response = await buscaProduto.post(`/listar-tabela-preco/${state.codprod}/${state.productQuantity}`)
    const data = response.data
    const cubagens = []
    data.map((item) => {
      const properties = item.mensagem?.split(",").reduce((obj, property) => {
        const [key, value] = property.split("=")
        obj[key] = value
        return obj
      }, {})

      cubagens.push({
        ...properties,
        calc_kangu: data[0].calc_kangu,
      })
    })

    const cubagensNotDuplicate = cubagens.filter(
      (item, index, self) => self.findIndex((t) => t.cubagem === item.cubagem) === index,
    )

    setCubagens(cubagensNotDuplicate)
  }, [state])

  useEffect(() => {
    getCubagensProduct()
  }, [getCubagensProduct])

  return (
    <ProductContext.Provider
      value={{
        calculateProduct,
        price,
        handleSetPrice,
        handleSetProductQuantity,
        handleSetBatidas,
        handleSetEntrega,
        handleSetCodImp,
        handleSetCodColor,
        handleSetCodprod,
        state,
        loading,
        nextStep,
        previousStep,
        resumo,
        cubagens,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProductProvider() {
  const context = useContext(ProductContext)
  if (!context) throw new Error("useCalculateProduct must be used within a CalculateProductProvider")
  return context
}
