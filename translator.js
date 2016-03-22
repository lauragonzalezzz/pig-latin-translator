
var pigLatinTranslator = function(phrase) {
	var index = null;
	var lowercasePhrase = phrase.toLowerCase();
	var phraseArray = lowercasePhrase.split(' ');
	var pigLatinArray = [];

	phraseArray.forEach(function(word) {
		var vowels = ['a', 'e', 'i', 'o', 'u'];

		for (var i = 0; i < word.length; i++) {
			if (vowels.indexOf(word[i]) !== -1) {
				newPhrase(i, word);
				break;
			}	
		}
	});

	function newPhrase(index, word) {
		var first = word.slice(index);
		var second = '-' + word.slice(0, index) + 'ay';

		newWord = first + second;
		pigLatinArray.push(newWord);
	}
		
	return pigLatinArray.join(' ');
}

console.log(pigLatinTranslator('hippity hoppity'));
// to lowercase
// split string into words
// split words into indexes
// find first vowel
// remove first indexes until first vowel, store to string '- + indexes + ay'
// restore to string, capitalize
// concat strings