// soal nomor3
function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
    const luas: number = panjang * lebar;
    return luas;
  }
  
  let panjang: number = 10;
  let lebar: number = 6;
    let luas: number = hitungLuasPersegiPanjang(panjang, lebar);
  
  console.log(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}`);