const nodemailer = require('nodemailer');
const envs = require('../../config');

async function mailer(config) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmlail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: envs.MAIL_EMAIL, // generated ethereal user
        pass: envs.MAIL_PASSWORD // generated ethereal password
      }
    });

    let info = await transporter.sendMail(config);
    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    console.log(err);
  }
}


exports.mailer = mailer;