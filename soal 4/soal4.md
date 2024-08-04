    interface Nilai {
    pemrogramanWeb: number;
    pemrogramanKomputer: number;
    statistika: number;
    sistemBasisData: number;
}

Interface Nilai mendefinisikan struktur objek yang berisi nilai untuk empat mata pelajaran: pemrogramanWeb, pemrogramanKomputer, statistika, dan sistemBasisData, semuanya bertipe number.

    function hitungRataRata(nilai: Nilai): number {
    const { pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData } = nilai;

    // Validasi nilai harus diisi dan berada dalam rentang 0 hingga 100
    if (
        pemrogramanWeb == null || pemrogramanKomputer == null || 
        statistika == null || sistemBasisData == null ||
        pemrogramanWeb < 0 || pemrogramanWeb > 100 ||
        pemrogramanKomputer < 0 || pemrogramanKomputer > 100 ||
        statistika < 0 || statistika > 100 ||
        sistemBasisData < 0 || sistemBasisData > 100
    ) {
        throw new Error("Semua nilai harus diisi dengan angka antara 0 hingga 100.");
    }

    const total = pemrogramanWeb + pemrogramanKomputer + statistika + sistemBasisData;
    return total / 4;
}

Destructuring:
    const { pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData } = nilai;
        Ekstrak nilai dari objek nilai ke dalam variabel terpisah.

Validasi:
    Memastikan semua nilai tidak null dan berada dalam rentang 0 hingga 100.
    Jika ada nilai yang tidak memenuhi kriteria, lempar Error dengan pesan yang sesuai.

Perhitungan Rata-rata:
    Hitung total nilai dengan menjumlahkan semua nilai.
    Kembalikan rata-rata dengan membagi total nilai dengan 4.

    function tentukanGrade(rataRata: number): string {
    if (rataRata >= 90 && rataRata <= 100) {
        return 'A';
    } else if (rataRata >= 80 && rataRata < 90) {
        return 'B';
    } else if (rataRata >= 70 && rataRata < 80) {
        return 'C';
    } else if (rataRata >= 60 && rataRata < 70) {
        return 'D';
    } else if (rataRata >= 0 && rataRata < 60) {
        return 'E';
    } else {
        throw new Error("Nilai rata-rata tidak valid.");
    }
}

Kondisional:
    Menggunakan if-else untuk menentukan grade berdasarkan nilai rata-rata.
    Kembalikan grade yang sesuai (A, B, C, D, E).
    Jika nilai rata-rata di luar rentang 0 hingga 100, lempar Error dengan pesan yang sesuai.

        const nilai: Nilai = {
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
} catch (error) {
    console.error(error.message);
}

Deklarasi Objek Nilai:
    Mendefinisikan objek nilai sesuai dengan interface Nilai dengan nilai-nilai untuk masing-masing mata pelajaran.

Menghitung Rata-rata dan Menentukan Grade:
    Memanggil fungsi hitungRataRata dengan objek nilai.
    Menyimpan hasil rata-rata dalam variabel rataRata.
    Memanggil fungsi tentukanGrade dengan nilai rataRata.
    Menyimpan hasil grade dalam variabel grade.

Menampilkan Hasil:
    Mencetak rata-rata dengan dua angka di belakang koma menggunakan toFixed(2).
    Mencetak grade.

Penanganan Kesalahan:
    Menggunakan try-catch untuk menangani kemungkinan kesalahan yang terjadi saat menghitung rata-rata atau menentukan grade.
    Jika terjadi kesalahan, cetak pesan kesalahan.

    