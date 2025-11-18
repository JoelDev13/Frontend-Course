interface product {
    descripcion: string;
    price: number;
}

const phone: product = {
    descripcion: 'phone 11',
    price: 400
}

const laptop: product = {
    descripcion: 'hp pavilion',
    price: 450.85
}

interface taxCalculatorOptions{
    tax: number;
    product : product[]
}

function taxCalculator(options: taxCalculatorOptions): [number, number]{

    const {tax, product} = options

    let total = 0;

    product.forEach( ({price}) => {
        total += price
    })

    return [total, total * tax ];
}



const shoppingCart = [phone, laptop];
const tax = 0.25;

const [total, taxTotal] = taxCalculator({
    product: shoppingCart,
    tax, // es lo mismo que tax = tax
})

console.log("total", total);
console.log("tax", taxTotal);

export{}