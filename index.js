var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100) + 1

  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart(){

  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else{
     var pairs = [];
      for (var i = 0, l = cart.length; i < l; i++) {
        for (var itemName in cart[i]) {
          pairs.push(`${itemName} at $${cart[i][itemName]}`)
        }
      }
    console.log("In your cart, you have " + pairs.join(", ") + ".")
  }
}


function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1)
        return cart;
      }
    }
    console.log("That item is not in your cart.");
}

function placeOrder(num){
  if (num){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
  } else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
    cart = []
}












