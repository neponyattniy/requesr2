const express = require('express');
const app = express();

let card = [
    {
        id: 1,
        cardNum: "4249"
    },
    {
        id: 2,
        cardNum: "4022218"
    },
    {
        id: 3,
        cardNum: "406397"
    },
    {
        id: 4,
        cardNum: "4934681"
    },
    {
        id: 5,
        cardNum: "3557147"
    }
]

app.get('/card', function (req, res) {
    res.send(" choose card from 1 to 5")
})

app.get('/card/:id', function (req, res) {
    card.forEach((cart) => {
        if (cart.id == req.params.id){
            console.log(cart)
            res.send(cart.cardNum)            
        }
    })
    
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});