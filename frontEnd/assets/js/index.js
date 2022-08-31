import modal from './modal.js'

window.addEventListener("Load", function() {
    
})

document.querySelector(".data").addEventListener("click", function(){


    modal.displayAllData();
   
});





var input_product_name = document.querySelector("#product_name");
var input_product_desc= document.querySelector("#product_desc");
var input_unit_price= document.querySelector("#unit_price");
var input_item_stock= document.querySelector("#item_stock");
var submit_btn = document.querySelector("#submit");

submit_btn.addEventListener("click", function (e) {
    e.preventDefault();


    fetch('http://localhost:8888/items', {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "product_name": input_product_name.value,
            "product_desc": input_product_desc.value,
            "unit_price": input_unit_price.value,
            "item_stock": input_item_stock.value
        }),
        method: "POST"
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        alert(data.message);
    })
});