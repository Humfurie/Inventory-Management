
var modal = {

    displayAllData: function () {

        fetch('http://localhost:8888/items', {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {

            var tbody = document.createElement("TBODY");
            tbody.setAttribute("class", "input-data")
            for (let i = 0; i < data.length; i++) {

                var tr = document.createElement("TR");

                var noTd = document.createElement("TD");
                noTd.innerText = i + 1;

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
                editButton.innerText = "EDIT";
                editButton.setAttribute("data-id", data[i].id);

                editButton.addEventListener("click", function () {

                    fetch('http://localhost:8888/items/' + data[i].id, {
                        method: "GET"
                    }).then(function (response) {
                        return response.json();
                    }).then(function (obj) {

                        alert(JSON.stringify(obj.data[0]));
                    });

                });
                var deleteButton = document.createElement("BUTTON");
                deleteButton.innerText = "DELETE";
                deleteButton.setAttribute("data-id", data[i].id);

                optionsTd.appendChild(editButton)
                optionsTd.appendChild(deleteButton);

                tr.appendChild(noTd);
                tr.appendChild(productName);
                tr.appendChild(productDesc);
                tr.appendChild(unitPrice);
                tr.appendChild(itemStock);
                tr.appendChild(optionsTd);

                tbody.appendChild(tr);

                return tbody;
            }
        })
    }


}

export default modal;

