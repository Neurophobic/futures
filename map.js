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
var linearBubbleR = 150;
var expoBubbleOriginX = centerX + ((exponentialCircleR) * Math.sin(0));
var expoBubbleOriginY  = centerY - ((exponentialCircleR) * Math.cos(0));
var expoBubbleR = 100;
var expoOpen = false;
var t = d3.transition()
    .duration(100);
var body = d3.select("#map");
var scaler = 0.5;
var zoomWidth = (mapW-scaler*mapW)/2
var zoomHeight = (windowH-scaler*windowH)/2

var svg = body
    .append("svg")
    .attr("class","thesvg")
    .attr("width", 2000)
    .attr("height", windowH)
    .call(d3.behavior.zoom().on("zoom", function () {
        svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
    }))
    .append("g");

var container = svg.append("g");

function toRadians (angle) {
  return angle * (Math.PI / 180);
};

function getExpoRot(div, place){
    var xRot = centerX + ((exponentialCircleR) * Math.sin(toRadians((360/div)*place)));
    var yRot = centerY - ((exponentialCircleR) * Math.cos(toRadians((360/div)*place)));
    var res = xRot +","+ yRot;

    return res;
};

function getLinearRot(div, place){
    var xRot = centerX + ((linearCircleR) * Math.sin(toRadians((360/div)*place)));
    var yRot = centerY - ((linearCircleR) * Math.cos(toRadians((360/div)*place)));
    var res = xRot +","+ yRot;

    return res;
};


// var line1 = svg.append("line")          
//     .style("stroke", "black")  
//     .attr("x1", centerX)     
//     .attr("y1", centerY)      
//     .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians(360/8))))     
//     .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians(360/8))));

// var line2 = svg.append("line")          
//     .style("stroke", "black")  
//     .attr("x1", centerX)     
//     .attr("y1", centerY)      
//     .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*3))))     
//     .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*3))));

// var line3 = svg.append("line")          
//     .style("stroke", "black")  
//     .attr("x1", centerX)     
//     .attr("y1", centerY)      
//     .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*5))))     
//     .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*5))));

// var line5 = svg.append("line")          
//     .style("stroke", "black")  
//     .attr("x1", centerX)     
//     .attr("y1", centerY)      
//     .attr("x2", centerX + ((exponentialCircleR+300) * Math.sin(toRadians((360/8)*7))))     
//     .attr("y2", centerY - ((exponentialCircleR+300) * Math.cos(toRadians((360/8)*7))));   

// var centerCircle = svg.append("circle").attr({
//     cx:centerX,
//     cy:centerY,
//     r:linearCircleR*1.5,
//     fill:"white"
// });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//exponential
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    fill:"#f0f0f0"
});

expoGroup2.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup3.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup4.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup5.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup6.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup7.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR,
    fill:"#f0f0f0"
});

expoGroup1.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story1.svg")
.on("mouseover", function(){
    return expoInfoGroup1.style("visibility", "visible"), expoClip1.style("visibility", "visible"), expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 2)+")");
})
.on("mouseout", function(){
    return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden"), expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")");
});

expoGroup2.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story2.svg");

expoGroup3.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story1.svg");

expoGroup4.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story2.svg");

expoGroup5.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story1.svg");

expoGroup6.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story2.svg");



var expoGroup8 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");


var expoBubble8 = expoGroup8.append("circle").attr({
    cx: 0,
    cy: 0,
    r: linearBubbleR-15,
    fill:"#eab618"
})
.on("click", function(){
   
    if(!expoOpen){
        
        expoGroup1.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")");
        expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")")
            .each("end", function(){
                return expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")");
            });


        expoGroup3.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")")
            .each("end", function(){
                return expoGroup3.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")")
                    .each("end",function(){
                        return expoGroup3.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 3)+")");
                    });
            });
        expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")")
            .each("end",function(){
                return expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")")
                    .each("end",function(){
                        return expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 3)+")")
                            .each("end",function(){
                                return expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 4)+")")
                            });
                    });
            });

        expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")")
            .each("end",function(){
                return expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")")
                    .each("end",function(){
                        return expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 3)+")")
                            .each("end",function(){
                                return expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 4)+")")
                                    .each("end",function(){
                                        return expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 5)+")")
                                    });
                            });
                    });
            });


        expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 1)+")")
            .each("end",function(){
                return expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")")
                    .each("end",function(){
                        return expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 3)+")")
                            .each("end",function(){
                                return expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 4)+")")
                                    .each("end",function(){
                                        return expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 5)+")")
                                            .each("end",function(){
                                                return expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 6)+")")
                                            });
                                    });
                            });
                    });
            });

    // expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 1)+")")
    //     .each("end",function(){
    //         return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 2)+")")
    //             .each("end",function(){
    //                 return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 3)+")")
    //                     .each("end",function(){
    //                         return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 4)+")")
    //                             .each("end",function(){
    //                                 return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 5)+")")
    //                                     .each("end",function(){
    //                                         return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 6)+")")
    //                                             .each("end",function(){
    //                                                 return expoGroup7.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(8, 7)+")")
    //                                             });
    //                                     });
    //                             });
    //                     });
    //             });
    //     });


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

expoGroup8.append("text")
    .attr("fill", "white")
    .attr("x", 0)
    .attr("y",0)
    .attr("class", "optimise-text")
    .style("text-anchor", "middle")
    .text("OPTIMISE");



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//linear
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var linearCircle = svg.append("circle").attr({
    cx: centerX,
    cy: centerY,
    r: linearCircleR,
    fill: "none",
    stroke: "rgba(0,0,0,0.4)"
})
.style("stroke-dasharray", ("5, 5"));

var linearGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")")
    .on("mouseover", function(){
    return personaInfoGroup1.style("visibility", "visible"), personaClip1.style("visibility", "visible");
    })
    .on("mouseout", function(){
    return personaInfoGroup1.style("visibility", "hidden"), personaClip1.style("visibility", "hidden");
    });

var linearGroup2 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");

var linearGroup3 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX + ", " + linearBubbleOriginY + ")");



// linearGroup1.append("circle").attr({
//     cx:0,
//     cy:0,
//     r:linearBubbleR,
//     fill:"#fafafa"
// });

// linearGroup2.append("circle").attr({
//     cx:0,
//     cy:0,
//     r:linearBubbleR,
//     fill:"#fafafa"
// });

// linearGroup3.append("circle").attr({
//     cx:0,
//     cy:0,
//     r:linearBubbleR,
//     fill:"#fafafa"
// });


linearGroup1.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width", linearBubbleR*2)
.attr("height",  linearBubbleR*2)
.attr("xlink:href", "img/excluded.svg");

linearGroup2.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width",  linearBubbleR*2)
.attr("height",  linearBubbleR*2)
.attr("xlink:href", "img/followers.svg");

linearGroup3.append("svg:image")
.attr("x",-linearBubbleR)
.attr("y",-linearBubbleR)
.attr("width",  linearBubbleR*2)
.attr("height",  linearBubbleR*2)
.attr("xlink:href", "img/tech-native.svg");



linearGroup1.transition(t).attr("transform", "translate("+getLinearRot(4, 1)+")");
linearGroup2.transition(t).attr("transform", "translate("+getLinearRot(4, 2)+")");
linearGroup3.transition(t).attr("transform", "translate("+getLinearRot(4, 3)+")");





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//info
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var personaInfoGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + centerX + ", " + centerY + ")")
    .style("visibility", "hidden");

personaInfoGroup1
    .append("circle").attr({
        cx:0,
        cy:0,
        r:linearCircleR+2,
        fill:"#eab618"
    });

var personaClip1 = svg.append("g")
    .attr("class","circle-container")
    .attr("transform", "translate(" + linearBubbleOriginX+","+linearBubbleOriginY+")");

personaClip1.append("svg:image")
    .attr("x", -linearBubbleR)
    .attr("y", -linearBubbleR)
    .attr("width", linearBubbleR*2)
    .attr("height", linearBubbleR*2)
    .attr("xlink:href", "img/excluded.svg");

personaClip1.attr("transform", "translate("+getLinearRot(4,1)+")").style("visibility", "hidden");

personaClip1.on("mouseover", function(){
    return personaInfoGroup1.style("visibility", "visible"), personaClip1.style("visibility", "visible");
    })
    .on("mouseout", function(){
    return personaInfoGroup1.style("visibility", "hidden"), personaClip1.style("visibility", "hidden");
    });

personaInfoGroup1.append("foreignObject") 
    .attr("width", linearCircleR*1.3) 
    .attr("height", 500)
    .attr("x", -linearCircleR/1.5)
    .attr("y", -linearCircleR/1.5)
    .append("xhtml:div") 
    .attr("class","personaInfoText")
    .html('<ul><li>Enjoys gardening at a community lot</li><li>Takes long walks but regularly forgets to charge the fitbit her grand-daughter bought for her for Christmas</li><li>Feels disconnected from her family</li></ul>');



var expoInfoLocked = false;
var expoInfoGroup1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + centerX + ", " + centerY + ")")
    .style("visibility", "hidden");

expoInfoGroup1
.append("circle").attr({
    cx:0,
    cy:0,
    r:exponentialCircleR+2,
    fill:"#eab618"
});

var expoClip1 = svg.append("g")
    .attr("class", "circle-container")
    .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")")


var expoClipCircle1 = expoClip1.append("circle").attr({
    cx:0,
    cy:0,
    r:expoBubbleR-2,
    fill:"#f0f0f0",
   
});


expoClip1.append("svg:image")
.attr("x",-expoBubbleR)
.attr("y",-expoBubbleR)
.attr("width", expoBubbleR*2)
.attr("height", expoBubbleR*2)
.attr("xlink:href", "img/story1.svg");

expoClip1.attr("transform", "translate("+getExpoRot(7, 1)+")").style("visibility", "hidden");

expoClip1.on("mouseover", function(){
    if(expoInfoLocked){
        return;
    } else{
       return expoInfoGroup1.style("visibility", "visible"), 
       expoClip1.style("visibility", "visible"),expoClip1.style("visibility", "visible"), 
       expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 2)+")"),
       expoGroup3.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 3)+")"),
       expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 4)+")"),
       expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 5)+")"),
       expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 6)+")"),
       expoGroup8.transition(t).ease("bounce").attr("transform", "translate("+getLinearRot(7, 7)+")");
    } 
})
.on("mouseout", function(){
    if(expoInfoLocked){
        return;
    } else{
        return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden"),
        expoGroup2.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 2)+")"),
        expoGroup3.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 3)+")"),
        expoGroup4.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 4)+")"),
        expoGroup5.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 5)+")"),
        expoGroup6.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 6)+")"),
        expoGroup8.transition(t).ease("bounce").attr("transform", "translate("+getExpoRot(7, 7)+")");
    }
});

expoClip1.on("click", function(){
    console.log("clicked");
     if(!expoInfoLocked){
        expoInfoLocked = true;
        return expoInfoGroup1.style("visibility", "visible"), expoClip1.style("visibility", "visible");
    } else{
        expoInfoLocked = false;
        return expoInfoGroup1.style("visibility", "hidden"), expoClip1.style("visibility", "hidden");
    }
});

// var expoInfoGroup2 = svg.append("g")
//     .attr("class", "circle-container")
//     .attr("transform", "translate(" + centerX + ", " + centerY + ")")
//         .style("visibility", "hidden");

// expoInfoGroup2
// .append("circle").attr({
//     cx:0,
//     cy:0,
//     r:exponentialCircleR+2,
//     fill:"black"
// });

var expoInfoTitle1 = expoInfoGroup1
.append("foreignObject")

.attr("x", -exponentialCircleR/1.5+20)
.attr("y", -exponentialCircleR/1.5)
.attr("width", 480) 
.attr("height", 500)
.append("xhtml:div")
.attr("class","expoInfoTitle")
.html("Takes long walks...");
    
expoInfoGroup1.append("foreignObject") 
    .attr("width", 480) 
    .attr("height", 500)
    .attr("x", -exponentialCircleR/1.5+20)
    .attr("y", -exponentialCircleR/1.5+50)
    .append("xhtml:div") 
    .attr("class","expoInfoText")
    .html('She puts on her comfortable walking shoes with the self charging digisoles, given to her for xmas from her granddaughter, which counts her steps and track her location on her way to the community lot.  She gets an audio alert through her connected hearing aids telling her that two of her good friends are nearby and whether or not she would like to send a voice invitation to meet at the community lot.');

// var expoClip2 = svg.append("g")
//     .attr("class", "circle-container")
//     .attr("transform", "translate(" + expoBubbleOriginX + ", " + expoBubbleOriginY + ")");

// expoClip2.append("circle").attr({
//     cx:0,
//     cy:0,
//     r:expoBubbleR,
//     fill:"white"
// });

// expoClip2.append("svg:image")
//     .attr("x",-expoBubbleR)
//     .attr("y",-expoBubbleR)
//     .attr("width", expoBubbleR*2)
//     .attr("height", expoBubbleR*2)
//     .attr("xlink:href", "img/scope.svg");

// expoClip2.attr("transform", "translate("+getExpoRot(8, 2)+")").style("visibility", "hidden");

// expoClip2.on("mouseover", function(){
//     return expoInfoGroup2.style("visibility", "visible"), expoClip2.style("visibility", "visible");
// })
// .on("mouseout", function(){
//     return expoInfoGroup2.style("visibility", "hidden"), expoClip2.style("visibility", "hidden");
// });


