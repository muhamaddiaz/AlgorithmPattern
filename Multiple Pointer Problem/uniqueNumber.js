function uniqueNumber(larik) {
  /* 
      Program ini bertujuan untuk mendapatkan suatu nilai berbeda dari
      larik yang berisi nilai yang terurut secara ascending terkecil - terbesar
      Input:
          Array(Number)
      Output:
          Number
  */
  // Diasumsikan bahwa larik sudah terurut dan memiliki length >= 2
  // Buat 2 buah pointer yang menunjuk ke index pertama dan n+1
  // Loop setiap number yang ada pada larik
  // Bandingkan number pada pointer pertama dan kedua
  // Jika nilai pointer 1 dan pointer 2 berbeda maka
  // Index pointer 1 & 2 ditambah 1
  // Assign nilai pointer 2 ke pointer 1
  // Jika nilai pointer 1 & 2 sama maka
  // Index pointer 2 ditambah 1

  // TIME COMPLEXITY O(n)

  if (larik.length != 0) {
    let i = 0;
    for (let j = i + 1; j < larik.length; j++) {
      if (larik[i] !== larik[j]) {
        larik[++i] = larik[j];
      }
    }
    return i + 1;
  }
}

// console.log(uniqueNumber([1, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7]))
