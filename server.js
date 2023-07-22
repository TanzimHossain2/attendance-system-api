const express = require('express');
const app = express();

const data ={
    'name': 'Tanzim',
    'age': 21,
    'email': 'tanzimhossain2@gmail.com'
}

app.get('/', (_, res) => {
    res.json(data);
});

app.listen(4000, ()=>{
    console.log('listening for requests on port 4000')
})


