function translate(word) {
  let output = word;
  vowels = ['a','e','i','o','u'];
  let in_vowels = false;
  for (let j = 0; j < vowels.length; ++j) {
    if (word[0] == vowels[j]) {
      in_vowels = true;
    }
  }
  if (in_vowels == true) {
    output += 'ay';
  }
  else {
    let move = word[0];
    output = '';
    for (let i = 1; i < word.length; ++i) {
      output += word[i]
    }
    output += move;
    output += 'ay';
  }
  return output;
};

module.exports = translate;