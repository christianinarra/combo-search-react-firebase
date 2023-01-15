# Aplicacion Combo Search con react y firebase

Proyecto para reto tecnico de un buscador tipo combo en react que obtenga los datos de firebase

## Variables constantes en la aplicacion

Las variables constantes se encuentran en la ruta src/constants/ColumnDefault.js

- tableName = 'usuario'
- columnSearch = 'nombre' // nombre para la busqueda de la columna
- limitQuery = 20

## Adicionar Usuario

Hay una opcion en el buscador como primer elemento que permite adicionar usuarios en firebase

## Paginacion

Al momento de obtener registros mayores al limite definido defecto 20 en el scroll al llegar al final se carga la siguiente pagina dentro de los mismos resultados

## Busqueda

Las busquedas en firebase son case sensitive la buqueda debe ser tal cual esta en la DB para poder obtener los datos

## Capturas

Las capturas estan subidas en src/capturas

## Desplegue en docker

Hay que realizar los siguientes pasos, tener levantado el docker ejecutar:

### `docker build -t combo-search .`
### `docker run -d -p 3000:3000 combo-search`