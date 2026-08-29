const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function showSignup() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
}

function showLogin() {
  signupForm.classList.add("hide");
  loginForm.classList.remove("hide");
}

/* SIGN UP */
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  const msg = document.getElementById("signupMsg");

  if (!name || !email || !password) {
    msg.style.color = "red";
    msg.innerText = "All fields are required";
    return;
  }

  if (password.length < 6) {
    msg.style.color = "red";
    msg.innerText = "Password must be at least 6 characters";
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("filmlaneUser", JSON.stringify(user));

  msg.style.color = "lime";
  msg.innerText = "Account created successfully";

  setTimeout(showLogin, 1500);
});

/* LOGIN */
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  const msg = document.getElementById("loginMsg");

  const storedUser = JSON.parse(localStorage.getItem("filmlaneUser"));

  if (!email || !password) {
    msg.style.color = "red";
    msg.innerText = "Please enter email and password";
    return;
  }

  if (!storedUser) {
    msg.style.color = "red";
    msg.innerText = "No account found. Please sign up.";
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
  msg.style.color = "lime";
  msg.innerText = "Login successful 🎉 Redirecting...";

  setTimeout(() => {
    window.location.href = "index.html"; // 👉 yaha apna page name
  }, 1200);
} else {
    msg.style.color = "red";
    msg.innerText = "Invalid email or password";
  }
});
