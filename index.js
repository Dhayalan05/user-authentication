function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    let isvalid=true;

    document.getElementById("emailerror").innerHTML="";
    document.getElementById("passworderror").innerHTML="";

    if( email ===""){
        document.getElementById("emailerror").innerHTML=('Email is required')
        isvalid=false;
    }

    if( password ===""){
        document.getElementById("passworderror").innerHTML=('Password is required')
        isvalid=false;
    }

    if(isvalid){
        var formdata ={
            email:email,
            password:password
        }
        console.log("Form Submitted", formdata);
}
}