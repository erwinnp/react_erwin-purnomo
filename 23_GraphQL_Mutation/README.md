## **(23) GraphQL Mutation**

### A. Mutation

GraphQL mutation merupakan suatu fitur untuk melakukan insert, delete, dan edit data pada GraphQL.
useMutation ini mengembalikan nilai array yang didalamnya ada Mutate Function dan object.
Mutate function memiliki parameter variables yang akan dimasukkan query dari TypeDefs.

### C. Contoh Mutation

```
mutation addPassanger(
    $jenis_kelamin: String = ""
    $nama: String = ""
    $umur: Int!
  ) {
    insert_list_pengunjung(
      objects: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }
    ) {
      returning {
        id
      }
    }
  }
```

### b. Cara Menggunakan Mutation pada React

```
npm install @apollo/client graphql
import {useMutation} from '@apollo/client'
```
