async function getBaconipsum(){
    var apiString = "https://baconipsum.com/api/";

    var theNewParagraphs = document.getElementById("newParagraphs").value;
    var meatAndFiller = document.getElementById("meatAndFiller").value;
    apiString = apiString + "?type=" + meatAndFiller + "&paras=" + theNewParagraphs; 

    var response = await fetch(apiString);

    document.getElementById("myRawData").innerHTML = "";
    document.getElementById("myFormattedData").innerHTML = "";

    var jsonData = await response.json();

    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

    for(var para in jsonData){
        document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
    }
    return true;
}