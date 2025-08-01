function my() {
    var pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function signUp() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    let isvalid = true;
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("dateerror").innerHTML = "";
    document.getElementById("numbererror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

    if (name === "") {
        document.getElementById("nameerror").innerHTML = ('Name is required')
        isvalid = false;
    }

    if (date === "") {
        document.getElementById("dateerror").innerHTML = ('Date is required')
        isvalid = false;
    }


    if (number === "") {
        document.getElementById("numbererror").innerHTML = ('Number is required')
        isvalid = false;
    }if (number.length !== 10) {
  document.getElementById("numbererror").innerText = "Enter exactly 10 digits";
  isvalid = false;
}


    if (email=== "") {
        document.getElementById("emailerror").innerText = "Email is required";
        isvalid = false;
    } 
    else if (!emailPattern.test(email)) {
        document.getElementById("emailerror").innerText = "Enter a valid email address";
        isvalid = false;
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = ('Password is required')
        isvalid = false;
    }



    if (!isvalid) return;

   
    fetch("https://687e0891c07d1a878c30f416.mockapi.io/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            date: date,
            number: number,
            email: email,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("success").style.color = "green";
            document.getElementById("success").innerHTML = " Register Successful!";

            document.getElementById("name").value = "";
            document.getElementById("date").value = "";
            document.getElementById("number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            setTimeout(() => {
                location.replace("index.html");
            }, 1000);
        })
        .catch(error => {
          document.getElementById("success").style.color = "red";
        document.getElementById("success").innerText = "Error saving data.";
        console.error("Error:", error);
        });

}




