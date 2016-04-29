var ctx = document.getElementById("myChart").getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 400);

// Chart.defaults.global.responsive = true;
// Chart.defaults.global.defaultFontColor = "#757CA4";
// Chart.defaults.global.defaultFontFamily = "Montserrat";

// gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
// gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
// gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         datasets: [{
//             label: '# of Votes',
//             data: [4, 3, 3, 1, 6, 4, 4],
//             fillColor: gradient,
//             borderColor: '#2380CD',
//             // backgroundColor: 'rgba(33, 150, 243, 0.1)',
//             // backgroundColor: gradient,
//             pointRadius: 5,
//             pointBorderWidth: 5,
//             pointHoverRadius: 20,
//             pointBackgroundColor: "#fff",
//             pointHoverBackgroundColor: "rgba(33, 150, 243, 0.3)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 5,
//             pointHitRadius: 100
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// Chart.defaults.global.animationEasing        = 'easeInOutQuad',
// Chart.defaults.global.responsive             = true;
// Chart.defaults.global.scaleOverride          = true;
// Chart.defaults.global.scaleShowLabels        = false;
// Chart.defaults.global.scaleSteps             = 10;
// Chart.defaults.global.scaleStepWidth         = 10;
// Chart.defaults.global.scaleStartValue        = 0;
// Chart.defaults.global.tooltipFontFamily      = 'Open Sans';
// Chart.defaults.global.tooltipFillColor       = '#FFFFFF';
// Chart.defaults.global.tooltipFontColor       = '#6E6E6E';
// Chart.defaults.global.tooltipCaretSize       = 0;
// Chart.defaults.global.maintainAspectRatio    = true;

// Chart.defaults.Line.scaleShowHorizontalLines = false;
// Chart.defaults.Line.scaleShowHorizontalLines = false;
// Chart.defaults.Line.scaleGridLineColor       = '#55505C';
// Chart.defaults.Line.scaleLineColor           = '#55505C';

// var chart = document.getElementById('myChart').getContext('2d'),
//     gradient = chart.createLinearGradient(0, 0, 0, 400);

// var data  = {
//     type: 'line',
//     labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June' ],

//     datasets: [
//         {
//           label: 'Custom Label Name',
//           fillColor: gradient,
//           strokeColor: '#FC2525',
//           pointColor: 'white',
//           pointStrokeColor: 'rgba(220,220,220,1)',
//           pointHighlightFill: '#fff',
//           pointHighlightStroke: 'rgba(220,220,220,1)',
//           data: [65, 59, 80, 81, 56, 55]
//         }
//     ]
// };

// gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
// gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
// gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

// var chart = new Chart(chart, data);