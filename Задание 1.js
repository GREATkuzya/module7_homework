let objProt = { a: 1, b: 2, c: 3 };
let example = Object.create(objProt);
example.d = 4;
example.e = 5;
function func(example) {
  for (let key in example) {
    if (example.hasOwnProperty(key)) {
      console.log(`${key} : ${example[key]}`);
    }
  }
}
func(example);