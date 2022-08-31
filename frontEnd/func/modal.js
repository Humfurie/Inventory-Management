var modal = {

    displayAllData: function () {

        fetch('http://localhost:8888/items', {
            method: "GET",
        }).then((response) => {
            return response.json();
        }).then((data) => {
            var tbody = document.querySelector("#data");
            for(let i=0; i<data.length; i++) {
                
                var tr = document.createElement("TR");

                var noTd = document.createElement("TD");
                noTd.innerText = data[i].id;

                var productName = document.createElement("TD");
                productName.innerText = data[i].product_name;

                var productDesc = document.createElement("TD");
                productDesc.innerText = data[i].product_desc;

                var unitPrice = document.createElement("TD");
                unitPrice.innerText = data[i].unit_price;

                var itemStock = document.createElement("TD");
                itemStock.innerText = data[i].item_stock;

                var optionsTd = document.createElement("TD");

                var editButton = document.createElement("BUTTON");
                editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>&nbsp;&nbsp;Edit';
                editButton.setAttribute("id", "edit-button");
                editButton.setAttribute("value", data[i].id);

                                
                editButton.setAttribute("onclick", `onEdit(${data[i].id});`);
             
               

                //delete by id selected
                var deleteButton = document.createElement("BUTTON");
                deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>&nbsp;&nbsp;Delete';

                deleteButton.setAttribute("onclick", `onDelete(${data[i].id});`);

                optionsTd.appendChild(editButton)
                optionsTd.appendChild(deleteButton);

                tr.appendChild(noTd);
                tr.appendChild(productName);
                tr.appendChild(productDesc);
                tr.appendChild(unitPrice);
                tr.appendChild(itemStock);
                tr.appendChild(optionsTd);

                tbody.appendChild(tr);
            }
            return tbody;
        });
    },  
    update : function() {
            //update after editing data
        var edit_id = document.getElementById("editID").value;
        var edit_name = document.getElementById("edit_product_name").value;
        var edit_desc = document.getElementById("edit_product_desc").value;
        var edit_price = document.getElementById("edit_unit_price").value;
        var edit_stock = document.getElementById("edit_item_stock").value;
      
     
        fetch('http://localhost:8888/items/' + edit_id, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "product_name": edit_name,
                "product_desc": edit_desc,
                "unit_price": edit_price,
                "item_stock": edit_stock
            }),
            method: "PUT",
        }).then(function(response) {
            return response.json();
        }).then(function() {
            window.location.reload();
        })
    
    },
 
  
}

export default modal;

