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
      kalori = 66.5 + (13.75*beratBadan)+(5.003*tinggiBadan)-(6.75*usia);
    } else {
      // Rumus Mifflin-St Jeor untuk perempuan
      kalori = 655.1 + (9.563*beratBadan)+(1.850*tinggiBadan)-(4.676*usia);
    }
    
    // Menampilkan hasil kalori
    document.getElementById('hasilKalori').textContent = kalori.toFixed(2);
  }