let databasePhrasesAuthors = [
    {id:1, author:'Juliana', description:'[0]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:2, author:'Ana', description:'[1]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:3, author:'Maria', description:'[2]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:4, author:'Boni', description:'[3]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:5, author:'Juli', description:'[4]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:6, author:'Jr', description:'[5]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:7, author:'Sandy', description:'[6]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:8, author:'Joao', description:'[7]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:9, author:'Pedro', description:'[8]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'},
    {id:10, author:'Gabs', description:'[9]Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum eum laborum et ipsa'}
];

let phrasesTotal = databasePhrasesAuthors.length;

function generateNumRandom(){
    let nRandom = Math.floor(Math.random()*(phrasesTotal+1));
    return nRandom;
}

let numberPhrase = generateNumRandom(); 

var currentPhrase = document.querySelector("#loremPhrase");
var currentAuthor = document.querySelector("#author");

function changeData(){
    var numberPhrase = generateNumRandom();
    currentPhrase.textContent = databasePhrasesAuthors[numberPhrase].phrase;
    currentAuthor.textContent  = databasePhrasesAuthors[numberPhrase].author;
 }
var buttonGenerate = document.querySelector('#boxNewText');
buttonGenerate.addEventListener("click", function(){
    changeData();
});