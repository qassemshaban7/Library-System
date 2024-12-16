const signupForm = document.getElementById("signup");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    // var role = document.getElementById("role").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    var role = "user";
    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign Up Successful!");
    window.location.href = "login.html";
  });
}
// localStorage.removeItem("users");
// console.log(localStorage);

const loginForm = document.getElementById("login");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", user.username);
      if (user.role === "admin") {
          window.location.href = "index.html";
      } else if (user.role === "user") {
          window.location.href = "mybooks.html";
      }
  } else {
      alert("Invalid username or password. Please try again.");
  }
  });
}

document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault(); 
  logout(); 
});

function logout() {
  localStorage.removeItem("loggedInUser"); 
  window.location.href = "login.html";
}

