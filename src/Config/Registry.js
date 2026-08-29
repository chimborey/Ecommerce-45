import { ecommerce_45 } from "./Ecommerce_45";



export const registry = {
      ecommerce_45 : ecommerce_45
}

export const navByRegistry = (type) => registry[type] || [];