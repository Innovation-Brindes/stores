export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItemIndex = state.findIndex(
        (item) => item.id_hash === action.payload.id_hash
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantidade += action.payload.quantidade;
        return updatedCart;
      } else {
        return [...state, action.payload];
      }

    case "REMOVE":
      return state.filter((item) => item.id_hash !== action.payload.id_hash);

    case "DUPLICATE":
      const newIdHash = Math.random().toString(36).substr(2, 9);
      const newItem = { ...action.payload, id_hash: newIdHash };

      return [...state, newItem];

    case "EDIT":
      const { id_hash, updatedItem } = action.payload;
      const editedCart = state.map((item) => {
        if (item.id_hash === id_hash) {
          return { ...item, ...updatedItem };
        } else {
          return item;
        }
      });
      return editedCart;

    case "ADD_EMBALAGEM":
      const existingEmb = state.findIndex(
        (item) => item.id_hash === action.payload.id_hash
      );

      if (existingEmb >= 0) {
        const updatedCart = [...state];
        //sobrepor o item existente com o novo item
        updatedCart[existingEmb] = action.payload;
        return updatedCart;
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_EMBALAGEM":
      return state.filter((item) => item.emb_hash !== action.payload.emb_hash);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export const embReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMBALAGEM":
      const existingItemIndex = state.findIndex(
        (item) => item.id_hash === action.payload.id_hash
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...state];
        //sobrepor o item existente com o novo item
        updatedCart[existingItemIndex] = action.payload;
        return updatedCart;
      } else {
        return [...state, action.payload];
      }

    case "REMOVE":
      return state.filter((item) => item.id_hash !== action.payload.id_hash);

    default:
      return state;
  }
};
