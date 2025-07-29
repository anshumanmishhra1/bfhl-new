exports.processData = (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ status: false, message: "Invalid input" });
  }

  const isAlphabet = (char) => /^[a-zA-Z]$/.test(char);
  const isNumber = (char) => /^[0-9]$/.test(char);

  const numbers = data.filter(isNumber);
  const alphabets = data.filter(isAlphabet).map(ch => ch.toUpperCase());
  const highestAlphabet = alphabets.sort().reverse()[0] || null;

  res.status(200).json({
    status: true,
    user_id: "your_unique_user_id", // Change this to your actual user_id
    email: "your_email@example.com",
    roll_number: "your_roll_number",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
};
