
let databasePhrasesAuthors = [
    {phrase: ' Frase[0] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[0] Maria da Silva',
    },
    

    {phrase: ' Frase[1] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[1] Maria da Silva',
    },

    {phrase: ' Frase[2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[2] Maria da Silva',
    },

    {phrase: ' Frase[3] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[3] Maria da Silva',
    },

    {phrase: ' Frase[4] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[4] Maria da Silva',
    },

    {phrase: ' Frase[5] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[5] Maria da Silva',
    },

    {phrase: ' Frase[6] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[6] Maria da Silva',
    },

    {phrase: ' Frase[7] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[7] Maria da Silva',
    },

    {phrase: ' Frase[8] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    aauthor: ' Autor[8] Maria da Silva'}
    ,

    {phrase: ' Frase[9] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa',
    author: ' Autor[9] Maria da Silva',
    }
];

let phrasesTotal = databasePhrasesAuthors.length;

function generateNumRandom(){
    let nRandom = Math.floor(Math.random()*(phrasesTotal+1));
    return nRandom;
}

const numberPhrase = generateNumRandom(); 


console.log(numberPhrase);

/*
console.log(databasePhrasesAuthors[numberPhrase].phrase);
console.log(databasePhrasesAuthors[numberPhrase].author);
*/

const phraseNow = databasePhrasesAuthors[numberPhrase].phrase;
console.log(phraseNow);

function changePhraseAndAuthor(){

    document.querySelector("#loremPhrase").innerHTML = phraseNow;
    /*
    document.querySelector("#author").innerHTML = databasePhrasesAuthors[numberPhrase].author;
    */
}

/*
const phraseNow = databasePhrasesAuthors[numberPhrase].phrase;
console.log(phraseNow);
*/
var buttonGenerate = document.querySelector('#boxNewText');

buttonGenerate.addEventListener("click", function(){
    /*
    document.querySelector("#phrase").innerHTML = phraseNow.value; 
    */
    document.querySelector("#loremPhrase").innerHTML = "hola";
});
/*
changePhraseAndAuthor(numberPhrase);
*/