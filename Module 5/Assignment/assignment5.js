async function getQuote(){
    var apiString = "https://api.quotable.io/random";
    var shortLong = document.getElementById("shortLong").value;
    apiString = apiString + shortLong;
    
    var response = await fetch(apiString);
    var jsonData = await response.json();
    

    document.getElementById("newQuote").innerHTML = "";
    document.getElementById("newAuthor").innerHTML = "";

    document.getElementById("newQuote").innerHTML += '"' + jsonData.content + '"';
    document.getElementById("newAuthor").innerHTML += jsonData.author;
    
}