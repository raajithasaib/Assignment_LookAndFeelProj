// appointmentForm.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form
        const patientName = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const department = form.querySelector('select[name="department"]').value; // Assuming select has name attribute
        const doctor = form.querySelector('select[name="doctor"]').value; // Assuming select has name attribute
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;

        if (!patientName || !email || department === "Select Department" || doctor === "Select Doctor" || !date || !time) {
            alert('Please fill out all required fields.');
            return;
        }

        // Check if the date and time are in the future
        const appointmentDate = new Date(date + ' ' + time);
        if (appointmentDate < new Date()) {
            alert('Please select a future date and time for the appointment.');
            return;
        }

        // TODO: Here you would normally send the data to a server
        // For demo purposes, we'll just log to the console
        console.log('Form submitted with:', { patientName, email, department, doctor, date, time });

        // Show a confirmation message or reset the form
        alert('Your appointment is booked!');
        form.reset(); // Reset the form fields
    });
});
