<template>
	<q-card class="delete q-ma-md q-pa-md">
		<h1 class="code-line" data-line-start=0 data-line-end=1>VUE TEMPLATE</h1>

		<p>Este proyecto es una <strong>plantilla</strong> para aplicaciones desarrolladas con Vue.js. Incluye un conjunto de librerías, componentes y páginas que facilitan el desarrollo de aplicaciones con Vue.js. la plantilla utiliza librerías y módulos como <a href="https://www.primefaces.org/primevue/" title="PrimeVue">PrimeVue</a>, <a href="https://quasar.dev/" title="Quasar">Quasar</a>, <a href="https://pinia.vuejs.org/getting-started.html" title="Pinia">Pinia</a>, <a href="https://axios-http.com/" title="Axios">Axios</a>, <a href="https://cryptojs.gitbook.io/docs/" title="CryptoJS">CryptoJS</a>, <a href="https://greensock.com/docs/" title="GSAPSAP">GSAP</a>, <a href="https://router.vuejs.org/" title="Vue Router">Vue Router</a>, entre otros.</p>

		<p>La <strong>plantilla</strong> está diseñada para ser fácilmente personalizable y extensible, permitiendo a los desarrolladores ahorrar tiempo y esfuerzo al crear sus aplicaciones. Las librerías, componentes y páginas incluidas en la plantilla están probadas y optimizadas para ofrecer un rendimiento óptimo en diferentes dispositivos y navegadores. La plantilla también incluye un conjunto completo de herramientas de desarrollo y documentación para ayudar a los desarrolladores a comenzar rápidamente y de manera eficiente.</p>

		<h2 class="code-line">Funciones relevantes</h2>

		<p><strong>La plantilla</strong> utiliza ciertas funciones “externas” para su correcto funcionamiento, por lo que en esta sección, se procederá a explicar cómo funcionan cada una de estas.</p>

		<ul>
			<li><strong>AES.js:</strong> Esta función, se encarga de generar una encriptación desde el lado del cliente y que posteriormente será utilizada para enviar información encriptada.</li>
			<li><strong>Security.js:</strong> Esta función se encarga de gestionar la seguridad desde el lado del cliente; recibiendo y enviando información encriptada con SHA256 y parseando el JWT recibido desde el servidor.</li>
		</ul>

		<blockquote>
			<p>Estas 2 funciones se pueden encontrar en la ruta: <code>@src/assets/functions/</code></p>
		</blockquote>

		<ul>
			<li><strong>axios.js:</strong> Este archivo genera una constante que contiene la ruta base para consumir la API de la aplicación.</li>
			<li><strong>router.js:</strong>  En este archivo se almacenan las configuraciones de las rutas manejjadas en la aplicación.</li>
		</ul>

		<blockquote>
			<p>Estas 2 funciones se pueden encontrar en la ruta: <code>@src/assets/plugins/</code></p>
		</blockquote>

		<ul>
			<li><strong>rulesStore.js:</strong> Función que almacena y gestiona el estado de las reglas en toda la aplicación.</li>
		</ul>

		<blockquote>
			<p>Estas función se puede encontrar en la ruta: <code>@src/assets/store/</code></p>
		</blockquote>

		<h2 class="code-line">Librerías</h2>

		<p>Las librerías son componentes de código que nos permiten aprovechar el trabajo de otros desarrolladores y ampliar las funcionalidades de nuestro proyecto de software. En esta sección, enumeraremos y explicaremos las librerías utilizadas en nuestro proyecto, detallando para qué se utilizan y cómo se integran en nuestro código. Esto nos permitirá conocer mejor las herramientas que estamos utilizando y cómo aprovechar al máximo su potencial.</p>

		<ul>
			<li><strong><a href="https://quasar.dev/" target="_BLANK" title="Quasar">Quasar</a>:</strong> Es un framework de UI y UX basado en VueJS. En este proyecto, es utilizado como la principal fuente de componentes y estilos.</li>
			<li><strong><a href="https://axios-http.com/" target="_BLANK" title="Axios">Axios</a>:</strong> Axios es una librería de JavaScript que se utiliza para realizar solicitudes HTTP de manera sencilla y eficiente. En la aplicación es la principal forma de consumir la API de la aplicación.</li>
			<li><strong><a href="https://cryptojs.gitbook.io/docs/" target="_BLANK" title="CryptoJS">CryptoJS</a>:</strong> Es una librería que permite hacer encriptaciones y codificaciones desde JavaScript. Para este proyecto, es utilizado para encriptar la contraseña, descifrar wl JWT y demás.</li>
			<li><strong><a href="https://greensock.com/gsap/" target="_BLANK" title="GSAP">GSAP</a>:</strong> Es una biblioteca de animación JavaScript que se utiliza para crear animaciones en sitios web y aplicaciones móviles. En el proyecto, es utilizado para realizar ciertas animaciones menores en la menor cantidad de tiempo de ejecución posible.</li>
			<li><strong><a href="https://pinia.vuejs.org/" target="_BLANK" title="Pinia">Pinia</a>:</strong> Es una librería avanzada de manejo de estado adaptada especialmente para Vue. En este proyecto, es utilizado para la gestión de estado.</li>
			<li><strong><a href="https://www.primefaces.org/primevue/" target="_BLANK" title="PrimeVue">PrimeVue</a>:</strong> PrimeVue es un componente de interfaz de usuario basado en Vue.js que se utiliza para crear aplicaciones web modernas y atractivas. En el proyecto es utilizado como fuente de componentes adicional.</li>
		</ul>

		<h2 class="code-line">Carpetas y archivo que se descargan por defecto</h2>

		<a href="https://i.imgur.com/Rzlnhz8.png" title="Árbol de archivos y carpetas" target="_BLANK"><img src="https://i.imgur.com/Rzlnhz8.png" alt="Árbol de archivos y carpetas" title="Árbol de archivos y carpetas"></a>

		<h2 class="code-line">Archivos de configuración</h2>

		<p>Los <strong>archivos de configuración</strong> son archivos especiales que contienen la información necesaria para configurar una aplicación o sistema. En un entorno de plataforma web cliente, los archivos de configuración pueden contener información como la ruta del servidor backend, la configuración de autenticación y autorización, o la configuración de opciones de desarrollo. Esta información se utiliza por la aplicación web cliente para interactuar con el servidor backend y proporcionar la funcionalidad deseada. Los archivos de configuración también se pueden utilizar para establecer opciones de configuración de la aplicación, como el idioma predeterminado o la apariencia de la interfaz de usuario.</p>

		<h3 class="code-line">.env.example</h3>

		<p>Un archivo <strong><em>.env.example</em></strong> es un archivo de muestra que se utiliza para proporcionar una plantilla para un archivo de configuración llamado <strong><em>.env</em></strong>. Este archivo contiene un conjunto de <strong>variables de entorno y sus valores predeterminados</strong>, que pueden ser utilizados por una aplicación para configurarse y funcionar correctamente. El archivo <strong><em>.env.example</em></strong> se utiliza como plantilla para crear un archivo <strong><em>.env</em></strong> real que contenga los valores de configuración específicos para un entorno de desarrollo o producción. Una vez que se ha creado el archivo <strong><em>.env</em></strong>, reemplaza al archivo <strong><em>.env.example</em></strong> y se utiliza en su lugar.</p>
		<p>Un archivo <strong><em>.env</em></strong> es un archivo de configuración que contiene un conjunto de variables de entorno y sus valores. Este archivo se utiliza para configurar una aplicación y permitir que funcione correctamente en un entorno de desarrollo o producción específico. Los valores de configuración contenidos en el archivo .env se cargan en la aplicación cuando se inicia, y se utilizan para configurar opciones como la ruta del servidor backend, la configuración de autenticación y autorización, y la configuración de opciones de desarrollo. El archivo <strong><em>.env</em></strong> también se puede utilizar para establecer opciones de configuración de la aplicación, como el idioma predeterminado o la apariencia de la interfaz de usuario.</p>

		<blockquote class="cita">
			<p>Recuerda que el archivo <em>.env</em> que crearás debe estar en la carpeta raíz del proyecto para que <a href="https://vitejs.dev/guide/env-and-mode.html" title="vite.js">vite.js</a> lo pueda reconocer.</p>
		</blockquote>

		<h3 class="code-line">.editorconfig</h3>

		<p>Un archivo <strong><em>.editorconfig</em></strong> es un archivo de configuración que se utiliza para establecer y mantener un conjunto uniforme de reglas de formateo y estilo para los archivos de un proyecto de desarrollo de software. Estas reglas pueden incluir cosas como la longitud máxima de línea, la indentación, el uso de espacios o tabs, o el estilo de comentario. El archivo <strong><em>.editorconfig</em></strong> se utiliza para asegurarse de que todos los desarrolladores que trabajan en un proyecto utilicen el mismo conjunto de reglas de formateo y estilo, lo que facilita la lectura y el mantenimiento del código fuente. Muchos editores de código y herramientas de desarrollo tienen soporte para <strong><em>.editorconfig</em></strong> y pueden leer y utilizar las reglas contenidas en el archivo para formatear y estilizar automáticamente el código.</p>

		<p>En el <strong><em>.editorconfig</em></strong> de este proyecto, se deben seguir las siguientes reglas:</p>

		<ol>
			<li>La opción <code class="in_line">end_of_line</code> se establece en <strong>“lf”</strong>, lo que significa que el carácter de fin de línea deberá ser un salto de línea (LF) y no un retorno de carro (CR) o un retorno de carro y salto de línea (CRLF).</li>
			<li>La opción <code class="in_line">insert_final_newline</code> se establece en <strong>“false”</strong>, lo que significa que los archivos no deben contener una línea en blanco al final del contenido.</li>
			<li>La opción <code class="in_line">indent_style</code> se establece en <strong>“tab”</strong>, lo que significa que la indentación en el código deberá ser realizada mediante la utilización de caracteres de tabulación en lugar de espacios.</li>
			<li>La opción <code class="in_line">indent_size</code> se establece en <strong>“4”</strong>, lo que significa que cada nivel de indentación deberá estar compuesto por 4 caracteres de tabulación.</li>
			<li>La opción <code class="in_line">charset</code> se establece en <strong>“utf-8”</strong> para los archivos con las extensiones .js, .py, .vue y .php, lo que significa que estos archivos deben estar codificados en UTF-8.</li>
		</ol>

		<h3 class="code-line">.gitignore</h3>

		<p>Un archivo <b>.gitignore</b> es un archivo que se utiliza en repositorios de Git para indicar qué archivos o carpetas no deben incluirse en el control de versiones. Esto puede ser útil, por ejemplo, si hay archivos que no quieres que se guarden en tu repositorio, como archivos de configuración que contienen información confidencial o archivos que se generan automáticamente y que no necesitan ser controlados por Git.</p>

		<p>El archivo <b>.gitignore</b> del proyecto contiene una serie de reglas que indican qué archivos o carpetas deben ser ignorados por Git. Estas reglas están divididas en diferentes secciones, cada una de las cuales se refiere a un tipo de archivo o carpeta en particular. Aquí te explicaré brevemente algunas de las reglas que se incluyen en el archivo:</p>

		<ul>
			<li>En la sección <strong><em>“Android”</em></strong>, se encuentran reglas para ignorar archivos generados por Android Studio, como los archivos de configuración local.properties o los archivos de proyecto IntelliJ (.iml). También se ignoran los archivos de log y los archivos de almacén de claves (.jks, .keystore).</li>
			<li>En la sección <strong><em>“dotenv”</em></strong>, se indica que se deben ignorar los archivos .env, que a menudo se utilizan para almacenar variables de entorno.</li>
			<li>En la sección <strong><em>“Images”</em></strong>, se encuentran reglas para ignorar diferentes tipos de archivos de imagen, como JPEG, PNG o GIF.</li>
			<li>En la sección <strong><em>“Linux”</em></strong>, se incluyen reglas para ignorar archivos temporales que pueden generarse en sistemas Linux, así como archivos de configuración de KDE.</li>
			<li>En la sección <strong><em>“macOS”</em></strong>, se ignoran archivos generados por macOS, como el archivo .DS_Store o el archivo Icon. También se ignoran carpetas como <strong><em>“Trash”</em></strong> o <strong><em>“Temporary Items”</em></strong>.</li>
			<li>En la sección <strong><em>“MicrosoftOffice”</em></strong>, se ignoran archivos temporales generados por aplicaciones como Word o Excel.</li>
			<li>En la sección <strong><em>“Video”</em></strong>, se ignoran diferentes tipos de archivos de vídeo, como AVI, MP4 o WMV.</li>
			<li>En las secciones <strong><em>“Vue”</em></strong> y <strong><em>“Vuejs”</em></strong>, se ignoran archivos y carpetas generados por aplicaciones Vue.js, como node_modules o dist/.</li>
			<li>En la sección <strong><em>“Windows”</em></strong>, se ignoran archivos generados por Windows, como Thumbs.db o el archivo Icon.</li>
		</ul>

		<h3 class="code-line">index.html</h3>

		<p>El archivo <b>index.html</b> es el punto de partida para cualquier aplicación de Vue, ya que define la estructura básica de la aplicación y permite cargar los diferentes componentes y librerías que se utilizan en la aplicación.</p>

		<h3 class="code-line">package-lock.json</h3>

		<p>El archivo <strong>package-lock.json</strong> es un archivo que se genera automáticamente en proyectos de Node.js que utilizan el administrador de paquetes <em>npm</em>. Este archivo contiene un registro de todas las dependencias de un proyecto, así como sus versiones exactas.</p>

		<p>La principal ventaja de utilizar el archivo <strong>package-lock.json</strong> es que permite asegurarse de que todos los desarrolladores que trabajen en un proyecto estén utilizando la misma versión de las dependencias. Además, el archivo <strong>package-lock.json</strong> también hace que sea más fácil reproducir entornos de desarrollo, ya que permite instalar las dependencias de un proyecto de manera exacta y determinista.</p>

		<p>En resumen, el archivo <strong>package-lock.json</strong> es un archivo que se utiliza en proyectos de <em>Node.js</em> para registrar y mantener un historial de las dependencias y sus versiones exactas. Esto permite asegurarse de que todos los desarrolladores que trabajen en un proyecto estén utilizando la misma versión de las dependencias, lo que facilita la reproducción de entornos de desarrollo.</p>

		<h3 class="code-line">package.json</h3>

		<p>El archivo <strong>package.json</strong> es un archivo que se utiliza en proyectos de <em>Node.js</em> para registrar información sobre el proyecto, así como también las dependencias que utiliza. Este archivo suele incluir información como el nombre del proyecto, su versión, una descripción del proyecto, así como también la lista de dependencias que utiliza y scripts que se pueden ejecutar.</p>

		<p>El archivo <strong>package.json es esencial para cualquier proyecto de Node.js</strong>, ya que permite gestionar las dependencias del proyecto de manera sencilla. Por ejemplo, cuando se utiliza el comando <code>npm install</code> para instalar las dependencias de un proyecto, <em>npm</em> utiliza el archivo <strong>package.json</strong> para saber qué dependencias deben instalarse. Además, el archivo <strong>package.json</strong> también permite definir scripts que se pueden ejecutar de manera sencilla utilizando el comando <code>npm run</code>.</p>

		<p>En resumen, el archivo <strong>package.json</strong> es un archivo fundamental en proyectos de <em>Node.js</em>, ya que permite gestionar las dependencias del proyecto y definir scripts que se pueden ejecutar de manera sencilla.</p>

		<h3 class="code-line">vite.config.js</h3>

		<p>El archivo <strong>vite.config.js</strong> es un archivo de configuración que se utiliza en proyectos que utilizan el servidor de desarrollo <a href="https://vitejs.dev/guide/" title="Vite">Vite</a>. Este archivo permite personalizar la configuración del servidor de acuerdo a las necesidades del proyecto.</p>

		<p>Este archivo utiliza la función <code>defineConfig</code> de <a href="https://vitejs.dev/guide/" title="Vite">Vite</a> para definir diferentes opciones y ajustes para el servidor de desarrollo.</p>

		<p>En este caso en particular, el archivo <strong>vite.config.js</strong> está configurado para utilizar dos <em>plugins</em>: el <strong>plugin vue</strong>, que permite utilizar <strong>Vue.js</strong> en la aplicación, y el plugin <strong>quasar</strong>, que permite utilizar la <strong>librería Quasar</strong> en la aplicación. Además, se establece una opción específica para el plugin vue, que indica que se debe utilizar la función <code>transformAssetUrls</code> para transformar las URLs de los assets en <strong>plantillas de Vue</strong>. También se establece una opción específica para el plugin quasar, que indica la ruta del archivo que contiene las variables SASS que se utilizarán en la aplicación.</p>

		<h2 class="code-line">Archivo LICENSE: MIT</h2>

		<p>El archivo <strong>LICENSE</strong> es un archivo que suele incluirse en <em>repositorios de Git</em> para especificar los términos y condiciones de la licencia que cubre el proyecto. Esta licencia puede ser una licencia pública, como la licencia MIT, o una licencia propietaria.</p>

		<p>En el caso de esta plantilla, e trata de una <strong>licencia MIT</strong> que cubre el software que has desarrollado, y que está siendo distribuido bajo los términos y condiciones de esta licencia.</p>

		<blockquote class="cita">
			<p>Es importante tener en cuenta que la licencia MIT sólo cubre el software original, y no cubre las obras derivadas que puedan resultar del uso, modificación o distribución del software.</p>
		</blockquote>

		<h3 class="code-line">MIT License</h3>

		<p>La <strong>licencia MIT</strong> es una licencia pública que permite a cualquier persona utilizar, modificar y distribuir el software cubierto por esta licencia, siempre y cuando se incluya una copia de la licencia y se den créditos al autor original del software. Además, la licencia MIT no otorga ninguna garantía sobre el software y exime a los autores de toda responsabilidad en caso de que se produzca algún daño.</p>

		<p>La <strong>licencia MIT</strong> es una licencia muy permissiva que permite a cualquier persona utilizar el software de manera libre, siempre y cuando se respeten los términos y condiciones de la licencia.</p>

		<p>En resumen, la <strong>licencia MIT</strong> es una licencia pública que permite a cualquier persona utilizar, modificar y distribuir el software cubierto por esta licencia, siempre y cuando se respeten los términos y condiciones de la licencia. <strong>Sin embargo, esta licencia solo cubre el software original, y no cubre las obras derivadas que puedan resultar del uso, modificación o distribución del software.</strong></p>

		<h2 class="code-line">Archivo .deleteThis</h2>

		<p>El archivo <strong><em>.deleteThis</em></strong> es un archivo de muestra que se utiliza para mostrar cómo se cargan las carpetas en GitHub. Este archivo no tiene relevancia en el funcionamiento del proyecto y se puede eliminar con tranquilidad.</p>

		<h2 class="code-line">Carpetas</h2>

		<h3 class="code-line">Carpeta Source (/src/)</h3>

		<p>La carpeta <strong>src</strong> es una carpeta común en proyectos de <strong>Vue</strong> que utilizan <a href="https://vitejs.dev/guide/env-and-mode.html" title="vite.js">vite.js</a>. Esta carpeta suele contener todos los archivos fuente de la aplicación, incluyendo archivos de componentes, archivos de estilo, archivos de páginas, archivos de configuración, y otros archivos relacionados con la aplicación. La carpeta src se utiliza para organizar y mantener los archivos fuente de la aplicación, y es donde se desarrolla y se realizan cambios en la aplicación.</p>

		<blockquote class="cita">
			<p>Las carpetas que se encuentran dentro de /src/ (<a href="https://github.com/Santiago1010/template-vue/blob/main/src/assets/ASSETS.md" title="assets">assets</a>, <a href="https://github.com/Santiago1010/template-vue/blob/main/src/components/COMPONENTS.md" title="components">components</a>, <a href="https://github.com/Santiago1010/template-vue/blob/main/src/layouts/LAYOUTS.md" title="layouts">layouts</a>, <a href="https://github.com/Santiago1010/template-vue/blob/main/src/pages/PAGES.md" title="pages">pages</a>), cuentan con su respectivo archivo de información, al que podrás acceder haciendo click en cada uno de los nombres de la carpeta.</p>
		</blockquote>

		<h4 class="code-line">Archivo App.vue</h4>

		<p>El archivo <strong>App.vue</strong> se utiliza para definir la estructura y el comportamiento básico de la interfaz de usuario de la aplicación y es el componente que se renderiza cuando se carga la aplicación.</p>

		<h3 class="code-line">Archivo main.js</h3>

		<p>El archivo <strong>main.js</strong> es un archivo de configuración principal en un proyecto de <strong>Vue</strong>. Este archivo contiene código que se ejecuta al inicio de la aplicación y es donde se inicializa la instancia principal de <strong>Vue</strong>. También se pueden importar y configurar otros módulos y plugins en este archivo. El archivo <strong>main.js</strong> es el punto de entrada de la aplicación y se utiliza para configurar y ejecutar la aplicación de <strong>Vue</strong>.</p>

		<h2 class="code-line">Reglas generales de desarrollo</h2>

		<ol>
			<li>Los archivos .vue deben nombrarse siguiendo la convención <strong>PascalCase</strong>, es decir, que cada palabra en el nombre del archivo comience con una letra mayúscula. Por ejemplo: <strong>“App.vue”</strong> o <strong>“LoginForm.vue”</strong>.</li>
			<li>Los archivos deben organizarse en carpetas y subcarpetas de manera lógica y coherente. Por ejemplo, se podría tener una carpeta “components” que contenga los componentes reutilizables de la aplicación, y una carpeta “pages” que contenga los componentes de página de la aplicación; o los archicos .png vayan la sub carpeta correspndiente dentro de <code>@src/assets/images</code>.</li>
			<li>Las variables y funciones en los archivos .vue, y .js deben nombrarse siguiendo la convención camelCase, es decir, que las palabras en el nombre de la variable o función comiencen con una letra minúscula, excepto la primera palabra. Por ejemplo: <strong>“firstName”</strong> o <strong>“calculateTotal”</strong>.</li>
			<li>Los archivos .vue deben estructurarse siguiendo la arquitectura recomendada por Vue.js, con una etiqueta <code class="in_line">&lt;template&gt;</code> para definir la estructura de la interfaz de usuario, una etiqueta <code class="in_line">&lt;script setup&gt;</code> para definir la lógica de la aplicación y una etiqueta <code class="in_line">&lt;style scoped&gt;</code> para definir los estilos CSS sin afectar a los demás.</li>
			<li>Es importante utilizar las herramientas de desarrollo de Vite.js para depurar y optimizar la aplicación, y para asegurarse de que el código cumpla con los estándares de calidad y rendimiento.</li>
			<li>Es recomendable utilizar componentes y librerías de terceros, como PrimeVue, Quasar y Pinia, siempre que sea necesario y que se ajusten a las necesidades y requerimientos del proyecto.</li>
			<li>Todos los nombres de archivos y carpetas, nombres de variables y funciones y cualquier otro elemento relacionado con la programación deben escribirse en inglés.</li>
		</ol>
	</q-card>
</template>

<style scoped>
	h1.code-line {
		text-align: center;
		margin-bottom: 50px;
	}

	h2.code-line,
	h3.code-line,
	h4.code-line {
		margin: 30px 0;
	}

	ul,
	ol {
		max-width: 95%;
		margin-left: 2.5%;
		margin-bottom: 20px;
	}

	pre {
		background-color: #150101;
		padding: 1em;
		color: #FFFFFF;
		margin: 30px 0;
		border-radius: 8px;
		border: 1.5px solid #000000;
	}

	pre span {
		color: #C4302B;
		font-weight: bold;
	}

	blockquote {
		max-width: 90%;
		margin-left: 5%;
	}

	blockquote p code {
		background-color: #D3D3D3;
		padding: .5em;
		border-radius: 5px;
		border: 1px solid #A5A5A5;
	}

	code.in_line {
		background-color: #D3D3D3;
		padding: .1em;
		border-radius: 5px;
		border: 1px solid #A5A5A5;
	}

	blockquote.cita {
		background-color: #ECEAEA;
		padding: 1em 1em 0.1em 1em;
		border-radius: 8px;
		border-left: 10px solid #BCBCBC;
	}
</style>