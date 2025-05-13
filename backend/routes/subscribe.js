const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');


router.post('/',(req,res) =>{
    const{email} = req.body
    const subscribe = {subscribeAt: new Date(),email};

    const filePath = path.join(__dirname,'..','data','subscribe.json');
     console.log('Content form submited',{email});

     let subscribes = [];
    

     if(fs.existsSync(filePath)){
        //have 
        const filedata = fs.readFileSync(filePath,'utf-8');
        subscribes = JSON.parse(filePath);
        subscribes.push(subscribe)
        fs.writeFileSync(filePath,JSON.stringify(subscribes,null,2));
        res.status(200).json ({status: "Message Recived)"});
        console.log('Content form submited',{email});
     }else{
        //no 
        subscribes.push(subscribe)
        fs.writeFileSync(filePath,JSON.stringify(subscribes,null,2));
        res.status(200).json ({status: "Message Recived)"});
        console.log('Content form submited',{email});

     }

})

module.exports = router;
