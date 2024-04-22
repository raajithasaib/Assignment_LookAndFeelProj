// appointmentsChart.js
document.addEventListener('DOMContentLoaded', function () {
    var ctx1 = document.getElementById('appointmentsPerDoctor').getContext('2d');
    var barChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
            datasets: [{
                label: 'Appointments',
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    });

    var ctx2 = document.getElementById('appointmentsOverTime').getContext('2d');
    var lineChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [{
                label: 'Monthly Appointments',
                data: [50, 60, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'blue'
            }]
        }
    });
});
