// Sign-up form submission
document.getElementById("userForm")?.addEventListener('submit', function(event){
    event.preventDefault();
    saveDataToLocalStorage();
});

let userCount = localStorage.getItem('userCount') ? Number(localStorage.getItem('userCount')) : 0;

// Function to save sign-up data to localStorage
function saveDataToLocalStorage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Data saved to local storage");

    document.getElementById("userForm").reset();
    window.location.href = 'login.html';
}

// Handle login submission
document.getElementById('loginSubmit')?.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    const loginUsername = document.getElementById('loginName').value;
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    
    const storedUser = JSON.parse(localStorage.getItem('user'));

   
    if (storedUser && storedUser.name === loginUsername && storedUser.email === loginEmail && storedUser.password === loginPassword) {
        alert('Login successful');
        displayUserInfo(storedUser); 
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        alert('Invalid credentials, please try again');
    }
});


function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
        userInfoDiv.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    }
}

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('user'); // Clear user data
    window.location.href = 'index.html'; // Redirect to sign up page
});


;