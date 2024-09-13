

function displayUserInfo() {
    const firstName = localStorage.getItem("first_name") || "N/A";
    const lastName = localStorage.getItem("last_name") || "N/A";
    const userEmail = localStorage.getItem("email") || "N/A";
    const userPhone = localStorage.getItem("phone") || "N/A";
    const userGender = localStorage.getItem("gender") || "N/A";

    console.log(firstName);
    console.log(lastName);

    // Get elements
    const nameElement = document.getElementById("user__name");
    const emailElement = document.getElementById("user__email");
    const phoneElement = document.getElementById("user__phone");
    const genderElement = document.getElementById("user__gender");

    // Check if elements exist before setting innerText
    if (nameElement) {
        nameElement.innerText = `${firstName} ${lastName}`;
    }
    if (emailElement) {
        emailElement.innerText = userEmail;
    }
    if (phoneElement) {
        phoneElement.innerText = userPhone;
    }
    if (genderElement) {
        genderElement.innerText = userGender;
    }
   
    console.log(emailElement);
    console.log(nameElement);
}

    // Call the function to load user data initially
    displayUserInfo();

    // Logout function


    // Attach logout event listener to logout button
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    } else {
        console.error("Logout button not found.");
    }


let logOut="";
let logIn="";
function logout() {
         localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('first_name');
            localStorage.removeItem('last_name');
            localStorage.removeItem('email');
            localStorage.removeItem('phone');
            localStorage.removeItem('gender');
            localStorage.removeItem('isLoggedIn');
            localStorage.setItem("logOut","true");
            window.location.href = 'login.html';
        }
logOut=localStorage.getItem("logOut");
profile =document.getElementById("profile");
if(logOut) {
    if (profile) {
        profile.style.display="none";
    }

}
console.log(logOut)
if (logOut == "false"){
    console.log("login")
    profile.style.display="block";
}
