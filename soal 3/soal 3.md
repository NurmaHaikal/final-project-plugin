        
        function cetakSegitigaKiri(tinggi: number): void {

    Fungsi ini bernama cetakSegitigaKiri dan menerima satu parameter tinggi yang bertipe number.
    Fungsi ini bertipe void, yang berarti tidak mengembalikan nilai apa pun.

            for (let i = 0; i < tinggi; i++) {
        let baris: string = '';

    Menggunakan loop for untuk iterasi sebanyak tinggi kali. i mulai dari 0 hingga tinggi - 1.
Pada setiap iterasi, mendeklarasikan variabel baris sebagai string kosong. Variabel ini akan digunakan untuk menyusun karakter '*' dan spasi pada setiap baris.

                for (let j = 0; j < tinggi - i - 1; j++) {
            baris += '  ';
        }

    Menggunakan loop for untuk menambahkan spasi ke variabel baris.
tinggi - i - 1 menentukan jumlah spasi yang harus ditambahkan di awal setiap baris. Misalnya, untuk i = 0, akan ada tinggi - 1 spasi.
Pada setiap iterasi, menambahkan dua spasi (' ') ke baris.

                console.log(baris);
    }
}    

    Setelah loop for untuk spasi dan bintang selesai, mencetak baris ke konsol.

            cetakSegitigaKiri(10);

    Memanggil fungsi cetakSegitigaKiri dengan parameter tinggi sebesar 10.
Fungsi ini akan mencetak segitiga kiri dengan tinggi 10 baris.







