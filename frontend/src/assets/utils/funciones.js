export function setearValor(valor) {
    return valor.toLocaleString()
}

export const aumentaPizza = (pizzas, id) => {
    return pizzas.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
};

export const disminuyePizza = (pizzas, id) => {
    return pizzas
        .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0);
};

export const calculaTotal = (pizzas) => {
    return pizzas.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0);
};

//Nueva funcionalidad Hito 6
export const agregaPizza = (cart, pizza) => {
    const indexPizza = cart.findIndex(item => item.id.toUpperCase() === pizza.id.toUpperCase());

    if (indexPizza !== -1) {
        const updatedCart = [...cart];
        updatedCart[indexPizza].count += 1;
        return updatedCart;
    } else {
        return [...cart, { id: pizza.id.toUpperCase(), name: pizza.name, price: pizza.price, count: 1, img: pizza.img }];
    }

    // return cart= [...cart,{id:pizza.id,name:pizza.name,price:pizza.price,count:1,img:pizza.img}]
};