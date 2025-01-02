const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: '2021',
                data: [12000, 15000, 8000, 10000, 25000, 20000, 30000, 28000],
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            {
                label: '2022',
                data: [15000, 17000, 9000, 11000, 28000, 22000, 35000, 32000],
                backgroundColor: 'rgba(9, 3, 5, 0.44)',
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

// Doughnut Chart for "Analytics"
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Sales', 'Distribute', 'Returns'],
        datasets: [
            {
                data: [55.5, 33.5, 11],
                backgroundColor: [
                    'rgba(32, 34, 66, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 205, 86, 0.6)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});


