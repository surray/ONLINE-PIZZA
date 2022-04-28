const mongoose =require ('mongoose');


mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true,usenewUrlParser:true})

console.log(process.env.MONGO_URL);
var dbs = mongoose.connection



dbs.on('connected',()=>{
console.log('DB connected');
})

dbs.on('error',()=>{

console.log('DB is not connected');
})

module.exports =mongoose   