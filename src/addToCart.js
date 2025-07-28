import { getProductFromLocalStorage } from "./getProductFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

getProductFromLocalStorage();

export const addToCart = (event, id) =>{
    let arrLocalStorageProduct = getProductFromLocalStorage();
    const currentProductCard = document.querySelector(`#card${id}`);
    let quantity = currentProductCard.querySelector(".product-quantity").textContent;
    let price = currentProductCard.querySelector(".sale-price").textContent;
    price = price.replace("PKR ", "");   
    
    let existingProduct = arrLocalStorageProduct.find((currentProd) =>{
        return currentProd.id === id;
    })

    if(existingProduct && quantity >= 1 ){
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};
        updatedCart = arrLocalStorageProduct.map((currElem) =>{
            return (currElem.id === id) ? updatedCart: currElem; 
        })
        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    }
    

    if(existingProduct){
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));
    updateCartValue(arrLocalStorageProduct);
}