"use strict";
function draw(data) {
  var width = 600,
      barHeight = 40;
  var max = d3.max(data, function(d) {
    return d.property;
  });
  var xScale = d3.scale.linear().domain([0, max]).range([50, width]);
  var chart = d3.select('#main').attr('width', width).attr('height', barHeight * data.length);
  var g = chart.selectAll('g').data(data).enter().append('g').attr('transform', function(d, i) {
    return "translate(0," + i * barHeight + ")";
  });
  g.append("rect").attr("width", function(d) {
    return xScale(d.property);
  }).attr("height", barHeight - 1);
  g.append("text").attr("x", function(d) {
    return xScale(d.property) - 30;
  }).attr("y", barHeight / 2).text(function(d) {
    return d.property;
  });
  g.append("text").attr("x", 5).attr("y", barHeight / 2).text(function(d) {
    return d.name;
  });
}
d3.json("php/mysql_to_json.php", draw);
