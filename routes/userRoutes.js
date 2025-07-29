const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);
  const isNumber = (str) => /^[0-9]+$/.test(str);

  const numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (isNumber(item)) numbers.push(item);
    else if (isAlpha(item)) alphabets.push(item);
  });

  const user_id = 'your_email_here'; 
  const full_name = 'Your Name'; 

  res.status(200).json({
    is_success: true,
    user_id,
    email: user_id,
    roll_number: "your_roll_number",
    numbers,
    alphabets,
  });
});

module.exports = router;
