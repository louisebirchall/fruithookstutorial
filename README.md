AutoCC text of the videos

1 Componentes funcionales y de clase

Hola, ¿qué tal?
¿Cómo estás?
Mi nombre es Mike Nieva y te doy la bienvenida a Coursera
Project Network, al proyecto guiado "Fundamentos de React Hooks".
El día de hoy construiremos una aplicación durante sesenta
minutos que involucren dos conceptos. El concepto de useState y
useEffect. Y cómo funcionan en conjunto.
Vamos a construir un catálogo de frutas.
Y lo más importante es que practiques mucho durante todo el
proyecto.
A diferencia de un curso normal, nosotros,
estaremos trabajando paso a paso y yo te estaré acompañando
en el proceso.
Primero vamos a hacer la introducción de la plataforma y
posteriormente empezaremos la práctica.
Espero que disfrutes mucho este proyecto guiado y cuéntanos
tus comentarios al final del mismo.
Excelente.
Vamos a comenzar.
Quiero contarte de Rhyme, es un programa que te permite
emular un sistema operativo.
En este caso estamos emulando Windows y tú podrás observar
que tienes a tu disposición diferentes íconos.
Piensa que es una computadora dentro de tu navegador y la
puedes usar como quieras.
Lo importante es que del lado derecho en la parte derecha de
tu pantalla vas a poder ver mi pantalla y yo voy a estar
moviendo.
Voy a dar "click", voy a estar anotando conceptos.
Voy a estar escribiendo código y tú vas a poder irlo haciendo
en tu pantalla.
Está del lado izquierdo al simultáneo conmigo. La idea es que
yo pueda irte acompañando en tu aprendizaje y lo vayamos
haciendo juntos, en par.
Muy importante. Si tú necesitas expandir la pantalla en la
parte superior derecha hay un botón que dice "Expand". Le puedes
dar click a "Expand" y con esto tú puedes ver mi pantalla completa
en caso de que sea necesario y lo necesites. Si quieres ir más
lento o regresar el vídeo...
puedes hacerlo en el área de reproducción del vídeo en la
cual está del lado de mi pantalla. Lo que sigue es abrir
Visual Studio Code. En caso de que ya lo tengas abierto, esta
perfecto.
En caso de que no esté abierto, vas a ir al ícono que dice
Visual Studio Code y le vas a dar doble click.
Lo que va a suceder es que se va a abrir la pantalla de
Visual Studio Code y te va a abrir un proyecto por defecto de
React. Este proyecto de React es en el cual nosotros
vamos a estar trabajando.
Perfecto.
Vamos a minimizar la pantalla para que la tengamos a la mitad,
solamente a la mitad.
Y observa que en la parte de abajo tú tienes una área que se
llama terminal. En caso de que no aparezca...
recuerda que tú puedes ejecutarla aquí en la parte de arriba
donde dice terminal y le puedes dar click en "New Terminal".
Sí, aparece en la parte de abajo.
Excelente.
Vamos a levantar un servidor y que podamos nosotros mostrar
esta aplicación de Riad en nuestro navegador.
Lo que vamos a escribir es en el BM Ron.
Vamos a darle Enter y con esto va a levantar el servidor.
Puedes ponerle pausa en lo que se genera la aplicación en tu
navegador de Chrome y regresamos y avanzados.
Excelente.
Si ya se abrió la la pantalla de Chrome tu notaras que tienes
diferentes áreas de la aplicación.
Tienes un capaz?
Tienes Tienes el título de catálogo de frutas tienes aquí que
va a ser de Fundamentos?
De Yahoo?
Si. Aquí, aquí viene mi mi link a mi a mi red social en caso
de que que necesitas estar más en contacto conmigo y en la
parte de abajo.
Tú tienes dos botones.
Inició y notas Esta pantalla principal es inició.
Aquí es donde nosotros estaremos haciendo la aplicación
principal y del lado derecho tenemos notas.
Si tú le das click, anotas Vas a notar que vienen diferentes
botones y explicaciones Aquí.
Nosotros podemos también darnos una idea de cuál va a ser el
proyecto que vamos a construir.
Al final, este proyecto como tal y como puedes observar, el
catálogo de frutas incluye un input.
Incluye una un, un área de texto donde tú puedes escribir y
lo que va a hacer es que va a filtrar la fruta y del catálogo
completo me va a extraer la que estoy pidiendo Tu.
Puedes observar aquí, en esta pequeña animación como funciona
y en la parte de abajo tú vas a notar los diferentes
conceptos de lo que es jugar al final del proyecto guiado.
Si tú quieres profundizar, si tu necesitas conocer más a
fondo que son, jugáis o qué más puedes hacer.
Te dejo más información al respecto en esta en esta área ve
notas, Vamos a dar click algo donde inició y si necesitas
pausar el vídeo en este momento para revisarlo adelante con
toda confianza.
Excelente.
Si ya pudiste notar lo que viene en la parte de notas ir y
delegamos Clica inició.
Estaremos listos para iniciar nuestra aplicación La primera
tarea consistía en levantar el servidor con Riad con la
aplicación de Riad que pudiéramos verlo en Google Chrome y
que pudieran observar a simple vista cuáles son los archivos
y las carpetas que nosotros tendremos a nuestra disposición.
Si. Todo esto ya está claro Podemos avanzar a la siguiente
tarea, la cual consistirá en conocer los archivos de herriak
presentes y cómo funciona la jerarquía de componentes para
que podamos empezar a desarrollar.
Jugáis al respecto?

2 Jerarquía de componentes y archivos

Excelente Te.
Doy la bienvenida a la tarea número dos.
Lo queremos ahora será construir las carpetas y archivos para
que nuestra aplicación corra correctamente.
Excelente.
Tomemos un momento para observar la estrategia de componentes
y como nosotros lo vamos a implementar dentro de Visual
Studio Cook primero apuntó JS Es un archivo que ya está
creado.
Podemos observar aquí en Visual Studio Cook que ya lo tenemos
listo Jewel Inout son dos carpetas que también ya están
creadas y tienen su index punto JS respectivo implementado
dentro de visual.
También en la zona central Tenemos Menkes una carpeta que
nosotros también ya tenemos creada con su index punto JS.
Pero lo que no está creado es la carpeta Ser Fox y la carpeta
Fluidez con sus archivos respectivos.
Lo que vas a hacer en este momento es pausar el vídeo, crear
estos archivos, crear estas carpetas y con esto deberíamos
tener nuestra aplicación lista para que podamos codificar la
tomate un momento y tan pronto termines.
Continúa el vídeo.
Perfecto.
Una vez que ya están todos tus archivos, observa que ya
tienes el Mein fruits descripción index punto JS Foto punto
JS Observa que la carpeta señor Fox el escribiendo un formato
ese mayúscula ERC y luego de grande o ex para una mejor
lectura cuando éste sus Cuando estás creando tus archivos, ya
que estén creados, lo que va a hacer es construir La
estructura de los componentes funcionales.
Lo primero que te voy a pedir es que vayas a extensiones y
busques una extensión que se llama E S siete.
Reactivaron al reducción al draft nivel.
Instala lo es una.
Es una extensión que te va a servir para poder crear código
más rápido Tan pronto nosotros expliquemos como es la
estructura.
Este blog Intel a ayudar mucho a que no tengas que estar
escribiendo todo a mano.
Tomate un momento para pausar el vídeo y instalarlo
correctamente.
Sólo tienes que instalarlo Perfecto.
Una vez.
Una vez hecho esto, lo que nos tocará hacer es construir los
componentes funcionales.
Esta extensión que nosotros instalamos permite que si
escribes R F C E construya una un componente funcional con
las diferentes características de importación, la función y
la exportación.
Recordemos que la importación son todas las librerías que
nosotros vamos a utilizar el nuestro componente.
En este caso vamos a utilizar la librería de Riad función
función con el nombre de la función, que en este caso sería
descripción porque es el nombre del componente con su
respectivo retorno.
Observa también que estamos utilizando paréntesis y llaves y
al final, en la línea once estamos utilizando la exportación
que estamos exportando el componente descripción que se está
ni si necesitáramos Estados tendríamos que haber utilizado
componentes de clase Afortunadamente conjugue ya no es
necesario.
Todos los componentes funcionales ya pueden utilizar Estados
y entonces va a ser mucho más fácil que nosotros.
Podemos hacer una aplicación.
Lo que sigue ahora es construir el resto de Los componentes
funcionales En los demás archivos vamos a ir a index punto JS.
Vamos a aplicar el mismo El mismo comando RF se vamos a dar
Enter iba y se va a generar la función con Index porque Index,
porque así se llama el archivo.
Vamos con foto punto JS Hacemos la misma estrategia R F C E
en Perth y acaba de retornar nos la foto vamos a salvar y el
último es ser Fox index punto JS.
Vamos a hacer RFC.
Vamos a darle enter y vamos a salvar lo listo.
Ya tenemos los cuatro componentes bajo bajo, funcionales y lo
que sí ahora es empezar a conectarlos entre ellos.
Nos vamos a situar en In despuntó JS de mail y observa
también como detalle que esta exportación es la línea cuatro.
A diferencia de las otros componentes que nosotros creamos,
el Sporting está al inicio y luego viene El nombre de la
función.
Eso también es muy válido en caso de que necesites utilizarlo
de esta forma.
Está bien, en el mejor de los casos, usual, bueno, en el
mejor de los casos y usualmente se separa en importaciones la
primera línea, luego el nombre de la función y luego la
exportación.
Pero a nivel técnico no hay ningún problema.
Puedes hacer Si.
Ya tenemos todo esto.
Observamos que en nuestra en nuestro organigrama de nuestro
jerarquía de componentes ya está alineado.
Eso significa que ya podemos avanzar y lo que vamos a hacer
es situarnos en index punto JS de la carpeta Main.
Observa cómo está vinculado aquí en Visual Studio como de
esta línea con la carpeta de interés punto JS No te confíes.
Observa que estás trabajando en el index punto JS correcto
para evitar errores y que éste sí, todo hay ahora si en el
siguiente en la siguiente tarea en el siguiente TAS que vamos
a empezar a desarrollar y es este el primer buque de Riad Fox
para manejar Estados en componentes funcionales.
Antes sólo se podía utilizar en componentes de clase, como lo
hemos mencionado antes, Pero los componentes funcionales que
las desarrolla Kux nos permiten utilizarlo sin mayor problema.
Avancemos a la siguiente tarea.

3 useState

Te Doy la bienvenida a la siguiente tarea Lo queremos ahora
es construir una función.
Y usted, usted el cuál será nuestro primer Juca.
Hay dos opciones que te recomiendo a partir de ahora a partir
de esa tarea La primera es que puedes ir causando el vídeo y
escribiendo conmigo mientras yo voy escribiendo.
Vas haciendo pausas, ibas escribiendo conmigo y la segunda
opción es esperar a que termine yo todo el vídeo Observa cómo
lo hacemos?
Observer código que voy escribiendo y y luego puedes
repetir otra vez el vídeo y ahora sí, hacerlo de esa manera
es Quiero escribiendo Conforme The Guardian Cualquiera de las
dos opciones está bien y lo más importante es que vayas
comprendiendo el tema.
Lo primero que tenemos que hacer es activar nuestro jug.
Nos vamos a situar en la línea uno.
Vas a observar que puso una coma, que es una manera de
separar los diferentes módulos que estoy trayendo y lo
primero que tengo que hacer es poner dos llaves y dentro
utilizar la palabra y us esteu.
Observa cómo se escribe y este este Este jug Lo que me
va a permitir es poder gestionar el Estado desde un
componente funcional.
A continuación tendremos que importar las carpetas de los
componentes que se encuentran debajo de nuestra jerarquía.
En este caso tenemos que importar Fruits y tenemos que
importar, importar, ser vox.
Bien, ya está escrito.
Están establecidas las importaciones?
Dos y tres.
Lo que se lleva es centrarnos en la función me y empezar
a construir nuestro Hook.
Lo primero que tenemos que hacer es utilizar la palabra con
Luego aprovecharemos para poner corchetes y dos corchetes.
Van a tener dos partes La primera es el estado Data y la
segunda será nuestra función que manipulara el Estado data.
En este caso le podemos poner se da Observa que nosotros
estamos aplicando desestructuración Igual aremos Recuerda que
este igual es un operador de asignación.
Vamos a agregar la palabra.
Y usted, usted Vamos a embocar y dentro colocaremos Corchetes,
Estos, corchetes.
Indican el estado inicial de nuestra aplicación, en este caso,
un arreglo vacío.
Ahora bien, vamos a situarnos en el área de retorno y
vamos a generar dos diez una etiqueta dentro de otro.
Perfecto.
Vamos a generar un dit allí convenido y dentro un Diwali.
Frutas El.
Siguiente paso es crear un método de arreglo punto más y
retornar el dato.
Estos datos que tenemos aquí nos vamos a retornar dentro de
la línea doce.
Perfecto.
Observa lo que estamos haciendo.
Estamos abriendo llaves para poder utilizar ya basket dentro
de nuestro retorno.
A partir de JSE X, estamos utilizando la palabra data que
está conectado con el La primera variable en la línea siete,
que es Data nuestro Estado principal lo estamos recorriendo
con un método de arreglos Observen que cuando utilizamos un
punto más tenemos que generar una función anónima dentro de
la misma como argumento y utilizamos un retorno a través de
paréntesis y generamos hundir una capa y dentro estamos
utilizando llaves otra vez porque nos estamos refiriendo al
elemento del arreglo.
En este caso vamos a tener un arreglo vacío.
Por lo tanto, no vamos a devolver nada.
Pero observa como en este momento vamos a integrar los datos.
Excelente.
Vas a ir a tu carpeta Public en de la izquierda, le vas a dar
Clica pública y va a saber que tienes un archivo llamado
fluido Punto.
Ya hizo este archivo.
Fue junto a Harrison.
Contiene el catálogo de las frutas.
Vamos a seleccionar dos elementos.
Vamos a tomar este primer elemento y este segundo elemento,
que son objetos Vamos a copiarlos y vamos a traerlos a
nuestro archivo.
Me dentro de mi, dentro de nuestro convocará.
El archivo se llama Index punto JS y el y la carpeta se llama
Me vamos nosotros a situarnos en la línea siete, en la en el
área de estado inicial.
En estos corchetes vacíos vamos a darle enter y vamos a
pegarnos Si salvamos.
Observa que te sale un error.
Y esto es porque ya en el momento que se recorre el arreglo
ya no estamos hablando de un elemento, estilo, texto o un
elemento único, sino más bien estamos a trabajando con
objetos.
Entonces tenemos que decirle cuál es la propiedad que vamos a
utilizar.
En este caso le tendría que agregar punto fluidez para poder
ejecutar lo de la mejor manera.
Lo salvó y observa que del lado izquierdo se muestra manzana.
Iban a tomate un momento para ejecutarlo, para revisarlo y
vamos a hacer en este momento una recapitulación de todo lo
que digais.
Primero generamos una variable bueno, en realidad, dos
variables Bajo desestructuración y generamos una palabra data
y data.
Se refiere al conjunto de datos, al Estado y luego generamos
ser data Se data se refiere a la función que al ejecutarse
modificará Da pa No lo trabajamos hasta ahora.
Pero que sepas que lo va a modificar.
Y utilizamos el buque y usted el cual invoca.
Y al invocarse estamos pasando como argumento un un arreglo
de objetos.
Y este arreglo de objetos será nuestro estado inicial.
Como en un componente de de clase.
Cuando nosotros generamos el stage esto ES EL, Sfeir y en la
parte de abajo, nosotros lo estamos recorriendo con un método
de arreglo Como observación.
Quiero que sepas que estamos pasando un arreglo de objetos,
pero puede ser cualquier tipo de dato.
El estado inicial puede ser un texto, un número, un volea, no
un objeto, un arreglo, lo que tú quieras.
Finalmente, cuando nosotros ejecutamos esto en el retorno, lo
podemos observar dentro de nuestro navegador.
Jug viene a sintetizar muchos de los procesos que venían
haciendo los componentes de clase.
Si eso te pareció mucho más simple, eso es bueno, porque
entonces está cumpliendo.
Jugó su cometido.
Tomate un momento para repasar todo.
Y luego de que ya lo tengas claro, avancemos a la siguiente
tarea.

4 useState y props

En esta tarea, nos concentraremos en el desarrollo de
productos y el flujo de datos hacía componentes hijos
Aprovecharemos Todos los datos que se están manejando en el
estado inicial, es decir, el color, la were le y la imagen
del autor para colocarlos en lugares específicos y también
obtener sus valores.
Nos iremos para nuestra carpeta fluix que podrás observar la
del lado de la izquierda de tu Visual Studio cauce y
obtendrás a quien fruto tres archivos uno que se llama index
punto JS descripción punto JS iPhoto punto JS Nos
vamos a centrar en un despuntó JS y trabajaremos aquí.
Lo primero que tenemos que hacer es hacer las conexiones con
nuestros componentes, es decir, con descripción punto JS y
con foto punto JS Hagamos las importaciones Bien Una vez
hecha hechas las importaciones, vamos a concentrarnos
en estas dos acciones.
Vamos a subir el Sport y folk a la función index.
Una vez hecho esto lo que tenemos que hacer es trasladar
nuestro método de arreglo de index punto JS Emmen hacia este
index punto JS de Fritz Bien nos vamos a situar en el index
punto JS de Mein en donde hicimos nosotros nuestro conjunto
de datos con usted y en la parte de abajo habíamos nosotros
colocado un método de arreglo y lo vamos a cortar.
Observación de cortarlo.
Bien. Y ahora colocamos el nombre del componente en su
formato etiqueta y vamos a trasladar ese estado de Data
utilizando prox perfecto.
Observa bien que colocamos la palabra Fruits en el formato
etiqueta para determinar un componente.
La propiedad data que ésta será la forma en como nosotros
traslademos datos hacia un componente hijo, la propiedad y
entre las llaves tenemos otra palabra Wapa.
Pero esta gata está relacionada con la variable del Hook que
hicimos arriba.
Perfecto.
Donde has hecho esto?
Revisamos un último vistazo.
Todo el componente que todo esté bien armado y ahora sí nos
vamos de regreso a nuestro archivo.
Veinte es punto JS de fruta.
Aquí está.
Ahora bien, vamos a pegar aquí lo que nosotros trajimos del
componente padre, que es todo este método de arreglo.
Vamos a darle un poco de estilo.
Que quede que bien observan.
Observa que las líneas del todo elemento de arreglos
importaron rectamente y ahora lo que sigue es Vamos a revisar
que los datos se trasladen correctamente Si yo le doy salvar
y observó del lado izquierdo, que es lo que pasa?
No me parece que Gates no te Fue.
Entonces vamos a pulir nuestro componente hijo.
Primero vamos a poner el la palabra pros Esto significa que
nosotros vamos a poder heredar Prou prou o datos de
componentes padres y recibirlos directamente en componentes
hijos. Vamos a agregar la palabra prox antes de data para
indicar que nosotros vamos a utilizar El dato que nosotros
estamos trayendo del componente padre.
Vamos, ahora sí a utilizar este y que significaba index para
mantener la unicidad de todos los elementos que se creen aquí
en la etiqueta de Digg vamos a crear y que se refiere al dato
principal, lo envolvemos entre llaves y le ponemos index.
Agregamos la clase fruta, vamos a ponerle clase igual a fruta.
Y con esto hemos refractor.
Izado el componente.
Si yo lo salvó, puede observar del lado izquierdo en mi
catálogo de frutas, como ya vuelve a aparecer manzana y
banano y adicional.
Ya está la clase de fruta que viene desde nuestros SS
implementado.
Ustedes pueden ver Este es ese ese en puntos de CDs con todos
los estilos.
Ahora bien, haremos el desglose de los dos componentes
restantes, desde cierta descripción y de fotos, y en lugar de
imprimir directamente el dato, aquí lo que haremos es
dividirlo en estos dos componentes para tenerlo de una forma
más ordenada.
Empezaremos creando sus dos etiquetas.
Creamos la etiqueta Foto y creamos la etiqueta descripción.
Bien, vamos a crear la propiedad Prot y MG. Vamos a abrir
nuestras llaves y vamos a pasarle la imagen que viene a
través de los propios que es punto IMG con esto yo estoy
vinculando la ruta relativa con la propiedad de imagen y que
la podremos nosotros mostrar como una foto dentro del
navegador y en la descripción lo que haremos.
Pasaremos el pro- de fruta que se refiere al al nombre de la
fruta. Pasaremos el color, que el color es que punto color y
pasaremos el nombre del autor que éste viene como y MG a No
Olvidemos ponerle su eh porque si no, no va a poder
recorrerse correctamente y y MG. Autor Básicamente es un
texto que indica el nombre del autor.
Una vez hecho esto, Vamos a empezar con foto punto JS y vamos
a construir el componente.
Recuerda que tenemos que subir el Sport a la parte de arriba
a la línea tres.
Agregamos pros.
Vamos a tener tres etiquetas hundir un Fillos y una etiqueta
y MG con ciertas propiedades Las.
Agregamos y ahora vamos a conocer, a colocar los valores de
IMG. Tenemos un solo es un ancho y el Alt para indicar de qué
se trata la foto.
Por. Ahora pondremos profundo IMG Paral y observamos que en
el navegador ya aparecen las fotos de las dos frutas.
Ahora vamos a descripción y vamos a hacer lo mismo.
Solo que ahora.
Incluyendo los datos de la fruta Para este componente.
Vamos a hacer lo mismo de Sportif Old para la parte de arriba.
No Olvidemos pasar prox dentro del parámetro de descripción.
Vic tendrá una clase de descripción.
Habrá una etiqueta H uno y dos etiquetas de párrafo En H uno.
Le pondremos prox punto Freud El primer párrafo Tendrá una
clase llamado color y le pasaremos la palabra color en
formato texto con entre paréntesis Blogs punto color.
Haremos lo mismo con el segundo párrafo.
Pondremos una clase autor y le pasaremos próximo punto autor.
Recordemos con el autor dos puntos del texto Una vez hecho
esto. Revisamos el navegador y vemos que ya está la manzana y
el banano con su respectiva información y su foto.
Con esto terminamos esta tarea para concluir, a diferencia de
los componentes de clase, todos con funciones aquí, toda la
estructura que estamos haciendo de componentes funcionales,
Entonces es importante que utilices prox y que al mismo
tiempo los datos fluyan de esta manera Tómate el tiempo para
revisar lo revisa otra vez la estructura por de intentarlo y
si todo queda perfectamente comprendido, te veo en la
siguiente tarea.

5 useEffect y JSON

Te. Doy la bienvenida a la siguiente tarea la tarea cinco Y
lo que vamos a hacer ahora es nos vamos a conectar a Es- Te
archivo punto Ya hizo que tenemos en el en la carpeta de
pública y utilizaremos el look.
Y usted para qué nos sirve ellos?
Afecte puntualmente.
Connect nos va a ayudar a conectar los datos de un archivo
punto Ya hizo situados en nuestro área pública.
Básicamente es Sergio y lo que haremos es sustituir los en el
estado inicial.
Leeremos todos estos datos, lo pondremos en el estado inicial
de ellos Steitz.
Y con esto empezaremos ahora, si imprimir todos los datos y
todas las frutas del catálogo nos vamos a situar en index
punto JS de la carpeta de Mein y lo primero que tenemos que
hacer es activar y once efectivos.
Perfecto.
Una vez que ya tengamos Youssef EK activado o escrito en la
primera línea del Archivo de Indias punto JS de me, lo que
haremos es colocarnos en la línea veintiuno que es este
espacio entre el las variables de ellos este y el retorno.
Y vamos a construir el formato de y US F C. Y usted es en su
similar de componente Ismail.
Si nosotros estuvieramos utilizando componentes de clase y lo
que hace es que va a generar efectos secundarios, va a hacer
una llamada hacia un archivo puntual que en este caso el
punto Jackson y nos va a retornar.
Los datos Utilizaremos fecha para eso también El formato de
Youssef EK parte de escribir y US F de manera directa.
Vamos a generar paréntesis y dentro vamos a tener un color
Este colgaba va a estar formado por una función de Flecha y
vamos a introducir dentro de dentro de la función Un otra
función que se llama fets Data Feb se trata todavía no está
creada.
Ahorita vamos a declarar esta esta función nueva, pero lo que
queremos hacer es que se ejecute fecha data y se conecte con
con el archivo directamente B fueron es punto de Yaiza algo a
destacar?
Es que nosotros vamos a ponerle como segundo argumento.
Hay usted Un unos corchetes vacíos.
Estos corchetes vacíos lo que van a indicar es que cuando se
cargue el componente o cuando el componente ese monte se va a
ejecutar y usted, pero sólo va a funcionar una sola vez.
Puedes tú poner dentro de esta de este segundo argumento,
alguna variable que en el momento que suceda un cambio Lo
esté observando y entonces ejecute otro fets en este caso
particular, en este momento lo vamos a dejar vacío con la
intención de que solamente se rendir.
Hice una vez Crearemos en este momento una función llamada
fecha pa cons- fet data vamos a utilizar asincronía.
Entonces es muy importante que pongamos la palabra Así Vamos
a poner una función de Flecha.
El parámetro que vamos a utilizar es la guerra L o la ruta.
Vamos a poner patas como un hombre de parámetros y dentro
vamos a ejecutar el formato de asincronía.
Vamos a poner el resultado Vamos a asignarse lo a una web y
vamos a utilizar Feb para obtener los datos de donde del PAD
que nosotros seleccionemos.
Con esto mantenemos También la pureza de la función En
segundo punto crearemos otra constante una una variable de
Consta escribiremos, Jackson y pondremos La respuesta en un
formato de Respondo ya hizo el metro de punto Jayson
convierte este res en un formato.
Ya hizo y finalmente lo que tenemos que hacer es utilizarse.
Data. Se trata, recordemos que es la función que manipulada
que manipulaba el Estado data.
Entonces vamos a utilizar con esto ya estamos utilizando todo
el jugo de ellos.
Este vamos a invocarlo y dentro vamos a pasarle el Jackson
que obtuvimos de de la variable de arriba Un dato adicional
es que nos falta escribir a Wade en el Jackson para que
podamos lograr la sincronía como rectamente.
Esta web hace la llamada de fecha, lo guarden res pasa a la
siguiente línea se hace la ejecución de responso con puntos
Jackson para convertir al formato se hace una espera, se pasa
la variable, ese signo de variable y finalmente ya se ejecuta
ACP para que no haya ningún problema.
Sí, hicimos todo esto correctamente.
Observaremos que nuestro catálogo de frutas ya tiene todos
los, todos los, todos los elementos realizados.
Todo el catálogo está armado y entonces con esto ya tenemos
armado nuestro.
Nuestros dos jugais para ir construyendo.
Vimos en esta tarea y usted y usted es un fuck que te permite
no solamente conectarte a servicios de terceros, sino también
puede permitir de suscribir a eventos, escuchar a eventos o
cualquier interacción con el usuario que sucedan con respecto
a un dato Este dato es el que les comenté que se pasa como
segundo argumento no puede estar escuchando Y si hay un
cambio en este en este argumento, simplemente lo que va a
hacer es ejecutar lo que esté dentro de él.
Colgar entonces José F que funciona para ejecutar efectos
secundarios En la siguiente tarea nos enfocaremos en el ser
Fox en la caja de búsqueda.
Como puedes ver, ya está el catálogo, pero todavía no tenemos
una caja de búsqueda.
Entonces nos enfocaremos ahí.
Esa parte incluye ambos Fox y revisando ambos Justy que
coordinen correctamente.
Vamos a estar usando usted y es este tio es efecto y las
vincular Hemos a ese imputa para que en el momento en que el
usuario escriba una fruta Se filtra esta fruta y obtengamos
únicamente los resultados.
En coincidencia con todo esto, claro, si gustas repasar todo
el contenido de este vídeo adelante con toda confianza.
Recuerda que los dos conceptos que ya tenemos son y usted y
usted. Una vez comprendido, te invito a pasar a la siguiente
tarea.

6 Barra de búsqueda

En esta tarea.
Lo que haremos es concentrarnos en la barra de búsqueda en el
INEM Primero nos situaremos en un despuntó JS de la carpeta
Main. Nos situamos donde hemos estado trabajando desde la
tarde anterior y a partir de aquí vamos a construir un
segundo fuck de ellos este También.
Haremos una pequeña modificación al estado inicial que
teníamos en el primer Stage eliminando Este arreglo lo vamos
a quitar.
Nos quedaremos únicamente con un arreglo vacío.
Lo vamos a salvar y observa que no ha habido ningún problema.
Se sigue tranquilizando correctamente de lado del navegador
cuando te importante antes de avanzar, es si puedes manejar
múltiples estados.
A diferencia de un componente de clase donde todo estaba
vinculado a un solo objeto, un objeto este En los componentes
funcionales con Fox podemos manejar múltiples estados y la
única forma que tenemos que hacer para poder manejar estos
múltiples estados es crear otro.
Es este.
Manejamos la misma estructura y con esto va a ser mucho más
ordenado a largo plazo.
Que tu información fluya a lo largo de la aplicación Lo que
haremos será crear una variable cuando de hecho son muchas,
muchas variables a través de desestructuración.
Queremos El primer elemento filtra data que se referirá a la
gata filtrada.
Pondremos la función que podrá manifest manipular este Estado
que se llama Sed Interés Data Así.
Haremos un operador de asignación y y utilizaremos el segundo
y oeste Y este paréntesis Pondremos como estaba inicial un
arreglo vacío.
Este años.
Este estará enfocado en contener la lista de las frutas que
coincidan en la búsqueda del usuario Si.
La persona escribe banano Habrá una función que esté
escuchando los caracteres los compare con el arreglo original.
Es decir, con el catálogo completo de frutas.
Y cuando haya una coincidencia de volver a ese objeto para
unirlo al filtro de datos eso es lo que vamos a hacer en este
momento.
Haremos una función que se llame con Ludford afro que es la
función que me refería hace un momento.
Será una función de Flecha.
Pasaremos como parámetro un texto que este es el texto el
cual nosotros haremos la comparación de búsqueda con el
catálogo Retornaremos Se Finder Data y pasaremos el texto.
Ahora Bien, en niños.
Efecto.
Haremos un pequeño cambio.
Ya no. Sólo necesitamos que se cargue o que se ejecute.
Youssef EK cuando el componente ese monte, sino más bien
cuando haya un cambio en el estado de filtrar data.
Cuando hay un cambio en Figueres data nosotros que queremos
que se ejecute y un efecto Para lograr esto, introduciremos
la palabra filtren data dentro del arreglo que tenemos dentro
de sus efectos.
Filter da nos iremos al área de retorno y construiremos un
deep que explique o que imprima el área de ser Vox La caja de
búsqueda OK, observa con cuidado.
Estamos creando un componente ser Fox y lo estamos importando
a la carpeta de Mein Henin despuntó JS Lo estamos utilizando
en el área de retorno a través de una etiqueta para que
podamos mostrar este componente.
Le estamos pasando dos propiedades, uno de data y otro
llamado Filter, acción que es acción de filtro y le estamos
pasando los datos que les vamos, que lo vamos a pasar a un
componente hijo que en este caso serían de ser Fox y fin de
acción.
Va a pasar también la función que creamos en la línea
dieciséis.
Vamos a bajar estos datos y esta función al componente de ser
Fox Y ahora vamos a trabajar ahí Vamos a hacer Xbox A la
carpeta de seres Fox que creamos al inicio le damos index
punto JS y observamos que tenemos el componente en estructura
básica.
Vamos a hacer los cambios primero con Sporting para poderlo
hacer más sintetizado.
Listo? Recordemos escribir prox.
Ya saben que cuando estamos trabajando con data que fluye de
arriba hacia abajo, es importante colocar los los pruebas
para poder recibirlos correctamente.
Y en el área de retorno crearemos un diez, un formulario, un
input y dentro de este input utilizaremos o en Chelsea que
son China.
Es una propiedad que nos permite estar escuchando cada cambio
de caracteres en el input y si hay algún cambio, ejecutará un
triga o un gatillo para que nosotros podamos detectarlo y
avisar, escribió en su informe Escribimos el input Generamos
el input con él, un XD y una propiedad play Volver que indica
un texto plano es dentro del input.
Cuando nadie escribe nada y un yen tendrá una función de cola
Lo que sigue es que nuestro Han dos somete ejecutado aquí en
un formato de colgar.
Pasaremos los datos de la función cuando el soft del evento.
Cada vez que el usuario ejecute una interacción con nosotros
capturar.
Hemos esos datos del evento Los pasaremos a través de un
argumento y los recibiríamos en la Francia Vamos a declarar
esta función dejando el software para que podamos entender
mejor cómo hacerlo.
Vamos a crear la función con Anda.
Exactamente.
Vamos a pasar como parámetro el evento.
El evento que recibimos por parte del usuario Este evento es
cuando, cuando el usuario escribe, lo vamos a pasar a través
de un parámetro y dentro vamos a parar.
Primero El comportamiento por defecto.
Esto evita que cada vez que el usuario escribe un carácter no
se refresca la página y perdamos la información.
Entonces no va a detener el acción por defecto.
Y luego vamos a crear una un variable visto Esterri sol.
Lo que me va a decir es si hay una coincidencia de búsqueda
de usuario con el catálogo de frutas, va a contener un
arreglo que me diga cuáles son las frutas que coinciden con
la búsqueda del usuario.
Para eso tengo que pasar los proxys Junto data que vienen del
componente padre ejecutó el método de arreglo de Filter y
dentro voy a pasar un una, una función de Flecha.
Vamos a poner, eh que se refiere a cada elemento de la red.
Lo que voy a estar viendo y lo primero que te necesito es voy
a traer una constante que se llame fruto de una variable de
de constante que se llama fruta para que me convierta cada
elemento que está determinándose en el arreglo hacia mayo
oscuras.
Haré otra variable que se refiera a la búsqueda del usuario
El texto que está buscando el usuario Even punto tarde punto
valió punto Tu porque hay también necesitamos que esté en
mayúsculas porque voy a comparar ambos en mayúsculas.
Y la última es la revisión de El primero de la primera
variable con la segunda, la fruta del catálogo con la fruta
de busca Escribimos Rita igual igual hacer sin fruto Por
último agregue en la línea doce un retorno en la cual yo
estoy pasando el la función que recibimos del componente
padre a través de prox Filter acción y le estoy inyectando
como argumento el resultado que tuvimos en la línea siete.
La variable Rishon Esto me permitirá subir el resultado al
componente padre Antes de cerrar y regresar a me y hacer la
última fase.
Hay que agregar las clases para que no salga de una manera
ordenada en el cese.
Si nosotros observamos la el navegador, vemos que está pegado
del lado izquierdo Dic Class igual y entre comillas,
regresamos a index punto JS de Mein Y para renderizar, lo
necesitamos cambiar la línea Veintiocho de las frutas Ahora.
Ya no necesitamos solamente mostrar data, sino también si el
usuario está buscando algo que muestre filtren data no
muestre data Esto se logra con una condicional.
Vamos a empezar por escribiendo Filter ta tan Vamos a ponerle
punto lengua en caso de que no existe ninguna coincidencia,
es decir, diferente a cero.
Entonces Si existe una coincidencia que muestre filtre tabla
En caso de que no haya ninguna coincidencia o el usuario no
está escribiendo nata?
Nada. Entonces que retorne data, que es el catálogo completo.
Con esto podemos revisar nosotros el catálogo de frutas y
escribamos Pere Si está en mayúsculas.
Incluso está haciéndolo porque es lo está levantando a
mayúsculas, pero me está regresando la búsqueda correcta.
Si escribo banano, también me regresa.
Si escribo manzana, también me regresa Esta sería la tarea
que termina la barra de búsqueda.
Y con esto tendríamos nuestros primeros dos Fuchs terminados
para el curso de Fundamentos de Ryan Giggs.
Te invito con calma a que revises el contenido, revisa el
contenido de los archivos que vimos y al terminar, avanza con
la siguiente tarea, que son indicaciones niñas de los
siguientes pasos.

7 Siguientes Hooks

Hasta aquí sería nuestra entrega de Fundamentos de Rui ajuts.
Sin embargo, no quiero irme sin contarte los diferentes Fox
que todavía hay que investigar y hay que estudiar primero y
de este virus EFE son los Fox más usados en este caso, que tú
conozcas este y usted de manera precisa te va a ayudar a de
seguir desarrollando aplicaciones mucho más sintetizadas y
más limpias y sobre Edu ser es muy similar a la librería de
Riad Guión Redux nos permite actualizar el estado de los
componentes locales a través de acciones y Reggio users.
Si es utilizado, reduce anteriormente probablemente la
palabra Review ser te suena?
Es tensión de conocida y esto básicamente es un Para.
Ejecutarlo como si fuera redux Usualmente Yo soy Reggio ser
trabaja muy de cerca con Bush contéis Buscón test permite
acceder y actualizar el contexto global o el estado del
contexto global a través de él.
Y hay Diack contestó los dos.
Tanto ellos reducir como ellos contestar abajo han muy de
cerca y puede ser una sustitución Arriaga Red Hot En caso de
que tus aplicaciones no sean tan grandes, es perfecto que
utilizan estos dos jugais y también hay una forma de
actualizar tus propios Fox, es decir, crear tus propios Fox.
Con esto existen los costos Fox y también es posible crear un
bus y el nombre que tu gustes.
Después de ver todas estas opciones, quiero hablarte sobre
las reglas con Jobs.
Recuerda no llamar ninguna jugada desde una alteración del
ciclo. Es decir, si estás utilizando condicionales, estás
utilizando algún foro de preferencia.
No lo uses porque sino que es la regla Los futball siempre en
el componente más alto de tú y es decir, nosotros estuvimos
trabajando los Fuchs en punto JS que es el lugar perfecto
para hacerlo o que Sólo están en componentes funcionales.
No puedes utilizarlo sin componentes de clase.
Simplemente no van a funcionar.
Entonces ten cuidado con esa parte.
La última es que los hijos pueden llamarse entre sí mismos.
Esto es permitido.
Ellos pueden llamarse entre entre si mismos y no hay ningún
tipo de problema.
Esta imagen tu la puedes encontrar dentro de la carpeta de
imágenes en el área de SRC de tu de tu proyecto viario como
la tradicional.
Tú vas a poder encontrar en el área de notas el la el
repositorio de Hitchcock en caso de que tú lo necesitas y el
demo para así para para ver la aplicación en producción.
No me queda mas decir que gracias por haber llegado al
proyecto guiado.
Sigue practicando.
Si lo puedes aprender, si tuviste algún problema o tuviste
muchas dudas recuerda que puedes hacernos la saber a través
de los reviews Los comentarios de cruzar al proyecto Eduard y
puedes tutearme Arroba May lleva.
Te agradezco mucho haber estado por aquí.
Cualquier cualquier comentario.
Estamos escuchando Te.
Agradezco mucho.
