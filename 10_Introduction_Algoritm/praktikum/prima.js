const isPrima = (myNumber) => {
  let myDivider = 0;

  for (let i = 1; i <= myNumber; i++) {
    if (myNumber % i === 0) {
      myDivider++;
    }
  }

  if (myDivider === 2) {
    console.log("Bilangan Prima");
  } else {
    console.log("Bukan Bilangan Prima");
  }
};

isPrima(11);
isPrima(6);
