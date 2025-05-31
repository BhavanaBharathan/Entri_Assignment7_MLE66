function countWords(sentence) {
  let wordCount = 0;
  let word= false;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];


    if (char.match(/[a-zA-Z0-9]/)) {
      if (!word) {
        wordCount++;
        word = true;
      }
    } else {
      word= false;
    }
  }

  return wordCount;
}



let input = "Hello world, how are you?";
let output = countWords(input);
console.log(output + " words"); 