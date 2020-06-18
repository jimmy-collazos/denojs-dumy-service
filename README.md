# Servicio de juguete con [Deno](https://deno.land/manual)

Este es un servicio de lo más básico para ver como funciona [Deno](https://deno.land/manual).

Puntos interesantes:
  * Sistema de permisos que se definen en la ejecución del programa
  * La inyección de dependencias está muy bien. Muy al estilo Go, Rust, ...
  * Tiene un flag extra para usar paquetes en remoto que tienen un estado "inestable" ([link](https://deno.land/manual/runtime/stability))
  * Se extraña mucho el `package.json` para lanzar los scripts. Actualmente hay que lanzarlo a mano y acordarse de los permisos

## Run

```sh
deno run --allow-read --allow-net app.ts
```