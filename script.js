function updateLengthValue() {
  document.getElementById('lengthValue').textContent = document.getElementById('length').value;
}

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  let guaranteedChars = [];

  if (includeLowercase) {
    allChars += lowercaseChars;
    guaranteedChars.push(getRandomChar(lowercaseChars));
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
    guaranteedChars.push(getRandomChar(uppercaseChars));
  }
  if (includeNumbers) {
    allChars += numberChars;
    guaranteedChars.push(getRandomChar(numberChars));
  }
  if (includeSymbols) {
    allChars += symbolChars;
    guaranteedChars.push(getRandomChar(symbolChars));
  }

  if (allChars === "") return "⚠️ Select at least one option";

  let remainingLength = length - guaranteedChars.length;
  let password = guaranteedChars;

  for (let i = 0; i < remainingLength; i++) {
    password.push(getRandomChar(allChars));
  }

  return password.sort(() => Math.random() - 0.5).join('');
}

function generateAndDisplayPassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  document.getElementById('password').value = password;
}
