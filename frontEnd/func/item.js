import modal from './modal_main.js';


document.querySelector(".button-group").addEventListener("click", () => {

    //console.log(index.getInsertItem());


    document.querySelector(".modal").appendChild(modal.insertItem()) ;

});