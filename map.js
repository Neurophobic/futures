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



//exponential

var defs = svg.append('svg:defs');

defs.append("svg:pattern")
    .attr("id", "expo_pic")
    .attr("width", 200)
    .attr("height", 200)
    .attr("patternUnits", "userSpaceOnUse")
    .append("svg:image")
    .attr("xlink:href", 'http://placekitten.com/g/200/200')
    .attr("width", 200)
    .attr("height", 200)
    .attr("x", 0)
    .attr("y", 0);


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

expoGroup1.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"green"
});

// expoGroup1.transition().attr("transform", "rotate("+(360/8)*1+", "+centerX+","+centerY+")");
var xRot = centerX + ((exponentialCircleR) * Math.sin(180));
var yRot = centerY - ((exponentialCircleR) * Math.cos(180));

expoGroup1.transition().attr("transform", "translate("+xRot+","+yRot+")");


var expoBubble1 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 


var expoBubble2 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble3 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble4 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble5 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble6 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble7 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
}); 

var expoBubble8 = svg.append("circle").attr({
    cx: expoBubbleOriginX,
    cy: expoBubbleOriginY,
    r: linearBubbleR,
    fill:"black"
})

.on("click", function(){
    console.log("click");
    if(!expoOpen){
          expoBubble1.transition().attr("transform", "rotate("+(360/8)*1+", "+centerX+","+centerY+")");
expoBubble2.transition(t).attr("transform", "rotate("+(360/8)*2+", "+centerX+","+centerY+")")

expoBubble3.transition(t).attr("transform", "rotate("+(360/8)*3+", "+centerX+","+centerY+")");
expoBubble4.transition(t).attr("transform", "rotate("+(360/8)*4+", "+centerX+","+centerY+")");
expoBubble5.transition(t).attr("transform", "rotate("+(360/8)*5+", "+centerX+","+centerY+")");
expoBubble6.transition(t).attr("transform", "rotate("+(360/8)*6+", "+centerX+","+centerY+")");
expoBubble7.transition(t).attr("transform", "rotate("+(360/8)*7+", "+centerX+","+centerY+")");
expoBubble8.transition(t).attr("transform", "rotate("+(360/8)*8+", "+centerX+","+centerY+")");  
expoOpen = true;
} else{
        expoBubble1.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble2.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble3.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble4.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble5.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble6.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble7.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");
expoBubble8.transition().attr("transform", "rotate("+360+", "+centerX+","+centerY+")");  
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