var attendance = ['kim', 'lee', 'park', 'lee'];
// console.log(attendance);

var attendance2 = new Set(['kim', 'lee', 'park', 'lee']);
// console.log(attendance2);

attendance2.add('cho');
// console.log(attendance2);

// 삭제
// attendance2.delete('lee');

// 존재 여부
attendance2.has('park');
// console.log(attendance2.has('park')); // true

// 갯수
attendance2.size;
// console.log(attendance2.size); // 4

// set <-> array
var attendance3 = new Set(attendance);
console.log(attendance3);
attendance = [...attendance3];
console.log(attendance);
