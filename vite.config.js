import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        accessories: resolve(__dirname, "accessories.html"),
        bags: resolve(__dirname, "bags.html"),
        caps: resolve(__dirname, "caps.html"),
        cart: resolve(__dirname, "cart.html"),
        contact: resolve(__dirname, "contact.html"),
        dresses: resolve(__dirname, "dresses.html"),
        footwear: resolve(__dirname, "footwear.html"),
        furniture: resolve(__dirname, "furniture.html"),
        homeDecor: resolve(__dirname, "homeDecor.html"),
        hoodies: resolve(__dirname, "hoodies.html"),
        jacket: resolve(__dirname, "jacket.html"),
        kitchenware: resolve(__dirname, "kitchenware.html"),
        makeup: resolve(__dirname, "makeup.html"),
        menFragrance: resolve(__dirname, "menFragrance.html"),
        organizer: resolve(__dirname, "organizer.html"),
        shirts: resolve(__dirname, "shirts.html"),
        shoes: resolve(__dirname, "shoes.html"),
        skincare: resolve(__dirname, "skincare.html"),
        womenFragrance: resolve(__dirname, "womenFragrance.html"),

      },
    },
  },
  base: "/bazario-project",
});