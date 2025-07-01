const express = require('express');
const fs = require('fs');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Optional for frontend

app.get('/', (req, res) => {
  res.send('Portfolio backend is running 🚀');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const data = { name, email, message, time: new Date().toISOString() };
  // Optional: store in file
  // fs.appendFileSync('message.json', JSON.stringify(data) + ',\n');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raziullahansari483@gmail.com',
      pass: 'vtbyxbmlkvsxzvly'  // ✅ Use without spaces
    }
  });

  const mailOptions = {
    from: email,
    to: 'raziullahansari483@gmail.com',
    subject: `New Portfolio Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email.' });
    } else {
      console.log('✅ Email sent: ' + info.response);
      return res.json({ success: true, message: 'Email sent successfully.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
