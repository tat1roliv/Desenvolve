console.log("teste");

let databasePhrasesAuthorsbyIdNum = [
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

let phrasesTotal = databasePhrasesAuthorsbyIdNum.length;

function generateNumRandom(){
    let nRandom = Math.floor(Math.random()*(phrasesTotal+1));
    return nRandom;
}

const numberPhrase = generateNumRandom(); 

/*
console.log(numberPhrase);
console.log(databasePhrasesAuthorsbyIdNum[numberPhrase].phrase);
console.log(databasePhrasesAuthorsbyIdNum[numberPhrase].author);
 */

function changePhrase(numberPhrase){
    document.querySelector("#phrase").innerHTML = databasePhrasesAuthorsbyIdNum[numberPhrase].phrase;
    document.querySelector("#author").innerHTML = databasePhrasesAuthorsbyIdNum[numberPhrase].author;
}

var buttonGenerate = document.querySelector('#boxNewText');

buttonGenerate.addEventListener("click", function(){
  changePhrase(numberPhrase);
});
