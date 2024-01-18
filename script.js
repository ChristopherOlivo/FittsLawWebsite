const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'cooking oil',
        "price": '10.50'
    },
    2: {
        "name": 'Pasta',
        "price": '6.25'
    },
    3: {
        "name": 'Instant pancake mixture',
        "price": '5.00'
    },
    4: {
        "name": 'MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Space Gray',
        "price": '1,500'
    },
    5: {
        "name": 'Apple - iPhone 15 Pro Max 256GB - Blue Titanium',
        "price": '1,200'
    },
    6: {
        "name": 'PlayStation 5',
        "price": '500'
    },
    7: {
        "name": 'The North Face Black Retro Nuptse Jacket',
        "price": '300'
    },
    8: {
        "name": 'CSUN T-Shirt',
        "price": '15'
    },
    9: {
        "name": 'Grey Hoodie',
        "price": '20'
    },
    10: {
        "name": 'Adidas Sambas',
        "price": '70'
    },
    11: {
        "name": 'Nike Dunk Low "Sail Light Bone"',
        "price": '120'
    },
    12: {
        "name": 'Air Jordan 1 "Mocha"',
        "price": '220'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}