### Pasos

1. Correr `pnpm new-catalog [nombre]`. ✅
2. Cambiar el puerto donde levanta dev en el package.json del template. ✅
3. Correr pnpm install. ✅
4. Cargar información del negocio en config.ts. ✅
5. Cambiar la metadata en layout.tsx. ✅
6. Editar `globals.css` con la paleta/branding del cliente. ✅
7. Cargar imágenes y assets. ✅
8. Cargar los textos en dict.json. ✅
9. Cargar los productos en products.json. ✅
10. Cargar el favicon.ico. ✅

### Requisitos

- Logo en png, ico y webp
- Un archivo JSON con apróximadamente 80 productos con el siguiente formato:
  ```json
    {
      "product_id": 935,
      "product_name": "Secarropas a Calor Axel 4.5 Kg",
      "sell_price": 94900,
      "product_description": "* Bajo consumo, con tres programas de secado.",
      "category_id": 3,
      "category_name": "Electrodomésticos",
      "images": ["https://res.cloudinary.com/db8b2c9gb/image/upload/v1770654023/Secarropas%20a%20Calor%20Axel%204.5%20Kl.jpg"]
    }
  ```
- 2 a 6 imágenes de las sucursales, el frente, interior, la gente trabajando o banners de la empresa.