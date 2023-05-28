# Estructura
- api/
- controllers/
    - getHotel.js
    - getReservation.js
- models/
    - Hotel.js
- routes/
    - hotel.route.js
    - index.js
    - reservations.route.js
- config/
  - db.js
  - app.js
- node_modules/
- .gitignore
- package.json
- README.md
- index.js
# API MERN

Esta API MERN (**MongoDB**, **Express**, **React**, **Node.js**) es la herramienta perfecta para comprender y dominar las tecnologías clave en el desarrollo de aplicaciones NoSQL. A través de este proyecto, proporciono un entorno de aprendizaje interactivo y práctico, brindando a los usuarios la oportunidad de experimentar con el uso de ****Mongoose****, **Express**, **MongoDB** y **Node.js** en un solo lugar. 

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
## Introduccion 

Introducción a NoSQL: Explorando las Diferencias y la Transición de **PostgreSQL** y **Sequelize** a **MongoDB** y **Mongoose**

En el mundo de las bases de datos, el modelo relacional de SQL ha sido ampliamente utilizado durante décadas. Sin embargo, con la explosión de datos no estructurados y la necesidad de escalabilidad, ha surgido una nueva alternativa: NoSQL (Not Only SQL). Exploraremos las diferencias clave entre SQL y NoSQL, centrándonos en la transición de **PostgreSQL** y **Sequelize** hacia **MongoDB** y **Mongoose**.

## Estructura de Datos y Modelado

El primer contraste evidente entre SQL y NoSQL radica en su estructura de datos. Mientras que SQL utiliza tablas con filas y columnas para organizar la información, NoSQL emplea un enfoque más flexible, aprovechando distintos formatos de almacenamiento, como documentos, grafos o pares clave-valor. Este enfoque no estructurado de NoSQL permite adaptarse rápidamente a cambios en los requisitos y brinda mayor libertad en el diseño de la base de datos.

## Manejo de Relaciones

Otra diferencia fundamental entre ambos modelos es la forma en que manejan las relaciones entre los datos. SQL se basa en las relaciones explícitas a través de claves primarias y foráneas para establecer conexiones entre tablas. Por otro lado, NoSQL evita las restricciones de integridad referencial y adopta un enfoque más desnormalizado, permitiendo la duplicación de datos cuando sea necesario. Esto mejora la velocidad de lectura y reduce la necesidad de realizar consultas complejas, pero puede requerir una mayor gestión de la consistencia en el desarrollo de la aplicación.

## Transición de **PostgreSQL** y **Sequelize** a **MongoDB** y **Mongoose**

Centrándonos en la transición de **PostgreSQL** y **Sequelize** a **MongoDB** y **Mongoose**, es esencial comprender las diferencias específicas entre estos sistemas. **PostgreSQL**, una popular base de datos relacional, se caracteriza por su confiabilidad y soporte completo de SQL. Sus características incluyen transacciones ACID, consultas complejas y una amplia gama de tipos de datos. **Sequelize**, por otro lado, es un ORM (Object-Relational Mapping) de **Node.js** que facilita la interacción con **PostgreSQL** y otros motores de base de datos relacionales.

Para migrar de **PostgreSQL** y **Sequelize** a **MongoDB** y **Mongoose**, es necesario adaptarse a una nueva mentalidad y paradigma de diseño. **MongoDB**, una base de datos NoSQL líder, se basa en el almacenamiento de documentos JSON-like llamados "colecciones". En lugar de tablas, las colecciones pueden contener documentos con estructuras flexibles y campos variables. Esto permite una mayor escalabilidad horizontal y un almacenamiento eficiente de datos no estructurados.

**Mongoose**, una biblioteca de modelado de objetos de **MongoDB** para **Node.js**, se convierte en una herramienta esencial para la transición. Proporciona una capa de abstracción sobre **MongoDB**, permitiendo definir esquemas y modelos para organizar y validar los datos. Además, **Mongoose** ofrece funciones avanzadas, como población de referencias y validación de datos, que facilitan la interacción con **MongoDB**.

## Flexibilidad y Consultas

Un aspecto importante a considerar en la transición a **MongoDB** y **Mongoose** es la flexibilidad del esquema. A diferencia de **PostgreSQL** y **Sequelize**, donde se definen esquemas rígidos antes de insertar datos, en **MongoDB** y **Mongoose**, los esquemas pueden ser más dinámicos. Esto significa que se pueden agregar o eliminar campos en los documentos sin necesidad de realizar cambios en el esquema. Sin embargo, es esencial mantener la coherencia en la estructura de los datos para evitar problemas en la aplicación.

Otro punto clave es la consulta de datos. En **PostgreSQL** y **Sequelize**, las consultas SQL complejas son la norma. En **MongoDB**, las consultas se realizan utilizando el poderoso lenguaje de consultas de **MongoDB**, que permite buscar documentos utilizando criterios de coincidencia, proyecciones, agregaciones y más. La capacidad de realizar consultas más flexibles y anidadas en **MongoDB** brinda una mayor agilidad en el desarrollo de aplicaciones y puede resultar en un mejor rendimiento en escenarios específicos.

## Conclusiones

En resumen, la transición de **PostgreSQL** y **Sequelize** a **MongoDB** y **Mongoose** implica comprender las diferencias fundamentales entre SQL y NoSQL, así como adquirir nuevas habilidades y enfoques de diseño. El cambio hacia NoSQL brinda una mayor flexibilidad, escalabilidad y velocidad en el manejo de datos no estructurados. **MongoDB** y **Mongoose** se han convertido en opciones populares para aquellos que buscan aprovechar los beneficios de NoSQL, y su dominio ofrece nuevas oportunidades para desarrolladores y profesionales de bases de datos.

A medida que el panorama tecnológico evoluciona, es esencial adaptarse y aprender nuevas tecnologías como NoSQL. La transición de SQL a NoSQL puede ser desafiante, pero con dedicación y una comprensión sólida de las diferencias clave, es posible aprovechar al máximo las ventajas que ofrecen **MongoDB** y **Mongoose**. Al hacerlo, los profesionales de bases de datos podrán enfrentar los desafíos actuales y futuros, y construir aplicaciones modernas y escalables.

¡Explora el mundo de NoSQL y descubre un nuevo nivel de flexibilidad y rendimiento en el manejo de datos!


## Ejemplos 
A continuación, te proporcionaré ejemplos básicos de código para diferenciar entre estas tecnologías. Ten en cuenta que estos son solo ejemplos básicos y es posible que necesites adaptarlos a tus necesidades específicas.

Código de conexión y consulta en PostgreSQL utilizando Sequelize:

```javascript
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Definición del modelo
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Consulta básica
User.findAll().then(users => {
  console.log(users);
});
```

Código de conexión y consulta en MongoDB utilizando Mongoose:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del esquema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);

// Consulta básica
User.find({}, (err, users) => {
  console.log(users);
}); 
```


## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Ve al directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Define las variables de entorno necesarias en el archivo `.env`. Por ejemplo:
¡Claro! Aquí tienes un ejemplo de cómo podría ser la estructura básica de un archivo README.md para tu proyecto:


## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Ve al directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Define las variables de entorno necesarias en el archivo `.env`. Por ejemplo:

PORT=3001
MONGO_URL=MongoDB://localhost:27017/nombre-de-la-base-de-datos

## Uso

1. Inicia el servidor: `npm start`
2. Accede a la aplicación en tu navegador: `http://localhost:3001`

## Endpoints

- `GET /hotel`: Obtiene todos los hotel.
- `GET /hotel/:id`: Obtiene un hotel por su ID.
- `POST /hotel`: Crea un nuevo hotel.
- `PUT /hotel/:id`: Actualiza un hotel existente.
- `DELETE /hotel/:id`: Elimina un hotel por su ID.

## Contribución

1. Haz un fork de este repositorio.
2. Crea una rama para tu nueva función: `git checkout -b nueva-funcion`
3. Realiza tus cambios y commitea los archivos modificados: `git commit -am 'Agrega nueva función'`
4. Empuja tus cambios a tu repositorio: `git push origin nueva-funcion`
5. Abre un Pull Request en este repositorio.


