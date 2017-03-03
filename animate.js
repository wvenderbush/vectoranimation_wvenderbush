//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var svgspace = document.getElementById("svgcanvas");
var stopButton = document.getElementById( "stop" );
var growButton = document.getElementById( "grow" );
var bounceButton = document.getElementById( "bounce" );
var clearButton = document.getElementById( "clear" );



var requestID;


var clear = function(e) {
    console.log("cleared")
    while (svgspace.lastChild) {
        svgspace.removeChild(svgspace.lastChild);
    }
};


//wrapper function will allow inner function to keep track of
// its own complement of local variables (radius, xcor...)
var growDot = function() {
	
    window.cancelAnimationFrame( requestID );
	
    //console.log(requestID);

    //init params for drawing dot
    var radius = 1;
    var xcor = svgspace.width.animVal.value / 2;
    var ycor = svgspace.height.animVal.value / 2;

    console.log(xcor)

    var velocity = 1;

    
    


    var drawDot = function() {
        console.log(requestID)
	

	while (svgspace.lastChild) {
        svgspace.removeChild(svgspace.lastChild);
    }

    var element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    element.setAttribute("cx", xcor);
    element.setAttribute("cy", ycor);
    element.setAttribute("r", radius);
    element.setAttribute("fill", "red");
    element.setAttribute("stroke", "black");
    svgspace.appendChild(element);

	
    radius += velocity;
    if (radius == svgspace.width.animVal.value / 2){
        velocity = -1;
    }
    if (radius == 1){
        velocity = 1;
    }


	requestID = window.requestAnimationFrame( drawDot );
    };
    drawDot();
};

var bounceRect = function() {
    
    window.cancelAnimationFrame( requestID );
    
    //console.log(requestID);

    //init params for drawing dot
    var radius = 50;
    var dx = 2;
    var dy = 1;
    var xcor = svgspace.width.animVal.value / 2;
    var ycor = svgspace.height.animVal.value / 2;
    

    var drawRect = function() {
    console.log( requestID )

    while (svgspace.lastChild) {
        svgspace.removeChild(svgspace.lastChild);
    }

    var element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //element.setAttribute("xlink:href", "https://maxcdn.icons8.com/Share/icon/Computer_Hardware//dvd_logo1600.png");
    //element.setAttribute("viewBox", "0 0 100 100");
    element.setAttribute("width", 100);
    element.setAttribute("height", 75);
    element.setAttribute("x", xcor);
    element.setAttribute("y", ycor);
    element.setAttribute("fill", "red");
    element.setAttribute("stroke", "black");
    svgspace.appendChild(element);



    if( xcor<0 || xcor>(750 - 100)) dx=-dx; 
    if( ycor<0 || ycor>(750 - 75)) dy=-dy; 
    xcor+=dx; 
    ycor+=dy;

    requestID = window.requestAnimationFrame( drawRect );
    };
    drawRect();
};


var stopIt = function() {
    console.log("stop initiated")
    //console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


growButton.addEventListener( "click", growDot )

clearButton.addEventListener( "click", clear )

stopButton.addEventListener( "click",  stopIt );

bounceButton.addEventListener( "click", bounceRect );
