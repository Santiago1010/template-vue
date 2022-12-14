# ASSETS

Esta carpeta contiene una variedad de archivos, incluyendo imágenes, scripts, estilos, videos y documentos. Todos estos archivos están relacionados y son importantes para el propósito de la carpeta. Los contenidos de la carpeta pueden ser utilizados juntos o de manera individual, dependiendo de las necesidades del desarrollo. La carpeta es una herramienta valiosa para almacenar y organizar estos archivos de manera eficiente.

Además, se espera que esta carpeta siga siendo utilizada para almacenar los mismos tipos de archivos y que se mantenga organizada en las mismas subcarpetas. Esto permitirá un fácil acceso a los archivos y una organización eficiente. Se recomienda revisar regularmente la carpeta y sus subcarpetas para asegurarse de que están ordenados y se mantienen actualizados.

## Rutas de las subcarpetas
###### @/src/
- assets/
	- documents/
		- docx/
		- pdf/
		- pptx/
		- txt/
		- xlsx/
	- images/
		- backgrounds/
		- favicon/
		- icons/
		- illustrations/
		- logos/
		- photos/
	- scripts/
		- functions/
		- plugins/
		- store/
	- styles/
		- sass/
		- css/
	- videos/

Cabe aclarar que las subcarpetas son sólo una recomendación del orden propuesto para mantener unidad en la creación de las mismas, repercutiendo direcatemente en el manejo del proyecto.

### Reglas de las subcarpetas
1. **Las subcarpetas creadas deben siempre tener un nombre en minúsculas**. Esto se debe a que, en sistemas operativos como Linux y macOS, la distinción entre mayúsculas y minúsculas en los nombres de archivos y carpetas es relevante. Por lo tanto, para evitar confusiones y asegurarnos de que los archivos y carpetas sean reconocidos correctamente por el sistema operativo, es importante seguir esta regla y utilizar exclusivamente minúsculas en los nombres de las subcarpetas.

2. **Los archivos que se deben almacenar deben ser agrupados y sub agrupados de la forma más específica posible, con el objetivo de facilitar su organización y localización**. Por ejemplo, si se pretende guardar un logo, debería seguir la ruta `@/src/assets/images/logos/logo.png`, donde "src" representa la carpeta principal de código fuente, "assets" contiene todos los recursos utilizados por el código (como imágenes, fuentes, etc.), "images" contiene todas las imágenes, "logos" contiene todos los logos y "logo.png" es el archivo del logo en cuestión. De esta forma, se puede acceder fácilmente al archivo desde cualquier parte del código fuente y se garantiza su organización en una estructura lógica y consistente.

3. **Los archivos deben mantenerse agrupados por extensión, incluso si esto implica crear subcarpetas adicionales**. Esto se debe a que, al agrupar los archivos por extensión, se facilita su organización y localización. Por ejemplo, si se tiene una carpeta que contiene imágenes y documentos, se pueden crear subcarpetas para separar las imágenes y los documentos, lo que permitirá acceder a cada tipo de archivo de forma rápida y sencilla. Además, al mantener la misma extensión en una misma subcarpeta, se evita la confusión y se garantiza que se utilicen las herramientas adecuadas para abrir y editar cada tipo de archivo.

### Reglas de los archivos
1. **Las imágenes, especialmente las de formato png, no deberían sobrepasar los 70 KB de espacio en memoria**. Esto se debe a que, al utilizar imágenes de tamaño reducido, se ahorra espacio en el almacenamiento del dispositivo y se reduce el tiempo de carga de la página web o aplicación en la que se utilicen. Además, al utilizar imágenes de menor tamaño, se mejora el rendimiento de la aplicación y se garantiza una experiencia de usuario satisfactoria. Sin embargo, se acepta un máximo de 150 KB para las imágenes, ya que en algunos casos es posible que sea necesario utilizar imágenes de mayor calidad o resolución para garantizar una visualización adecuada en diferentes dispositivos y pantallas.

2. **Los archivos que se almacenen en `@/src/images/icons/` deberían tener una extensión .png o .svg**. Esto se debe a que, en la carpeta "icons", se suelen almacenar imágenes que se utilizan como íconos en una aplicación o sitio web. Los formatos .png y .svg son ideales para este propósito, ya que permiten una calidad de imagen adecuada y un tamaño reducido, lo que se traduce en una mejor experiencia de usuario y un rendimiento óptimo de la aplicación. Además, al utilizar una extensión estándar para los íconos, se facilita su utilización y se garantiza una apariencia consistente en toda la aplicación.

3. **Los archivos que se almacenen en `@/src/assets/scripts/functions/` deben ser scripts exportados (ninguno por defecto) que pueden contener o no importaciones de librerías**. Estos scripts deben estar destinados a ser utilizados en cualquier lugar del proyecto, y su función es proporcionar funcionalidades comunes que pueden ser reutilizadas en diferentes partes de la aplicación. Al exportar los scripts de esta carpeta, se garantiza que sean accesibles desde cualquier parte del código fuente y se facilita su utilización en diferentes contextos. Además, al permitir la importación de librerías en estos scripts, se amplía su capacidad y se facilita la incorporación de funcionalidades avanzadas en la aplicación.

4. **Los archivos que se almacenen en `@/src/assets/scripts/plugins/` deben ser archivos de configuración de algún plugin, librería o módulo instalado**. Estos archivos deben contener la información necesaria para configurar y personalizar el funcionamiento de los plugins, librerías o módulos instalados en la aplicación. Al almacenar los archivos de configuración en esta carpeta, se facilita su localización y se garantiza que estén disponibles para su uso en cualquier momento. Además, al mantener todos los archivos de configuración en una misma ubicación, se evita la confusión y se facilita su gestión y actualización.

5. **Los archivos que se almacenen en `@/src/assets/scripts/store/` deben ser archivos de [pinia](https://pinia.vuejs.org/getting-started.html "pinia"), que almacenan los estados de la aplicación**. [Pinia](https://pinia.vuejs.org/getting-started.html "Pinia") es una librería utilizada en aplicaciones desarrolladas con el framework Vue.js para facilitar la gestión y el mantenimiento de los estados de la aplicación. Los archivos de pinia contienen la información necesaria para definir y controlar los estados de la aplicación, y deben ser almacenados en esta carpeta para su acceso y utilización en cualquier parte del código fuente. Al mantener todos los archivos de pinia en una misma ubicación, se facilita su gestión y se evita la confusión en cuanto a su uso y funcionamiento.


------------

Queridos colaboradores,

Espero que estas reglas sean de utilidad para ustedes y les ayuden a organizar y gestionar los archivos del proyecto de manera eficiente. Agradezco de antemano por su cumplimiento y espero que, con su ayuda, podamos mantener una estructura de archivos consistente y ordenada. Si tienen alguna duda o sugerencia, no duden en hacerla llegar para poder mejorar estas reglas y adaptarlas a las necesidades del proyecto.

Un cordial saludo