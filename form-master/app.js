

function check(){
    var national = document.getElementById("national").value;
        var height = document.getElementById("height").value;
        var age = parseInt(document.getElementById("age").value);
        var education = document.getElementById("education").value;
    

    if(national === "pakistan" && height >= 5){
 
 if((age >= 18 && age <= 22) ||(age >= 18 && age <= 28 && education === "masters")) {
     document.getElementById("result").innerHTML = "welcome";

 }
 else{
    document.getElementById("result").innerHTML = " sorry";
 }
}
else{
    document.getElementById("result").innerHTML = " very sorry ";
 }

}