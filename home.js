//Unlike 6A, going to homepage no longer clears the cart
(function() {
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '');
    }
}());
