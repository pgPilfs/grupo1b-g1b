# PROYECTO PIL 2021 | AULA 1 GRUPO B

![Logo PILMONEY](Frontend/src/assets/logo/PILMONEY-logo.png)

### INTEGRANTES:

- Juncos, Lautaro.
- Otero, Juan.
- Rinaudo, Eleana.
- Visintini, Juan.

### Programas necesarios: 
- Angular CLI
- Node JS
- Visual Studio 2019
- SQL Server 

## FRONTEND

### Requisitos:

Instalar Angular CLI global 

```
npm install -g @angular/cli
```



### Desarrollo :
Desde la la terminal necesitamos instalar las dependencias, en la carpeta Frontend
```
cd Frontend
```

Instalar [Node.js](https://nodejs.org/es/)
```
npm install -g npm
```
```
npm install
```

## BACKEND
Para la Base de Datos, utilizamos **SQL Server**. El script de nuestra base de datos se encuentra en:
```bash
├── bd
    └── script.sql
```

En el programa **Visual Studio 2019**, abrir el proyecto que se encuentra en la carpeta: 

```
WebApplication/WebApplication.snl
```

Dentro del Proyecto, modificar el `web.config` para la conexión con la Base de Datos.
```c#
<connectionStrings>
      <add name="ZZZZZ" connectionString="Data Source=XXXXXX;Initial Catalog=YYYYYY;Integrated Security=True" providerName="System.Data.SqlClient" />
</connectionStrings>
```

En su código deben modificar las siguientes variables: 

- XXXXXX = El nombre de la cadena de conexión de SQL Express

- YYYYYY = El nombre de la Base de Datos, el script de nuestra base de datos se encuentra en ` bd/script.sql `

- ZZZZZZ = El nombre local de la Base de Datos dentro del entorno de Visual Studio

Después de configurar, agregamos el paquete **NuGet CORS** en 

`Herramientas -> Administrar paquetes de Nuget -> Consola del Administrador de Paquetes` 

e Instalar en la consola:

```
Install-Package Microsoft.AspNet.WebApi.Cors
Install-Package JWT -Version 8.4.2
```

¡ y LISTO 🎉 ! Solamente falta correr el **Visual Studio 2019**  y ejecutar en la Terminal de Angular la siguiente línea:

```
ng serve -o
```

## DEMO

![Home](https://s9.gifyu.com/images/homec83959dca9ee75fc.gif)








