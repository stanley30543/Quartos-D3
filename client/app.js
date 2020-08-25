const board = d3
  .select('#gameboard')
  .append('table'); // board is pointing to this table

let boardArray = [];

boardArray[0] = board.append('tr');
boardArray[1] = board.append('tr');
boardArray[2] = board.append('tr');
boardArray[3] = board.append('tr');

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

const pieces = d3
  .select('#gamepieces')
  .append('table');

var dataset = [
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
var svg = pieces
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

// const objectData = { a: 1, b: 2, c: 3, d: 4 };
// input an object and output the keys as an array
// const keyValues = d3.keys(objectData);
// const keyValues = ['a', 'b', 'c', 'd'];

/* const tableRow1 =board
  .append('tr')
  .attr('class', 'head'); // set attribute

tableRow1.selectAll('th') // nothing is selected yet
  .data(keyValues) // choose an array to use as data
  .enter() // map the data to the following
  .append('th') //put each data in the 'th' element
  .html((d) => { return d + '!'; }); // with each element of the array, decide the content

console.log(tableRow1);
console.log(tableRow1._groups[0][0].children[0]);

tableRow1._groups[0][0].children[0].innerHTML = 'here'; */