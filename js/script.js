// Function to display the welcome message with the user's name
window.onload = function() {
    let name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("welcome-message").textContent = "Hi " + name + ", Welcome to Website";
    }
};

// Function to validate the form and display the input values
function validateForm() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById("message").value;

    let output = `
        <h3>Form Output:</h3>
        <p>Name: ${name}</p>
        <p>Tanggal Lahir: ${date}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Pesan: ${message}</p>
    `;

    document.getElementById("form-output").innerHTML = output;
}

// Functions to switch between Home and Profile sections
function showHome() {
    document.getElementById("content").innerHTML = `
        <!-- Home Section -->
        <section id="home">
            <h1 id="welcome-message">Hi, Welcome to Website</h1>
            <p>This is the first practice website</p>
            <img src="https://via.placeholder.com/1366x378" alt="Main Image">
        </section>

        <!-- Our Facilitation Section -->
        <section id="facilitation">
            <h2>Our Facilitation</h2>
            <div class="facilities">
                <div class="facility">
                    <img src="https://via.placeholder.com/100x100" alt="Professional Teacher">
                    <p>Professional Teacher</p>
                </div>
                <div class="facility">
                    <img src="https://via.placeholder.com/100x100" alt="Sport Field">
                    <p>Sport Field</p>
                </div>
                <div class="facility">
                    <img src="https://via.placeholder.com/100x100" alt="Classroom">
                    <p>Classroom</p>
                </div>
            </div>
        </section>

        <!-- Message Us Section -->
        <section id="contact">
            <h2>Message Us</h2>
            <form id="message-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="date">Tanggal Lahir:</label>
                <input type="date" id="date" name="date" required>

                <label>Jenis Kelamin:</label>
                <input type="radio" id="male" name="gender" value="Laki-Laki" required>
                <label for="male">Laki-Laki</label>
                <input type="radio" id="female" name="gender" value="Perempuan" required>
                <label for="female">Perempuan</label>

                <label for="message">Pesan:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="button" onclick="validateForm()">Submit</button>
            </form>

            <div id="form-output"></div>
        </section>
    `;
}

function showProfile() {
    document.getElementById("content").innerHTML = `
        <!-- Our Profile Section -->
        <section id="profile">
            <h2>Our Profile</h2>
            <div id="profile-banner">
                <img src="https://via.placeholder.com/1366x378" alt="Profile Banner">
            </div>

            <section id="about">
                <h3>About Our School</h3>
                <p>Here you can describe about your school...</p>
            </section>

            <section id="vision-mission">
                <h3>Vision & Mission</h3>
                <p>Describe the vision and mission of your school...</p>
            </section>
        </section>
    `;
}
 