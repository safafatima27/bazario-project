import { getProductFromLocalStorage } from "./getProductFromLocalStorage";
let subTotal = document.querySelector(".sub-total-price");
let finalTotalPrice = document.querySelector(".final-total-price");

export const updateCartProductTotal = () =>{
    let cartProducts = getProductFromLocalStorage();
    let totalProductPrice = cartProducts.reduce((accum, currProd) =>{
        let productPrice = parseInt(currProd.price) || 0;

        return accum + productPrice;        
    }, 0)
    subTotal.textContent = totalProductPrice;
    finalTotalPrice.textContent = Number(totalProductPrice + 120);
}