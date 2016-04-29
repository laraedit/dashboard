var ctx = document.getElementById("chart2").getContext("2d");

var chart2 = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        
        datasets: [{
            label: "Views",
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
