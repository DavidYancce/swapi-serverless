## Arquitectura
El siguiente diagrama muestra como se estructura la aplicación propuesta:

![image info](https://i.ibb.co/m6LY4xR/swapi-serverless.jpg)
## Funcionalidades 
### Primarias
La aplicación cuenta con 3 endpoints (1 integrando SWAPI y 2 integrando DynamoDB), cada uno con una funcionalidad:

[GET] /starships: Obtener todos los starships de la API SWAPI y traducir los campos al español.

[POST] /starships/spanish: Crear starships en español y guardarlos en una Tabla de DynamoDB.

[GET]  /starships/spanish: Obtener los starships almacenados en la Tabla de DynamoDB

### Secundarias
- Se usó serverless framework como herramien de IaC
- La aplicación usa el [2do framework más usado de NodeJS](https://share.stateofjs.com/share/prerendered?localeId=en-US&surveyId=state_of_js&editionId=js2023&blockId=backend_frameworks&params=&sectionId=other_tools)
- Al usar NestJS como framework se manejan buenas prácticas como 
  - Inyeccion de dependencias.
  - Modulos con responsabilidades únicas.
  - Uso de typescript.
- Se usan ESlint y Prettier que mejoran la consistencia y calidad del código, automatizando el formateo y detectando errores, lo que facilita el mantenimiento y colaboración.
- Se documentaron los endpoints haciendo uso del estandar Open API con la herramienta Swagger

## Deploy
Para el despliegue de esta arquitectura se requieren tener instalados:
- AWS CLI
- Serverless framework v4

El siguiente comando desplegará los recursos en la region 'us-east-1' y stage 'dev'

```
sls deploy
``` 

Si se quieren modificar estos valores se debe de modificar el comando a:

```
sld deploy --stage prod --region us-west-1
```
