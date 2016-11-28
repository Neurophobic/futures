var windowW = window.innerWidth;
var windowH = window.innerHeight;
var mapW = 2000;
var mapH = windowH;

var linearCircleR = mapH/5;
var exponentialCircleR = mapH/2 - 50;
var centerX = mapW/2;
var centerY = mapH/2;

var linearBubbleOriginX = centerX + ((linearCircleR) * Math.sin(0));
var linearBubbleOriginY  = centerY - ((linearCircleR) * Math.cos(0));
var linearBubbleR = 90;


var expoBubbleOriginX = centerX + ((exponentialCircleR) * Math.sin(0));
var expoBubbleOriginY  = centerY - ((exponentialCircleR) * Math.cos(0));
var expoBubbleR = 90;

var expoOpen = false;

var t = d3.transition()
    .duration(1000);


 var body = d3.select("#map");


 var scaler = 0.5;
var zoomWidth = (mapW-scaler*mapW)/2
var zoomHeight = (windowH-scaler*windowH)/2

   var svg = body
   .append("svg")
   .attr("class","thesvg")
   .attr("width", 2000)
   .attr("height", windowH-72)

    .call(d3.behavior.zoom().on("zoom", function () {
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
  }))
  .append("g");


 var container = svg.append("g");

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function getExpoRot(div, place){
    var xRot = centerX + ((exponentialCircleR) * Math.sin(toRadians((360/div)*place)));
    var yRot = centerY - ((exponentialCircleR) * Math.cos(toRadians((360/div)*place)));
    var res = xRot +","+ yRot;

    return res;
}



var line1 = svg.append("line")          
    .style("stroke", "black")  
    .attr("x1", centerX)     
    .attr("y1", centerY)      
    .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians(360/8))))     
    .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians(360/8))));

var line2 = svg.append("line")          
    .style("stroke", "black")  
    .attr("x1", centerX)     
    .attr("y1", centerY)      
    .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*3))))     
    .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*3))));

var line3 = svg.append("line")          
    .style("stroke", "black")  
    .attr("x1", centerX)     
    .attr("y1", centerY)      
    .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*5))))     
    .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*5))));

var line5 = svg.append("line")          
    .style("stroke", "black")  
    .attr("x1", centerX)     
    .attr("y1", centerY)      
    .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*7))))     
    .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*7))));   

//exponential






var exponentialCircle = svg.append("circle").attr({
    cx: centerX,
    cy: centerY,
    r: exponentialCircleR,
    fill: "none",
    stroke: "black"
})
.style("stroke-dasharray", ("5, 5"));

var expoGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup2 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup3 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup4 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup5 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup6 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

var expoGroup7 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");



expoGroup1.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup2.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup3.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup4.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup5.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup6.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});

expoGroup7.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"white"
});



expoGroup1.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup2.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup3.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup4.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup5.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup6.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

expoGroup7.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");





var expoBubble8 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
})

.on("click", function(){
    console.log("click");
    if(!expoOpen){
expoGroup1.transition(t).attr("transform", "translate("+getExpoRot(8, 1)+")");
expoGroup2.transition(t).attr("transform", "translate("+getExpoRot(8, 2)+")");
expoGroup3.transition(t).attr("transform", "translate("+getExpoRot(8, 3)+")");
expoGroup4.transition(t).attr("transform", "translate("+getExpoRot(8, 4)+")");
expoGroup5.transition(t).attr("transform", "translate("+getExpoRot(8, 5)+")");
expoGroup6.transition(t).attr("transform", "translate("+getExpoRot(8, 6)+")");
expoGroup7.transition(t).attr("transform", "translate("+getExpoRot(8, 7)+")");



 

expoOpen = true;
} else{
    expoGroup1.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup2.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup3.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup4.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup5.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup6.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");
    expoGroup7.transition().attr("transform", "translate("+expoBubbleOriginX+","+expoBubbleOriginY+")");


 
expoOpen = false;
}

}); 







//linear
var linearCircle = svg.append("circle").attr({
    cx: centerX,
    cy: centerY,
    r: linearCircleR,
    fill: "none",
    stroke: "black"
})
.style("stroke-dasharray", ("5, 5"));

var linearBubble1 = svg.append("circle").attr({
    cx: linearBubbleOriginX,
    cy: linearBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var linearBubble2 = svg.append("circle").attr({
    cx: linearBubbleOriginX,
    cy: linearBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var linearBubble3 = svg.append("circle").attr({
    cx: linearBubbleOriginX,
    cy: linearBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var linearBubble4 = svg.append("circle").attr({
    cx: linearBubbleOriginX,
    cy: linearBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 


linearBubble1.attr("transform", "rotate(90, "+centerX+","+centerY+")");

linearBubble2.attr("transform", "rotate(180, "+centerX+","+centerY+")");

linearBubble3.attr("transform", "rotate(270, "+centerX+","+centerY+")");