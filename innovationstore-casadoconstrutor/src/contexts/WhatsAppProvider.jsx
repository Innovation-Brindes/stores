import { createContext, useContext, useState, useEffect } from "react";

export const WhatsAppContext = createContext();

export const WhatsAppProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false);
  const [timeOpenChat, setTimeOpenChat] = useState(null);

  useEffect(() => {
    if (openChat) {
      setTimeOpenChat(new Date().toLocaleTimeString().slice(0, 5));
    }
  }, [openChat]);

  //apertar esc para fechar o chat
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenChat(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <WhatsAppContext.Provider value={{ openChat, setOpenChat, timeOpenChat }}>
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = () => useContext(WhatsAppContext);

//usage example

// import { WhatsAppProvider } from "../../contexts/WhatsAppProvider";

// export function WhatsAppChat() {

//   return (
//     <WhatsAppProvider>
//       <ChakraProvider>
//         <Header />
//         <Message />
//         <InputCpfCnpj />
//       </ChakraProvider>
//     </WhatsAppProvider>
//   );
// }

// //usage example

// import { useWhatsApp } from "../../contexts/WhatsAppProvider";

// export function Header() {
//   const { setOpenChat } = useWhatsApp();

//   return (
//     <header>
//       <div className="header">
//         <div className="header__logo">
//           <img src="/images/logo.png" alt="Logo" />
//         </div>
//         <div className="header__close">
//           <button onClick={() => setOpenChat(false)}>
//             <AiOutlineClose />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
