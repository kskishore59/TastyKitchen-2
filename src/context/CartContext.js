import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  addQuantity: () => {},
  decreaseQuantity: () => {},
  removeCartItems: () => {},
})

export default CartContext
