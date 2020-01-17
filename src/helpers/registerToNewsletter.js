require('dotenv').config();
const https = require('follow-redirects').https;
// import connectToNewsletter from './connectToNewsletter';

// console.log(connectToNewsletter() + "heyhey");

const newsletterOptions = {
  'method': 'POST',
  'hostname': process.env.NEWSLETTER_API_HOST,
  'path': '/recipients',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  'maxRedirects': 20
};

const newsletterReq = https.request(newsletterOptions, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

const registerToNewsletter = (name, surname, email) => {

  const data = JSON.stringify({
    "list_id":"r9s81zk7",
    "email": email,
    "gender": gender,
    "first_name": name,
    "last_name": surname,
    "is_unsubscribed":false,
    "is_blacklisted":false,
  });

  newsletterReq.write(data);
  newsletterReq.end();

};

export default registerToNewsletter;