## **(19) Deployment**

### A. Deployment

Deployment merupakan suatu proses yang bertujuan untuk membuat aplikasi yang live atau dapat dilihat dan diakses public.

Terdapat beberapa cara untuk deployment, diantaranya :

1. Deployment dengan Surge, surge merupakan layanan penerbit web static gratis dengan sub domain \*.surge.sh.
   Cara installnya:
   ```
   npm i --global surge
   ```
2. Deployment dengan Netlify, netlify merupakan salah satu platform yang menyediakan build tools sekaligus continous deployment. Netlify bisa terintegrasi langsung dengan akun github, gitlab, dan bibucket
   Cara installnya :
   ```
   npm i netlify-cli -g
   ```

### B. Build React App

Sebelum melakukan deploy aplikasi React, build react app ini akan membuat versi produksi didalam folder build yang akan dideploy.
untuk CRA, berikut commandnya :

```
npm run build
```
