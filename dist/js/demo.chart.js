var ctx = document.getElementById("myChart");

Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = "#757CA4";
Chart.defaults.global.defaultFontFamily = "Montserrat";

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: '# of Votes',
            data: [4, 3, 3, 1, 6, 4, 4],
            borderColor: '#2380CD',
            backgroundColor: 'rgba(33, 150, 243, 0.1)',
            pointRadius: 5,
            pointBorderWidth: 5,
            pointHoverRadius: 20,
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "rgba(33, 150, 243, 0.3)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 5,
            pointHitRadius: 100
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});