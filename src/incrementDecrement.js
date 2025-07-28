import { getProductFromLocalStorage } from "./getProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, price) => {
    const currentCardElem = document.getElementById(`card${id}`);
    const productQuantity = currentCardElem.querySelector(".product-quantity");
    const productPrice = currentCardElem.querySelector(".cart-product-total-price")
    let cartProductsLS = getProductFromLocalStorage();

    let quantity = 1;
    let localStoragePrice = 0;

    let existingProduct = cartProductsLS.find((currProd) => currProd.id === id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    }else{
        localStoragePrice = price;
    }    

    if(event.target.className === "cart-increment"){
        quantity += 1;
    }
    if(event.target.className === "cart-decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id, quantity, price: localStoragePrice};
    updatedCart = cartProductsLS.map((currElem) =>{
        return (currElem.id === id) ? updatedCart: currElem; 
    })
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

    productQuantity.textContent = quantity;
    productPrice.textContent = localStoragePrice
    updateCartProductTotal();
}