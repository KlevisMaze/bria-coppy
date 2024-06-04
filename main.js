document.addEventListener('DOMContentLoaded', (event) => {
    var btn = document.getElementById("read-more-btn");
    var moreInfoSection = document.getElementById("more-info");

    btn.onclick = function(event) {
        event.preventDefault();
        moreInfoSection.style.display = "block";
        btn.style.display = "none";  // Optionally hide the button after click
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const svgPath = document.querySelector('.hero-overlay path');
    // Example of changing the path dynamically
    svgPath.setAttribute('d', 'M0,0 C30,40 70,10 100,30 L100,100 L0,100 Z');
    
    // Example of changing the fill color dynamically
    svgPath.style.fill = 'rgba(0, 123, 255, 0.5)';
});


// Insert the section before the footer
document.body.insertBefore(section, footer);
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    let formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('problem', document.getElementById('problem').value);
    
    let fileInput = document.getElementById('file');
    if (fileInput.files.length > 0) {
        formData.append('file', fileInput.files[0]);
    }

    // Perform AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form-endpoint', true); // Change '/submit-form-endpoint' to your server endpoint
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Form successfully submitted!');
        } else {
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    xhr.send(formData);
});
