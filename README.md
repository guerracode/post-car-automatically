[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Post Cart Automatically</h1>

  <p align="center">
    Projecto creado por: </br> <strong> Jose Luis Chavez Guerra </strong>
    <br />
    <br />
    ·
    <a href="https://github.com/guerracode/post-cart-automatically/issues">Report Bug</a>
    ·
    <a href="https://github.com/guerracode/post-cart-automatically/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Sobre el proyecto

- API creada para automatizar la publicación de carros en la pagina seminuevos.com .
- Aplicación Web para ingresar el precio y descripción de la publicación del carro.

El sistema se encarga de ir a la pagina seminuevos.com iniciar sesion y hacer la publicacion, todo automáticamente.
<br>
<br>

### Construido con

Estas son las principales tecnologias principales usadas en el proyecto:

- Node
- Express
- Puppeteer
- React
- Material-UI

### Ejemplo de la Publicación que se realiza automáticamente:

<img src="./api/src/assets/screenshots/screenshot.png" alt="Base de Datos">
</br>
</br>
<!-- GETTING STARTED -->

## Probar el proyecto

El proyecto se encuentra como un monorepo, por lo cual la API y la pagina estan en el mismo repositorio.

### Pasos

- Clonar el repositorio.

```bash
  git clone https://github.com/guerracode/post-cart-automatically.git
```

- Ingresar a la carpeta.

```bash
  cd post-cart-automatically
```

- Abrir otra pestaña de la terminal en la misma carpeta.
- En la primera pestaña vamos a iniciar la API, ingresar estos comandos en orden:

```bash
  cd api
  npm install
  npm run start
```

Eso iniciará la API en el puerto 3000

- En el archivo **.env** vamos a ingresar el **Email** y la **Contraseña** con la que inicias session directamente en seminuevos.com. ( si requieres mi cuenta para hacer pruebas, favor de contactarme ).

- En la segunda pestaña vamos a iniciar la pagina, ingresar estos comandos en orden:

```bash
  cd page
  npm install
  npm run start
```

Eso iniciara la pagina en el puerto 8080

- Ingresamos a la pagina poniendo la siguiente URL en el Navegador: <br> http://localhost:8080/

- Ahi ya esta listo para ingresar los datos que se piden y publicar automáticamente en seminuevos.com .

<!-- CONTRIBUTING -->
</br>
</br>
</br>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Jose Luis Chavez - [@guerracode](https://twitter.com/guerracode) - josephsiul15@gmail.com

Project Link: [GitHub](https://github.com/guerracode/post-cart-automatically)

<!-- LINKS -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/guerracode/therapy-agenda/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jose-luis-chavez/
