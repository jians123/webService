
// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'
import ejs from 'ejs'

// Create an instance of an express application 
const app = express()
app.use(express.json())
// app.set("views","./")
// app.engine("html",myejs.__express)
// app.set("view engine","html")



// Set the port the application will be running on
const port = process.env.PORT || 3001

app.get("/query", (req,res) => {
  console.log(req.query)
  res.send(req.query)

})



// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.render("index.html")
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  

  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice
  res.json({ data: advice })
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
