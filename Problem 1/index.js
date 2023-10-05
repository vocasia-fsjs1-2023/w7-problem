var arr = [];
function createObj(name, phase, gender) {
  // YOUR CODE HERE...
var newObj = {
    name: name,
    phase: phase,
    gender: gender
  };
  arr.push(newObj);
  // END OF YOUR CODE HERE...
  return arr;
}

createObj("Akbar", 1, "male");
console.log(arr);
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
console.log(arr);
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

function getData(name) {
  let result;
  // YOUR CODE HERE...
for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      result = arr[i];
      break;
    }
  }
  // END OF YOUR CODE HERE...
  return result;
}

console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
//EXPECTATION undefined