import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value); //o valor inicial é o valor passado como parâmetro

  //o useEffect é executado sempre que o valor ou o delay mudarem
  useEffect(() => {
    //aqui o setTimeout é usado para evitar que o valor seja atualizado a cada mudança de estado
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); //limpa o timeout para evitar que o valor seja atualizado a cada mudança de estado
    };
  }, [value, delay]); //o useEffect é executado sempre que o valor ou o delay mudarem

  return debouncedValue; //retorna o valor atualizado
};

// use debounce in a component

// import { useDebounce } from "./utils/debounce";

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     // Make an async request
//   }, [debouncedSearchTerm]);

//   return (
//     <input
//       type="text"
//       placeholder="Search"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//   );
// };
