import { getProductFromLocalStorage } from "./getProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";
export const removeTheCardFromCart = (id) =>{
    let cartProducts = getProductFromLocalStorage();
    
    cartProducts = cartProducts.filter((currProd) => currProd.id !== id);
    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        updateCartValue(cartProducts);
        updateCartProductTotal();
    }
}