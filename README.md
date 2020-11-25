# Test 4

Actualizado a las Ultimas versiones por bugs de seguridad.

**Consola para ver los eventos**:
```
    > At second 0: {type: "InitVideo", message: "init video 1"}
    > At second 1: {type: "ShowLayer", message: "show layer 1"}
    > At second 6: {type: "StopVideo", message: "stop video 1"}
    > At second 6: {type: "ShowLayer", message: "show layer 2"}
    > At second 8: {type: "ShowLayer", message: "show layer 3”}
``` 


**Usage**:

En SunMedia necesitamos que todo nuestro código sea cross-browser por lo que debemos usar herramientas como webpack que nos facilitan esta tarea. El código que proporcionamos ya consta de un archivo de configuración de webpack con una build de desarrollo que te ayudará en la realización de esta prueba. 

Para empezar a instalar las dependencias:
- `npm install`

Para ejecutar el servidor de pruebas:
- `npm run watch`
