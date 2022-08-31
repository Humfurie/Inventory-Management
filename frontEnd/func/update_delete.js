function onEdit(id) {
    var editModal = document.getElementById("edit-modal");
    editModal.style.display = "block";
    editModal.animate;
       
    fetch('http://localhost:8888/items/' + id, {
        method: "GET"
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //get edit modal input and set value attributes
        for(let i=0; i<data.length; i++) {
            var edit_id = document.getElementById("editID");
            edit_id.setAttribute("value", data[i].id);
            var edit_name = document.getElementById("edit_product_name");
            edit_name.setAttribute("value", data[i].product_name);
            var edit_desc = document.getElementById("edit_product_desc");
            edit_desc.setAttribute("value", data[i].product_desc);
            var edit_price = document.getElementById("edit_unit_price");
            edit_price.setAttribute("value", data[i].unit_price);
            var edit_stock = document.getElementById("edit_item_stock");
            edit_stock.setAttribute("value", data[i].item_stock);
        }
    });
}
function onDelete(id) {
    fetch('http://localhost:8888/items/' + id, {
        method: "DELETE"
    }).then((response) => {
        return response.json();
    }).then(() => {
        window.location.reload();
    }).catch(err => console.log(err));
}