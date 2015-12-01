/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var data = [4, 8, 15, 16, 23, 42];
//
//var body = d3.select("body");
//var div = body.append("div");
//div.html("Hello, world!");

var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function (d) {
            return x(d) + "px";
        })
        .text(function (d) {
            return d;
        });

