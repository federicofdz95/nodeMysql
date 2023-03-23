const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM products', (err,customers) => {
            if(err){
                res.json(err);
            }
            console.log(customers);
            res.render('customers');
        })
    })
};

module.exports = controller;