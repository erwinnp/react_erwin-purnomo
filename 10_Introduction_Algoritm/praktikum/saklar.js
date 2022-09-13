const mySaklar = (tekan) => {
  let tombol = 0;
  for (let i = 1; i <= tekan; i++) {
    if (tekan % i === 0) {
      tombol++;
    }
  }
  if (tombol % 2 === 0) {
    console.log(`lampu tidak menyala`);
  } else {
    console.log(`lampu menyala`);
  }
};

mySaklar(1);
mySaklar(2);
mySaklar(3);
mySaklar(4);
mySaklar(5);
mySaklar(6);
