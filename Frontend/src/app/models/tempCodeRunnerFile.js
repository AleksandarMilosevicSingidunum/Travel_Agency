const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost:27017/regis', 
{ useNewUrlParser: true, useUnidiedTopology: true }, 
(err) => {
     console.Console.log(err ? err : ' connection true'); 
}
);