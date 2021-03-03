function palindromecheck() {

    var WordCheck = document.forms["myForm"]["newWord"].value;
    var AlgorithimNumber = document.forms["myForm"]["newNumber"].value;

    if(WordCheck == ""){
        alert("Please enter a word");
        return false;
    }
    else if ((AlgorithimNumber != 1) && (AlgorithimNumber != 2)){
        alert("Enter a 1 or a 2");
        document.forms["myForm"]["newNumber"].value = "";
        return false;
    }
    
    else {
        if (AlgorithimNumber==1){
            var tableRef = document.getElementById("algorithim1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = WordCheck;  
        }
        else{
            var tableRef = document.getElementById("algorithim2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = WordCheck;
        }
        document.forms["myForm"]["newWord"].value="";
        document.forms["myForm"]["newNumber"].value="";
        return true;
    }

}

function clearAlgorithim1(){
    var tableRef = document.getElementById("algorithim1");
    tableRef.innerHTML="";
}

function clearAlgorithim2(){
    var tableRef = document.getElementById("algorithim2");
    tableRef.innerHTML="";
}