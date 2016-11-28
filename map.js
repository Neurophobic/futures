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
var expoBubbleR = 100;

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

function getLinearRot(div, place){
    var xRot = centerX + ((linearCircleR) * Math.sin(toRadians((360/div)*place)));
    var yRot = centerY - ((linearCircleR) * Math.cos(toRadians((360/div)*place)));
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

var centerCircle = svg.append("circle").attr({
    cx:centerX,
    cy:centerY,
    r:linearCircleR/2,
    fill:"white"
})

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
    r:expoBubbleR,
    fill:"white"
});

expoGroup2.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});

expoGroup3.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});

expoGroup4.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});

expoGroup5.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});

expoGroup6.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});

expoGroup7.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});



expoGroup1.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg")
.on("mouseover", function(){
    return expoInfoGroup1.style("visibility", "visible"), expoClip1.style("visibility", "visible");
})
.on("mouseout", function(){
    return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden");
});

expoGroup2.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg")
.on("mouseover", function(){
    return expoInfoGroup2.style("visibility", "visible"), expoClip2.style("visibility", "visible");
})
.on("mouseout", function(){
    return expoInfoGroup2.style("visibility", "hidden"), expoClip2.style("visibility", "hidden");
});

expoGroup3.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoGroup4.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoGroup5.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoGroup6.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoGroup7.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
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

var linearGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");

var linearGroup2 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");

var linearGroup3 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");

var linearGroup4 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");


linearGroup1.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"#fafafa"
});

linearGroup2.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"#fafafa"
});

linearGroup3.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"#fafafa"
});

linearGroup4.append("circle").attr({
    cx:0,
    cy:0,
    r:linearBubbleR,
    fill:"#fafafa"
});

linearGroup1.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

linearGroup2.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

linearGroup3.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

linearGroup4.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width", 180)
.attr("height", 180)
.attr("xlink:href", "img/scope.svg");

linearGroup1.transition(t).attr("transform", "translate("+getLinearRot(4, 1)+")");
linearGroup2.transition(t).attr("transform", "translate("+getLinearRot(4, 2)+")");
linearGroup3.transition(t).attr("transform", "translate("+getLinearRot(4, 3)+")");
linearGroup4.transition(t).attr("transform", "translate("+getLinearRot(4, 4)+")");


var expoInfoLocked = false;
var expoInfoGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + centerX + ", " + centerY + ")")
        .style("visibility", "hidden");

expoInfoGroup1
.append("circle").attr({
    cx:0,
    cy:0,
    r:exponentialCircleR+expoBubbleR,
    fill:"black"
});

var expoClip1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")")


var expoClipCircle1 = expoClip1.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white",
    "stroke-width":"7px"
});


expoClip1.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoClip1.attr("transform", "translate("+getExpoRot(8, 1)+")").style("visibility", "hidden");

expoClip1.on("mouseover", function(){
    if(expoInfoLocked){
        return;
    } else{
       return expoInfoGroup1.style("visibility", "visible"), expoClip1.style("visibility", "visible"); 
    }
    
})
.on("mouseout", function(){
    if(expoInfoLocked){
        return;
    } else{
        return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden");
    }
});

expoClip1.on("click", function(){
    console.log("clicked");
     if(!expoInfoLocked){
        expoInfoLocked = true;
        return expoInfoGroup1.style("visibility", "visible"), expoClip1.style("visibility", "visible"),expoClipCircle1.attr("stroke", "black"); 
    } else{
        expoInfoLocked = false;
        return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden"),expoClipCircle1.attr("stroke", "none");
    }
})




var expoInfoGroup2 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + centerX + ", " + centerY + ")")
        .style("visibility", "hidden");

expoInfoGroup2
.append("circle").attr({
    cx:0,
    cy:0,
    r:exponentialCircleR+2,
    fill:"black"
});

var expoInfoTitle1 = expoInfoGroup1
.append("text")
.attr("class","expoInfoTitle")
.attr("x", -exponentialCircleR/1.5)
.attr("y", -exponentialCircleR/1.5)
.text(function(){
    return "Title";
});
    
expoInfoGroup1.append("foreignObject") 
    .attr("width", 480) 
    .attr("height", 500)
    .attr("x", -exponentialCircleR/1.5)
    .attr("y", -exponentialCircleR/1.5+50)
    .append("xhtml:div") 
    .attr("class","expoInfoText")
    .html('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla euismod consequat. Nam rutrum rutrum enim. Cras lacinia dolor id augue sagittis, in faucibus lectus mattis. Morbi vitae nisi nulla. Proin fermentum massa at tellus interdum cursus. Cras ullamcorper egestas dolor, nec euismod massa sollicitudin sed. Duis vitae pulvinar metus. Integer vehicula egestas enim, a mollis odio ultricies in.');
// var expoInfoText1 = expoInfoGroup1
// .append("text")
// .attr("class","expoInfoText")
// .attr("x", -exponentialCircleR/1.5)
// .attr("y", -exponentialCircleR/1.5+50)
// .text(function(){
//     return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla euismod consequat. Nam rutrum rutrum enim. Cras lacinia dolor id augue sagittis, in faucibus lectus mattis. Morbi vitae nisi nulla. Proin fermentum massa at tellus interdum cursus. Cras ullamcorper egestas dolor, nec euismod massa sollicitudin sed. Duis vitae pulvinar metus. Integer vehicula egestas enim, a mollis odio ultricies in.";
// });

var expoClip2 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")")


expoClip2.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"white"
});


expoClip2.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/scope.svg");

expoClip2.attr("transform", "translate("+getExpoRot(8, 2)+")").style("visibility", "hidden");

expoClip2.on("mouseover", function(){
    return expoInfoGroup2.style("visibility", "visible"), expoClip2.style("visibility", "visible");
})
.on("mouseout", function(){
    return expoInfoGroup2.style("visibility", "hidden"), expoClip2.style("visibility", "hidden");
});


