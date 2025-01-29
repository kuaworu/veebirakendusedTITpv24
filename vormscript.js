function selectValik(){
    let vastus2=document.getElementById("vastus2");
    let linn2=document.getElementById("linn2");

    vastus2.innerHTML="Sinu linn2 -"+linn2.value;
  //  vastus2.style.backgroundColor="rgb(21, 230, 230)";
}
function lugemine(){
    document.getElementById("vastus").innerHTML= "Tere hommikust, "+document.getElementById("nimi").value+" "+document.getElementById("pnimi").value;
}
//sama funktsioon koos muutujatega
function lugemine2(){
    let nimi=document.getElementById("nimi").value;
    let pnimi=document.getElementById("pnimi").value;
    let vastus=document.getElementById("vastus");
    let varv=document.getElementById("varv");
    //radio-nupud

    let synnipaev=document.getElementById("synnipaev").value;
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    if(mees.checked)

    let number=document.getElementById("number").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let url=document.getElementById("url").value;


    if(mees.checked){
        vastus.innerHTML= "Tere hommikust, mees "+nimi+" "+pnimi+"!"+" Sinu sünnipäev on "+synnipaev;
        vastus.style.color=varv.value;
        pilt.src="Allalaaditud fail (1).jpg";
    } else if(naine.checked) {
        vastus.innerHTML= "Tere hommikust, naine "+nimi+" "+pnimi+"!"+" Sinu sünnipäev on "+synnipaev;
        vastus.style.color=varv.value;
        pilt.src="Allalaaditud fail.jpg";
    } else {
        vastus.innerHTML="palun vali sugu";
    }
    document.getElementById("vastus").innerHTML= "Tere hommikust, "+document.getElementById("nimi").value+" "+document.getElementById("pnimi").value+" "+
    "Sinu number: " + document.getElementById("number").value + ".<br>" + 
    "Sinu tel: " + document.getElementById("tel").value + ".<br>" + 
    "Sinu email: " + document.getElementById("email").value + ".<br>"+
    "Sinu url: " + document.getElementById("url").value + ".";

}
//checkbox valik
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let sport=document.getElementById("sport");
    let joonistamine=document.getElementById("joonistamine");
    let muusika=document.getElementById("muusika");
    let programeerimine=document.getElementById("programeerimine");
    let lugeda=document.getElementById("lugeda");

    let hobby="";
    if(sport.checked){
        hobby+=sport.value+", ";
    }
   if(joonistamine.checked){
        hobby+=joonistamine.value+", ";
    }
    if(muusika.checked){
        hobby+=muusika.value+", ";
    }
    if(programeerimine.checked){
        hobby+=programeerimine.value+", ";
    }
    if(lugeda.checked){
        hobby+=lugeda.value+", ";
    }
    vastus3.innerHTML="sinu hobby-"+hobby;
}
