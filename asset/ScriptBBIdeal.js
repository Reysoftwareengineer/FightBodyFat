function hitungIMT() {
    let beratBadan = parseFloat(document.getElementById('beratBadan').value);
    let tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
  
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0) {
      alert("Masukkan berat badan dan tinggi badan yang valid.");
      return;
    }
  
    let tinggiMeter = tinggiBadan / 100;
    let imt = beratBadan / Math.pow(tinggiMeter, 2);
    let imtPembulatan = imt.toFixed(2);
  
    // Menampilkan hasil IMT
    document.getElementById('hasilIMT').textContent = imtPembulatan;
  
    // Menentukan kategori berat badan
    let kategori = interpretasiIMT(imt);
    document.getElementById('kategoriBeratBadan').textContent = kategori;
  }
  
  function interpretasiIMT(imt) {
    if (imt < 18.5) {
      return "Kurus";
    } else if (imt >= 18.5 && imt < 24.9) {
      return "Ideal";
    } else if (imt >= 25 && imt < 29.9) {
      return "Gemuk";
    } else {
      return "Obesitas";
    }
  }