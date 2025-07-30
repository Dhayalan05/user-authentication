    function my() {
      var pass = document.getElementById("password");
      pass.type = pass.type === "password" ? "text" : "password";
    }


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

     fetch("https://687e0891c07d1a878c30f416.mockapi.io/user")
        .then(res => res.json())
        .then(users => {
          const match = users.find(user => user.email === email && user.password === password);
          if (match) {
            document.getElementById("message").innerText = " Login Successful!";
            
            setTimeout(() => window.location.href = "home.html", 1000);
          } else {
            document.getElementById("message").innerText = " Invalid email or password";
          }
        });
        
}
