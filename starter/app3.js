// Method di JavaScript

// const array = [1, 2, 3, 4, 5, 6];

// Method Push
// akan menambahkan value baru, yang ada didalam aray
// array.push();

// Method Pop
// Akan me romove 1 value yang ada didlam array
// array.pop()

// Method Unshift
// Akan menambahkan value didalam array berdasarkan parameter yang diisi
// array.unshift(0)

// Method Shift
// Akan menghapus value pertama yang ada didalam array
// array.shift()


// const animal = ["kambing", "gajah", "naga", "playboy", "singa"];


// Method Slice
// Akan mengambil value berdasarkan parameter dari methodnya, tetapi harus di simpan kedalam sebuah variabel
// ambilHewan = animal.slice(1, 3)

// Method Splice
// Akan mengganti atau menghapus value dari sebuah array
// animal.splice(1, 2, "Jerapah", "Maung")

// Method Foreach
// Akan me looping value yang ada di dalam array
// animal.forEach(myFunction);
// function myFunction(value) {
// console.log(value)
// }

// const numbers = [10, 20, 30, 40, 50];

// Method map
// Akan membuat sebuan array baru
// const nomorNa = numbers.map(myNumber);
// function myNumber(value) {
//     return value * 2
// }
// console.log(nomorNa)


// const age = [12, 10, 20, 90, 60, 9, 15, 2, 40, 35]

// // Method Filter
// const filterAge = age.filter(myFunction)
// function myFunction(value) {
//     return value >= 20
// }
// console.log(filterAge)




// Objek
// const biodata = {
//     name: {
//         firstName: "Kiki",
//         lastname: "Agustin",
//     },
//     age: 21,
//     national: "Indonesia"
// }

// const biodata2 = new Object();
// biodata2.fisrstName = "Mega";
// biodata2.lastName = "Kusmayati";
// biodata2.age = 28;

// Cara mengambil value dari objek
// let nama = biodata.name.firstName

// Cara menambahkan properti dari objek
// biodata.name.firstNames = "jeje"

// Cara menghapus propertis yang ada di obek
// delete biodata.name.lastname;

// console.log(biodata)


// Abojek Keys dan assign

// Cara mengambil key objek
// const data1 = {
//     a: 1,
//     b: 5,
//     c: 8
// }
// const keyObjek = Object.keys(data1);


// Menggabungkan dua objek
// const data1 = {
//     a: 3,
//     b: 8,
//     c: 9
// }
// const data2 = {
//     c: 10,
//     h: 12
// }
// const menggabungkanDuaObjek = Object.assign(data1, data2);
// console.log(menggabungkanDuaObjek);



// Array of objek

const tugas = [
    {
        nama: "Tugas 1",
        status: false
    },
    {
        nama: "Tugas 2",
        status: true
    },
    {
        nama: "Tugas 3",
        status: false
    },
    {
        nama: "Tugas 4",
        status: true
    }
];

// function biasa deklaration
// const hasilTugas = tugas.filter(myfunction);

// function myfunction(value) {
//     if (value.status === false) {
//         return value
//     }
// }


// Menggunakan arrow function
// const hasilTugas = tugas.filter(value => {
//     if (value.status === false) {
//         return value
//     }
// })

// console.log(hasilTugas);


// Scope di javaScript

// Variabel global adalah variabel yang berada diluar function
const nama = "Kiki Agustin"

function myFunction() {
    const nama = "Mega Kusmayati"

    function myFunction2() {
        console.log(nama)
    }

    myFunction2()
}

myFunction();