import type { product } from './06-function-destructuring';
import { taxCalculator } from './06-function-destructuring';



const shoppingCart: product[] = [
    {
        descripcion: "nokia",
        price: 100
    },
    {
        descripcion: "steam deck",
        price: 1000
    }
]

const [total, tax] = taxCalculator ({
    product: shoppingCart,
    tax: 0.25
});

console.log("total", total)
console.log("tax", tax)

