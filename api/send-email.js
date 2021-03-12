const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey("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")

app.use(bodyParser.json());

app.post('/', (req, res) => {
              let msg = {
                to: "morbinho7@hotmail.com",
                from: req.body.email,
                subject: `${req.body.subject} from ${req.body.name}`,
                text: req.body.message
              }
              sgMail.send(msg)
              .then(() => {
                  return res.status(200).json({'message' : 'email send'})
              })
              .catch(err => {
                  return res.status(400).json({'err' : err})
              })  
})

module.exports = {
    path: "api/send-email", 
    handler: app
}