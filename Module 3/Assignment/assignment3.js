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
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = WordCheck + " : " + palindrome1(WordCheck);
        }
        else{
            var tableRef = document.getElementById("algorithim2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = WordCheck + " : " + palindrome2(WordCheck);
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

function palindrome1(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

function palindrome2(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}