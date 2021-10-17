import CartItem from '../CartItem'

import './index.css'

const CartListView = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  return (
    <ul className="cart-list">
      {parsedCartList.map(eachCartItem => (
        <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
      ))}
    </ul>
  )
}

export default CartListView
