const cartValue = document.querySelector(".nav-right a span");
export const updateCartValue = (cartProducts) =>{
    return cartValue.textContent = `${cartProducts.length}`; 
}