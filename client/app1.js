const board1 = d3
  .select('#board')
  .append('table')
  .style('float', 'left'); // board is pointing to this table

let boardArray = [];

boardArray[0] = board1.append('tr');
boardArray[1] = board1.append('tr');
boardArray[2] = board1.append('tr');
boardArray[3] = board1.append('tr');

for (var i = 0; i < 4; i++) {
  var current = i;

  boardArray[i]
    .selectAll('svg')
    .data([0, 1, 2, 3])
    .enter()
    .append('svg')
    .attr('width', 200)
    .attr('height', 200)
    .style('background-color', (d) => { return ((d + i) % 2 === 0) ? 'white' : 'black'; })
      .selectAll('rect')
      .data([current])
      .enter()
      .append('rect')
      .attr('x', 70)
      .attr('y', 70)
      .attr('width', 60)
      .attr('height', 60)
      .style('fill', () => {
        current++;
        return (current % 2 === 0) ? 'white' : 'black';
      });
}
