function toGreyScale(r, g, b) {
    return r * 0.2989 + g * 0.5870 + b * 0.1140;
}

function editImage(img, targetDiv) {
    var id = "editeImage", canvasContainer = document.getElementById(targetDiv), 
	    imgCanvas, ctx, imageData, px, len, i, redPx, greenPx, bluePx, greyscale;

	imgCanvas = document.createElement("canvas");
	imgCanvas.id = id;
	imgCanvas.width = img.width;
	imgCanvas.height = img.height;
			
    canvasContainer.appendChild(imgCanvas);
	
	imgCanvas = document.getElementById(id);
	ctx = imgCanvas.getContext("2d");
	
	ctx.drawImage(img, 0, 0);
	
	imageData = ctx.getImageData(0, 0, img.width, img.height); 
	px = imageData.data; 
	len = px.length;
	
	for (i = 0; i < len; i += 4) {
	    redPx = px[i];
	    greenPx = px[i + 1];
	    bluePx = px[i + 2];
	  
	    greyscale =  toGreyScale(redPx, greenPx, bluePx);
	  
	    px[i] = greyscale;
	    px[i + 1] = greyscale;
	    px[i + 2] = greyscale;
    }
				   
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.putImageData(imageData, 0, 0);
}