/**
 * Created by Andrii Yermolenko on 17.08.15.
 */

const express = require('express');
const config = require('config');
const nodeMailer = require('nodemailer');

const router = express.Router();
const transport = nodeMailer.createTransport({
  host: config.get('mail.smtp.host'),
  port: config.get('mail.smtp.port'),
  auth: {
    user: config.get('mail.smtp.user'),
    pass: config.get('mail.smtp.pass')
  }
});

router.route('/send')
  .post((req, res) => {
    const {
      from,
      to,
      subject,
      text
    } = req.body;
    const data = {
      from,
      to,
      subject,
      text
    };
    return transport.sendMail(data, (error, info) => {
      if (error) {
        return res.send({
          status: 'ERR',
          text: error
        });
      }
      return res.send({
        status: 'OK',
        text: info.response
      });
    });
  });

module.exports = router;
