//Business Logic

// function swapLetters (word) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     if (vowels.includes(word.charAt(0)) ) {
//         return word.concat("way");
//     } else if (word.charAt(0) === "q" && word.charAt(1) === "u") { const letters = word.split("").slice(2);
//         return letters.concat(word.charAt(0)).concat(word.charAt(1)).concat("ay").join(""); 
//     } else {
//         const text = word.split("").slice(1);
//         return text.concat(word.charAt(0)).concat("ay").join("");
//     }
//  }

function removePunctuation(text) {
    const punctuationMarks = ['.', ',' , ';', ':', '!', '?', '-', '_', '"', '(', ')', '[', ']', '{', '}', '<', '>', "'", "@", "#", "%"];
  
    const characters = text.split("");
  
    const filteredCharacters = characters.filter(function(char) { return !punctuationMarks.includes(char)
     });
  
    const textResult = filteredCharacters.join('');
  
    return textResult;
}

  function spaceRemover (text) {
    const wordArray = text.trim().split(" ");
    const words = [];
    wordArray.forEach(function(element) {
        if (element.length >= 1 ) {
            words.push(element);
        }
    })
    return words.join(" ");
  }



  function translateToPigLatin(text) {
    if (text.trim().length === 0) {
        return "";
    }

    const cleanedArray = spaceRemover(removePunctuation(text));
    const words = cleanedArray.toLowerCase().split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const translatedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let translatedWord = "";
  
      if (vowels.includes(word.charAt(0))) {
        translatedWord = word.concat("way");
      } else if (word.charAt(0) === "q" && word.charAt(1) === "u") {
        translatedWord = word.slice(2) + word.charAt(0) + word.charAt(1) + "ay";
      } else if (consonants.includes(word.charAt(0)) && word.charAt(1) === "q" && word.charAt(2) === "u") {
        translatedWord = word.slice(1) + word.charAt(0) + "ay";
      } else {
        let consonantCluster = "";
    
        for (let j = 0; j < word.length && consonants.includes(word.charAt(j)); j++) {
          consonantCluster += word.charAt(j);
        }
    
        translatedWord = word.slice(consonantCluster.length) + consonantCluster + "ay";
      }
  
      translatedWords.push(translatedWord);
    }
  
    return translatedWords.join(" ");
  }



//UI Logic
 $(document).ready(function(){
    $("#formOne").submit(function(event){
        const passage = $("#text-passage").val();
        const result = translateToPigLatin(passage);
        $("#translation").html(result);

        event.preventDefault();
    });
 });


