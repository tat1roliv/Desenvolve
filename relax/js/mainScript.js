
function generateNumRandom(){
    let phrasesTotal = databasePhrasesAuthors.length;
    let nRandom = Math.floor(Math.random()*(phrasesTotal+1));
    return nRandom;
}

function changeData(){ 
    var numberPhrase = generateNumRandom();
    var newPhrase = databasePhrasesAuthors[numberPhrase].description;
    var newAuthor = databasePhrasesAuthors[numberPhrase].author;
    $("#loremPhrase").text(newPhrase);
    $("#author").text(newAuthor);
 }

$('#boxNewText').click(changeData);
