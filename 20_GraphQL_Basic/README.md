## **(20) GraphQL Basic**

### A. GraphQL

GraphQL adalah bahasa query untuk sebuah API, dan server-side runtime untuk menjalankan queries menggunakan type system yang didefinisikan untuk sebuah data, dengan GraphQL kita bisa memperkecil jumlah data yang dibutuhkan dan ditransfer lewat network.
GraphQL bisa single end point (/endpoint) untuk semua request yang diperlukan.

### B. Fitur Utama GraphQL

1. Query, untuk mendapatkan data berdasarkan query yang didefinisikan
2. Mutation, untuk insert, delete, update
3. Subscription, untuk mendapatkan update data real-time.

### C. Basic Query GraphQL

1. Query

```
{
  query getDatas{
    datas {
      id
      name
      age
    }
  }
}
```

2. Mutation

a. Insert

```
mutation insertData{
  insert_data(
    objects: {
      name: "Erwin",
      age: 19
    }
  ) {
    returning{
      id
    }
  }
}
```

b. Update

```
mutation updateData($id: Int, $name: String, $age: Int){
  update_data(
    where: {id: {_eq: $id}}, _set: {name: $name, age: $age}
  ) {
    returning{
      id
      name
      age
    }
  }
}
```

c. Delete

```
mutation deleteData($id: Int){
  delete_data(
    where: {id: {_eq: $id}}}
  ) {
    returning{
      id
      name
      age
    }
  }
}
```

3. Subscription

```
subscription subsData{
  datas {
      id
      name
      age
  }
}
```

### C. Hasura & Heroku

Hasura merupakan sebuah service yang menawarkan GraphQL dan REST API.
Heroku adalah cloud platform yang support beberapa bahasa pemrograman dan juga menawarkan postgres database

### D. Apollo

Appolo Client merupakan state management library untuk React yang luas dan bisa untuk memanajemen local dan remote data dengan GraphQL.
Digunakan untuk Fetch, cache, dan modify data aplikasi dan otomatis mengupdate UI.
Appolo Client dapat berjalan baik dengan semua GraphQL server contohnya Hasura, Apollo Server, dll.
