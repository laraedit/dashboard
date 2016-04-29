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
                    beginAtZero: true,
                    display: false
                }
            }]
        }
    }
});

window.onload = function onLoad() {

	var value1 = Math.floor((Math.random() * 100) + 1);
	var value2 = Math.floor((Math.random() * 100) + 1);
	var value3 = Math.floor((Math.random() * 100) + 1);

    var circle1 = new ProgressBar.Circle('#progress1', {
        color: '#2095F2',
        trailColor: '#4D5061',
        easing: 'easeInOut',
        strokeWidth: 4,
	  	trailWidth: 4,
	  	easing: 'easeInOut',
	  	duration: 1400,

	  	text: {
	    	autoStyleContainer: false
	  	},

  		from: { color: '#2095F2', width: 4 },
  		to: { color: '#2095F2', width: 4 },

  		step: function(state, circle) {
    		circle.path.setAttribute('stroke', state.color);
    		circle.path.setAttribute('stroke-width', state.width);
      		circle.setText(value1 + "%");
    	}
  	});

    circle1.animate(1);

    var circle2 = new ProgressBar.Circle('#progress2', {
        color: '#2095F2',
        trailColor: '#4D5061',
        easing: 'easeInOut',
        strokeWidth: 4,
	  	trailWidth: 4,
	  	easing: 'easeInOut',
	  	duration: 1400,

	  	text: {
	    	autoStyleContainer: false
	  	},

  		from: { color: '#2095F2', width: 4 },
  		to: { color: '#2095F2', width: 4 },

  		step: function(state, circle) {
    		circle.path.setAttribute('stroke', state.color);
    		circle.path.setAttribute('stroke-width', state.width);
      		circle.setText(value2 + "%");
      		// circle.path.value(value2);
    	}
  	});

    circle2.animate(1);

    var circle3 = new ProgressBar.Circle('#progress3', {
        color: '#2095F2',
        trailColor: '#4D5061',
        easing: 'easeInOut',
        strokeWidth: 4,
	  	trailWidth: 4,
	  	easing: 'easeInOut',
	  	duration: 1400,

	  	text: {
	    	autoStyleContainer: false
	  	},

  		from: { color: '#2095F2', width: 4 },
  		to: { color: '#2095F2', width: 4 },

  		step: function(state, circle) {
    		circle.path.setAttribute('stroke', state.color);
    		circle.path.setAttribute('stroke-width', state.width);
      		circle.setText(value3 + "%");
    	}
  	});

    circle3.animate(1);
};
//# sourceMappingURL=demo.chart.js.map
