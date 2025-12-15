// Form Submit Event
document.getElementById('learningForm').addEventListener('submit', function (e) {

    // Basic Frontend Validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        e.preventDefault();  
        alert("Please fill all required fields!");
        return;
    }

    alert("Form submitted successfully! Check your email for your personalized learning plan.");
});
