
let container = document.getElementsByClassName('form-container')[0];

function toggle() {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
}

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

function setCookie(cName, cValue, expDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
    console.log(`Cookie set: ${cName}=${cValue}; ${expires}; path=/`);
}

function cookieMessage() {
    if (!getCookie("cookie")) {
        document.querySelector("#cookie").style.display = "block";
    }
}function getLogin(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;
    //let phone = document.getElementById("phone").value; // Assuming you have an input field for phone

    // Email regex pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone regex pattern
    let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    // Check if email matches the regex pattern
    if (!emailPattern.test(email)) {
        let emailErrorElement = document.getElementById("emailError");
        if (emailErrorElement) {
            emailErrorElement.style.display = "block";
        }
        return; // Stop further execution
    } else {
        let emailErrorElement = document.getElementById("emailError");
        if (emailErrorElement) {
            emailErrorElement.style.display = "none";
        }
    }

    let user_record = JSON.parse(localStorage.getItem("users")) || [];
    if (user_record.some((v) => v.email === email && v.password === password)) {
        let current_user = user_record.find((v) => v.email === email && v.password === password);

        localStorage.setItem("first_name", current_user.first_name);
        localStorage.setItem("last_name", current_user.last_name);
        localStorage.setItem("phone", current_user.phone);
        localStorage.setItem("gender", current_user.gender);
        localStorage.setItem("name", `${current_user.first_name} ${current_user.last_name}`);
        localStorage.setItem("email", current_user.email);

        // Set a cookie to remember the user
        setCookie("user", current_user.email, 30);

        window.location.href = "profile.html";
    } else {
        alert("Login Failed");
    }
}

document.getElementById("loginForm").addEventListener("submit", getLogin);

// Cookie setting function (assuming you have this function defined somewhere in your code)
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}