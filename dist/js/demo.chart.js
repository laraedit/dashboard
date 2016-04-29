var ctx = document.getElementById("myChart").getContext("2d"),
    gradient = ctx.createLinearGradient(0, 0, 0, 400);

gradient.addColorStop(0, "rgba(33, 150, 243, 0.9)");
gradient.addColorStop(0.2, "rgba(33, 150, 243, 0.5)");
gradient.addColorStop(1, "rgba(33, 150, 243, 0.1)");

Chart.defaults.global.defaultColor = "#2380CD";
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = "#757CA4";
Chart.defaults.global.defaultFontFamily = "Montserrat";

Chart.defaults.global.elements.line.borderColor = "#2380CD";

Chart.defaults.global.elements.point.borderColor = "#2380CD";
Chart.defaults.global.elements.point.hoverRadius = 20;
Chart.defaults.global.elements.point.radius = 10;
Chart.defaults.global.elements.point.borderWidth = 5;
Chart.defaults.global.elements.point.hoverBorderWidth = 5;
Chart.defaults.global.elements.point.hitRadius = 60;

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        
        datasets: [{
            label: "# of Votes",
            data: [40, 30, 30, 10, 60, 40, 40],
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
