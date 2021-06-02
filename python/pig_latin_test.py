# Rewrite this in Unit Test
import unittest
from pig_latin import translate

class PigLatinTestCase(unittest.TestCase):
    """Tests for pig_latin.py"""

    def test_begin_vowel(self):
        self.assertEqual(translate('apple'), 'appleay')
    
    def test_begin_consonant(self):
        self.assertEqual(translate('banana'), 'ananabay')
    
    def test_begin_two_consonants(self):
        self.assertEqual(translate('cherry'), 'errychay')
    
    def test_two_words(self):
        self.assertEqual(translate('eat pie'), 'eatay iepay')

    def test_begin_three_consonants(self):
        self.assertEqual(translate('three'), 'eethray')
    
    def test_count_sch_as_single_phoneme(self):
        self.assertEqual(translate('school'), 'oolschay')
    
    def test_count_qu_as_single_phoneme(self):
        self.assertEqual(translate('quiet'), 'ietquay')
    
    def test_count_qu_as_consonant_when_preceded_by_consonant(self):
        self.assertEqual(translate('square'), 'aresquay')
    
    def test_translate_many_words(self):
        self.assertEqual(translate('the quick brown fox'), 'ethay ickquay ownbray oxfay')

# write a test asserting that capitalized words are still capitalized
# (but with a different initial capital letter, of course) retain the
# punctuation from the original phrase

    def cap_are_still_cap(self):
        self.assertEqual(translate('SQUARE'), 'ARESQUAY')
    
if __name__ == '__main__':
    unittest.main()
