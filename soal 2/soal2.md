    1.let lirik_lagu = { ... }:
        Mendefinisikan objek lirik_lagu yang menyimpan informasi tentang sebuah lagu, termasuk status, artis, judul lagu, lirik lagu dalam bentuk string, dan lirik lagu dalam bentuk array.

    2. let new_lirik_lagu = { ... }:
        Menggunakan spread operator untuk membuat salinan dari lirik_lagu dan memodifikasi bagian tertentu dari objek tersebut.
        ...lirik_lagu: Menyalin semua properti dari objek lirik_lagu ke objek baru new_lirik_lagu.
        data: { ...lirik_lagu.data, artist: "Haikal", songTitle: "Kapal Lawd" }:
            ...lirik_lagu.data: Menyalin semua properti dari objek data dalam lirik_lagu ke dalam objek data yang baru.
            artist: "Haikal" dan songTitle: "Kapal Lawd": Mengganti nilai properti artist dan songTitle pada objek data yang baru.

    3. console.log(new_lirik_lagu):
        Menampilkan objek new_lirik_lagu yang sudah dimodifikasi ke konsol

            let lyric_line = lirik_lagu.data.songLyricsArr[1];
        console.log(lyric_line);
    4. let lyric_line = lirik_lagu.data.songLyricsArr[1];:

    Mengakses elemen kedua (indeks 1) dari array songLyricsArr yang berada dalam objek lirik_lagu.data.
    Menyimpan nilai elemen tersebut ke dalam variabel lyric_line.

     console.log(lyric_line);:

    Menampilkan nilai lyric_line ke konsol, yaitu "For me to take what's mine, until the end of time?".


