const board = d3
  .select('#gameboard')
  .append('table');

const pieces = d3
  .select('#gamepieces')
  .append('table');

const keyValues = d3.keys({ a: 1, b: 2, c: 3});

console.log(keyValues);

d3.select('table')
  .append('tr')
  .attr('class', 'head')
  .data(keyValues)
    .enter()
    .append('th')
    .html((d) => { return d; });