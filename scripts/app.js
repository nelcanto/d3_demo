/*
function draw(data){
	var width = 600,
		barHeight = 40;

	var max = d3.max(data, (d)=> d.view_count);
	var xScale = d3.scale.linear()
		.domain([0, max])
		.range([200, width]);

	var chart = d3.select('#main')
		.attr('width', width)
		.attr('height', barHeight * data.length);

	var g = chart.selectAll('g')
		.data(data)
		.enter()
		.append('g')
		.attr('transform',(d,i)=>"translate(0," + i*barHeight+")");

	g.append("rect")
		.attr("width", (d)=>xScale(d.view_count))
		.attr("height", barHeight-1);

	g.append("text")
		.attr("x", (d)=>xScale(d.view_count)-30)
		.attr("y", barHeight/2)
		.text((d)=> d.view_count);

	g.append("text")
		.attr("x", 5)
		.attr("y", barHeight/2)
		.text((d)=> d.title);
}

d3.json('http://tagtree.tv/feed.json',draw);
*/
function draw(data){
	var width = 600,
		barHeight = 40;

	var max = d3.max(data, (d)=> d.property);
	var xScale = d3.scale.linear()
		.domain([0, max])
		.range([50, width]);

	var chart = d3.select('#main')
		.attr('width', width)
		.attr('height', barHeight * data.length);

	var g = chart.selectAll('g')
		.data(data)
		.enter()
		.append('g')
		.attr('transform',(d,i)=>"translate(0," + i*barHeight+")");

	g.append("rect")
		.attr("width", (d)=>xScale(d.property))
		.attr("height", barHeight-1);

	g.append("text")
		.attr("x", (d)=>xScale(d.property)-30)
		.attr("y", barHeight/2)
		.text((d)=> d.property);

	g.append("text")
		.attr("x", 5)
		.attr("y", barHeight/2)
		.text((d)=> d.name);
}

// d3.json('http://tagtree.tv/feed.json',draw);

d3.json("php/mysql_to_json.php", draw);
// d3.json("dataMay-12-2016.json",draw);