function my() {
    var pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}



function signUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    let isvalid = true;
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";


    if (name === "") {
        document.getElementById("nameerror").innerHTML = ('Name is required')
        isvalid = false;
    }

    if (email === "") {
        document.getElementById("emailerror").innerHTML = ('Email is required')
        isvalid = false;
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = ('Password is required')
        isvalid = false;
    }


    if (!isvalid) return;

    if (!isvalid);
    fetch("https://687e0891c07d1a878c30f416.mockapi.io/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("success").innerHTML = " Register Successful!";

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            setTimeout(() => {
                location.replace("index.html"); 
            }, 1000);
        })
        .catch(error => {
            document.getElementById("success").innerHTML = " Error saving data.";
            console.error("Error:", error);
        });

}




