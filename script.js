// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");


//Start Slider Code

var bar1, slider1;
var bar2, slider2;
var set_perc1=.20;
var set_perc2=.50;
var set_perc3=.40;
var set_perc4=.30;
var set_perc5=.30;
var set_perc6=.55;
var set_perc7=.60;

canvas_width=400;
canvas_height=200;

var myAngle=360;
var lineDistance=1;
var angleChange=360;
var myIterations=36;
var myCompletionAngle=360;

var myGCode = new Array();


function init(){
	
	bar1 = document.getElementById('bar1');
	slider1 = document.getElementById('slider1');
	info1 = document.getElementById('info1');
	bar1.addEventListener('mousedown', startSlide1, false);	
	bar1.addEventListener('mouseup', stopSlide1, false);

	bar2 = document.getElementById('bar2');
	slider2 = document.getElementById('slider2');
	info2 = document.getElementById('info2');
	bar2.addEventListener('mousedown', startSlide2, false);	
	bar2.addEventListener('mouseup', stopSlide2, false);

	bar3 = document.getElementById('bar3');
	slider3 = document.getElementById('slider3');
	info3 = document.getElementById('info3');
	bar3.addEventListener('mousedown', startSlide3, false);	
	bar3.addEventListener('mouseup', stopSlide3, false);

	bar4 = document.getElementById('bar4');
	slider4 = document.getElementById('slider4');
	info4 = document.getElementById('info4');
	bar4.addEventListener('mousedown', startSlide4, false);	
	bar4.addEventListener('mouseup', stopSlide4, false);

	bar5 = document.getElementById('bar5');
	slider5 = document.getElementById('slider5');
	info5 = document.getElementById('info5');
	bar5.addEventListener('mousedown', startSlide5, false);	
	bar5.addEventListener('mouseup', stopSlide5, false);

	bar6 = document.getElementById('bar6');
	slider6 = document.getElementById('slider6');
	info6 = document.getElementById('info6');
	bar6.addEventListener('mousedown', startSlide6, false);	
	bar6.addEventListener('mouseup', stopSlide6, false);

	bar7 = document.getElementById('bar7');
	slider7 = document.getElementById('slider7');
	info7 = document.getElementById('info7');
	bar7.addEventListener('mousedown', startSlide7, false);	
	bar7.addEventListener('mouseup', stopSlide7, false);

	slider1.style.width = (set_perc1 * 100) + '%';
	slider2.style.width = (set_perc1 * 100) + '%';
	slider3.style.width = (set_perc1 * 100) + '%';
	slider4.style.width = (set_perc1 * 100) + '%';
	slider5.style.width = (set_perc1 * 100) + '%';
	slider6.style.width = (set_perc1 * 100) + '%';
	slider7.style.width = (set_perc1 * 100) + '%';	
	
	
	context.strokeStyle="#ffcc00";
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
	
}


//Inital Slider Event

function defaultSlider(){
	
	
}


//Start Slide Events

function startSlide1(event){
	set_perc1 = ((((event.clientX - bar1.offsetLeft) / bar1.offsetWidth)).toFixed(2));
	info1.innerHTML = 'start 1' + set_perc1 + '%';	
	bar1.addEventListener('mousemove', moveSlide1, false);	
	slider1.style.width = (set_perc1 * 100) + '%';	
}

function startSlide2(event){
	set_perc2 = ((((event.clientX - bar2.offsetLeft) / bar2.offsetWidth)).toFixed(2));
	info2.innerHTML = 'start 2' + set_perc2 + '%';	
	bar2.addEventListener('mousemove', moveSlide2, false);	
	slider2.style.width = (set_perc2 * 100) + '%';	
}

function startSlide3(event){
	set_perc3 = ((((event.clientX - bar3.offsetLeft) / bar3.offsetWidth)).toFixed(2));
	info3.innerHTML = 'start 3' + set_perc3 + '%';	
	bar3.addEventListener('mousemove', moveSlide3, false);	
	slider3.style.width = (set_perc3 * 100) + '%';	
}


function startSlide4(event){
	set_perc4 = ((((event.clientX - bar4.offsetLeft) / bar4.offsetWidth)).toFixed(2));
	info4.innerHTML = 'start 4' + set_perc4 + '%';	
	bar4.addEventListener('mousemove', moveSlide4, false);	
	slider4.style.width = (set_perc4 * 100) + '%';	
}

function startSlide5(event){
	set_perc5 = ((((event.clientX - bar5.offsetLeft) / bar5.offsetWidth)).toFixed(2));
	info5.innerHTML = 'start 5' + set_perc5 + '%';	
	bar5.addEventListener('mousemove', moveSlide5, false);	
	slider5.style.width = (set_perc5 * 100) + '%';	
}


function startSlide6(event){
	set_perc6 = ((((event.clientX - bar6.offsetLeft) / bar6.offsetWidth)).toFixed(2));
	info6.innerHTML = 'start 6' + set_perc6 + '%';	
	bar6.addEventListener('mousemove', moveSlide6, false);	
	slider6.style.width = (set_perc6 * 100) + '%';	
}


function startSlide7(event){
	set_perc7 = ((((event.clientX - bar7.offsetLeft) / bar7.offsetWidth)).toFixed(2));
	info7.innerHTML = 'start 7' + set_perc7 + '%';	
	bar7.addEventListener('mousemove', moveSlide7, false);	
	slider7.style.width = (set_perc7 * 100) + '%';	
}



//MoveSlide Events

function moveSlide1(event){
	set_perc1 = ((((event.clientX - bar1.offsetLeft) / bar1.offsetWidth)).toFixed(2));
	info1.innerHTML = 'moving 1: ' + set_perc1 + '%';
	slider1.style.width = (set_perc1 * 100) + '%';
}

function moveSlide2(event){
	set_perc2 = ((((event.clientX - bar2.offsetLeft) / bar2.offsetWidth)).toFixed(2));
	info2.innerHTML = 'moving 2: ' + set_perc2 + '%';
	slider2.style.width = (set_perc2 * 100) + '%';
}

function moveSlide3(event){
	set_perc3 = ((((event.clientX - bar3.offsetLeft) / bar3.offsetWidth)).toFixed(2));
	info3.innerHTML = 'moving 3: ' + set_perc3 + '%';
	slider3.style.width = (set_perc3 * 100) + '%';
}

function moveSlide4(event){
	set_perc4 = ((((event.clientX - bar4.offsetLeft) / bar4.offsetWidth)).toFixed(2));
	info4.innerHTML = 'moving 4: ' + set_perc4 + '%';
	slider4.style.width = (set_perc4 * 100) + '%';
}


function moveSlide5(event){
	set_perc5 = ((((event.clientX - bar5.offsetLeft) / bar5.offsetWidth)).toFixed(2));
	info5.innerHTML = 'moving 5: ' + set_perc5 + '%';
	slider5.style.width = (set_perc5 * 100) + '%';
}


function moveSlide6(event){
	set_perc6 = ((((event.clientX - bar6.offsetLeft) / bar6.offsetWidth)).toFixed(2));
	info6.innerHTML = 'moving 6: ' + set_perc6 + '%';
	slider6.style.width = (set_perc6 * 100) + '%';
}


function moveSlide7(event){
	set_perc7 = ((((event.clientX - bar7.offsetLeft) / bar7.offsetWidth)).toFixed(2));
	info7.innerHTML = 'moving 7: ' + set_perc7 + '%';
	slider7.style.width = (set_perc7 * 100) + '%';
}





//StopSlide Events

function stopSlide1(event){
	set_perc1 = ((((event.clientX - bar1.offsetLeft) / bar1.offsetWidth)).toFixed(2));
	
	info1.innerHTML = 'X Axis' + Math.round(set_perc1*canvas_width);
	
	bar1.removeEventListener('mousemove', moveSlide1, false);

	slider1.style.width = (set_perc1 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide2(event){
	set_perc2 = ((((event.clientX - bar2.offsetLeft) / bar2.offsetWidth)).toFixed(2));
	
	info2.innerHTML = 'Y Axis ' + Math.round(set_perc2*canvas_height);
	
	bar2.removeEventListener('mousemove', moveSlide2, false);

	slider2.style.width = (set_perc2 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide3(event){
	set_perc3 = ((((event.clientX - bar3.offsetLeft) / bar3.offsetWidth)).toFixed(2));
	
	info3.innerHTML = 'Angle Start ' + Math.round(set_perc3*100);
	
	bar3.removeEventListener('mousemove', moveSlide3, false);

	slider3.style.width = (set_perc3 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide4(event){
	set_perc4 = ((((event.clientX - bar4.offsetLeft) / bar4.offsetWidth)).toFixed(2));
	
	info4.innerHTML = 'Size ' + Math.round(set_perc4*100);
	
	bar4.removeEventListener('mousemove', moveSlide4, false);

	slider4.style.width = (set_perc4 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide5(event){
	set_perc5 = ((((event.clientX - bar5.offsetLeft) / bar5.offsetWidth)).toFixed(2));
	
	info5.innerHTML = 'Angle 1 ' + Math.round(set_perc5*360);
	
	bar5.removeEventListener('mousemove', moveSlide5, false);

	slider5.style.width = (set_perc5 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide6(event){
	set_perc6 = ((((event.clientX - bar6.offsetLeft) / bar6.offsetWidth)).toFixed(2));
	
	info6.innerHTML = 'Iterations ' + Math.round(set_perc6*36);
	
	bar6.removeEventListener('mousemove', moveSlide6, false);

	slider6.style.width = (set_perc6 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}


function stopSlide7(event){
	set_perc7 = ((((event.clientX - bar7.offsetLeft) / bar7.offsetWidth)).toFixed(2));
	
	info7.innerHTML = 'Clip Angle ' + Math.round(set_perc7*360);
	
	bar7.removeEventListener('mousemove', moveSlide7, false);

	slider7.style.width = (set_perc7 * 100);
	
	draw(canvas_width*set_perc1,canvas_height*set_perc2,myAngle*set_perc3,lineDistance*set_perc4,angleChange*set_perc5,myIterations*set_perc6,myCompletionAngle*set_perc7);
}







//End Slider Code

function draw(startX,startY,myAngle,lineDistance,angleChange,myIterations,myCompletionAngle){

	context.clearRect(0, 0, a_canvas.width, a_canvas.height);
	context.beginPath();
	context.moveTo(startX,startY);


	var newX=0;
	var newY=0;
	for (var j=0; j < myIterations; j++) {
   	 myAngle = myAngle+angleChange;
    		
        	for (var i = 0; i < myCompletionAngle; i++) {
		 context.gobalAlpha = 0.1;
           	 context.lineTo(startX+lineDistance*(Math.cos(Math.PI*(myAngle+i)/180)),(startY+lineDistance*(Math.sin(Math.PI*	(myAngle+i)/180))));
           	
			
		startX = (startX+lineDistance*(Math.cos(Math.PI*(myAngle+i)/180)));

            	startY = (startY+lineDistance*(Math.sin(Math.PI*(myAngle+i)/180)));
				

		myGCode.push("G00 X" + Math.round(startX*100)/100 + " Y" + (Math.round(startY*100)/100)+ ";");

		
      	 }
	}
	context.gobalAlpha = 0.1;
	context.lineWidth = 2;
	context.stroke();
	
	context.strokeStyle="#ffcc00";

}

function generateGCode() {

	var preCode = ["G21;", "M107;"];
    var finalCode = preCode.concat(myGCode).join("\n");
	download('Your_New_Spiral.txt', finalCode);
}


function download(filename, text) {
    debugger;
    var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text);
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
