document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/getAll')
    .then(response => response.json())
    .then(data => console.log(data));
    loadHTMLTable = ([]);
});
function loadTable(data) {
    const table = document.querySelector('table, tbody');
    let tableHTML = "";

    if(data.length === 0) {
        table.innerHTML = "<tr><td colspan='6'>No data found</td></tr>";
    }
}

// var con = mysql.createConnection({
//     "server": "localhost",
//     "user": "root",
//     "password": "",
//     "database": "node_finals"
// });

// app.get("/", function(req, res){


//     res.send("Hello, Welcome to my API");
// });

// app.get("/items", function(req, res){

//     var query = "SELECT * FROM items";

//     con.query(query, function(err, result){

//         res.json(result);

//     });

// });

// app.post("/add_item", function(req, res){


//     var item_name = req.body.item_name;
//     var description = req.body.description;
   
//     console.log(req.body);

//     var query = `INSERT INTO items(item_name, description) VALUES("${item_name}", "${description}")`;

//     con.query(query, function(err, result){

//         res.json({"message": "Item was added sucessfully."});

//     });

// });


// app.listen(3000, function(){
//     console.log("Server started on Port 3000");
// });







