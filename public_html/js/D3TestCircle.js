/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var data = [{"x": 1.0, "y": 1.0, "color" : "green"}, 
    {"x": 34.0, "y": 34.0, "color" : "blue"},
    {"x": 77.0, "y": 77.0, "color" : "red"}];
//var d = {"x": 100.0, "y": 100.1, "color" : "green"};

svg = d3.select("svg");

//svg.append("circle")
//    .attr("cx", d.x)
//    .attr("cy", d.y)
//    .attr("r", 50)
//    .attr("fill", d.color);


svg.selectAll("circle")
    .data(data)
  .enter().append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 5)
    .attr("fill", function(d) {return d.color; });

