# hcktv-P1-W1D5-MovieTheater-Graded

# Movie Theater
## Learning Competencies
- Mampu membuat solusi dari requirement yang diberikan
- Mampu memodelkan sistem dengan menggunakan konsep OOP
- Memahami hubungan antar class (Inheritance, Composition dan Aggregation)
- Mampu menggunakan Factory design pattern
## Summary
Ada sebuah perusahaan pemesanan tiket online, dimana perusahaan tersebut meminta tolong kepada kalian untuk dibuatkan sebuah sistem. Dimana sistem tersebut akan menghandle proses pembelian, penukaran dan pembatalan tiket pelanggan. Buatlah implementasi JavaScript-nya!


## Release - 0 - Modeling
1. Class Creation
- Buatlah sebuah class dengan nama `Theater`.
setiap theater akan memiliki properti :
  - id, nomor unik yang dimiliki setiap bioskop.
  - name, nama bioskop.
  - movie, judul film yang diputar di bioskop.
  - customers, by default array kosong

Note :  Data bioskop dapat diambil melalui file `theaters.json` dan format data didalamnya tidak boleh diubah.
- Buatlah sebuah class dengan nama `Customer`, class tersebut akan digunakan untuk membuat calon pelanggan dari sebuah bioskop.
setiap pelanggan akan memiliki properti :
  - id, nomor unik yang akan dimiliki setiap pelanggan.
  - name, nama pelanggan.
  - gender, jenis kelamin pelanggan.
  - ticket, berisi sebuah `object Ticket` yang akan otomatis dibuat setiap ada calon pelanggan yang mendaftar.
Note :  Data pelanggan dapat diambil melalui file `customers.json` dan format data didalamnya tidak boleh diubah.

- Buatlah sebuah class dengan nama `Ticket`, class tersebut akan digunakan untuk membuat tiket yang akan dimiliki oleh setiap pelanggan.
setiap Ticket akan memiliki properti :
  - theaterName, nama bioskop tempat menonton film.
  - type, jenis tiket.
  - movie, judul film yang ditonton.
  - seatNumber, (private) nomor kursi yang akan ditempati di dalam bioskop.

- Berdasarkan `type`-nya, class `Ticket` terbagi atas 3 :
  - Regular
  - IMAX
  - Premiere


Menurut kamu, sifat apa dari OOP yang bisa dimanfaatkan untuk masalah 3 tipe tiket ?
Lalu menurut kamu, apa relasi antara setiap class ? berikan alasannya.

2. Factory Method
Buatlah sebuah class Factory yang bertujuan untuk membuat instance dari class - class yang tersedia.

## Release - 1 - Command List
Buatlah sebuah file dengan nama `app.js`, file tersebut akan menerima perintah dari user.
Berikut ada list perintah dengan format yang harus dibuat :

<img width="498" alt="Screen Shot 2022-07-29 at 16 46 18" src="https://user-images.githubusercontent.com/22075597/181732966-d09e0df2-088d-46e8-b450-69b28b22a5ee.png">

## Release - 2 - Help
Buatlah sebuah perintah untuk menampilkan list command yang tersedia.
Command : node app.js / node app.js help
Contoh output yang harus tampil ketika command dijalankan :
<img width="499" alt="Screen Shot 2022-07-29 at 16 46 59" src="https://user-images.githubusercontent.com/22075597/181733072-ea230b9e-c478-4676-bd41-244223c1477d.png">

## Release - 3 - theaterList
Buatlah sebuah perintah untuk menampilkan semua bioskop yang ada di file theaters.json.
Command : node app.js theaterList
Contoh output yang harus tampil, jika proses menampilkan bioskop berhasil :

<img width="360" alt="Screen Shot 2022-07-29 at 16 47 21" src="https://user-images.githubusercontent.com/22075597/181733133-2ff8dbab-1510-4bc9-98f1-167b0db87b1f.png">

Notes : Kamu bisa memanfaatkan console.table untuk menampilkan data dalam bentuk table

## Release - 4 - customerList
Buatlah sebuah perintah untuk menampilkan semua pelanggan yang ada di file customers.json.
Command : node app.js customersList

<img width="281" alt="Screen Shot 2022-07-29 at 16 47 54" src="https://user-images.githubusercontent.com/22075597/181733224-214f9ca1-9683-4c85-8f67-9326e5ad99a3.png">

## Release - 5 - checkSeat
Sebagai pelanggan yang akan membeli tiket, kita perlu tahu dimana saja kursi kosong.
Buatlah sebuah perintah untuk menampilkan denah tempat duduk yang dimiliki oleh bioskop.
Dimana kursi yang sudah terisi akan diisi dengan simbol X.

Command format : node app.js checkSeat <nomor_theater>
1. Format data yang harus diterima oleh View, sebelum ditampilkan :

<img width="375" alt="Screen Shot 2022-07-29 at 16 48 23" src="https://user-images.githubusercontent.com/22075597/181733307-25c4e62c-46ff-4019-b1fe-86d39af6b431.png">

2. Contoh output yang harus tampil, jika proses berhasil :

<img width="239" alt="Screen Shot 2022-07-29 at 16 49 33" src="https://user-images.githubusercontent.com/22075597/181733514-8c231a6d-bf10-4332-bf67-69a83e21b0a7.png">

