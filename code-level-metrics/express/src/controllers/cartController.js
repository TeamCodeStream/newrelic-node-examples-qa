const cart = [
  {
    price: {
      cost: 33.1,
      currency: 'USD'
    },
    quantity: 1
  },
  {
    price: {
      cost: 33.1,
      currency: 'USD'
    },
    quantity: 2
  },
  {
    pricce: {
      cost: 33.1,
      currency: 'USD'
    },
    quantity: 1
  },
]

function updateTotalPrice(items, discountPercentage, start) {
  const totalPrice = items
    .map((item) => item.price.cost * item.price.quantity)
    .reduce((accumulator, currentItem) => accumulator + currentItem, 0)

  const discount = totalPrice * (discountPercentage / 100)
  const finalTotalPrice = totalPrice - discount
  console.log('Final total price: ', finalTotalPrice)

  return finalTotalPrice
}

function getCheckoutPrice() {
  console.log('Getting checkout price')
  return {
    total: updateTotalPrice(cart, 15)
  }
}

module.exports = {
  getCheckoutPrice
}
