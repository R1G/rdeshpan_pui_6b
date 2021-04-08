//Display every item in the cart
function drawCart(cart, selectedItemsContainer) {
  selectedItemsContainer.innerHTML = '<h1>Your Cart</h1>'; //clear container in order to redraw
  for(var i=1; i<cart.length; i++) {  //due to split, first entry always empty and thus skipped
    cart[i] = cart[i].replace('_',' ')
    //insert remove buttons with unique index 
    let newEntry = `<div class="cart-item"> ${cart[i]} <button class="remove" id=${i}>X</button></div>`
    selectedItemsContainer.insertAdjacentHTML('beforeend', newEntry);
    
  }
}

(function() {
    const selectedItemsContainer = document.querySelector('#selected-items');
    var cart = localStorage.getItem('cart').split('|');
    drawCart(cart, selectedItemsContainer); //initial call to draw cart

    selectedItemsContainer.addEventListener('click', function (event) { 
      if(event.target.className == 'remove') {
        var deletedIndex = parseInt(event.target.id);
        
        cart.splice(deletedIndex, 1);
        localStorage.setItem('cart',cart.join('|'));
        drawCart(cart, selectedItemsContainer); //redraw cart whenever updated
      } 
  });
}());

