const express =  require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4000;

//used cors policy
app.use(cors());

//connect mongo db to server 4000
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/biodata',{useNewUrlParser:true,useUnifiedTopology:true})
.then(
    app.listen(PORT,() => {
        console.log('Server is successfully running at ' + ':'+PORT);
        console.log('database is connected successfully');
    }))
.catch((err)=> console.log(err))

//data parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//http request logger
app.use(morgan('tiny'))

if(process.env.NODE_ENV === "production"){
   app.use(express.static('../build'));
}

//import routes
app.use('/',routes);



