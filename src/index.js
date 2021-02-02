
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) return [];
  
  const reversedMatrix = matrix.map((item, index) => (index + 1) % 2 === 0 ? item.reverse() : item );

  return reversedMatrix.flat(); 
}
