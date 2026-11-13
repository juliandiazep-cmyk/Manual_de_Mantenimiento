/* =====================================================================
   app.js - DATOS y LÓGICA de la página

   CÓMO SE CONECTA CON LOS OTROS ARCHIVOS:
   - index.html lo carga con <script src="js/app.js" defer>. "defer" hace que
     el navegador lo ejecute cuando el HTML ya está listo.
   - Este archivo NO trae los pasos escritos en el HTML: los guarda aquí
     (variable D) y los dibuja dentro de elementos del HTML que tienen un id:
       id="count" -> contador de pasos completados
       id="pre"   -> lista de pasos preventivos
       id="syms"  -> botones de síntomas (fallas)
       id="fix"   -> tarjeta con la solución de la falla elegida
   - Las clases CSS que escribe aquí (card, how, tip, dot, sym) están
     definidas en css/styles.css, por eso lo dibujado ya sale con estilo.
   ===================================================================== */

/* ---------- 1. DATOS ----------
   D es un objeto con 4 listas (arreglos). El nombre se arma con
   dispositivo + tipo, por eso luego se puede pedir D[st.dev+"Pre"]:
     pcPre  = PC de escritorio, mantenimiento PREventivo
     pcCor  = PC de escritorio, mantenimiento CORrectivo (fallas)
     lapPre = Laptop, preventivo
     lapCor = Laptop, correctivo
   Abreviaturas usadas en cada elemento de las listas Pre (pasos):
     t   = título del paso
     d   = descripción corta (por qué se hace)
     h   = "how": arreglo con los pasos de "Cómo hacerlo"
     tip = consejo extra (OPCIONAL: hay pasos que no lo tienen)
   Abreviaturas usadas en cada elemento de las listas Cor (fallas):
     p = problema (texto del botón y título)
     s = síntoma ("Lo que notas")
     c = causa ("Por qué pasa")
     f = fix: arreglo con los pasos de "Cómo solucionarlo"
   Para agregar un paso o una falla nueva basta copiar un bloque { ... }
   dentro de la lista correcta, separado por coma; la página lo muestra sola. */
var D={
/* PC de escritorio: pasos preventivos */
pcPre:[
{t:"Apaga y desconecta el equipo",d:"Nunca limpies ni abras un computador encendido: hay riesgo de descarga y de dañar piezas.",h:["Guarda tus archivos y ve a Inicio > Apagar.","Apaga el interruptor de la fuente de poder (atrás del gabinete) y saca el cable de corriente.","Presiona el botón de encendido 5 segundos para descargar la electricidad que queda."]},
{t:"Limpia por fuera",d:"El polvo y la grasa de las manos se acumulan en el gabinete, el teclado y el mouse.",h:["Humedece un poco un paño de microfibra con alcohol isopropílico al 70 % y pásalo por el gabinete, el teclado y el mouse.","Limpia la pantalla solo con un paño seco de microfibra, con movimientos suaves en una sola dirección.","Para el teclado: voltéalo y sacúdelo con suavidad, y limpia entre las teclas con un hisopo."],tip:"Nunca rocíes el líquido directo sobre la pantalla ni sobre el equipo."},
{t:"Limpia por dentro",d:"El polvo interno tapa los ventiladores y hace que el equipo se caliente.",h:["Quita los tornillos de la tapa lateral con el destornillador Phillips y deslízala.","Sujeta cada ventilador con un palito para que no gire y sopla aire en ráfagas cortas (o pasa la brocha antiestática).","Sopla de arriba hacia abajo y, de ser posible, al aire libre para que el polvo no vuelva a entrar.","Ejemplo: el polvo se junta más en la rejilla frontal y en el disipador del procesador."],tip:"Antes de tocar cualquier pieza, toca una parte metálica del gabinete para descargar la estática."},
{t:"Revisa ventiladores y pasta térmica",d:"Si el procesador se calienta demasiado, el equipo se vuelve lento o se apaga solo.",h:["Enciende la PC con la tapa abierta y comprueba que todos los ventiladores giran.","Si uno hace ruido o no gira, cámbialo por otro de las mismas medidas.","Cada 2 o 3 años cambia la pasta térmica: retira el disipador, limpia el procesador con alcohol, pon una gota del tamaño de un grano de arroz y vuelve a colocar el disipador."]},
{t:"Revisa conexiones y memoria RAM",d:"Un cable flojo o una RAM mal puesta causan fallas que parecen graves.",h:["Verifica que los cables de la fuente, de datos (SATA) y del panel frontal estén firmes.","Saca la memoria RAM presionando las pestañas laterales y limpia los contactos dorados con una goma de borrar blanca.","Colócala de nuevo y presiona hasta oír un clic."]},
{t:"Actualiza y protege el sistema",d:"Las actualizaciones corrigen errores y cierran huecos de seguridad.",h:["Ve a Inicio > Configuración > Windows Update > Buscar actualizaciones.","Abre Seguridad de Windows > Protección antivirus > Análisis completo.","Ejemplo: programa esto un día fijo de la semana, como el domingo."]},
{t:"Libera espacio y haz un respaldo",d:"Un disco casi lleno vuelve lento al sistema operativo, y un fallo del disco puede borrar todo.",h:["Escribe Liberador de espacio en disco en el buscador de Windows y borra los archivos temporales.","En Configuración > Aplicaciones desinstala los programas que no uses.","Copia tus archivos importantes a un disco externo o a la nube (Google Drive, OneDrive).","Si tienes disco duro mecánico (HDD), usa la herramienta Optimizar unidades. En un SSD no hace falta."]}
],
/* PC de escritorio: fallas y soluciones */
pcCor:[
{p:"La PC no enciende",s:"No se ve ninguna luz y no suena nada.",c:"Cable suelto, regleta apagada o fuente de poder dañada.",f:["Prueba el tomacorriente con otro aparato, como una lámpara.","Revisa que el cable de poder esté bien conectado y el interruptor de la fuente esté en 1.","Si nada cambia, prueba con otra fuente de poder: si enciende, la anterior estaba dañada."]},
{p:"Enciende pero no hay imagen",s:"Los ventiladores giran pero la pantalla sigue negra.",c:"Cable de video flojo, monitor en otra entrada o RAM mal colocada.",f:["Reconecta el cable de video (HDMI, VGA o DisplayPort) y elige la entrada correcta en el monitor.","Si tienes tarjeta de video, conecta el cable en ella y no en la placa madre.","Saca y vuelve a colocar la RAM hasta oír el clic."]},
{p:"Pitidos al encender",s:"Suenan pitidos repetidos y no arranca.",c:"La placa madre avisa un fallo, casi siempre de RAM o video.",f:["Cuenta los pitidos y búscalos en el manual de tu placa madre (un pitido corto suele ser normal).","Vuelve a colocar la RAM y la tarjeta de video.","Prueba las memorias de a una para encontrar la dañada."]},
{p:"Se apaga sola o se calienta",s:"Se reinicia o se apaga cuando haces algo exigente.",c:"Polvo, ventilador dañado o pasta térmica seca.",f:["Haz la limpieza interna y revisa que giren todos los ventiladores.","Cambia la pasta térmica del procesador.","Mide la temperatura con un programa gratuito como HWMonitor: sobre 80 °C en uso normal es señal de problema."]},
{p:"Está muy lenta",s:"Tarda mucho en iniciar y en abrir programas.",c:"Disco lleno, virus o demasiados programas al iniciar.",f:["Presiona Ctrl + Shift + Esc, abre la pestaña Inicio y deshabilita los programas que no necesitas.","Haz un análisis completo con el antivirus y libera espacio en disco.","Si usas disco duro mecánico, cambiarlo por un SSD es la mejora más notable."]},
{p:"Windows no inicia o sale pantalla azul",s:"Aparece un mensaje de error azul o se reinicia en bucle.",c:"Archivos del sistema dañados, controlador defectuoso o falla del disco.",f:["Reinicia y mantén presionada la tecla Shift al elegir Reiniciar para entrar a Solucionar problemas > Opciones avanzadas > Reparación de inicio.","Si empezó tras una actualización, desinstálala desde Opciones avanzadas > Desinstalar actualizaciones.","Con Windows funcionando, abre el Símbolo del sistema como administrador y escribe sfc /scannow para reparar archivos.","Si nada funciona, respalda tus archivos y reinstala Windows."]}
],
/* Laptop: pasos preventivos */
lapPre:[
{t:"Apaga y desconecta",d:"Igual que en la PC de escritorio: nada de limpiar con el equipo encendido.",h:["Apaga desde Inicio > Apagar y desconecta el cargador.","Si la batería es removible, quítala.","Cierra la tapa solo cuando la pantalla esté apagada."]},
{t:"Limpia pantalla y teclado",d:"El teclado acumula migas y polvo, y la pantalla se mancha con facilidad.",h:["Inclina la laptop y sopla aire comprimido entre las teclas con ráfagas cortas.","Limpia las teclas con un paño apenas humedecido con alcohol isopropílico al 70 %.","Limpia la pantalla con un paño seco de microfibra, sin presionar."],tip:"No uses productos con amoníaco ni papel de cocina en la pantalla: la rayan."},
{t:"Limpia las rejillas de ventilación",d:"Por ahí sale el calor. Si se tapan, la laptop se sobrecalienta y se pone lenta.",h:["Ubica las rejillas (en los costados o debajo del equipo).","Sopla aire comprimido en ráfagas cortas hacia la rejilla; si puedes, sujeta el ventilador para que no gire de golpe.","Úsala sobre una superficie dura y plana: sobre la cama o un sofá se bloquean las entradas de aire."]},
{t:"Cuida la batería",d:"La batería pierde capacidad con el calor y con las cargas extremas.",h:["Procura mantenerla entre 20 % y 80 % de carga cuando sea posible.","Evita dejarla al sol o dentro de un carro caliente.","Mira su salud: abre el Símbolo del sistema como administrador, escribe powercfg /batteryreport y abre el archivo que indica."],tip:"Algunas marcas traen una opción de “límite de carga” en su programa de configuración."},
{t:"Actualiza y protege el sistema",d:"Mantiene el equipo seguro y estable.",h:["Ve a Inicio > Configuración > Windows Update > Buscar actualizaciones.","Haz un Análisis completo en Seguridad de Windows.","Actualiza también los controladores desde la página del fabricante de tu laptop."]},
{t:"Libera espacio y haz un respaldo",d:"Evita que el disco se llene y que pierdas tus archivos.",h:["Usa el Liberador de espacio en disco para borrar temporales.","Desinstala programas que no uses en Configuración > Aplicaciones.","Copia tus archivos importantes a un disco externo o a la nube."]},
{t:"Haz una limpieza interna cada 1 o 2 años",d:"Es la limpieza más profunda y la que más baja la temperatura.",h:["Apaga, desconecta y quita los tornillos de la tapa inferior con el destornillador de precisión; guárdalos en orden.","Desconecta la batería interna si la tiene, limpia el ventilador y el disipador con brocha y aire.","Cambia la pasta térmica y cierra la tapa.","Si es tu primera vez o la laptop está en garantía, pide ayuda a un técnico."],tip:"Busca en video el desarme de tu modelo exacto antes de empezar."}
],
/* Laptop: fallas y soluciones */
lapCor:[
{p:"No carga la batería",s:"El cargador está conectado pero el porcentaje no sube.",c:"Cargador o puerto dañado, o batería gastada.",f:["Prueba otro tomacorriente y revisa que el cable no esté roto.","Limpia el puerto de carga con un palito de madera, sin forzar.","Si la batería es removible, quítala y enciende la laptop solo con el cargador.","En Administrador de dispositivos > Baterías, desinstala la batería y reinicia para que Windows la detecte de nuevo."]},
{p:"La batería dura muy poco",s:"Se descarga en menos de una hora.",c:"Batería desgastada o demasiados programas abiertos.",f:["Baja el brillo y activa el Ahorro de batería (Configuración > Sistema > Energía y batería).","Cierra programas en segundo plano desde el Administrador de tareas.","Revisa el informe con powercfg /batteryreport: si la capacidad actual es mucho menor que la de diseño, cambia la batería."]},
{p:"Se calienta mucho o el ventilador suena fuerte",s:"El equipo quema al tacto y el ventilador va al máximo.",c:"Rejillas con polvo, pasta térmica seca o mala superficie.",f:["Úsala sobre una superficie dura o una base con ventiladores.","Limpia las rejillas con aire comprimido.","Haz la limpieza interna y cambia la pasta térmica."]},
{p:"Se derramó líquido",s:"Cayó agua, café o refresco sobre el teclado.",c:"El líquido llega a la placa y causa cortocircuito.",f:["Apágala de inmediato, desconecta el cargador y quita la batería si se puede.","Ponla boca abajo, en forma de V invertida, y seca con un paño sin frotar fuerte.","Déjala secar entre 24 y 48 horas sin encenderla ni usar secador de pelo.","Si el líquido tenía azúcar, llévala a un técnico aunque parezca que funciona."]},
{p:"La pantalla está negra",s:"La laptop enciende pero no se ve nada.",c:"Pantalla o cable dañados, brillo al mínimo o falla del sistema.",f:["Sube el brillo con las teclas de función.","Alumbra la pantalla con una linterna: si ves la imagen muy tenue, falla la luz de la pantalla.","Conéctala a un monitor externo con HDMI y presiona Windows + P.","Si en el monitor sí se ve, la falla es de la pantalla o de su cable."]},
{p:"Está lenta o no inicia Windows",s:"Tarda mucho en arrancar o se queda en el logo.",c:"Disco lleno, virus o archivos del sistema dañados.",f:["Mantén presionado el botón de encendido 15 segundos y vuelve a encender.","Entra a Solucionar problemas > Opciones avanzadas > Reparación de inicio.","Si inicia, abre el Símbolo del sistema como administrador y escribe sfc /scannow.","Para que vuelva a ir rápida, cambia el disco duro por un SSD."]}
]};

/* ---------- 2. LÓGICA DE LA PÁGINA ---------- */

/* ESTADO: lo que la página "recuerda" mientras está abierta.
   st.dev  = equipo elegido: "pc" o "lap" (el botón de la barra de navegación)
   st.sel  = posición (0,1,2...) de la falla elegida en el diagnóstico
   done    = pasos marcados como hechos, uno por equipo. Ejemplo:
             done.pc = [true, false, true] -> el paso 1 y el 3 están marcados
   El progreso de "done" se guarda en el navegador (ver más abajo, save()). */
var st={dev:"pc",sel:0},done={pc:[],lap:[]};

/* GUARDADO DEL PROGRESO: localStorage es una memoria pequeña del navegador que
   sobrevive aunque recargues o cierres la página (solo guarda texto, por eso se
   usa JSON.stringify para convertir "done" a texto y JSON.parse para recuperarlo).
   Todo va dentro de try/catch porque el navegador puede bloquear localStorage
   (modo privado, por ejemplo); en ese caso la página sigue funcionando, solo que
   sin recordar los pasos. */
var KEY="plano-mantenimiento-progreso";   /* nombre con el que se guarda el dato */
function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(e){}}
/* Al abrir la página: si hay progreso guardado y tiene el formato esperado
   (dos listas: pc y lap), se usa en lugar de las listas vacías. */
try{var g=JSON.parse(localStorage.getItem(KEY));if(g&&Array.isArray(g.pc)&&Array.isArray(g.lap))done=g}catch(e){}

/* li(a): recibe un arreglo de textos y devuelve el HTML de una lista.
   Ejemplo: li(["a","b"]) -> "<li>a</li><li>b</li>"
   .map() recorre el arreglo, .join("") une todo en un solo texto. */
function li(a){return a.map(function(x){return"<li>"+x+"</li>"}).join("")}

/* renderPre(): dibuja la RUTA PREVENTIVA (sección 01 del HTML). */
function renderPre(){
  /* a = pasos del equipo actual (D["pc"+"Pre"] = D.pcPre)
     d = lista de pasos marcados de ese equipo
     n = cuántos están marcados (filter(Boolean) deja solo los true) */
  var a=D[st.dev+"Pre"],d=done[st.dev],n=d.filter(Boolean).length;
  /* Escribe el contador en <p id="count"> del HTML, ej. "2 / 7 pasos completados" */
  document.getElementById("count").textContent=n+" / "+a.length+" pasos completados";
  /* Por cada paso crea un <li> con un botón circular (.dot, con el número) y una
     tarjeta (.card), y lo mete dentro de <ol id="pre"> con innerHTML.
     - data-i guarda la posición del paso: así el clic sabe cuál se marcó.
     - aria-pressed="true/false" indica si el paso está marcado; el CSS lo usa
       para pintar el círculo de verde (.dot[aria-pressed="true"]).
     - El tip solo se dibuja si el paso lo tiene: (s.tip ? ... : ''). */
  document.getElementById("pre").innerHTML=a.map(function(s,i){
    return'<li><button class="dot" data-i="'+i+'" aria-pressed="'+!!d[i]+'" aria-label="Marcar el paso '+(i+1)+' como hecho">'+(i+1)+'</button><article class="card"><h4>'+s.t+'</h4><p>'+s.d+'</p><div class="how"><b>Cómo hacerlo</b><ol>'+li(s.h)+'</ol></div>'+(s.tip?'<p class="tip">Ojo: '+s.tip+'</p>':'')+'</article></li>'}).join("");
}

/* renderCor(): dibuja el DIAGNÓSTICO DE FALLAS (sección 02 del HTML). */
function renderCor(){
  /* a = fallas del equipo actual; f = la falla elegida (a[st.sel]) */
  var a=D[st.dev+"Cor"],f=a[st.sel];
  /* 1) Botones de síntomas dentro de <div id="syms">. El que coincide con
        st.sel queda con aria-pressed="true" y el CSS lo pinta de amarillo
        (.sym[aria-pressed="true"]). data-k guarda su posición. */
  document.getElementById("syms").innerHTML=a.map(function(x,i){return'<button class="sym" data-k="'+i+'" aria-pressed="'+(i===st.sel)+'">'+x.p+'</button>'}).join("");
  /* 2) Tarjeta de solución dentro de <article id="fix">: título, "Lo que notas",
        "Por qué pasa" y la lista "Cómo solucionarlo". */
  document.getElementById("fix").innerHTML='<h4>'+f.p+'</h4><dl><dt>Lo que notas</dt><dd>'+f.s+'</dd><dt>Por qué pasa</dt><dd>'+f.c+'</dd></dl><div class="how"><b>Cómo solucionarlo</b><ol>'+li(f.f)+'</ol></div>';
}

/* renderAll(): vuelve a dibujar todo. Se usa al abrir la página y al cambiar
   de equipo (PC <-> Laptop). */
function renderAll(){
  /* Marca como activo el botón PC/Laptop de la barra (<button data-dev="pc"> en
     el HTML): aria-pressed es "true" solo si su data-dev coincide con st.dev. */
  document.querySelectorAll(".tog button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.dev===st.dev)});
  renderPre();renderCor();   /* dibuja las dos secciones dinámicas */
}

/* CLICS: un solo "oyente" para toda la página (técnica llamada delegación de
   eventos). Como los botones se crean con JavaScript y cambian, es más fácil
   escuchar todos los clics del documento y mirar qué elemento se tocó.
   e.target.closest(selector) busca el elemento tocado (o uno que lo contenga)
   que coincida con el selector; si no hay ninguno, da null y se salta ese caso. */
document.addEventListener("click",function(e){
  var t;
  /* Caso A: botón PC/Laptop (tiene data-dev). Cambia de equipo, vuelve a la
     primera falla (sel=0) y redibuja todo. */
  if(t=e.target.closest("[data-dev]")){st.dev=t.dataset.dev;st.sel=0;renderAll()}
  /* Caso B: círculo numerado de un paso (.dot). Lee su posición desde data-i
     (el + lo convierte de texto a número) y invierte true/false en done, lo GUARDA con save() y redibuja. */
  else if(t=e.target.closest(".dot")){var i=+t.dataset.i;done[st.dev][i]=!done[st.dev][i];save();renderPre();
    /* renderPre() borra y vuelve a crear los botones, y con eso el teclado pierde el foco.
       Aquí se le devuelve al mismo círculo para poder seguir con Tab y Enter. */
    var b=document.querySelector('.dot[data-i="'+i+'"]');if(b)b.focus()}
  /* Caso C: botón de una falla (.sym). Guarda cuál es (data-k) y redibuja
     solo el diagnóstico. */
  else if(t=e.target.closest(".sym")){st.sel=+t.dataset.k;renderCor();
    /* Igual que arriba: se devuelve el foco al botón de la falla elegida. */
    var f=document.querySelector('.sym[data-k="'+st.sel+'"]');if(f)f.focus()}
});

/* Primera ejecución: dibuja la página al cargar (si esto faltara, las secciones
   01 y 02 saldrían vacías). */
renderAll();

/* ESPACIO BAJO LA BARRA FIJA: en celular la barra se parte en varias filas y mide más
   que en computador. Esta función mide su altura real y se la da a scroll-padding-top
   (la distancia que deja libre al saltar a una sección), así la barra nunca tapa un título.
   Se ejecuta al cargar y cada vez que cambia el tamaño de la ventana. */
function ajustarBarra(){
  var b=document.querySelector(".bar");
  if(b)document.documentElement.style.scrollPaddingTop=(b.offsetHeight+16)+"px";
}
ajustarBarra();
window.addEventListener("resize",ajustarBarra);
