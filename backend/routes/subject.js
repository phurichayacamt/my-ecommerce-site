const express =  require('express');
const router = express.Router();

 router.get('/',(req,res) => {
    res.end('{"contactSubject": ["General Enquiry", "Class", "Schedule","Instructor","Price","Other","king"] }');
 });

 module.exports = router;
