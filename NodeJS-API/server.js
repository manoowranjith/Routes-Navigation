const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   app.post('/userRole',(req,res)=>{
//     // console.log(req.body.email,req.body.password)
//     credentials.map(details =>
//         {
//             if(details.name === req.body.name && details.password === req.body.password)
//             {
//                 console.log("Authenticated")
//                 res.json({data:"successfully authenticated"})
//             }
//         }
//     )
//     res.json({data:"not successfully authenticated"})
// })
  next();
});

const credentials=[
    {
        email:"manoow@gmail.com",
        password:"12",
        role:"user"
    },
    {
        email:"manoow@gmail.com",
        password:"123",
        role:"admin"
    },
    {
        email:"manoow@gmail.com",
        password:"1234",
        role:"superadmin"
    }
]
app.use(cors(
    {
        origin: "*",
    }
))
// app.get('/userData',(req,res)=>{
//     res.json({data:"Here is your"})
// })
app.post('/userRole',(req,res)=>{
    // console.log(req.body.email,req.body.password)
    credentials.map(details =>
        {
            if(details.name === req.body.name && details.password === req.body.password)
            {
                console.log("Authenticated")
                res.json({role:details.role})
            }
        }
    )
    res.json({role:"no-access"})
})
app.listen(3000,()=>{
    console.log("Port 3000 is running")
})