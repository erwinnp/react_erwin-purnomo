## **(16) React Form**

### A. Form

Form merupakan suatu hal yang dapat menghandle input dari user
Macam element Form :

> - elemen input
> - elemen textarea
> - elemen select

dalam element input terdapat beberapa type yang sering digunakan, yaitu:

> - text
> - button
> - radio
> - checkbox
> - date
> - file
> - password

### B. Controlled Component & Uncotrolled Component

A. Controlled Component, sebuah komponen yang elemen masukan form dengan nilainnya yang dikonrol oleh react dengan menggunakan State.
B. Uncontrolled COmponent, sebuah komponen yang data formnya ditangani oleh DOM-nya, tanpa menggunakan state namun menggunakan ref untuk mendapat nilai form dari DOM.

Uncontrolled component dapat digunakan untuk form dengan upan balik UI yang sederhana, namun kita juga bisa menggunakan controlled component.

### C. Basic Validation React Form

Alasan menggunakan validation :

1. Mencari input data yang benar dan sesuai format
2. Melindungi akun pengguna
3. Melindungi sistem/aplikasi

Tipe valdation :

1. Client-side Validation, validasi yang dilakukan pada sisi klien(browser), terbagi menjadi 2, yaitu :
   a. Built-in-form validation, menggunakan fitur bawaan HTML5 contohnya require, minlength, maxlength, min, max, type, dan pattern
   b. Menggunakan Javascript,
2. Server-side Validation, validasi yang dilakukan pada sisi Server
