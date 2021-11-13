function findPrime(...values) {
  values.forEach((value) => {
    let status = false;
    for (let i = 2; i < value; i++) {
      if (value % i == 0) {
        status = true;
      }
    }
    if (status) {
      console.log(value + "sayı asal değil");
    } else {
      console.log(value + "sayı asal");
    }
  });
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);

function friendNumber(numberOne, numberTwo) {
  var oneRemain = 0;
  var twoRemain = 0;
  for (let i = 0; i < numberOne; i++) {
    if (numberOne % i == 0) {
      oneRemain += i;
    }
  }
  for (let i = 0; i < numberTwo; i++) {
    if (numberTwo % i == 0) {
      twoRemain += i;
    }
  }
  oneRemain == numberTwo && twoRemain == numberOne
    ? console.log("Bu sayılar arkadaştır")
    : console.log("sayılar arkadaş değildir");
}
friendNumber(220, 284);

function perfectNumber() {
  for (let i = 1; i < 1000; i++) {
    isPerfect(i);
  }
}
function isPerfect(number) {
  var value = 0;
  for (let j = 0; j < number; j++) {
    if (number % j == 0) {
      value += j;
    }
    if (value == number) {
      console.log(number + "mükemmel sayıdır");
    }
  }
}
perfectNumber();

function findPrime2() {
  for (let i = 2; i <= 1000; i++) {
    findPrime(i);
  }
}
findPrime2();
