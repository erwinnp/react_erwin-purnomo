let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      " berasal dari " +
      asal
  );
}

// menampilkan pengkondisian dibawah
if (terdaftar !== true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka ");
}

a = b;
// b = nama;

// console.log(" asal akses = " + asal);
// mengambil index 2 dalam array
console.log("array = " + lengkapArr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// memanggil function
perkenalan();
