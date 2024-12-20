document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        submitForm();
    });

    function previewForm() {
        const previewContent = document.getElementById('previewContent');
        const formData = new FormData(form);

        let previewHTML = '';
        for (let [key, value] of formData.entries()) {
            previewHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }

        previewContent.innerHTML = previewHTML;
        document.getElementById('previewContainer').style.display = 'block';
    }

    function submitForm() {
        const previewContent = document.getElementById('previewContent');
        const formData = new FormData(form);

        let previewHTML = '';
        for (let [key, value] of formData.entries()) {
            previewHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }

        previewContent.innerHTML = previewHTML;
        document.getElementById('previewContainer').style.display = 'block';

        alert("The feedback form filled successfully..!");
    }

    document.querySelector('.preview').addEventListener('click', previewForm);
});
