import { createContext, useContext, useReducer, useEffect, useState } from "react"
import { cartReducer, embReducer } from "../reducers/cart"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("@innovationbrindes-cart-v1")
      return localData ? JSON.parse(localData) : []
    }
  })

  const [embalagem, embDispatch] = useReducer(embReducer, [])
  const [hashAnimation, setHashAnimation] = useState("")

  const [frete, setFrete] = useState({})
  const [infoEmb, setInfoEmb] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [itemEdit, setItemEdit] = useState({})
  const [getIndex, setGetIndex] = useState(0)
  const [valores, setValores] = useState(0)
  const [highlightedItemId, setHighlightedItemId] = useState(null)
  const [newItemId, setNewItemId] = useState(null)
  const [stepCart, setStepCart] = useState(1)

  function handleStepCart(value) {
    setStepCart(value)
  }

  const totalEmbValue = infoEmb.reduce((acc, item) => {
    const { price } = item

    const priceTotal = parseFloat(price)

    return acc + priceTotal
  }, 0)

  function handleOpenModal(value, index) {
    setOpenModal(true)
    setItemEdit(value)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  function handleAddEmbalagem(item) {
    dispatch({ type: "ADD_EMBALAGEM", payload: item })
  }

  function handleDeleteEmbalagem(item) {
    dispatch({ type: "REMOVE_EMBALAGEM", payload: item })
  }

  function getInfoEmb(value) {
    setFrete(null)
    handleStepCart(0)
    const existingEmb = infoEmb.find((item) => item.id_hash === value.id_hash)

    if (existingEmb) {
      //sobrepoe  o valor
      const newValueEmb = infoEmb.map((item) => (item.id_hash === value.id_hash ? value : item))

      setInfoEmb(newValueEmb)
      return
    }

    setInfoEmb([...infoEmb, value])
  }

  function removeInfoEmb(value) {
    setFrete(null)
    // handleStepCart(0)
    const newValueEmb = infoEmb.filter((item) => item.id !== value.id_hash)
    setInfoEmb(newValueEmb)

    // handleRemoveEmbalagem(value);
  }

  useEffect(() => {
    localStorage.setItem("@innovationbrindes-cart-v1", JSON.stringify(cart))
  }, [cart])

  function addToCart(item) {
    dispatch({ type: "ADD", payload: item })
  }

  function duplicateItem(item) {
    setFrete(null)
    // handleStepCart(0)

    const itemDuplicated = {
      ...item,
      sequencia: item.sequencia++,
      embalagem: false,
      duplicado: true,
      length: cart.length + 1,
      hash_duplicado: new Date().getTime().toString(),
    }

    dispatch({ type: "DUPLICATE", payload: itemDuplicated })

    setHighlightedItemId(itemDuplicated.hash_duplicado)
    setNewItemId(itemDuplicated.hash_duplicado)

    //item duplicado será o proximo item a ser adicionado

    const nextItemPosition = cart?.length + 1

    const getNextItem = cart.find((item) => item.length === nextItemPosition)
  }

  useEffect(() => {
    if (newItemId) {
      const timer = setTimeout(() => {
        setHighlightedItemId(null)
        setNewItemId(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [newItemId])

  function removeFromCart(item) {
    setFrete(null)
    // handleStepCart(0)
    dispatch({ type: "REMOVE", payload: item })
    removeInfoEmb(item)
  }

  function editItem(updatedItem) {
    setFrete(null)
    // handleStepCart(0);
    dispatch({
      type: "EDIT",
      payload: { id_hash: updatedItem.id_hash, updatedItem },
    })
  }

  function clearCart() {
    dispatch({ type: "CLEAR" })
  }

  function changeValueFrete(value) {
    setFrete(value)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        changeValueFrete,
        frete,
        getInfoEmb,
        removeInfoEmb,
        totalEmbValue,
        infoEmb,
        duplicateItem,
        editItem,
        openModal,
        handleOpenModal,
        handleCloseModal,
        itemEdit,
        setItemEdit,
        setGetIndex,
        getIndex,
        setValores,
        valores,
        handleAddEmbalagem,
        handleDeleteEmbalagem,
        highlightedItemId,
        handleStepCart,
        stepCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
