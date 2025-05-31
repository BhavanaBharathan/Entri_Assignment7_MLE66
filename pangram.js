function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSentence = sentence.toLowerCase();

  for (let char of alphabet) {
    if (!lowerCaseSentence.includes(char)) {
            return(false)
    }
  }
 
  return(true)
}

let sentence = "The quick brown fox jumps over the lazy dog";
let result = isPangram(sentence);
if(result==true)
{
  console.log(`${sentence} :is pangram`)
}

else{
    console.log(`${sentence} :is not pangram`)
}

 