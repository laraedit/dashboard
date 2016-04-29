var ctx = document.getElementById("chart1").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, 300);

gradient.addColorStop(0, "rgba(33, 150, 243, 0.9)");
gradient.addColorStop(0.2, "rgba(33, 150, 243, 0.5)");
gradient.addColorStop(1, "rgba(33, 150, 243, 0.1)");

var chart1 = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        
        datasets: [{
            label: "# of Votes",
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
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx = document.getElementById("chart2").getContext("2d");

var chart2 = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        
        datasets: [{
            label: "# of Votes",
            data: [
                Math.floor((Math.random() * 100) + 1), 
                Math.floor((Math.random() * 100) + 1), 
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1)
            ],
            backgroundColor: "#515465",
            hoverBackgroundColor: "rgba(33, 150, 243, 1.0)",
            pointBackgroundColor: "#ffffff"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//# sourceMappingURL=demo.chart.js.map
