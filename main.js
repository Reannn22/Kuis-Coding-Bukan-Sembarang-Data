const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  // Membuat objek employee baru berdasarkan nilai argumen
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  // Menambahkan objek baru ke dalam array `employees`
  employees.push(newEmployee);
}

// Contoh penggunaan fungsi addEmployee
addEmployee('Rahmat', 'rahmat@dicoding.com', 2023);
addEmployee('Indra', 'indra@dicoding.com', 2021);

// Menampilkan array employees untuk melihat hasilnya
console.log(employees);
