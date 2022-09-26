## **(17) Global State Management and Data Fetching**

### A. Global State Management

Global state management, secara garis besar merupakan pengelolaan data untuk beberapa component dan setidaknya dapat memperbarui data dari komponen manapun. Redux memungkinkan komponen untuk mambaca data dari Redux Store untuk memperbarui data.
Saat yang tepat menggunakan redux :

1. Banyak state untuk untuk beberapa komponen
2. State sering diubah
3. Logic kompleks untuk merubah state
4. Ukuran code base yang besar
5. Perlu tahu bagaimana state akan diupdate

Redux Libs-Tools :

> - React Redux
> - Redux Toolkit
> - Redux DevTools

komponen prnting dalam Redux :

> - Action, untuk memberikan info kepada aplikasi ke store
> - Reducer, untuk mengambil state aplikasi saat itu dan object action lalu mengembalikan state aplikasi tertentu
> - Store, untuk menyimpan state

memakai dan mengubah state menggunakan :

> - Hooks
> - Connect

### B. Fetching Data

Fetching data adalah ketika aplikasi meminta data dari server kemudian serber memberikannya.

Cara Fetching Data di react dapat menggunakan :

1. Fetch API
2. Axios
3. React Query Library

### C. Hasura

Hasura adalah engine dari GraphQL yang digabungkan dengan PosgreSQL. Sehingga, untuk membuat API tidak perlu lagi banyak setup dan banyak kode. Cukup menggunakan Hasura kita sudah bisa delivery API menggukana GraphQL.

Membuat REST API di Hasura :

1. Create
2. Read
3. Update
4. Delete
