## **(12) React Fundamental**

### A. JSX (Javascript XML)

Merupakan ekstensi javascript yang memiliki syntax seperti HTML namun dalam file JS

```jsx
const myName = <h1>Nama saya Erwin</h1>;
```

expression JS yang valid juga dapat ditambahkan ke dalam JSX

```jsx
const myName = 'Erwin';
const showName = <h1>Nama saya {myName}</h1>;
```

### B. React Komponen

Merupakan sebuah kode yang dapat digunakan kembali untuk tampilan, behavior, atau state pada UI
Terdapat 2 react komponen, yaitu :

> - Class Component
> - Functional Component

### C. Props & Komposisi Komponen

Props merupakan sebuah properties yang dapat memgirimkan data pada komponen dan bersifat dinamis
Kompsisi Komponen pada react diantaranya :

> - Kontainmen
> - Spesialisasi

### D. React Lifecycle

Terdapat 4 method lifecyle yang umum di react, yaitu :

> - render(), harus pure function dan tidak ada setState
> - componentDidMount(), komponen dirender ketika pertama kali
> - componentDidUpdate(), komponen dirender ketika terjadi update
> - componentWillUnmount(), komponen dirender ketika komponen dicopot

Terdapat 3 method react lifecyle lainnya, yaitu :

> - shouldComponentUpdate()
> - static getDerivedSTateFromProps()
> - getSbapshotBeforeUpdate()

### E. Conditional Render & List

Conditional render digunakan untuk merender bagian komponen tertentu sesuai state dari aplikasi react
Cara merender list/array/object dapat dilakukan dengan method .map dan memasukkan ke JSX dengan kurung kurawal,
dalam merender list/array/object juga perlu adanya Key yang berfungsi sebagai indentifikasi.

### F. Directory Structure

Terdapat 2 cara pengelolaan direktori pada react JS, yaitu :

> - Pengelompokan berdasarkan fitur atau rute
> - Pengelompokan berdasarkan jenis file

### G. Styling React

Ada beberapa cara untuk styling react, yaitu :

1.  Classes dengan file css, dengan menambahkan className pada JSX

```css
/* App.css */
.wrapper {
  background-color: #000;
}
h1 {
  color: #fff;
}
```

```jsx
//App.jsx
import './App.css
function App() {
  return(
    <div className='wrapper'>
      <h1>Nama saya Erwin</h1>
    </div>
  );
}

export default App;
```

2.  Atribute style, langsung menambahkan styling pada JSX tanpa file terpisah

```jsx
function App() {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h1>Nama saya Erwin</h1>
    </div>
  );
}

export default App;
```

3.  Dengan mengunnakan module.css

```jsx
import style from './Typography.module.css';

function App() {
  return (
    <div>
      <h1 className={style.title}>Nama saya Erwin</h1>
    </div>
  );
}

export default App;
```
