// src/App.jsx
import {useState} from 'react';
import './App.css';
function App() {

  const [availableItems, setAvailableItems] = useState([
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
])

const [shoppingCart, setShoppingCart] = useState([])
const [availableBalance, setAvailableBalance] = useState(100)

const [warningMessage, setWarningMessage] = useState()


function handleAddToCart(item){
  if (availableBalance >= item.price) {
    const filterAvilableItems = availableItems.filter((availableItem)=>{
    return availableItem.id !== item.id
  })
  setAvailableItems(filterAvilableItems)
  setShoppingCart([...shoppingCart, item])
  setAvailableBalance(availableBalance - item.price)
  } 
  
  else {
    setWarningMessage("Insufficient funds. Your balance is too low to purchase this item")
    console.log(warningMessage)
  }

}



function handleRemoveFromShoppingCart(item){
  const filterShoopingCart = shoppingCart.filter((cartItem)=>{
    return cartItem.id !== item.id
  })
  setShoppingCart(filterShoopingCart)
  setAvailableItems([...availableItems, item])
  setAvailableBalance(availableBalance + item.price)
}


  return (
    <>
      <h1>Sayed Hameds Closet</h1>
      <p>{warningMessage}</p>
      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      {availableItems.map((item)=>
        <div key={item.id}>
            <p>Name: {item.name}</p>
            <button onClick ={()=>{handleAddToCart(item)}}>Add to Cart</button>

        </div>
      )}

      <h2>Shopping Cart</h2>
      {shoppingCart.map((item)=>
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <button onClick ={()=>{handleRemoveFromShoppingCart(item)}}>Remove from Cart</button>
        </div>
      )}
      

    </>
  );
}

export default App


