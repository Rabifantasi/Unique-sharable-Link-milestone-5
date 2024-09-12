document.addEventListener('DOMContentLoaded', function () {
    var generateResume = function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('Skills').value;
        var username = document.getElementById('username').value;
        var resumeContent = "\n            <div class=\"container\">\n                <h1>Resume for ".concat(name, "</h1>\n                <div class=\"section\">\n                    <h2>Personal Information</h2>\n                    <p><strong>Email:</strong> ").concat(email, "</p>\n                    <p><strong>Phone:</strong> ").concat(phone, "</p>\n                </div>\n                <div class=\"section\">\n                    <h2>Experience</h2>\n                    <p>").concat(experience, "</p>\n                </div>\n                <div class=\"section\">\n                    <h2>Education</h2>\n                    <p>").concat(education, "</p>\n                </div>\n                <div class=\"section\">\n                    <h2>Skills</h2>\n                    <p>").concat(skills, "</p>\n                </div>\n            </div>\n        ");
        var resumeContentDiv = document.getElementById('resume-content');
        var resumeOutput = document.getElementById('resume-output');
        resumeContentDiv.innerHTML = resumeContent;
        resumeOutput.style.display = 'block';
        var baseURL = window.location.origin;
        var resumeURL = "".concat(baseURL, "/resume/").concat(encodeURIComponent(username));
        alert("Your unique sharable resume link: ".concat(resumeURL));
    };
    var generateButton = document.getElementById('generate-resume');
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
});
