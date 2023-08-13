export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, selColor, quanCart, singleProduct } = action.payload;
      console.log(singleProduct);

      let existingProduct = state.cart.find((item) => item.id == id + selColor);

      if (existingProduct) {
        let newCart = state.cart.map((item) => {
          if (item.id == id + selColor) {
            let newAmount = item.amount + 1;
            return {
              ...item,
              amount: newAmount,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: newCart,
        };
      } else {
        let cartProduct = {
          id: id + selColor,
          name: singleProduct.name,
          color: selColor,
          price: singleProduct.price,
          amount: quanCart,
          image: singleProduct.image[0].url,
          max: singleProduct.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let newCart = state.cart.filter((item) => item.id != action.payload);

      return {
        ...state,
        cart: [...newCart],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "INCREASE_QUANTITY":
      let newCartData = state.cart.map((item) => {
        if (item.id == action.payload) {
          let newAmount = item.amount;
          if (item.amount < item.max) {
            newAmount = item.amount + 1;
          }

          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: newCartData,
      };

    case "DECREASE_QUANTITY":
      let newData = state.cart.map((item) => {
        if (item.id == action.payload) {
          let newAmount = item.amount;
          if (item.amount > 1) {
            newAmount = item.amount - 1;
          }

          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: newData,
      };

    case "TOTAL_CART_ITEMS":
      let totalCart = state.cart.reduce((initial, current) => {
        return (initial += current.amount);
      }, 0);

      return {
        ...state,
        totalItems: totalCart,
      };

    case "CART_TOTAL_PRICE":
      let totalPrice = state.cart.reduce((initial, current) => {
        return (initial += current.amount * current.price);
      }, 0);

      return {
        ...state,
        totalPrice: totalPrice,
      };
    default:
      return {
        ...state,
      };
  }
}
