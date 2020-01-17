require('dotenv').config();
const https = require('follow-redirects').https;

const newsletterOptions = {
  'method': 'POST',
  'hostname': process.env.NEWSLETTER_API_HOST,
  'path': '/oauth/v2/token',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(process.env.NEWSLETTER_API_KEY).toString('base64'),
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
    body.toString();
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

const newsletterPostData = JSON.stringify({
	"username": process.env.NEWSLETTER_USER,
	"password": process.env.NEWSLETTER_PASS,
	"grant_type":"https://nl2go.com/jwt"
});

const connectToNewsletter = () => {
  newsletterReq.write(newsletterPostData);
  newsletterReq.end();
}

export default connectToNewsletter;