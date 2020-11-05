const express = require('express')
const cors = require('cors')
const path = require('path')
const https = require('https');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

// Create the server
const app = express()
app.use(bodyParser.json())


// Serve static files from the React frontend app                
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '/build')))


app.post('/api/print', cors(), (req, res, next) => {
    const params = new URLSearchParams({ result: req.body.result, name: req.body.name })
    
    fetch(`https://ms-fruit.loca.lt/print?${params}`,
        {
            method: 'GET',
            agent: new https.Agent({  
                rejectUnauthorized: false
            })
        })
    .then(response => response.text())
    .then(result => {
      console.log(result)
      res.send(result)
    })
    // res.send('OK')s
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})