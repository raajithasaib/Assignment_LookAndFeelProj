// appointmentFunctions.js

function findDoctors() {
    // Implement the logic to redirect to the page for finding doctors
    window.location.href = '@Url.Action("FindDoctors", "Appointment")'; // Replace with the appropriate MVC action and controller
}

function createAppointment() {
    // Implement the logic to redirect to the page for appointment creation
    window.location.href = '@Url.Action("CreateAppointment", "Appointment")'; // Replace with the appropriate MVC action and controller
}

function viewStatistics() {
    // Implement the logic to redirect to the page for viewing statistics
    window.location.href = '@Url.Action("ViewStatistics", "Appointment")'; // Replace with the appropriate MVC action and controller
}
