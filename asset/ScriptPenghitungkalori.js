function hitungKalori() {
    let usia = parseFloat(document.getElementById('usia').value);
    let gender = document.getElementById('gender').value;
    let beratBadan = parseFloat(document.getElementById('beratBadan').value);
    let tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
  
    if (isNaN(usia) || isNaN(beratBadan) || isNaN(tinggiBadan) || usia <= 0 || beratBadan <= 0 || tinggiBadan <= 0) {
      alert("Masukkan data yang valid.");
      return;
    }
  
    let kalori;
  
    if (gender === 'male') {
      // Rumus Mifflin-St Jeor untuk laki-laki
      kalori = 10 * beratBadan + 6.25 * tinggiBadan - 5 * usia + 5;
    } else {
      // Rumus Mifflin-St Jeor untuk perempuan
      kalori = 10 * beratBadan + 6.25 * tinggiBadan - 5 * usia - 161;
    }
  
    // Menampilkan hasil kalori
    document.getElementById('hasilKalori').textContent = kalori.toFixed(2);
  }