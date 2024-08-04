"use strict";
function hitungRataRata(nilai) {
    const { pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData } = nilai;
    // Validasi nilai harus diisi dan berada dalam rentang 0 hingga 100
    if (pemrogramanWeb == null || pemrogramanKomputer == null ||
        statistika == null || sistemBasisData == null ||
        pemrogramanWeb < 0 || pemrogramanWeb > 100 ||
        pemrogramanKomputer < 0 || pemrogramanKomputer > 100 ||
        statistika < 0 || statistika > 100 ||
        sistemBasisData < 0 || sistemBasisData > 100) {
        throw new Error("Semua nilai harus diisi dengan angka antara 0 hingga 100.");
    }
    const total = pemrogramanWeb + pemrogramanKomputer + statistika + sistemBasisData;
    return total / 4;
}
function tentukanGrade(rataRata) {
    if (rataRata >= 90 && rataRata <= 100) {
        return 'A';
    }
    else if (rataRata >= 80 && rataRata < 90) {
        return 'B';
    }
    else if (rataRata >= 70 && rataRata < 80) {
        return 'C';
    }
    else if (rataRata >= 60 && rataRata < 70) {
        return 'D';
    }
    else if (rataRata >= 0 && rataRata < 60) {
        return 'E';
    }
    else {
        throw new Error("Nilai rata-rata tidak valid.");
    }
}
// Contoh penggunaan
const nilai = {
    pemrogramanWeb: 85,
    pemrogramanKomputer: 90,
    statistika: 78,
    sistemBasisData: 88
};
try {
    const rataRata = hitungRataRata(nilai);
    const grade = tentukanGrade(rataRata);
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}
catch (error) {
    console.error(`error.message`);
}
