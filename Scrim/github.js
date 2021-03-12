async function callGitHub(){

    var apiString = "https://api.github.com/users/";

    var username = document.getElementById("name").value;
    apiString = apiString + username + "/repos"; 
    //alert(apiString);

    var response = await fetch(apiString);

    document.getElementById("repoData").innerHTML = "";
    //document.getElementById("formattedRepoData").innerHTML = "";

    var jsonData = await response.json();
    //alert(JSON.stringify(jsonData));
    //alert("here");

    var git = document.getElementById("repoData").innerHTML = JSON.stringify(jsonData);

    //for(var i in git){
    //    document.getElementById("formattedRepoData").innerHTML = git[i] == 'html_url';
   // }
   // return true;



}