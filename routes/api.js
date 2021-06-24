const router = require("express").Router();
const Transaction = require("../models/transaction.js");
console.log('ROUTES FILE LOADED!!!!')

router.post("/models/transaction", ({body}, res) => {


  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// Testing if the routs work
// router.get('/test', (req,res) =>{
//   res.send('Hello from test')
// })

router.post("/models/transaction/bulk", ({body}, res) => {  
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/models/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;