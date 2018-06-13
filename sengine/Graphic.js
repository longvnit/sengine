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

	drawRec(x, y, w, h, lineWidth, color) {
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

	drawFillRec(x, y, w, h, color) {
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
}

module.exports = Graphic;