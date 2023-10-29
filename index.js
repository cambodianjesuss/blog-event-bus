const express = require('events');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req,res)=>{
  const events = req.body;

  axios.post('http://localhost:4000/events', events).catch(error=>{
    console.log(error.message);
  });
  axios.post('http://localhost:4001/events', events).catch(error=>{
    console.log(error.message);
  });
  axios.post('http://localhost:4002/events', events).catch(error=>{
    console.log(error.message);
  });

  res.send({ status: "OK"});
});

app.listen(4005, ()=>{
  console.log('Event Bus on 4005')
});