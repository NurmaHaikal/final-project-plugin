1. <!DOCTYPE html>: Deklarasi tipe dokumen yang memberitahu browser bahwa dokumen ini menggunakan HTML5.
<html lang="en">: Tag pembuka elemen HTML dengan atribut lang yang menunjukkan bahwa bahasa dokumen ini adalah Inggris.

2. <meta charset="UTF-8" />: Menentukan set karakter dokumen sebagai UTF-8.
<meta http-equiv="X-UA-Compatible" content="IE=edge" />: Menentukan mode kompatibilitas untuk Internet Explorer.
<meta name="viewport" content="width=device-width, initial-scale=1.0" />: Mengatur viewport untuk pengoptimalan tampilan di perangkat seluler.
<title>Personal Portfolio Website</title>: Menentukan judul halaman yang muncul di tab browser.
<link rel="stylesheet" href="style.css" />: Menautkan file CSS eksternal bernama style.css untuk mendesain halaman.

3. <header class="header">: Tag header yang mengandung logo dan navigasi.
<a class="logo">My Portfolio</a>: Tag anchor tanpa href yang bertindak sebagai logo teks.
<nav class="navbar">: Elemen navigasi yang mengandung beberapa link:

    <a href="#home" class="active">Home</a>: Link ke bagian Home dengan kelas active.
    <a href="#about">About</a>: Link ke bagian About.
    <a href="#hoby">Hoby</a>: Link ke bagian Hoby.
    <a href="#contact">Contact </a>: Link ke bagian Contact.

4. <section class="home" id="home">: Bagian Home dengan ID home dan kelas home.
<div class="home-content">: Kontainer untuk konten Home:

    <h3>Hello, My Name</h3>: Header H3.
    <h1>Muhamad Nurma Haikal</h1>: Header H1 dengan nama.
    <h3>And I'm a <span>Web Developer</span></h3>: Header H3 dengan teks yang menyoroti profesi.

<div class="social-media" id="contact">: Kontainer untuk link media sosial:

    Setiap <a> berisi link ke profil media sosial dengan target _blank untuk membuka di tab baru dan gambar ikon media sosial.

<div class="home-img">: Kontainer untuk gambar Home dengan tag <img> yang menunjuk ke gambar lokal.

5.     <section class="about" id="about">: Bagian About dengan ID about dan kelas about.
    <div class="about-img">: Kontainer untuk gambar About:
        <img src="/home/haikal/Downloads/haikal.jpeg" alt="LogoMy" />: Gambar lokal yang ditampilkan.
    <div class="about-content">: Kontainer untuk konten About:
        <h2 class="heading">About <span> Me</span></h2>: Header H2 dengan teks "About Me".
        <h3>Web Developer</h3>: Header H3 dengan profesi.
        <p>: Paragraf yang menjelaskan tentang penulis.
        <a href="#" class="btn">Read More</a>: Link tombol untuk membaca lebih lanjut.

6. <section class="hoby" id="hoby">: Bagian Hoby dengan ID hoby dan kelas hoby.
<div class="hoby-content">: Kontainer untuk konten Hoby:

    <h2 class="heading">My <span> Hoby</span></h2>: Header H2 dengan teks "My Hoby".

<div class="hoby-img">: Kontainer untuk gambar Hoby:

    Setiap <img> menampilkan gambar dari URL tertentu dengan deskripsi hobi di bawahnya dalam tag <p>.

7. <footer>: Elemen footer yang mengandung teks hak cipta.
<p class="end">Muhamad Nurma Haikal 2024. All rights reserved</p>: Paragraf dengan kelas end yang berisi teks hak cipta.

Style css

1. *: Selector ini mengatur semua elemen.
margin: 0; padding: 0;: Menghilangkan margin dan padding default dari semua elemen.
box-sizing: border-box;: Mengatur agar padding dan border termasuk dalam ukuran elemen.
text-decoration: none;: Menghilangkan garis bawah dari semua tautan.
outline: none;: Menghilangkan outline pada elemen fokus.
scroll-behavior: smooth;: Mengaktifkan scroll halus.

2. :root: Selector untuk mendefinisikan variabel CSS yang dapat digunakan di seluruh dokumen.
--bg-color: Warna latar belakang utama.
--second-bg-color: Warna latar belakang kedua.
--main-color: Warna utama

3. html { font-size: 70%; }: Mengatur ukuran font dasar ke 70% dari default browser.
body { background: var(--bg-color); color: #ffffff; }: Mengatur latar belakang tubuh dan warna teks.

4. section: Mengatur agar setiap section memiliki tinggi minimal 100vh (tinggi viewport) dan padding di sekitar konten.

5. position: fixed;: Membuat header tetap berada di atas saat di-scroll.
top: 0; left: 0; width: 100%;: Menempatkan header di bagian atas dan membuatnya selebar halaman.
padding: 2rem 9%; background: var(--bg-color);: Menambahkan padding dan mengatur warna latar belakang.
display: flex; justify-content: center; align-items: space-between;: Mengatur tata letak fleksibel dengan konten yang didistribusikan merata.
z-index: 100;: Mengatur lapisan header agar berada di atas elemen lain.

6. font-size: 2.5rem;: Mengatur ukuran font.
color: rgb(0, 101, 173);: Mengatur warna teks.
font-weight: 600;: Mengatur ketebalan font.

7.     font-size: 2rem;: Mengatur ukuran font untuk link di navbar.
    color: #fff;: Mengatur warna teks link.
    margin-left: 4rem;: Menambahkan margin kiri untuk setiap link.
    cursor: pointer;: Mengubah kursor menjadi pointer saat link dihover.
    transition: 0.4s all ease;: Mengatur transisi yang halus.
    :hover { color: var(--main-color); }: Mengubah warna teks link saat dihover.

8. display: flex;: Mengatur tata letak fleksibel.
justify-content: center; align-items: center;: Memusatkan konten secara horizontal dan vertikal.
gap: 60px;: Menambahkan jarak antara elemen dalam flex container.

9. h3 { font-size: 3.2rem; font-weight: 700; }: Mengatur ukuran dan ketebalan font untuk h3.
h3:nth-of-type(2) { margin-bottom: 2rem; }: Menambahkan margin bawah untuk elemen h3 kedua.
span { color: var(--main-color); }: Mengatur warna teks dalam elemen span.
a.active { color: var(--main-color); }: Mengatur warna teks untuk link yang aktif.

10. display: inline-block;: Membuat elemen tampil sebagai blok sebaris.
padding: 1rem 2.8rem;: Menambahkan padding dalam elemen.
background: var(--main-color);: Mengatur warna latar belakang.
border-radius: 4rem;: Membuat sudut elemen membulat.
box-shadow: 0 0 1rem var(--main-color);: Menambahkan bayangan pada elemen.
font-size: 1.6rem;: Mengatur ukuran font.
color: var(--second-bg-color);: Mengatur warna teks.
letter-spacing: 0.1rem;: Menambahkan jarak antar huruf.
font-weight: 600;: Mengatur ketebalan font.
transition: 0.5s all ease;: Mengatur transisi yang halus.
:hover { box-shadow: none; }: Menghapus bayangan saat elemen dihover.

11. width: 20vw;: Mengatur lebar gambar menjadi 20% dari lebar viewport.
margin-bottom: 20%;: Menambahkan margin bawah.
border-radius: 20%;: Membuat sudut gambar membulat.
box-shadow: 1px 1px 40px 1px var(--main-color, 0.15);: Menambahkan bayangan pada gambar.

12. a { display: inline-flex; justify-content: center; align-items: center; }: Membuat link sebagai elemen fleksibel yang memusatkan konten.
width: 4rem; height: 4rem; border: 2px solid var(--main-color); background-color: transparent; border-radius: 50%;: Mengatur ukuran, border, warna latar belakang, dan membuat sudut link membulat.
font-size: 2rem; color: var(--main-color);: Mengatur ukuran dan warna font.
margin: 3rem 1.5rem 3rem 0;: Menambahkan margin.
transition: 0.5s all ease;: Mengatur transisi yang halus.
`
{ background: var(--main-color); color: var(--second