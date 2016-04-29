var ctx = document.getElementById("chart1").getContext("2d");

$(document).ready(function() {
    var canvas = document.getElementById("chart1");
    canvas.width = $("#chart1-parent").width();
});

var gradient = ctx.createLinearGradient(0, 0, 0, 400);

gradient.addColorStop(0, "rgba(33, 150, 243, 0.9)");
gradient.addColorStop(0.2, "rgba(33, 150, 243, 0.5)");
gradient.addColorStop(1, "rgba(33, 150, 243, 0.1)");

var chart1 = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        
        datasets: [{
            label: "Votes",
            data: [
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1)
            ],
            backgroundColor: gradient,
            pointBackgroundColor: "#ffffff"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: false,
                    padding: 0
                }
            }],
            xAxes: [{
                display: false
            }]
        }
    }
});