def translate(word_or_phrase):
  output = word_or_phrase
  vowels = ['a','e','i','o','u']
  if word_or_phrase[0] in vowels:
    output += 'ay'
  else:
    move = word_or_phrase[0]
    output = word_or_phrase[1:]
    output += move
    output += 'ay'

  return output





