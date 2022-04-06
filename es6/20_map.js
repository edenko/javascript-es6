// #1
var person = new Map();
person.set('name', 'kim');
person.set('age', 20);

// #2
var people = new Map([
  ['name', 'lee'],
  ['age', 30],
]);

// console.log(person);
// console.log(people);
// console.log(person.get('name'));

// 삭제
// person.delete('name');

// 갯수
// persion.size;

// 반복문
for(var key of person.keys()) {
  // console.log(key);
}
