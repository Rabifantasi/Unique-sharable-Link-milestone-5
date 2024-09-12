document.addEventListener('DOMContentLoaded', () => {
    const generateResume = () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
        const username = (document.getElementById('username') as HTMLInputElement).value;

  
        const resumeContent = `
            <div class="container">
                <h1>Resume for ${name}</h1>
                <div class="section">
                    <h2>Personal Information</h2>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <div class="section">
                    <h2>Experience</h2>
                    <p>${experience}</p>
                </div>
                <div class="section">
                    <h2>Education</h2>
                    <p>${education}</p>
                </div>
                <div class="section">
                    <h2>Skills</h2>
                    <p>${skills}</p>
                </div>
            </div>
        `;

        
        const resumeContentDiv = document.getElementById('resume-content') as HTMLDivElement;
        const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
        resumeContentDiv.innerHTML = resumeContent;
        resumeOutput.style.display = 'block';

      
        const baseURL = window.location.origin;
        const resumeURL = `${baseURL}/resume/${encodeURIComponent(username)}`;
        
     
        alert(`Your unique sharable resume link: ${resumeURL}`);
    };

   
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
});
