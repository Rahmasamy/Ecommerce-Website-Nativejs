

    // Function to display user info from local storage
    function displayUserInfo() {
        const firstName = localStorage.getItem("first_name") || "N/A";
        const lastName = localStorage.getItem("last_name") || "N/A";
        const userEmail = localStorage.getItem("email") || "N/A";
        const userPhone = localStorage.getItem("phone") || "N/A";
        const userGender = localStorage.getItem("gender") || "N/A";

        // Display user info
        document.getElementById("user__name").innerText = `${firstName} ${lastName}`;
        document.getElementById("user__email").innerText = userEmail;
        console.log(document.getElementById("user__email"));
        console.log(document.getElementById("user__name"));
        document.getElementById("user__phone").innerText = userPhone;
        document.getElementById("user__gender").innerText = userGender;
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



function logout() {
         localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('first_name');
            localStorage.removeItem('last_name');
            localStorage.removeItem('email');
            localStorage.removeItem('phone');
            localStorage.removeItem('gender');

            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        }
