// Line Chart Initialization
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'], // Dates for the x-axis
        datasets: [
            {
                label: 'This month',
                data: [6, 7, 5, 8, 7, 6, 7], // Sample data
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 1,
                // fill: true,
                tension: 0.4,
            },
            {
                label: 'Last month',
                data: [5, 6, 6, 7, 5, 4, 5],
                borderColor: '#ffa500',
                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                borderWidth: 1,
                // fill: true,
                tension: 0.4,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: { display: false }, // Remove gridlines
            },
            y: {
                beginAtZero: true,
                ticks: { 
                    stepSize: 2, 
                    callback: function(value) {
                        return value + 'h';
                    },
                },
            },
        },
    },
});