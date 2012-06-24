var canvas,ctx;
$(document).on("ready",startApp);

function startApp()
{
	canvas = document.getElementById('miCanvas');
	canvas.width = screen.availWidth;
	canvas.height = screen.availHeight;
	ctx = canvas.getContext('2d');
	$('#contenido').css({
		'margin-top':(screen.availHeight - $('#contenido').height())/2
	});
	$('html').on('mousemove',moveFocus);
}

function moveFocus(e)
{
	canvas.width = canvas.width;
	ctx.fillStyle='rgb(0,0,0)';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	var mX = e.screenX;
	var mY = e.screenY;
	ctx.clearRect(mX-300,mY-300,600,600);
	ctx.arc(mX,mY,350,0,7);
	ctx.lineWidth = 200;
	ctx.stroke();
	ctx.fillStyle = 'rgba(0,0,0,0.7)';
	ctx.arc(mX,mY,350,0,7);
	ctx.fill();
	var cX = -(canvas.width/2 - mX);
	var cY = -(canvas.height/2 - mY);
	cX = -(cX/20);
	cY = (cY/5);
	$('body').css({
		'text-shadow':cX+"px "+cY+"px 5px rgba(0,0,0,1)"
	});
	$('a, input').css({
		'box-shadow':cX+"px "+cY+"px 5px rgba(0,0,0,1)"
	});
}