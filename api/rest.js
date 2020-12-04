const bodyParser = require('body-parser')
const app = require('express')()
const cors = require('cors')

let allowedOrigins = ['https://lesti.xyz']
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  })
)

const items = ["Jó lesz ez! ❤", "Work in progress, esküszöm!", "Valamit órákon is csinálni kell", "Köszi hogy itt vagy! ❤", "Lesznek itt majd dolgok is", "Integetek ❤", "Remélem jól érzed magad! 🥰"]

app.use(bodyParser.json())
app.all('/test', (req, res) => {
    res.json({ data: items[Math.floor(Math.random() * items.length)] })
})

module.exports = app    
