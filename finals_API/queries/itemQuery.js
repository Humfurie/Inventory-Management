const connection = require('../connection/connection'); 

const item = {
    insert: (itemName, call) => {
        const query = "INSERT INTO items(product_name, product_desc, unit_price, item_stock) VALUES(?)";
        const values = [itemName.product_name, itemName.product_desc, itemName.unit_price, itemName.item_stock];

        connection.query(query, [values], (err,result) =>{
            if(err){
                call({"error" : err});
            }else{
                call({"message" : "success"});
            }
        });
    },
    selectAll: (call) => {
        const query = "SELECT * FROM `items`";

        connection.query(query,(err, result) =>{
            if(err){
                call({"error" : err});
            }else{
                call(result);
            }
        });
    },

    selectOne: (id, call) => {
        const query = `SELECT * FROM items WHERE id = ${id}`;

        connection.query(query,(err, result) =>{
            if(err){
                call({"error" : err});
            }else{
                call(result);
            }
        });
    },
    update: (updateItem, id, call) => {
        const query = `UPDATE items SET 
                                        product_name ='${updateItem.product_name}',
                                        product_desc ='${updateItem.product_desc}',
                                        unit_price = ${updateItem.unit_price},
                                        item_stock = ${updateItem.item_stock}
                                        WHERE id = ${id}`;
        connection.query(query, (err, result) => {
            if(err){
                call({"error" : err});
            }else{
                call({"column" :"updated"});
            }
        });
    },
    delete: (id, call) => {
        const query = `DELETE FROM items WHERE id = ${id}`;

        connection.query(query, (err, result) => {
            if(err){
                call({"error" : err});
            }else{
                call({"item" : "deleted"});
            }
        });
    }
};

module.exports = item;