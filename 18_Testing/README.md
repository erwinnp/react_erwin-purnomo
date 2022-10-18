## **(18) Testing**

### A. Testing

Teting merupakan proses memverifikasi test assertions benar dan code tetap benar didalam aplikasi, test assertions adalah suatu ekspresi boolean yang mereturn nilai true kecuali ada bug.

Manfaat testing :

> - Coverage yang baik dapat meningkatkan confident ketika harus mengubah suatu bagian dari aplikasi
> - Mengurangi bug pada aplikasi
> - Mempersingat waktu QA

Kategori testing :

> - Unit Tests
> - Integration Tests
> - End to End Tests

### B. Tools Testing

Tedapat beberapa tools untuk testing yang sering digunakan, yaitu :

1. Jest
2. React Testing Library

### C. Testing RTL & Custom Hooks

RTL atau React Testing Library memungkinkan untuk merender file JSX apapun yang dibutuhkan, setelah itu akses ke komponen akan dapat ditest.
Testing juga dapat dilakukan pada Custom Hooks menggunakan library React Hooks Testing Library, cara installnya :

```
npm install -D @testing-library/react-hooks
```

atau

```
yarn add -D @testing-library/react-hooks
```
