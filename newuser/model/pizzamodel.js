const mongoose = require("mongoose");

const pizzaSchema =mongoose.Schema({
    Varients:[],
    prices:[],
    PizzaImage:{type:String,require},
    PizzaName:{type:String,require},
    Category:{type:String,require},
    description:{type:String,require}
    
    },
    {
        timestamps:true,
    
})

const pizzaModel =mongoose.model('shopinventories',pizzaSchema)

module.exports =pizzaModel
