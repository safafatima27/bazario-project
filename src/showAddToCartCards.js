import cap from '../api/cap.json';
import dresses from '../api/dressesProducts.json';
import furniture from '../api/furniture.json';
import homeDecor from '../api/homerDecor.json';
import hoodies from '../api/hoodies.json';
import jacket from '../api/jacket.json';
import kitchenware from '../api/kitchenware.json';
import makeup from '../api/makeup.json';
import menFragrance from '../api/menFragrance.json';
import organizer from '../api/organizer.json';
import shirts from '../api/shirts.json';
import shoes from '../api/shoes.json';
import skincare from '../api/skincare.json';
import womenAccessories from '../api/womenAccessories.json';
import womenBags from '../api/womenBags.json';
import womenFootwear from '../api/womenFootwear.json';
import womenFragrance from '../api/womenFragrance.json';

import { getProductFromLocalStorage } from './getProductFromLocalStorage';
import { incrementDecrement } from './incrementDecrement';
import { removeTheCardFromCart } from './removeTheCardFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

const cartElement = document.querySelector(".cartListItem-container");
const templateContainer = document.getElementById("cart-item-template")

let cartProducts = getProductFromLocalStorage();
const allProducts = [
    ...cap, ...dresses, ...furniture, ...homeDecor,
    ...hoodies, ...jacket, ...kitchenware, ...makeup,
    ...menFragrance, ...organizer, ...shirts,
    ...shirts, ...shoes, ...skincare, ...womenAccessories,
    ...womenBags, ...womenFootwear, ...womenFragrance
]
let filterProducts = allProducts.filter((currProd) => {
    return cartProducts.some((currElem) => currElem.id == currProd.id)
})
let cartDetails = filterProducts.map((product) => {
  const matchingCartItem = cartProducts.find((item) => item.id === product.id);
  return {
    ...product,
    quantity: matchingCartItem.quantity,
    totalPrice: matchingCartItem.price
  };
});
console.log(cartDetails);   // have to comment it must remember safa


const showCartProducts = () =>{
    cartDetails.forEach((currProd) => {      
      const {category,description,id, image, name, price, quantity, totalPrice} = currProd;
        const productClone = document.importNode(templateContainer.content, true);



        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".product-category").textContent = category;
        productClone.querySelector(".cart-product-img").src = image;
        productClone.querySelector(".cart-product-name").textContent = name;
        productClone.querySelector(".cart-product-total-price").textContent = `PKR ${totalPrice}`;
        productClone.querySelector(".product-quantity").textContent = quantity;

        productClone.querySelector(".remove-cart-product").addEventListener('click',() => removeTheCardFromCart(id));
        productClone.querySelector(".cart-stock-container").addEventListener('click', (event) => {
          incrementDecrement(event, id, price);
        })

        cartElement.append(productClone);
    })
}
showCartProducts();

updateCartProductTotal();

