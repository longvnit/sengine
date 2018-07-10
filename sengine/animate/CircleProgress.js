class CircleProgress {
	constructor(x, y, radius, lineWidth, color, start, end, duration) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.lineWidth = lineWidth;
		this.color = color;
		this.start = start;
		this.end = end;
		this.duration = duration;
		this.percent = 0;
		this.isPlaying = true;
		this.forever = false;
	}

	addDisplay(display) {
		this.display = display;
		this.context = this.display.getContext();
	}

	drawRec() {
		// start 0 is Math.PI / - 2
		// end 360 = Math.PI / - 2
		// percent = (2 * Math.PI * percent / 100) + (Math.PI / - 2)

		//console.log(this);
		if(this.isPlaying === true && this.percent < this.end) {
			//console.log('xxx' + this);
			let start = 0;

			if(this.start == 0) {
				start = Math.PI / - 2;
			} else {
				start = this.start;
			}

			this.context.beginPath();

			if(this.lineWidth !== undefined) {
				this.context.lineWidth = this.lineWidth;
			}

			if(this.color !== undefined) {
				this.context.strokeStyle = this.color;
			}

			this.percent = this.percent + (1 / (this.display.getFPS() * this.duration)) * 100;

			let currentPoint = (2 * Math.PI * this.percent / 100) + (Math.PI / - 2);
			//console.log(this.display.getFPS());
			//console.log(currentPoint);

			this.context.arc(this.x, this.y, this.radius, start, currentPoint, false);

			this.context.stroke();
		}

		if(this.forever === true && this.percent > this.end) {
			this.percent = 0;
		}
	}
}

module.exports = CircleProgress;