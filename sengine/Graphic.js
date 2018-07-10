class Graphic {
	
	constructor(display) {
		this.display = display;
		this.context = this.display.getContext();
	}

	drawLine(mX, mY, tX, tY, width, color) {
		this.context.beginPath();
		if(width !== undefined) {
			this.context.lineWidth = width;
		}

		if(color !== undefined) {
			this.context.strokeStyle = color;
		}

		this.context.moveTo(mX, mY);
		this.context.lineTo(tX, tY);

		this.context.stroke();
	}

	drawText(str, x, y, color, font) {
		if(color !== undefined) {
			this.context.fillStyle = font;
		}

		if(font !== undefined) {
			this.context.font = font;
		}

		this.context.fillText(str, x, y);
	}

	drawRect(x, y, w, h, lineWidth, color) {
		this.context.beginPath();
		if(lineWidth !== undefined) {
			this.context.lineWidth = lineWidth;
		}

		if(color !== undefined) {
			this.context.color = color;
		}

		this.context.rect(x, y, w, h);
		this.context.stroke();
	}

	drawFillRect(x, y, w, h, color) {
		if(color !== undefined) {
			this.context.fillStyle = color;
		}

		this.context.fillRect(x, y, w, h);
	}

	drawImage(src, x, y, w, h) {
		var img = new Image();
		img.src = src;
		this.context.drawImage(img, x, y, w, h);
	}

	drawRec(x, y, radius, start, end, lineWidth, color) {
		// start 0 is Math.PI / - 2
		// end 360 = Math.PI / - 2
		// percent = (2 * Math.PI * percent / 100) + (Math.PI / - 2)

		if(start === 0) {
			start = Math.PI / - 2;
		}

		this.context.beginPath();
		if(lineWidth !== undefined) {
			this.context.lineWidth = lineWidth;
		}

		if(color !== undefined) {
			this.context.color = color;
		}

		ctx.arc(x, y, radius, start, end, false);

		this.context.stroke();
	}
}

module.exports = Graphic;