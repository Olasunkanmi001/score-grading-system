
function math() {
    document.getElementById("mathresult").value = parseInt(document.getElementById("math1stca"). value) + parseInt(document.getElementById("math2ndca"). value) + parseInt(document.getElementById("mathexam").value);
}
function eng() {
    document.getElementById("engresult").value = parseInt(document.getElementById("eng1stca"). value) + parseInt(document.getElementById("eng2ndca"). value) + parseInt(document.getElementById("engexam").value);
}
function eco() {
    document.getElementById("ecoresult").value = parseInt(document.getElementById("eco1stca"). value) +parseInt(document.getElementById("eco2ndca"). value) + parseInt(document.getElementById("ecoexam").value);
}
function gov() {
    document.getElementById("govresult").value = parseInt( document.getElementById("gov1stca"). value )+ parseInt( document.getElementById("gov2ndca"). value) + parseInt(document.getElementById("govexam").value);
}

function lit() {
 document.getElementById("litresult").value  = parseInt(document.getElementById("lit1stca"). value) + parseInt (document.getElementById("lit2ndca"). value) + parseInt(document.getElementById("litexam").value);
} 
var addit = document.getElementById("chng")

var iff =  parseInt(document.getElementById("mathresult").value) + parseInt( document.getElementById("engresult").value) + parseInt(document.getElementById("ecoresult").value) + parseInt( document.getElementById("govresult").innerHTML) + parseInt(document.getElementById("litresult").value) < 30 || parseInt(document.getElementById("mathresult").value) + parseInt( document.getElementById("engresult").value) + parseInt(document.getElementById("ecoresult").value) + parseInt( document.getElementById("govresult").value) + parseInt(document.getElementById("litresult").value)

function addd() { document.getElementById("total").value=  parseInt(document.getElementById("mathresult"). value) + parseInt( document.getElementById("engresult"). value) + parseInt(document.getElementById("ecoresult"). value) + parseInt( document.getElementById("govresult"). value) + parseInt(document.getElementById("litresult"). value) /5

if (iff >= 0 && iff <= 59  ) {addit.innerHTML = "D" }  
else if (iff >= 60 && iff <= 79 ) { addit.innerHTML = "C" }
else if (iff >= 80 && iff <= 89) {addit.innerHTML = "B"
}
else if (iff >= 90 && iff <= 100 ) { addit.innerHTML = "A" }
else if(iff > 100){
    alert ("The score is over 100")
}

}

function cla() {
    document.getElementById ("urname").value = "";
    document.getElementById("math1stca"). value = "";
    document.getElementById("math2ndca"). value = "";
    document.getElementById ("mathexam"). value = "";
    document.getElementById("eng1stca"). value = "";
    document.getElementById("eng2ndca"). value = "";
    document.getElementById("engexam"). value = "";
    document.getElementById("eco1stca"). value = "";
    document.getElementById("eco2ndca"). value = "";
    document.getElementById("ecoexam"). value = "";
    document.getElementById("gov1stca"). value = "";
    document.getElementById("gov2ndca"). value = "";
    document.getElementById("govexam"). value = "";
    document.getElementById("lit1stca"). value = "";
    document.getElementById("lit2ndca"). value = "";
    document.getElementById("litexam"). value = "";
    document.getElementById("mathresult"). value = "";
    document.getElementById("engresult"). value = "";
    document.getElementById("ecoresult"). value = "";
    document.getElementById("govresult"). value = "";
    document.getElementById("litresult"). value = "";
    document.getElementById("total"). value = "";
    document.getElementById("chng").innerText = "";
    document.getElementById("cal").value = ""
}

