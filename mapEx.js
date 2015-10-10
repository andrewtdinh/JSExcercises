var inputs = [1,3, 223,3, 20, 33,22, 11, 9, 8, 2999]

console.log(inputs.map(function(ea){
  return ea % 2 === 0? 'even' : 'odd';
}))
