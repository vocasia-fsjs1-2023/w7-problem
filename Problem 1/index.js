var arr = [];

function createObj(name, phase, gender) {
  // Membuat objek siswa dengan data yang diberikan
  var student = { name: name, phase: phase, gender: gender };
  
  // Menambahkan objek siswa ke dalam array 'arr'
  arr.push(student);
  
  // Mengembalikan array 'arr' yang sudah diperbarui
  return arr;
}

function getData(name) {
  // Mencari siswa dengan nama yang sesuai
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      // Mengembalikan objek siswa yang sesuai dengan nama
      return arr[i];
    }
  }
  
  // Jika tidak ditemukan siswa dengan nama yang sesuai, mengembalikan undefined
  return undefined;
}

createObj("Akbar", 1, "male");
console.log(arr); // [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
console.log(arr); // [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

console.log(getData("Icha")); // {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby")); // undefined