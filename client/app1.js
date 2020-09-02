const board2 = d3
  .select('#board')
  .append('table');

const dataset = [
  { id: 1, value: 5, color: 'blue'},
  { id: 2, value: 2, color: 'gold'},
  { id: 3, value: 4, color: 'green'},
  { id: 4, value: 10, color: 'red'},
  { id: 5, value: 3, color: 'purple'},
  { id: 6, value: 7, color: 'orange'},
  { id: 7, value: 1, color: 'yellow'}
]

const svg = board2
  .append('svg')
  .attr('width', 800)
  .attr('height', 800);

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d) => (d.id - 1) * 100)
  .attr('y', (d) => (10 - d.value) * 80)
  .attr('width', 100)
  .attr('height', (d) => d.value * 80)
  .style('fill', (d) => d.color);
