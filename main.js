var em=  parseInt(document.getElementById("mathresult"). value) + parseInt( document.getElementById("engresult"). value) + parseInt(document.getElementById("ecoresult"). value) + parseInt( document.getElementById("govresult"). value) + parseInt(document.getElementById("litresult"). value)
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
}
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


function add() {
    document.getElementById("total").value = em /5
    if (tota > 50) {
        document.getElementById("chng").innerText = "average studen spend more time studying"
   }
   else {
       document.getElementById("chng").innerText = "poor result you will have to repeat this class"
   
   }
}
var tota = document.getElementById("total").value
