## **(13) Event Handling**

### A. State

State merupakan suatu data private component, jadi hanya untuk component tersebut dan tidak bisa digunakan component lain.
Hal penting dalam State:

> - Data bisa dimodifikasi dengan setState
> - Setiap terjadi modifikasi akkan dirender ulang
> - Asynchronous
> - Dipakai dalam class

### B. Statefull & Stateless Component

1. Statefull component adalah sebuah component yang memiliki state dan dibuat dengan class
2. STateless component adalah komponen yang hanya memiliki props, biasanya dibuat dengan function

Perbedaan keduanya :
| Statefull Component| Stateless Component |
|---|---|
| Mengerti tentang aplikasi | Tidak tahu tentang aplikasi |
| Melakukan data fetching | Tidak melakukan data fetching |
| Berinteraksi dengan aplikasi | Tujuannya hanya visualisasi |
| Tidak dapat digunakan kembali | Dapat digunakan kembali |
| Hanya berkomunikasi dengan parentnya langsung | Meneruskan status ke childnya |

### C. Handling Events

Handling events merupakan metode atau aksi dari pengguna ke komponen.
Penulisan Handling Events pada react menggunakan CamelCase.

```jsx
<button onClick={this.yourFunction}>Button</button>
```

Contoh list events :

> - Clipboard Events (Promise terpenuhi)
> - Form Events (onChange, onSubmit)
> - Mouse Events (onClick, onDoubleClick, onMouseHover)
> - Generic Events (onError, onLoad)
