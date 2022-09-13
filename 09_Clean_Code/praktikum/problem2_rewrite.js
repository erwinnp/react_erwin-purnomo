class Kendaraan {
  constructor() {
    this.kecepatanPerJam = 0;
  }
}

class Mobil extends Kendaraan {
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }

  berjalan() {
    this.tambahKecepatan(10);
  }

  speed() {
    return this.kecepatanPerJam;
  }
}

let mobilSatu = new Mobil();
mobilSatu.berjalan();
mobilSatu.berjalan();
mobilSatu.berjalan();

console.log(`Mobil Pertama kecepatannya ${mobilSatu.speed()}`);

let mobilDua = new Mobil();
mobilDua.berjalan();
mobilDua.berjalan();

console.log(`Mobil Kedua kecepatannya ${mobilDua.speed()}`);
