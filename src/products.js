const productCardGrid = document.querySelector(".product-card-grid");
const productTemplate = document.getElementById("product-template");
import { productQuantityToggle } from './productQuantityToggle.js';
import { addToCart } from './addToCart.js';

export const showProductContainer = (products)=>{
    if(!products){
        return false;
    }

    products.forEach((currElem) =>{
        const {id, name, price, category, description, image} = currElem;
        const productClone = document.importNode(productTemplate.content, true); 
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        
        productClone.querySelector(".product-img").src = image;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".product-desc").textContent = description;
        productClone.querySelector(".sale-price").textContent = `PKR ${price}`;
        productClone.querySelector(".original-price").textContent = `PKR ${price * 2}`;

        productClone.querySelector(".stock-container").addEventListener(('click'), (event)=>{
            productQuantityToggle(event, id);
        });
        productClone.querySelector(".add-to-cart-buuton").addEventListener(('click'), (event) =>{
            addToCart(event, id);
        })
        productCardGrid.append(productClone);
    })
}