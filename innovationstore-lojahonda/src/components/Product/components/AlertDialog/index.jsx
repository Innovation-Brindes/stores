import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { useEffect } from "react"
import { useState } from "react"

export const AlertDialogComponent = ({ title, description, open, setOpen, multiple, exampleMultiple, flag, error }) => {
  const [quantitySelected, setQuantitySelected] = useState(0)

  useEffect(() => {
    setQuantitySelected(exampleMultiple[0])
  }, [open, exampleMultiple])

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black opacity-50 fixed inset-0" />
        <AlertDialog.Content className="bg-white rounded-md shadow-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90vw] max-w-[500px] max-h-[85vh] p-6 focus:outline-none z-[999999999999]">
          <AlertDialog.Title className="text-gray-900 text-lg font-bold text-center">{title}</AlertDialog.Title>
          <AlertDialog.Description className="mb-5 text-base text-center mt-5">{description}</AlertDialog.Description>
          <AlertDialog.Description className="mb-5 text-base text-center mt-5">
            <div className="flex flex-col gap-2">
              <h3>Exemplo de quantidade válida com base na quantidade digitada:</h3>
              <div className="flex items-center gap-2 justify-center">
                {exampleMultiple?.map((example) => (
                  <span
                    className={`block font-bold border-2 p-1 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-300
                    ${quantitySelected === example ? "bg-gray-100" : ""} 
                    `}
                    key={example}
                    onClick={() => setQuantitySelected(example)}
                  >
                    {example}
                  </span>
                ))}
              </div>
              <span>Ou você pode digitar um valor multiplo de {flag}.</span>

              <input
                type="number"
                className="border-2 border-gray-300 rounded-md p-1 max-w-[200px] w-full mx-auto text-center"
                value={quantitySelected}
                onChange={(e) => setQuantitySelected(e.target.value)}
                //nao deixa digitar valor diferente do multiplo
                step={flag}
                data-no-focus-lock="true"
              />
              {error && <span className="text-red-500">A quantidade desse produto deve ser múltipla de {flag}.</span>}
            </div>
          </AlertDialog.Description>

          <div className="flex items-center justify-center gap-4">
            <AlertDialog.Action asChild>
              <button className="bg-[#ff4f00] text-white px-4 py-2 rounded-md hover:brightness-90 transition-colors duration-300 font-bold flex-1">
                Fechar
              </button>
            </AlertDialog.Action>
            {multiple && (
              <button
                className="bg-[#ff4f00] text-white px-4 py-2 rounded-md hover:brightness-90 transition-colors duration-300 font-bold flex-1"
                onClick={() => multiple(quantitySelected)}
              >
                Atualizar para {quantitySelected}
              </button>
            )}
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
