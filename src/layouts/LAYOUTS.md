# LAYOUTS

Un layout en el contexto de Vue.js es una plantilla que se utiliza para estructurar la interfaz de usuario de una aplicación. Un layout suele incluir elementos comunes que se utilizan en varias páginas de la aplicación, como un menú de navegación o un pie de página. Esto permite a los desarrolladores crear aplicaciones con una interfaz de usuario consistente sin tener que repetir el mismo código en cada página.

Para crear un layout en Vue.js, se puede utilizar la directiva `<template>` para definir la estructura HTML de la plantilla y la propiedad components para incluir los componentes que se deseen utilizar dentro del layout. Además, es importante seguir las convenciones de nombres establecidas por Vue.js para nombrar los layouts y los componentes que se utilicen en ellos, ya que esto facilita su reutilización y mantenimiento en una aplicación.

## Rutas de las subcarpetas
###### @/src/
- layouts/

Si bien no se recomiendan subcarpetas, esta es una decisión que compete netamente al equipo de desarrollo, basados en las necesidades del proyecto.

### Reglas de las subcarpetas
1. **Las subcarpetas creadas deben siempre tener un nombre en minúsculas**. Esto se debe a que, en sistemas operativos como Linux y macOS, la distinción entre mayúsculas y minúsculas en los nombres de archivos y carpetas es relevante. Por lo tanto, para evitar confusiones y asegurarnos de que los archivos y carpetas sean reconocidos correctamente por el sistema operativo, es importante seguir esta regla y utilizar exclusivamente minúsculas en los nombres de las subcarpetas.

### Reglas de los archivos
1. **Todos los archivos que contengan layouts de Vue.js deben tener la extensión .vue y seguir el PascalCase para su nombre**. El *PascalCase* es un estilo de escritura que consiste en escribir cada palabra con la primera letra en mayúscula, sin espacios ni guiones. Por ejemplo, un archivo de layout llamado "miLayout" se debería nombrar como "MiLayout.vue". Esto permite a los desarrolladores seguir las convenciones establecidas en Vue.js y facilitar la lectura y mantenimiento del código.

2. ** Todos los archivos que contengan layouts en Vue.js deben ser nombrados primero por su utilización y luego la palabra "layout"**. Por ejemplo, un archivo de layout que será utilizado como el layout principal de la aplicación se debería nombrar como "MainLayout.vue". Esto permite a los desarrolladores identificar rápidamente el propósito de cada archivo y facilitar su mantenimiento y reutilización en la aplicación.

### Recomendaciones

- Para la creación de layouts, se recomienda utilizar el [Layout Builder](https://quasar.dev/layout-builder "Layout Builder") que ofrece [Quasar](https://quasar.dev/start/pick-quasar-flavour "Quasar").
- Mantener siempre las normas de accesibilidad web.

------------

Queridos colaboradores,

Espero que estas reglas sean de utilidad para ustedes y les ayuden a organizar y gestionar los archivos del proyecto de manera eficiente. Agradezco de antemano por su cumplimiento y espero que, con su ayuda, podamos mantener una estructura de archivos consistente y ordenada. Si tienen alguna duda o sugerencia, no duden en hacerla llegar para poder mejorar estas reglas y adaptarlas a las necesidades del proyecto.

Un cordial saludo