function anagram(kalimat1, kalimat2) {
  /* 
      Fungsi ini bertujuan untuk membandingkan 2 buah kalimat, jika
      kalimat tersebut memiliki karakter yang sama tidak peduli
      dengan urutan dari karakter pada kalimat tersebut
      Input: 
          String, String
      Output:
          Boolean
  */
  // STEP:
  // Jika jumlah karakter pada kalimat sama maka
  // Buat 2 buah objek kosong
  // Loop masing masing kalimat
  // Jika karakter tersebut tidak terdapat dalam objek assign 1
  // Jika karakter tersebut terdapat pada objek tambah 1
  // Loop setiap nilai pada objek
  // Bandingkan setiap nilai yang ada pada kedua objek

  // TIME COMPLEXITY O(n)

  if (kalimat1.length !== kalimat2.length) {
    return false;
  }

  const objekKalimat1 = {};
  const objekKalimat2 = {};

  for (karakter of kalimat1) {
    objekKalimat1[karakter] = (objekKalimat1[karakter] || 0) + 1;
  }
  for (karakter of kalimat2) {
    objekKalimat2[karakter] = (objekKalimat2[karakter] || 0) + 1;
  }

  for (karakter of kalimat2) {
    if (objekKalimat1[karakter] !== objekKalimat2[karakter]) {
      return false;
    }
  }
  return true;
}

// console.log(anagram("hello", "hlole"))
