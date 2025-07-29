exports.getData = (req, res) => {
  res.status(200).json({ operation_code: "1234" });
};

exports.postData = (req, res) => {
  const { data } = req.body;

  const isAlphabet = (str) => /^[A-Za-z]+$/.test(str);
  const isNumber = (str) => /^\d+$/.test(str);

  const alphabets = data.filter(isAlphabet);
  const numbers = data.filter(isNumber);

  const highestAlphabet = alphabets.length
    ? [alphabets.reduce((a, b) => (a > b ? a : b))]
    : [];

  res.status(200).json({
    is_success: true,
    user_id: "anshuman_be22", 
    email: "anshuman1312.be22@chitkara.edu.in",
    roll_number: "2110991312",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
};
