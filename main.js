window.onload = function(){
	var canvas = document.getElementById("road");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 50;

	ctx.strokeRect(0, 0, canvas.width , canvas.height);
	ctx.moveTo(0, 100);
	ctx.lineTo(canvas.width, 100);
	ctx.lineTo(canvas.width, 500);
	ctx.lineTo(0, 500);
	ctx.stroke();

	ctx.moveTo(200, 0);
	ctx.lineTo(200, canvas.height);
	ctx.lineTo(1000, canvas.height);
	ctx.lineTo(1000, 0);
	ctx.stroke();

	ctx.strokeRect(400, 200, 400, 200);

	ctx.moveTo(600, 100);
	ctx.lineTo(600, 200);
	ctx.stroke();

	ctx.moveTo(600, 400);
	ctx.lineTo(600, 500);
	ctx.stroke();

	ctx.moveTo(200, 300);
	ctx.lineTo(400, 300);
	ctx.stroke();

	ctx.moveTo(800, 300);
	ctx.lineTo(1000, 300);
	ctx.stroke();

	car = document.getElementById("car");
	var hPos =  parseInt($("#car").css('left'));
	var vPos = parseInt($('#car').css('top'));
	var intervalId = setInterval(callMoveCar, 100);

	car1 = document.getElementById("car1");
	var hPos =  parseInt($("#car1").css('left'));
	var vPos= parseInt($('#car1').css('top'));
	var intervalId = setInterval(callMoveCar, 100);
	async function callMoveCar(){
		moveCar();
	}
	async function moveCar(){
	 	if((hPos == 25 || hPos < 225) && vPos == 25){
	 		hPos+=20;
	 		car.style.width = 15 + 'px';
	 		car.style.height = 10 + 'px';
	 		car.style.left = hPos + 'px';
	 		
	 	}else if(hPos == 225 && (vPos == 25 || vPos < 125)){
	 		vPos+=10;
	 		car.style.width = 10 + 'px';
	 		car.style.height = 15 + 'px';
	 		car.style.top = vPos + 'px';
	 		
	 	}else if((hPos == 225 || hPos > 25) && vPos == 125){
	 		hPos-=20;
	 		car.style.width = 15 + 'px';
	 		car.style.height = 10 + 'px';
	 		car.style.left = hPos + 'px';
	 		
	 	}else if(hPos == 25 && (vPos == 125 || vPos > 25)){
	 		vPos-=10;
	 		car.style.width = 10 + 'px';
	 		car.style.height = 15 + 'px';
	 		car.style.top = vPos + 'px';
	 		
	 	}
	 }

}