
window.onload = function(){
	makeRoad();
	placeCar();
	var intervalId = setInterval(callMoveCar, 10);
	 function callMoveCar(){

		moveCar("car1");
		moveCar("car");
	}
}

function placeCar(){
	carPlace =document.getElementById("carSpace");
	let div = document.createElement('div');
	div.id ="car1"
	div.style.background = "#00ff00";
	div.style.position= "absolute";
	div.style.left = " 5px";
	div.style.top = "25px";
	div.style.width = " 15px";
	div.style.height = "10px";
	div.transition = " all 0.1s ease-in-out";
	document.body.appendChild(div);
}
function moveCar(name){
    car = document.getElementById(name);
    var hPos =  parseInt($("#"+name).css('left'));
    var vPos = parseInt($("#"+name).css('top'));
    if((hPos == 25 || hPos < 225) && vPos == 25){
        hPos+=1;
        car.style.width = 15 + 'px';
        car.style.height = 10 + 'px';
        car.style.left = hPos + 'px';

    }else if(hPos == 225 && (vPos == 25 || vPos < 125) ){
        //alert("hy")
        vPos+=1;
        car.style.width = 10 + 'px';
        car.style.height = 15 + 'px';
        car.style.top = vPos + 'px';

    }else if((hPos == 225 || hPos > 25) && vPos == 125){
        hPos-=1;
        car.style.width = 15 + 'px';
        car.style.height = 10 + 'px';
        car.style.left = hPos + 'px';

    }else if(hPos == 25 && (vPos >= 125 || vPos > 25)){
        vPos-=1;
        car.style.width = 10 + 'px';
        car.style.height = 15 + 'px';
        car.style.top = vPos + 'px';

    }
}
function onRoad(xCur,yCur){
    // If they are inside the rectangle or not
    if(xCur >= 3*x/8 && xCur <= x/4 && yCur >= 3*y/8 && yCur <= y/4){
        if(xCur <= 3*x/8+ctx.lineWidth || yCur <= 3*y/8+ctx.lineWidth || xCur >= x/4 - ctx.lineWidth || y >= y/4 - ctx.lineWidth){
            return true;
        }
    }
    if(xCur >= x/4 && xCur <= 3*x/4 && yCur >= y/4 && yCur <= 3*y/4) {
        if (xCur <= x / 4 + ctx.lineWidth || yCur <= y / 4 + ctx.lineWidth || xCur >= 3 * x / 4 - ctx.lineWidth || y >= 3 * y / 4 - ctx.lineWidth) {
            return true;
        }
    }
    if(xCur >=0 && xCur <= x && yCur >= 0 && yCur <= y){
        //Now they are inside the rectangle so whether they are on road or not
        if(xCur <= ctx.lineWidth || yCur <= ctx.lineWidth || xCur >= x - ctx.lineWidth || y >= y - ctx.lineWidth){
            return true;
        }
    }
    return false;
}
function makeRoad() {
    var canvas = document.getElementById("road");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 100;
    var x = canvas.width;
    var y = canvas.height;
    ctx.strokeRect(0, 0, x ,y );
    ctx.lineWidth = 50;
    ctx.moveTo(0, y/4);
    ctx.lineTo(canvas.width, y/4);
    ctx.lineTo(canvas.width, 3*y/4);
    ctx.lineTo(0, 3*y/4);
    ctx.stroke();

    ctx.moveTo(x/4, 0);
    ctx.lineTo(x/4, canvas.height);
    ctx.lineTo(3*x/4, canvas.height);
    ctx.lineTo(3*x/4, 0);
    ctx.stroke();

    ctx.strokeRect(3*x/8, 3*y/8, 2*x/8, 2*y/8);

    ctx.moveTo(x/2, y/4);
    ctx.lineTo(x/2, 3*y/8);
    ctx.stroke();

    ctx.moveTo(x/2, 5*y/8);
    ctx.lineTo(x/2, 3*y/4);
    ctx.stroke();


    ctx.moveTo(x/4, y/2);
    ctx.lineTo(3*x/8, y/2);
    ctx.stroke();

    ctx.moveTo(5*x/8, y/2);
    ctx.lineTo(3*x/4, y/2);
    ctx.stroke();
}
