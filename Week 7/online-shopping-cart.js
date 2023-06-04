const priceList = {
    apple: 700,
    orange: 800,
    lemon: 900
};

let cost = 0;

const txt_cost = document.querySelector('#cost');
const buttons = document.querySelectorAll('.add-to-cart');

for (const button of buttons) {
    button.addEventListener('click', event => {
        const itemId = event.target.parentElement.parentElement.id;
        const price = priceList[itemId];

        cost += price;
        txt_cost.innerText = cost;
    });
}