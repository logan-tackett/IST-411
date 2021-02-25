function validateandadd() {

    var TheNewWord = document.forms["myForm"]["newWord"].value;
    var TheNewNumber = document.forms["myForm"]["newNumber"].value;

    if(TheNewWord == ""){
        alert("Please enter a word to check");
        return false;
    }
    else if ((TheNewNumber != 1) && (TheNewNumber != 2)){
        alert("Enter a 1 or 2");
        document.forms["myForm"]["newNumber"].value = "";
        return false;
    }
    else {
        if (TheNewNumber==1){
            var tableRef = document.getElementById("myList1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = TheNewWord;
        }
        else{
            var tableRef = document.getElementById("myList2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = TheNewWord;
        }
        document.forms["myForm"]["newWord"].value="";
        document.forms["myForm"]["newNumber"].value="";
        return true;
    }
}

function clearList1(){
    var tableRef = document.getElementById("myList1");
    tableRef.innerHTML="";
}

function clearList2(){
    var tableRef = document.getElementById("myList2");
    tableRef.innerHTML="";
}