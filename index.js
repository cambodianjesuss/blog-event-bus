const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req,res)=>{
  const events = req.body;

  console.log(`Event recieved: ${events.type}`);

  // Post Service Events
  axios.post('http://localhost:4000/events', events).catch(error=>{
    console.log(error.message);
  });
  // Comment Service Events
  axios.post('http://localhost:4001/events', events).catch(error=>{
    console.log(error.message);
  });
  //Query Service Events
  axios.post('http://localhost:4002/events', events).catch(error=>{
    console.log(error.message);
  });

  res.send({ status: "OK"});
});

app.listen(4005, ()=>{
  console.log('Event Bus on 4005')
});