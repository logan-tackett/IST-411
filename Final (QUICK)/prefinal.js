async function getWords(){
    var apiString = "https://api.dictionaryapi.dev/api/v2/entries";


    var theCountryRequest = document.getElementById("countryRequest").value;
    var theWord = document.getElementById("theWord").value;
    apiString = apiString + "/" + theCountryRequest + "/" + theWord;

    //alert(apiString);

    var response = await fetch(apiString);
    var jsonData = await response.json();
    
    //document.getElementById("newWord").innerHTML = "";
    document.getElementById("newDefinition").innerHTML = "";
    document.getElementById("newPartOfSpeech").innerHTML = "";

    //document.getElementById("newWord").innerHTML = JSON.stringify(jsonData);

       // document.getElementById("newWord").innerHTML += jsonData[0].word;
 
    for (var i in jsonData){
        document.getElementById("newDefinition").innerHTML += jsonData[i].meanings[i].definitions[i].definition;
        document.getElementById("newPartOfSpeech").innerHTML += jsonData[i].meanings[i].partOfSpeech;
    }

    //alert("line21");
    
   // alert(document.getElementById("newWord"))
   // document.getElementById("newRequest").innerHTML += jsonData.theWordRequest;

}