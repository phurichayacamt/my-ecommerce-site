// const express = require('express');
// const router = express.Router();
// const subject = require('../data/contact_subject.json');

// router.get('/', (req, res) => {
//     res.end('{"contactSubject": ["General Enquiry", "Class", "Schedule","Instructor","Price","Other"] }');
//     req.json(subject);
// });

// module.exports = router;

const express = require('express');
const Router = express.Router();

//const subject = '{"contactSubject": ["General Enquery","Classes","Schedules","Instructor","Prices","Other","Nattharin","Pin"]}';
const subject = require('../data/contact_subject.json');

Router.get('/', (req, res) => {
  //res.end(subject); // string (text)
  res.json(subject); // file
});

module.exports = Router;
﻿

 