const apiUrl = "https://687e0891c07d1a878c30f416.mockapi.io/register";

function loadUser() {
  const userId = localStorage.getItem("loggedInUserId");
  if (!userId) {
    window.location.href = "index.html";
    return;
  }

  fetch(`${apiUrl}/${userId}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("welcome").innerText = `Welcome, ${user.email}`;
      document.getElementById("name").value = user.name || "";
      document.getElementById("date").value = user.date || "";
      document.getElementById("email").value = user.email || "";
      document.getElementById("number").value = user.number || "";
      document.getElementById("gender").value = user.gender || "Male";
    })
    .catch(err => {
      console.error("User fetch error", err);
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerText = "Failed to load user data";
    });
}

// function updateUser() {
//   const userId = localStorage.getItem("loggedInUserId");
//   const updated = {
//     name: document.getElementById("name").value,
//     dob: document.getElementById("date").value,
//     number: document.getElementById("number").value,
//     gender: document.getElementById("gender").value
//   };

//   fetch(`${apiUrl}/${userId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(updated)
//   })
//     .then(res => res.json())
//     .then(() => {
//       document.getElementById("message").style.color = "green";
//       document.getElementById("message").innerText = "Profile updated successfully!";
//     })
//     .catch(err => {
//       console.error("Update error", err);
//       document.getElementById("message").style.color = "red";
//       document.getElementById("message").innerText = "Update failed!";
//     });
//   }
function enableEdit() {
  document.getElementById("name").disabled = false;
  document.getElementById("date").disabled = false;
  document.getElementById("number").disabled = false;
  document.getElementById("gender").disabled = false;
}


function updateUser() {
  const userId = localStorage.getItem("loggedInUserId");
  if (!userId) {
    alert("User not logged in.");
    return;
  }

  const updated = {
    name: document.getElementById("name").value,
    dob: document.getElementById("date").value,
    mobile: document.getElementById("number").value,
    gender: document.getElementById("gender").value
  };

  fetch(`${apiUrl}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated)
  })
    .then(res => res.json())
    .then(data => {
      alert("Profile updated successfully!");

   
      document.getElementById("name").disabled = true;
      document.getElementById("date").disabled = true;
      document.getElementById("number").disabled = true;
      document.getElementById("gender").disabled = true;
    })
    .catch(err => {
      console.error("Update error", err);
      alert("Failed to update!");
    });
}

function deleteUser() {
  const userId = localStorage.getItem("loggedInUserId");
  const confirmDelete = confirm("Are you sure you want to delete your account?");
  if (!confirmDelete) return;

  fetch(`${apiUrl}/${userId}`, { method: "DELETE" })
    .then(() => {
      localStorage.removeItem("loggedInUserId");
      alert("Account deleted");
      window.location.href = "index.html";
    })
    .catch(err => {
      console.error("Delete error", err);
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerText = "Delete failed!";
    });
}

function logout() {
  localStorage.removeItem("loggedInUserId");
  window.location.href = "index.html";
}