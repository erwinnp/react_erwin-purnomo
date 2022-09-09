## Problem 1 - Analisis

Ada beberapa kesalahan dalam penulisan kode, berikut bagiannya :

1. Penulisan class seharusnya Pascal Case sehingga menjadi :

```
class User{

}
class UserService{

}
```

2. Penulisan method lebih baik menggunakan CamelCase sehingga, menjadi :

```
getAllUserId{

}
getUserById{

}
```

3. Seharusnya pendeklarasian variable pada class User{}, menggunakan constructor kemudian mengaksesnya menggunakan this.properties
4. Pada child class sebaiknya menggunakan extends parent class, agar bisa mengakses properties dari parent class
5. Ada beberapa kode yang tidak bisa dibaca Javascript, yaitu :

```
user[] users = [];

user[] getallusers[];
```

6. Kurang this.properties pada saat mereturn users pada method getallusers().
7. kurang this pada method getuserbyid dan harus menggunakan callback pada method filter, menjadi :

```
return this.users.filter((user) => user === userId);
```
