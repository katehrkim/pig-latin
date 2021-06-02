// Rewrite this in Unit Test

const pig = require("./pigLatin");

test('translates a word beginning with a vowel', () => {
  expect(pig("apple")).toEqual("appleay");
});

test('translates a word beginning with a consonant', () => {
  expect(pig("banana")).toEqual("ananabay");
});

test('translates a word beginning with two consonants', () => {
  expect(pig("cherry")).toEqual("errychay");
});

test('translates two words', () => {
  expect(pig("eat pie")).toEqual("eatay iepay");
});

test('translates a word beginning with three consonants', () => {
  expect(pig("three")).toEqual("eethray");
});

test('counts sch as a single phoneme', () => {
  expect(pig("school")).toEqual("oolschay");
});

test('counts qu as a single phoneme', () => {
  expect(pig("quiet")).toEqual("ietquay");
});

test('counts qu as a consonant even when its preceded by a consonant', () => {
  expect(pig("square")).toEqual("aresquay");
});

test('translates many words', () => {
  expect(pig("the quick brown fox")).toEqual("ethay ickquay ownbray oxfay");
});

// write a test asserting that capitalized words are still capitalized
// (but with a different initial capital letter, of course) retain the
// punctuation from the original phrase

test('capitals are still capitals', () => {
  expect(pig("SQUARE")).toEqual("ARESQUAY");
});
