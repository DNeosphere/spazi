// Send email using SendGrid

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SPAZI_SENDGRID_API_KEY);

function sendEmail(data) {

    const dateStart = data.dateStart || '2020-03-19';
    const dateEnd = data.dateEnd || '2020-03-20';
    const message = data.message || `Hi ${data.spaziName},
     you have a new service from ${data.userName} starting ${dateStart} until ${dateEnd}`;
    const msg = {
        to: data.spaziEmail,
        from: 'noreply@spazi.rocks',
        subject: 'New service',
        text: message,
        html: message
    };
    console.log(msg);

    sgMail.send(msg).catch(error => console.log(error));

}
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

module.exports = sendEmail;