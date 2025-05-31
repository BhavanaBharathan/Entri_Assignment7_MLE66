function RevSentence(sentence, l) {
    if (l % 2 == 0) {
        let j = Math.floor(l / 2);
        while (j <= l - 1) {
            let temp = sentence[l - j - 1];
            sentence[l - j - 1] = sentence[j];
            sentence[j] = temp;
            j += 1;
        }
    } else {
        let j = Math.floor(l / 2) + 1;
        while (j <= l - 1) {
            let temp = sentence[l - j - 1];
            sentence[l - j - 1] = sentence[j];
            sentence[j] = temp;
            j += 1;
        }
    }

    let S = sentence[0];
    for (let i = 1; i < l; i++) {
        S = S + " " + sentence[i];
    }
    return S;
}
let sentence = "Javascript is fun";
let words = sentence.split(" ");
let l = words.length;
console.log(RevSentence(words, l));