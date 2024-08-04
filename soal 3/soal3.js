"use strict";
function cetakSegitigaKiri(tinggi) {
    for (let i = 0; i < tinggi; i++) {
        let baris = '';
        for (let j = 0; j < tinggi - i - 1; j++) {
            baris += '  ';
        }
        for (let k = 0; k < i + 1; k++) {
            baris += '* ';
        }
        console.log(baris);
    }
}
// Contoh penggunaan
cetakSegitigaKiri(10);
