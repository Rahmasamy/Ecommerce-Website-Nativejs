function saveData(event) {
    event.preventDefault();  // Prevent form from submitting

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    const emailError = document.getElementById('emailError');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    console.log(password);

    let valid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.color='red';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (first_name.trim() === '') {
        firstNameError.textContent = 'Please enter your first name.';
        firstNameError.style.color='red';
        valid = false;
    } else {
        firstNameError.textContent = '';
    }

    if (last_name.trim() === '') {
        lastNameError.textContent = 'Please enter your last name.';
        lastNameError.style.color='red';
        valid = false;
    } else {
        lastNameError.textContent = '';
    }

    if (!validatePhone(phone)) {
        phoneError.textContent = 'Please enter a valid phone number.';
        phoneError.style.color='red'
        valid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.';
        passwordError.style.color='red'
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        // Save data to local storage or send to server
        console.log('Form is valid');
        // Perform your save operation here
        let user_records = JSON.parse(localStorage.getItem("users")) || [];
        console.log(user_records);

        if (user_records.some((user) => user.email === email)) {
            alert("This email already exists");
           
        } else if (user_records.some((user) => user.phone === phone)) {
            alert("This mobile phone number already exists");
           
        } else {
            user_records.push({
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "gender": gender,
                "phone": phone,
                "password": password
            });
              // Clear input fields after successful registration
              document.getElementById("first_name").value = '';
              document.getElementById("last_name").value = '';
              document.getElementById("phone").value = '';
              document.getElementById("gender").value = 'female';  // or 'male' based on your default option
              document.getElementById("email").value = '';
              document.getElementById("password").value = '';

            localStorage.setItem("users", JSON.stringify(user_records));
            alert("Registration successful!");
            // toggle();

            // Mark the user as logged in
            localStorage.setItem("isLoggedIn", "true");
         
            window.location.href = "home.html"; 
        }
    }




}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{11}$/;
    return re.test(String(phone));
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(String(password));
}