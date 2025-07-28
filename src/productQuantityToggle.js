export const productQuantityToggle = (event, id) =>{
    const currentProductCard = document.querySelector(`#card${id}`);
    const productQuantity = currentProductCard.querySelector(".product-quantity");
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    
    if(event.target.className === "cart-increment"){
        quantity += 1;
    }
    if(event.target.className === "cart-decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }
    productQuantity.textContent = quantity;
    productQuantity.setAttribute("data-quantity", quantity);
    return quantity; 
}