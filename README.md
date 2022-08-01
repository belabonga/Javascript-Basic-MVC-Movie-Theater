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

# Movie Theater Part 2
## Learning Competencies
- Mampu membuat solusi dari requirement yang diberikan
- Mampu memodelkan sistem dengan menggunakan konsep OOP
- Memahami hubungan antar class (Inheritance, Composition dan Aggregation)
- Mampu menggunakan method chaining
- Mampu menggunakan callback untuk menampilkan data

## Summary
Melanjutkan challenge Movie Theater sebelumnya, mari kita tambahkan kompleksitas dari program kita. Pastikan kamu sudah menggunakan `fs.readFile` dan `fs.writeFile` sejak part 1.

## Release 0 - buyTicket
Buatlah sebuah perintah untuk proses pembelian ticket.
Notes: 
- id milik customer haruslah auto-increment
- Seat number terbatas dari A-1 sampai F-8 (column A-F, row 1-8)

Command : node app.js buyTicket <id_theater> <nama_penonton> <gender_penonton> <seat_number> <ticket_type>

1. Contoh output jika proses pembelian tiket berhasil :
<img width="332" alt="Screen Shot 2022-08-01 at 19 33 09" src="https://user-images.githubusercontent.com/22075597/182148584-db4ae283-ee51-4761-a15e-0f7ed65a969a.png">

2. Contoh output jika proses pembelian tiket gagal, karena id theater tidak ditemukan:
<img width="342" alt="Screen Shot 2022-08-01 at 19 33 14" src="https://user-images.githubusercontent.com/22075597/182148617-130bbb3d-1c42-4a92-8a63-0a0fbcb178c2.png">

3. Contoh output jika proses pembelian tiket gagal, karena kursi sudah ditempati :
<img width="379" alt="Screen Shot 2022-08-01 at 19 34 03" src="https://user-images.githubusercontent.com/22075597/182148692-bf431d75-0168-4c1c-ab92-6656f9c92faf.png">

## Release 1 - ticketInfo
Buatlah sebuah perintah untuk proses menampilkan info dari tiket.
Command : node app.js ticketInfo <id_penonton>

1. Contoh output jika proses menampilkan info tiket berhasil :
<img width="495" alt="Screen Shot 2022-08-01 at 19 34 30" src="https://user-images.githubusercontent.com/22075597/182148839-2164d890-4ac1-4993-8652-d3c86e911b9e.png">

2. Contoh output jika proses menampilkan info tiket gagal, karena id pelanggan tidak ada :
<img width="314" alt="Screen Shot 2022-08-01 at 19 34 36" src="https://user-images.githubusercontent.com/22075597/182148873-0ec99779-235d-4a4c-8ca9-aadcbe6c777f.png">

## Release 2 - changeTicket
Buatlah sebuah perintah untuk melakukan proses penukaran ticket.
Command : node app.js changeTicket <id_penonton> <id_theater> <seat_number>

1. Contoh output jika proses penukaran tiket berhasil :
<img width="355" alt="Screen Shot 2022-08-01 at 19 35 53" src="https://user-images.githubusercontent.com/22075597/182149126-b0f9bbea-603f-42cf-92b4-7812f62729b6.png">

2. Contoh output jika proses penukaran tiket gagal, karena id pelanggan tidak ada :
<img width="314" alt="Screen Shot 2022-08-01 at 19 35 57" src="https://user-images.githubusercontent.com/22075597/182149147-8405f97c-9e6c-400e-8340-f603de279965.png">


3. Contoh output jika proses penukaran tiket gagal, karena id theater tidak ditemukan :
<img width="302" alt="Screen Shot 2022-08-01 at 19 36 02" src="https://user-images.githubusercontent.com/22075597/182149165-48c7eb78-fa4c-4d39-bd2e-613a231458df.png">


4. Contoh output jika proses penukaran tiket gagal, karena kursi di bioskop sudah ditempati :
<img width="370" alt="Screen Shot 2022-08-01 at 19 36 06" src="https://user-images.githubusercontent.com/22075597/182149186-edf6f58c-d1bf-402b-9bbc-1ab032780479.png">

## Release 3 - cancelTicket
Buatlah sebuah perintah untuk menghapus pelanggan.
Command : node app.js cancelTicket <id_penonton>

1. Contoh output jika proses penghapusan pelanggan berhasil :
<img width="252" alt="Screen Shot 2022-08-01 at 19 37 17" src="https://user-images.githubusercontent.com/22075597/182149294-4ed92fd9-5516-430c-aa26-9390cbc62d5f.png">


2. Contoh output jika proses penghapusan pelanggan gagal, karena id pelanggan tidak ditemukan:
<img width="321" alt="Screen Shot 2022-08-01 at 19 37 22" src="https://user-images.githubusercontent.com/22075597/182149325-a55a1729-01e0-4a3b-bdf8-de4d8ec2a1a5.png">

## Release 4 - showCustomer
Sebagai pihak dari perusahaan kita perlu tau data pelanggan kita. Buatlah sebuah perintah untuk menampilkan data tempat duduk beserta nama pelanggan yang menempatinya. 

Setiap pelanggan akan mendapatkan panggilan `Mr.` jika gender nya `Male` dan `Mrs.` jika gender nya `Female`. Untuk menampilkan nama dengan format tersebut, buatlah sebuah instance method.

Command format : node app.js showCustomer <id_theater>
1. Contoh output jika proses menampilkan data berhasil :
<img width="467" alt="Screen Shot 2022-08-01 at 19 38 09" src="https://user-images.githubusercontent.com/22075597/182149496-227a357d-d03a-4e9b-a279-d6c6dbef7ee9.png">

2. Contoh output jika proses menampilkan data berhasil gagal, karena id theater tidak ditemukan 
<img width="316" alt="Screen Shot 2022-08-01 at 19 38 27" src="https://user-images.githubusercontent.com/22075597/182149562-f80acab7-01f7-44e5-ae0f-b06e7c1d6e33.png">
