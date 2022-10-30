## **(24) GraphQL Subscription**

### A. Subscription

Subscription merupakan fitur GraphQL yang dapat mendapatkan data dari server kepada client secara real time, Subscription selalu diimplementasikan dengan WebSockets.
Ketika data dimodifikasi seperti dihapus, edit, atau ditambahkan maka client akan mendapat update secara real time. Artinya Subscription hanya terjadi pada client side tidak untuk server side.

### B. Kapan Menggunakan Subscription

1. Small, incremental changes to large objects
2. Low-latency, real-time updates

### C. Cara Install

1. Install librarynya :

```
npm install @apollo/client subscriptions-transport-ws
```

tetapi dari dokumentasi menganjurkan untuk install :

```
npm install graphql-ws
```

2. Inisialisasi GraphQLWsLink
3. Split communication by operation (recommended)
4. Link chain ke Apollo Client
5. Setting Auth
