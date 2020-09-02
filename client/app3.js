const board3 = d3
  .select('#board')
  .append('table');

const dataset = [
  [9, 'red'],
  [8, 'orange'],
  [7, 'yellow'],
  [6, 'green'],
  [5, 'blue'],
  [4, 'darkblue'],
  [3, 'purple'],
  [2, 'white'],
  [1, 'black']
];

const svg = board3
  .append('svg')
  .attr('width', 800)
  .attr('height', 800)
  .style('background-color', 'cyan');

svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('r', (d) => d[0] * 40)
  .attr('cx', 400)
  .attr('cy', 400)
  .style('fill', (d) => d[1]);
