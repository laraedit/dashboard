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