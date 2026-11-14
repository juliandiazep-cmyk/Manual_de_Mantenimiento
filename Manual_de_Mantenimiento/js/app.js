/* PASOS Y FALLAS: aquí está todo el texto del manual, por equipo (pc / lap) */
var D={
 "pcPre": [
  {
   "t": "Mide cómo anda tu equipo cuando está sano",
   "d": "Para notar que algo anda mal, primero tienes que saber cómo es lo normal. Este paso va con el equipo encendido y tranquilo.",
   "h": [
    "Enciende el equipo, espera un par de minutos y no abras programas pesados.",
    "Presiona Ctrl + Shift + Esc para abrir el Administrador de tareas (si sale reducido, pulsa «Más detalles») y entra a Rendimiento.",
    "Anota el porcentaje de uso de CPU, Memoria y Disco. En reposo suelen ser bajos.",
    "En Memoria mira «Confirmada» (por ejemplo, 6/16 GB). Si el primer número se acerca al segundo, Windows ya usa el disco como memoria de emergencia.",
    "En la pestaña Inicio (en Windows 11, «Aplicaciones de arranque») cuenta cuántos programas se abren contigo y cuáles tienen impacto «Alto».",
    "Instala HWMonitor (gratuito, de CPUID) y anota la temperatura del procesador en reposo: es tu línea base."
   ],
   "tip": "Toma una captura de pantalla de cada pestaña y guárdalas junto con tus anotaciones. El día que el equipo ande lento, las comparas."
  },
  {
   "t": "Apaga, desconecta y descarga la estática",
   "d": "Este es el paso que casi todos se saltan y el que más importa. La fuente de poder guarda un poco de energía aunque el equipo esté apagado, así que conviene dejarla sin carga antes de meter la mano. A partir de aquí el equipo queda apagado y desconectado hasta que el manual te diga que lo enciendas.",
   "h": [
    "Guarda lo que tengas abierto y apaga desde Inicio > Apagar.",
    "Atrás del gabinete, en la fuente de poder, hay un interruptor con dos marcas: la raya | significa encendido y el círculo O significa apagado. Ponlo en O y saca el cable de la pared.",
    "Con todo desconectado, mantén presionado el botón de encendido unos 5 segundos. Así se gasta la energía que quedó guardada. No va a pasar nada visible y es lo normal.",
    "Antes de tocar cualquier pieza, apoya la mano un momento en una parte metálica sin pintar del gabinete. Tu cuerpo y el equipo quedan con la misma carga y no le pasas estática a nada. Repítelo si te levantas y vuelves."
   ],
   "tip": "Antes de mover un solo cable, tómale fotos con el celular. Cuando toque volver a conectar todo, te vas a alegrar de tenerlas."
  },
  {
   "t": "Límpialo por fuera y deja respirar al gabinete",
   "d": "Una PC toma el aire por el frente y lo bota por atrás y por las rejillas. Si esas entradas están tapadas, todo lo que hay adentro se calienta. Aquí el equipo sigue apagado y desconectado.",
   "h": [
    "Humedece un poco un paño de microfibra con alcohol isopropílico al 70 % (húmedo, no empapado) y pásalo por el gabinete, el teclado y el mouse.",
    "La pantalla se limpia solo con un paño de microfibra seco, siempre en la misma dirección y sin apretar. Si hay una mancha dura, humedece apenas el paño con agua. No uses alcohol ni limpiavidrios en la pantalla.",
    "Deja unos 10 cm libres adelante y atrás del gabinete. Si lo tienes metido en un mueble cerrado, sácalo o ábrele ventilación.",
    "Si el gabinete tiene filtros de polvo (rejillas desmontables, casi siempre en el frente o abajo), sácalos, límpialos con una brocha o con agua si son lavables y déjalos secar del todo antes de ponerlos otra vez."
   ],
   "tip": "El líquido siempre va en el paño, nunca directo sobre el equipo."
  },
  {
   "t": "Limpia el interior siguiendo el camino del aire",
   "d": "Por dentro, el aire entra por el frente, pasa por los componentes y sale por atrás o por arriba. El polvo se acumula justo donde ese aire se frena, así que ahí es donde hay que buscarlo. El equipo sigue apagado y desconectado.",
   "h": [
    "Ubica la tapa lateral: en casi todos los gabinetes es la que queda a la izquierda cuando los miras de frente. Quita sus tornillos de atrás con el destornillador Phillips, guárdalos en un recipiente y desliza la tapa hacia atrás.",
    "Fíjate dónde están los ventiladores. Sujeta cada aspa con un palillo o un hisopo (no con el dedo) para que no gire de golpe y sopla el aire comprimido en ráfagas cortas, con la lata a unos 10 cm.",
    "Limpia siguiendo el camino del aire: primero la rejilla o el filtro frontal, luego el disipador del procesador, la tarjeta de video, la fuente y la salida de atrás.",
    "No uses aspiradora porque genera estática. Si puedes, hazlo en un patio o en un balcón para que el polvo no se te quede en la casa."
   ],
   "tip": "Mantén la lata de aire derecha. Si la inclinas, puede salir líquido helado y caer sobre la placa."
  },
  {
   "t": "Revisa ventiladores y temperaturas",
   "d": "Cuando el procesador se calienta de más, se protege bajando su propia velocidad. Por eso la PC puede sentirse lenta sin estar dañada: está pasando calor. Aquí el equipo va encendido y con la tapa abierta.",
   "h": [
    "Comprueba que no haya cables cerca de las aspas. Reconecta el cable a la pared, pon el interruptor de la fuente en | y enciende el equipo. Mantén manos, pelo y cables lejos de los ventiladores.",
    "Verifica que todos los ventiladores giren sin ruidos raros (roce, zumbido o traqueteo).",
    "Abre HWMonitor y compara con la temperatura en reposo que anotaste en el paso 1. Luego pon el equipo a trabajar unos 5 minutos (un juego o un video en alta calidad) y mira la temperatura con carga.",
    "Referencia orientativa: en reposo suele estar entre 30 y 50 °C, y con carga, por debajo de 80 a 85 °C. El máximo exacto lo publica el fabricante de tu procesador.",
    "Si un ventilador está parado o suena mal, apaga y desconecta (paso 2) y cámbialo por otro de las mismas medidas (por ejemplo, 120 mm de lado) y con el mismo conector de 3 o 4 pines."
   ],
   "tip": "Si las temperaturas siguen altas después de limpiar, el siguiente paso es la pasta térmica."
  },
  {
   "t": "Cambia la pasta térmica (solo si hace falta)",
   "d": "La pasta térmica pasa el calor del procesador al disipador. Con los años se reseca. Cámbiala solo si, después de limpiar, las temperaturas siguen altas, o si el disipador ya tiene varios años. El equipo va apagado y desconectado.",
   "h": [
    "Apaga y desconecta (paso 2).",
    "Desconecta del ventilador del disipador su cable y afloja los tornillos poco a poco y en cruz. Retira el disipador con suavidad.",
    "Limpia las dos superficies con alcohol isopropílico y un paño sin pelusa.",
    "Pon una cantidad pequeña de pasta (más o menos como un grano de arroz) en el centro del procesador.",
    "Vuelve a montar el disipador apretando los tornillos en cruz y reconecta el cable del ventilador."
   ],
   "tip": "Más pasta no es mejor: lo que sobra se desborda y ensucia el socket."
  },
  {
   "t": "Reasienta la RAM y prueba la memoria",
   "d": "Una memoria mal asentada produce fallas que parecen graves y no lo son. Primero se revisa el contacto físico, con el equipo apagado, y después se prueba la memoria con una herramienta que ya trae Windows.",
   "h": [
    "Apaga y desconecta otra vez (paso 2) si habías encendido el equipo.",
    "Revisa que los cables de la fuente, los de datos (SATA) y los del panel frontal estén bien firmes. Presiona cada conector con suavidad: no deben moverse.",
    "Saca cada módulo de RAM: abre las pestañas de plástico de los extremos de la ranura y levántalo. Pasa con suavidad una goma de borrar blanca por los contactos dorados, sopla las virutas y vuelve a ponerlo alineando la muesca con la de la ranura. Empuja parejo hasta oír un clic.",
    "Cierra el gabinete con sus tornillos, reconecta todo, pon el interruptor de la fuente en | y enciende el equipo.",
    "Con Windows abierto, presiona Windows + R, escribe mdsched y pulsa Enter. Elige «Reiniciar ahora y comprobar si existen problemas». La prueba tarda unos minutos y el equipo se reinicia solo.",
    "El resultado aparece cuando inicies sesión. Si no lo ves, abre el Visor de eventos y busca el registro MemoryDiagnostics-Results."
   ]
  },
  {
   "t": "Mira la salud del disco",
   "d": "Los discos casi siempre dan señales antes de dañarse, pero solo si los miras.",
   "h": [
    "Abre PowerShell como administrador (clic derecho en el botón Inicio > «Terminal (administrador)» o «Windows PowerShell (administrador)»).",
    "Escribe Get-PhysicalDisk | Select-Object FriendlyName, HealthStatus y pulsa Enter. En HealthStatus lo que quieres ver es Healthy (sano).",
    "Para más detalle usa CrystalDiskInfo (gratuito). Si marca «Precaución» o «Malo», respalda tus archivos ya y piensa en cambiar el disco. Los «sectores reasignados» son zonas del disco que ya fallaron.",
    "Abre el Símbolo del sistema como administrador (busca «cmd» en Inicio, clic derecho > Ejecutar como administrador), escribe chkdsk C: /scan y pulsa Enter.",
    "Para saber si tu disco es mecánico (HDD) o SSD, busca «Desfragmentar y optimizar unidades» y mira «Tipo de medio». Si es HDD, pulsa Optimizar; si es SSD, no hace falta."
   ]
  },
  {
   "t": "Haz tu respaldo 3-2-1",
   "d": "Un respaldo guardado en el mismo disco no sirve de nada si ese disco falla. La regla 3-2-1 lo evita.",
   "h": [
    "La regla: tres copias de tus datos, en dos tipos de medios distintos, y una de ellas fuera de tu casa.",
    "Un ejemplo sencillo: tus archivos en el equipo (copia 1), una copia en un disco externo (copia 2) y otra en la nube (copia 3, que además queda fuera de casa).",
    "Conecta el disco externo, copia tus carpetas importantes (Documentos, Imágenes, Escritorio) y desconéctalo al terminar. Así un virus o una falla eléctrica no lo alcanzan."
   ],
   "tip": "Una copia que nunca has probado abrir no cuenta: abre un par de archivos del respaldo para comprobar que funcionan."
  },
  {
   "t": "Mantén al día el sistema, los controladores y el arranque",
   "d": "El sistema operativo es el que le habla a todo el hardware. Si lo descuidas, hasta el mejor equipo se porta mal.",
   "h": [
    "Entra a Configuración > Windows Update y pulsa «Buscar actualizaciones». Luego abre Opciones avanzadas > Actualizaciones opcionales: ahí Windows deja los controladores nuevos.",
    "Si el controlador de video o el del chipset no aparece ahí, búscalo en la página del fabricante (NVIDIA, AMD, Intel o el de tu placa madre).",
    "Abre Seguridad de Windows > Protección antivirus y contra amenazas > Opciones de examen, elige «Examen completo» y pulsa Examinar ahora. Tarda un buen rato, pero puedes seguir usando el equipo.",
    "Antes de un cambio grande (un controlador o una actualización mayor), busca «Crear un punto de restauración» en Inicio, pulsa el botón Crear y ponle un nombre. Si el botón está gris, pulsa primero Configurar y activa la protección del sistema.",
    "En el Administrador de tareas > Inicio, haz clic derecho en los programas que no necesites al arrancar y elige Deshabilitar. No toques el antivirus, el audio ni los que no reconozcas."
   ],
   "tip": "Escoge un día fijo para esto, por ejemplo el domingo por la noche."
  }
 ],
 "pcCor": [
  {
   "p": "No enciende",
   "s": "Presionas el botón y no pasa nada: ni luces, ni ruido, ni un ventilador girando.",
   "c": "La energía se está perdiendo en algún punto del camino: el tomacorriente, la regleta, el cable, la fuente, el botón de encendido o la placa madre.",
   "f": [
    "Empieza por lo de afuera: conecta una lámpara en el mismo tomacorriente para ver si hay luz, y prueba con otra regleta o sin regleta.",
    "Revisa que el cable de poder esté firme en los dos extremos y que el interruptor de la fuente (atrás del gabinete) esté en | (encendido) y no en O (apagado).",
    "Apaga y desconecta, abre la tapa y comprueba que los conectores grandes de la fuente y el cable del botón de encendido (panel frontal) estén firmes en la placa.",
    "Desconecta todo lo que no sea indispensable (USB, discos extra, tarjetas) y prueba solo con la placa, el procesador y su ventilador, una RAM y la fuente.",
    "Si sigue igual, prueba con otra fuente que sepas que funciona. Si con esa enciende, el problema era la fuente."
   ],
   "x": "La fuente convierte la corriente alterna de la pared en voltajes bajos (12 V, 5 V y 3,3 V). Si no entrega esos voltajes, la placa ni siquiera empieza a arrancar."
  },
  {
   "p": "Enciende, pero no hay imagen",
   "s": "Los ventiladores giran y hay luces, pero el monitor dice «sin señal» o se queda negro.",
   "c": "Puede ser el cable o la entrada de video equivocados, una tarjeta de video mal asentada o la RAM mal colocada.",
   "f": [
    "Revisa que el monitor esté en la entrada correcta (HDMI, DisplayPort o VGA) y reconecta el cable por los dos lados.",
    "Si tienes tarjeta de video dedicada, el cable del monitor va conectado a ella y no a la placa madre: sus salidas quedan más abajo, en la parte de atrás del gabinete. Si no tienes tarjeta dedicada, va a la placa.",
    "Prueba con otro cable o con otro monitor.",
    "Apaga y desconecta, abre la tapa, saca la RAM, límpiala y vuélvela a poner (como en el paso de reasentar la RAM). Si tienes varios módulos, prueba con uno solo. Haz lo mismo con la tarjeta de video: sácala y reasiéntala."
   ],
   "x": "Antes de cargar Windows, el firmware de la placa hace una autoprueba llamada POST (Power-On Self-Test). Si no encuentra RAM o video que funcionen, no avanza hacia el sistema operativo."
  },
  {
   "p": "Suenan pitidos al arrancar",
   "s": "Uno o varios pitidos seguidos y el equipo no inicia.",
   "c": "El POST encontró algo que no puede usar, casi siempre la RAM o el video.",
   "f": [
    "Cuenta los pitidos y anota si son cortos o largos.",
    "Busca su significado en el manual de tu placa madre. Cambia según el fabricante del BIOS (AMI, Award, Phoenix), y en muchos equipos un solo pitido corto significa que todo salió bien.",
    "Apaga y desconecta, y reasienta la RAM y la tarjeta de video.",
    "Prueba los módulos de memoria de uno en uno (apagando y desconectando cada vez que cambies uno) para encontrar el que está dañado."
   ],
   "x": "El pitido es la forma que tiene el firmware de avisarte cuando todavía no hay video. Muchas placas modernas traen luces de diagnóstico en lugar de bocina: revisa su manual."
  },
  {
   "p": "Se apaga o se reinicia sola",
   "s": "Estás jugando, editando un video o compilando y, de pronto, todo negro. A veces ni te da tiempo de guardar.",
   "c": "Calor excesivo, una fuente que no aguanta la carga, RAM defectuosa o un controlador con errores.",
   "f": [
    "Presiona Windows + R, escribe eventvwr.msc y pulsa Enter para abrir el Visor de eventos. Ve a Registros de Windows > Sistema, pulsa «Filtrar registro actual» a la derecha y escribe 41 en el campo de Id. Busca el evento Kernel-Power.",
    "Fíjate en la hora del evento. Si coincide con un juego o una tarea pesada, apunta al calor o a la fuente.",
    "Haz la limpieza interna, comprueba los ventiladores y vigila la temperatura con HWMonitor mientras el equipo trabaja.",
    "Si no es el calor, prueba la memoria con mdsched. Para revisar la fuente, busca en su etiqueta los vatios (W) que entrega y compáralos con los que recomienda el fabricante de tu tarjeta de video."
   ],
   "x": "El evento 41 de Kernel-Power significa que Windows, al arrancar, encontró que el apagado anterior no fue limpio. No dice por qué: solo es la pista de que algo cortó el equipo (calor, energía, hardware o un controlador). Y si el procesador llega a su límite de temperatura, primero baja su frecuencia (thermal throttling) y, si eso no alcanza, se apaga para protegerse."
  },
  {
   "p": "Está muy lenta",
   "s": "Tarda minutos en arrancar, los programas se quedan «pensando» y el ventilador no para.",
   "c": "El disco está casi lleno o muy exigido, hay poca RAM, demasiados programas arrancan al inicio, hay malware o el disco mecánico ya no da más.",
   "f": [
    "Abre el Administrador de tareas (Ctrl + Shift + Esc) y ordena la pestaña Procesos por CPU, Memoria y Disco haciendo clic en cada encabezado: ¿quién consume más? Compara con los valores que anotaste cuando el equipo estaba sano.",
    "Si el uso del Disco se queda cerca del 100 %, el cuello de botella es el almacenamiento. Con un disco mecánico, pasar a un SSD es el cambio que más se nota.",
    "En Rendimiento > Memoria, si casi toda la memoria está en uso, cierra programas o amplía la RAM.",
    "Desactiva en Inicio lo que no necesites, pasa un Examen completo con Seguridad de Windows y libera espacio desde Configuración > Sistema > Almacenamiento."
   ],
   "x": "Cuando la RAM se llena, Windows mueve datos a un archivo de paginación (pagefile.sys) que vive en el disco. Es memoria virtual: funciona, pero es muchísimo más lenta que la RAM, y por eso todo se arrastra."
  },
  {
   "p": "Pantalla azul o Windows no inicia",
   "s": "Aparece una pantalla azul con una carita triste y un código, o el equipo se reinicia una y otra vez.",
   "c": "Un controlador defectuoso, archivos del sistema dañados, memoria con errores o un disco en mal estado.",
   "f": [
    "Tranquilo. Anota o fotografía el código de detención (por ejemplo, CRITICAL_PROCESS_DIED): es la pista más útil que tienes.",
    "Si Windows abre, abre el Símbolo del sistema como administrador y ejecuta DISM /Online /Cleanup-Image /RestoreHealth (necesita internet y tarda). Al terminar, ejecuta sfc /scannow.",
    "Si empezó tras instalar un controlador, revierte o actualiza ese controlador desde el Administrador de dispositivos.",
    "Si no abre pero ves la pantalla de inicio de sesión, mantén Shift mientras pulsas Reiniciar (icono de encendido, abajo a la derecha). En el Entorno de recuperación elige Solucionar problemas > Opciones avanzadas y prueba Reparación de inicio o Restaurar sistema.",
    "Para arrancar con lo mínimo, en Opciones avanzadas elige Configuración de inicio > Reiniciar y pulsa 4 o F4 (Modo seguro).",
    "Si nada funciona, copia tus archivos a un disco externo (desde el Modo seguro, si entras) y reinstala Windows. Si no puedes entrar, pide ayuda para sacarlos antes: reinstalar puede borrarlos."
   ],
   "x": "Los controladores trabajan en modo kernel, que es el nivel de mayor privilegio del sistema. Si uno falla ahí, Windows se detiene a propósito (la pantalla azul) para no seguir dañando datos."
  },
  {
   "p": "Un dispositivo no funciona (USB, sonido, Wi-Fi)",
   "s": "El sistema no reconoce el USB, el audio desapareció o la tarjeta de red ya no aparece.",
   "c": "Un controlador dañado o incompatible, un puerto o cable defectuoso, o un conflicto después de una actualización.",
   "f": [
    "Prueba el dispositivo en otro puerto y, si puedes, en otro equipo. Así sabes si falla el dispositivo o el sistema.",
    "Abre el Administrador de dispositivos (clic derecho en el botón Inicio). Un triángulo amarillo indica problema; haz doble clic en ese dispositivo y la pestaña General te muestra el código de error.",
    "En la pestaña Controlador usa Revertir controlador si el fallo empezó tras una actualización, o Actualizar controlador si es más antiguo.",
    "Como último paso, usa Desinstalar dispositivo y reinicia. Windows lo detecta de nuevo y reinstala el controlador."
   ],
   "x": "Un «Código 43» significa que el controlador le avisó a Windows de que el dispositivo falló, y Windows lo detuvo. Microsoft recomienda desinstalar el dispositivo y volver a instalarlo."
  }
 ],
 "lapPre": [
  {
   "t": "Mira cómo está tu batería y tu temperatura (línea base)",
   "d": "La batería envejece aunque la cuides, y medirla es la única forma de saber cuánta vida le queda de verdad. Este paso se hace con la laptop encendida y conectada.",
   "h": [
    "Abre el Símbolo del sistema como administrador: busca «cmd» en Inicio, clic derecho > Ejecutar como administrador. Escribe powercfg /batteryreport y pulsa Enter.",
    "Windows te muestra la ruta donde guardó el informe (termina en battery-report.html). Cópiala, pégala en la barra de direcciones de tu navegador y pulsa Enter para abrirlo.",
    "Baja hasta la sección de baterías instaladas y compara dos números: la capacidad de diseño (lo que la batería tenía cuando era nueva) y la capacidad de carga completa (lo que carga hoy). Por ejemplo, si el diseño era 50 000 mWh y hoy carga 38 000 mWh, conserva más o menos el 76 %.",
    "Mira también el historial de uso para ver cuánto te dura en la vida real. Anota los valores.",
    "Descarga e instala HWMonitor (programa gratuito de CPUID) y anota la temperatura del procesador en reposo. Será tu línea base de temperatura."
   ],
   "tip": "Perder algo de capacidad con los años es normal. Lo que importa es la tendencia: repite la medición cada pocos meses y compara."
  },
  {
   "t": "Apaga, desconecta y respeta la batería",
   "d": "La batería de una laptop es de litio. No es peligrosa si la tratas bien, pero no se limpia ni se abre con el equipo conectado. A partir de aquí la laptop queda apagada y desconectada.",
   "h": [
    "Apaga desde Inicio > Apagar y desconecta el cargador.",
    "Dale la vuelta a la laptop. Si la batería es extraíble, verás un seguro deslizante y una pieza grande que sale como una tapa: deslízalo y sácala. Si no ves nada de eso, tu batería es interna y no hay que quitarla.",
    "Antes de cerrar la tapa comprueba que la pantalla y las luces estén apagadas. Si solo se quedó en suspensión, sigue encendida y se calentaría dentro de una mochila."
   ],
   "tip": "Si ves la batería hinchada o la base de la laptop abultada, deja de usarla y llévala a un técnico."
  },
  {
   "t": "Limpia el teclado y la pantalla",
   "d": "Es lo que más ves y lo que más se ensucia: migas, grasa de los dedos y polvo. Hazlo con la laptop apagada y desconectada.",
   "h": [
    "Inclina la laptop y aplica aire comprimido entre las teclas en ráfagas cortas, para que lo que haya entre ellas salga.",
    "Pasa por las teclas un paño apenas humedecido con alcohol isopropílico al 70 %. Nunca rocíes el líquido sobre el teclado.",
    "Limpia la pantalla con un paño de microfibra seco, sin presionar. Si hay una mancha dura, humedece apenas el paño con agua."
   ],
   "tip": "Nada de alcohol, amoníaco ni papel de cocina en la pantalla: la rayan o dañan su capa protectora."
  },
  {
   "t": "Despeja las rejillas y cuida dónde la usas",
   "d": "Una laptop saca el calor por muy pocas ranuras: las rejillas, que son aberturas finas abajo, en los costados o detrás de la bisagra. Si se tapan, se calienta y se frena sola.",
   "h": [
    "Con la laptop apagada, sopla aire comprimido en ráfagas cortas hacia las rejillas. Si ves las aspas del ventilador, sujétalas con un palillo para que no giren de golpe.",
    "Úsala sobre una superficie dura y plana, como una mesa. Sobre una cama, un sofá o las piernas con una tela en medio, las entradas de aire quedan tapadas y el calor no sale.",
    "Después de limpiar, mide de nuevo la temperatura con HWMonitor y compárala con tu línea base del paso 1.",
    "Si la exiges mucho (juegos, edición de video), una base con ventiladores ayuda.",
    "Si el calor persiste, baja el Estado máximo del procesador: busca «Editar plan de energía» > Cambiar la configuración avanzada de energía > Administración de energía del procesador > Estado máximo del procesador, y prueba con 90 %. Si no ves esa opción, tu equipo no la permite."
   ]
  },
  {
   "t": "Cuida la batería con hábitos, no con manías",
   "d": "El calor y las cargas extremas la desgastan más que el uso de todos los días. Para una batería de litio, lo más cómodo es andar entre el 20 % y el 80 %: por debajo del 20 % trabaja forzada, y por encima del 80 %, sobre todo al 100 % y con calor, se gasta más rápido.",
   "h": [
    "Procura mantener la carga entre el 20 % y el 80 % cuando puedas.",
    "No la dejes al sol ni dentro de un carro caliente: el calor causa una pérdida permanente de capacidad.",
    "Si tu laptop trae carga inteligente o un límite de carga (en la BIOS o en el programa del fabricante), actívalo cuando casi siempre la uses enchufada: así pasa menos tiempo al 100 %.",
    "Si vas a guardarla varias semanas sin usar, déjala con más o menos la mitad de carga y apagada, no al 0 % ni al 100 %."
   ],
   "tip": "No hace falta obsesionarse: un día que necesites toda la batería para un viaje, cárgala al 100 % sin culpa."
  },
  {
   "t": "Revisa el disco y haz tu respaldo 3-2-1",
   "d": "Tu laptop se mueve, se golpea y se calienta. Tus archivos merecen estar en más de un lugar.",
   "h": [
    "Abre PowerShell como administrador: clic derecho en el botón Inicio > «Terminal (administrador)» o «Windows PowerShell (administrador)». Escribe Get-PhysicalDisk | Select-Object FriendlyName, HealthStatus y pulsa Enter. En la columna HealthStatus lo que quieres ver es Healthy (sano).",
    "Libera espacio: busca «Liberador de espacio en disco» en Inicio y ejecútalo, y desinstala en Configuración > Aplicaciones lo que ya no uses.",
    "Sigue la regla 3-2-1: tres copias de tus datos, en dos tipos de medios distintos, y una de ellas fuera de tu casa. Un ejemplo sencillo: tus archivos en la laptop (copia 1), una copia en un disco externo (copia 2) y otra en la nube (copia 3, que además queda fuera de casa).",
    "Para saber si tu disco es mecánico (HDD) o SSD, busca «Desfragmentar y optimizar unidades»: la columna «Tipo de medio» lo dice. Si es mecánico, es más frágil a los golpes: muévela apagada o en suspensión."
   ]
  },
  {
   "t": "Actualiza el sistema, los controladores y el firmware con cuidado",
   "d": "En una laptop, el fabricante prepara controladores propios para la energía y los gráficos. Conviene usar los de tu modelo.",
   "h": [
    "Entra a Configuración > Windows Update y pulsa «Buscar actualizaciones». Luego abre Opciones avanzadas > Actualizaciones opcionales: ahí Windows deja los controladores nuevos.",
    "Descarga los controladores de tu modelo exacto desde la página del fabricante, en especial los de video y los de energía.",
    "Actualiza el BIOS/UEFI solo si el fabricante lo recomienda para un problema que tienes. Hazlo con el cargador conectado, con la batería con al menos la mitad de carga y sin interrumpirlo nunca: si falla a la mitad, la laptop puede quedar sin arrancar.",
    "Abre Seguridad de Windows > Protección antivirus y contra amenazas > Opciones de examen y haz un «Examen completo».",
    "Antes de cambios grandes, busca «Crear un punto de restauración» en Inicio y pulsa el botón Crear. Si está gris, pulsa primero Configurar y activa la protección del sistema."
   ]
  },
  {
   "t": "Haz una limpieza profunda cada 1 o 2 años",
   "d": "Es la limpieza que más baja la temperatura y la que más calma pide: se abre la tapa de abajo y se limpia el ventilador y el disipador.",
   "h": [
    "Decide con honestidad: si es tu primera vez o la laptop sigue en garantía, deja que lo haga un técnico (abrirla puede anular la garantía). Si sigues, busca en video el desarme de tu modelo exacto.",
    "Apaga, desconecta y quita los tornillos de la tapa inferior. Dibuja un esquema de la tapa en un papel y pega cada tornillo en su lugar con cinta, porque suelen ser de distinto largo.",
    "Con la tapa abierta, desconecta primero el conector de la batería interna: es uno pequeño que sale de la batería hacia la placa y se despega haciendo palanca con cuidado.",
    "Limpia el ventilador y el disipador con una brocha y aire comprimido, sujetando el ventilador con un palillo para que no gire libremente.",
    "Reconecta la batería interna, pon la tapa con todos los tornillos, conecta el cargador y enciende la laptop para comprobar que todo funciona."
   ],
   "tip": "Cada laptop es un rompecabezas distinto. Si algo no encaja o no se parece al video, para y consulta."
  },
  {
   "t": "Cambia la pasta térmica (solo si hace falta)",
   "d": "Cámbiala solo si, después de la limpieza profunda, las temperaturas siguen altas respecto a tu línea base. Se hace con la laptop abierta, apagada y con la batería interna desconectada.",
   "h": [
    "Ubica el disipador: es la lámina de metal con el tubo de cobre que baja hasta el procesador.",
    "Afloja sus tornillos en el orden numerado que trae marcado y retíralo con suavidad.",
    "Limpia el procesador y el disipador con alcohol isopropílico y un paño sin pelusa.",
    "Pon una cantidad pequeña de pasta térmica (como un grano de arroz) en el centro del procesador.",
    "Vuelve a montar el disipador apretando los tornillos en el mismo orden numerado y cierra como en el paso anterior."
   ],
   "tip": "Si el modelo es delgado o no encuentras el video de tu desarme, mejor llévala a un técnico."
  }
 ],
 "lapCor": [
  {
   "p": "No carga la batería",
   "s": "El cargador está conectado, pero el porcentaje no sube o dice «conectada, sin cargar».",
   "c": "Un cargador o un puerto dañados, un límite de carga activado, una batería agotada o un controlador de batería con problemas.",
   "f": [
    "Prueba en otro tomacorriente y revisa que el cable del cargador no esté roto o doblado cerca del conector.",
    "Comprueba si tu laptop tiene activado un límite de carga (por ejemplo, al 80 %). A veces «no carga» porque tú mismo lo configuraste.",
    "Con la laptop apagada y desconectada, limpia el puerto de carga con un palillo de madera, sin forzar.",
    "En el Administrador de dispositivos > Baterías, haz clic derecho en «Batería con método de control compatible con ACPI de Microsoft», elige Desinstalar dispositivo y reinicia. Windows la detectará de nuevo.",
    "Si la batería es extraíble, prueba sin ella y solo con el cargador."
   ],
   "x": "Windows se comunica con la batería mediante un controlador ACPI. Si ese controlador queda en un estado raro, el sistema puede ver la batería y aun así no cargarla; reinstalarlo a veces basta."
  },
  {
   "p": "La batería dura muy poco",
   "s": "Se descarga en una hora o menos, aunque no estés haciendo nada pesado.",
   "c": "La batería está desgastada, el brillo está muy alto o hay programas gastando energía en segundo plano.",
   "f": [
    "Genera el informe con powercfg /batteryreport y compara la capacidad de diseño con la de carga completa. Como regla general, si la de carga completa es la mitad o menos de la de diseño, ya toca cambiar la batería.",
    "En el Administrador de tareas > Procesos, haz clic derecho en el encabezado de las columnas y activa «Consumo de energía» para ver qué programas gastan más.",
    "Baja el brillo y activa el Ahorro de batería (Configuración > Sistema > Energía y batería en Windows 11, o Sistema > Batería en Windows 10).",
    "Revisa Inicio en el Administrador de tareas y deshabilita los programas que no necesites."
   ],
   "x": "La capacidad de una batería de litio baja con los ciclos de carga y con el calor. No es un defecto del sistema, es química."
  },
  {
   "p": "Se calienta mucho o el ventilador suena fuerte",
   "s": "Quema al tocarla y el ventilador suena como una turbina.",
   "c": "Rejillas con polvo, pasta térmica vieja, una mala superficie de uso o un proceso que tiene el procesador al máximo.",
   "f": [
    "Mira en el Administrador de tareas si algún proceso usa la CPU de forma constante. Ciérralo o investígalo.",
    "Úsala sobre una superficie dura y plana (una mesa) o sobre una base con ventiladores. En la cama o en el sofá las rejillas se tapan y el aire no circula.",
    "Con la laptop apagada, limpia las rejillas con aire comprimido.",
    "Si sigue igual, haz la limpieza profunda y renueva la pasta térmica (o llévala a un técnico)."
   ],
   "x": "Cuando el procesador llega a su límite de temperatura, reduce su frecuencia (thermal throttling). Por eso la laptop se siente más lenta justo cuando más calor tiene."
  },
  {
   "p": "Se derramó líquido",
   "s": "Café, agua o refresco sobre el teclado. Pánico.",
   "c": "El líquido puede llegar a la placa y causar cortocircuitos o corrosión, incluso horas después.",
   "f": [
    "Respira y actúa rápido: mantén presionado el botón de encendido hasta que se apague, desconecta el cargador y quita la batería si se puede. No esperes a cerrar programas.",
    "Ponla boca abajo sobre una toalla, con la pantalla abierta formando una V invertida (como una carpa), con el teclado mirando a la mesa. Así el líquido sale por donde entró en lugar de bajar hacia la placa. Seca por fuera con un paño, sin frotar fuerte.",
    "Déjala secar entre 24 y 48 horas sin encenderla. No uses secador de pelo ni la metas en arroz, que no ayuda.",
    "Si el líquido tenía azúcar (refresco, café con azúcar), llévala a un técnico aunque parezca funcionar: el azúcar pega y corroe. Si fue solo agua, también conviene una revisión, porque la corrosión puede aparecer semanas después."
   ],
   "x": "El mayor peligro no es el agua sino lo que lleva disuelto (azúcar, sal, ácidos): se queda sobre los circuitos y los va corroyendo con el tiempo."
  },
  {
   "p": "La pantalla está negra",
   "s": "La laptop suena y tiene luces, pero no se ve nada.",
   "c": "El brillo está al mínimo, la pantalla o su cable están dañados, o hay una falla del video o del sistema.",
   "f": [
    "Sube el brillo con las teclas de función. Pulsa también una tecla por si estaba en suspensión.",
    "Alumbra la pantalla con una linterna desde un lado. Si ves la imagen muy tenue, lo que falló es la luz de fondo (backlight).",
    "Conéctala a un monitor externo por HDMI y presiona Windows + P. Si en el monitor no aparece nada, vuelve a presionar Windows + P, usa las flechas del teclado para elegir «Solo segunda pantalla» y pulsa Enter.",
    "Si en el monitor sí se ve, la falla es de la pantalla o de su cable. Si tampoco se ve, apunta al video, a la RAM o al sistema."
   ],
   "x": "La luz de fondo es una lámpara detrás del panel. Si falla, la imagen sigue existiendo pero es casi invisible; por eso la linterna sirve para distinguirlo."
  },
  {
   "p": "Va lenta o Windows no inicia",
   "s": "Tarda una eternidad en arrancar o se queda en el logo.",
   "c": "Disco lleno o dañado, demasiados programas al inicio, malware o archivos del sistema dañados.",
   "f": [
    "Mantén presionado el botón de encendido unos 15 segundos hasta que se apague, espera unos segundos y enciéndela de nuevo.",
    "Si ves la pantalla de inicio de sesión, mantén Shift mientras pulsas Reiniciar (icono de encendido, abajo a la derecha). En Solucionar problemas > Opciones avanzadas prueba Reparación de inicio o Restaurar sistema.",
    "Para arrancar con lo mínimo: Opciones avanzadas > Configuración de inicio > Reiniciar y pulsa 4 o F4 (Modo seguro).",
    "Si Windows inicia, abre el Símbolo del sistema como administrador y ejecuta DISM /Online /Cleanup-Image /RestoreHealth (necesita internet) y después sfc /scannow.",
    "Si inicia pero va lenta, ordena Procesos por CPU, Memoria y Disco en el Administrador de tareas y deshabilita en Inicio lo que no necesites. Cambiar un disco mecánico por un SSD es la mejora más grande."
   ],
   "x": "El Modo seguro carga solo los controladores y servicios básicos. Si ahí todo anda bien, el culpable suele ser un programa o un controlador instalado después."
  },
  {
   "p": "Hay Wi-Fi, pero no hay internet",
   "s": "El icono dice «conectado», pero las páginas no cargan.",
   "c": "La falla puede estar en una de varias capas: la señal Wi-Fi, la dirección IP que entrega el router, la resolución de nombres (DNS) o la salida del router hacia internet.",
   "f": [
    "Reinicia el router y la laptop (sí, en serio: arregla muchos casos). Mira también cuántas barras de señal tienes; si hay una sola, acércate al router.",
    "Abre el Símbolo del sistema y escribe ping 8.8.8.8. Si responde, tienes salida a internet.",
    "Ahora prueba ping google.com. Si el primero funciona y el segundo no, el problema es el DNS: ejecuta ipconfig /flushdns.",
    "Si ninguno responde, escribe ipconfig /release y luego ipconfig /renew para pedirle una dirección nueva al router. Ejecuta los dos comandos seguidos.",
    "Si aún falla, usa Configuración > Red e Internet > Configuración de red avanzada > Restablecimiento de red. Ojo: borra tus redes Wi-Fi guardadas y tendrás que escribir otra vez las contraseñas."
   ],
   "x": "Se prueba de afuera hacia adentro: primero la salida a internet (ping 8.8.8.8), luego los nombres (ping google.com) y por último la dirección IP y la señal. Según cuál responda y cuál no, sabes en qué capa se corta la comunicación. Es el mismo método de diagnóstico de la sección 00, aplicado a una red."
  }
 ]
};

/* ICONOS: uno por cada paso y por cada síntoma, en el mismo orden que las listas de arriba. */
var IC={
  pcPre:["gauge","power","drop","wind","fan","thermo","ram","disk","calendar","refresh"],
  pcCor:["power","monitor-x","beep","restart","hourglass","bsod","plug"],
  lapPre:["battery","power","keyboard","laptop","battery-low","disk","refresh","tool","thermo"],
  lapCor:["battery-bolt","battery-low","thermo","drop","laptop-off","hourglass","wifi"]
};
function ic(n,c){return'<svg class="ic'+(c?" "+c:"")+'" aria-hidden="true"><use href="#i-'+n+'"/></svg>'}

/* FIGURAS: solo quedan el diagrama 3-2-1 y el de las capas de red. */
var FIG={
  b321:{w:360,h:146,a:"Regla 3-2-1: tres copias de tus datos, en dos tipos de medio distintos y una de ellas fuera de casa.",c:"Regla 3-2-1."},
  net:{w:486,h:136,a:"Cuatro capas de la conexión: señal Wi-Fi, dirección IP, nombres DNS y salida a internet, cada una con el comando para probarla.",c:"Cada capa tiene su prueba: según cuál responda y cuál no, sabes dónde se corta.",big:1}
};
var FP={pc:{},lap:{5:"b321"}},FC={lap:{6:"net"}};
function fig(k){
  var f=FIG[k];
  if(f.u)return'<figure class="fig"><img class="foto ext" src="https://commons.wikimedia.org/wiki/Special:FilePath/'+f.u+'?width=800" alt="'+f.a+'" loading="lazy" onerror="this.remove()"><figcaption>'+f.c+' Imagen: <a href="https://commons.wikimedia.org/wiki/File:'+f.u+'" target="_blank" rel="noopener">Wikimedia Commons</a> (autor y licencia en la página del archivo).</figcaption></figure>';
  return'<figure class="fig'+(f.big?" big":"")+'"><svg viewBox="0 0 '+f.w+' '+f.h+'" role="img" aria-label="'+f.a+'"><use href="#d-'+k+'"/></svg><figcaption>'+f.c+'</figcaption></figure>';
}

var st={dev:"pc",sel:0},done={pc:[],lap:[]},DK="plano-mantenimiento-equipo";
try{var dv=localStorage.getItem(DK);if(dv==="pc"||dv==="lap")st.dev=dv}catch(e){}

var KEY="plano-mantenimiento-progreso";  
function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(e){}}

try{var g=JSON.parse(localStorage.getItem(KEY));if(g&&Array.isArray(g.pc)&&Array.isArray(g.lap))done=g}catch(e){}

function li(a){return a.map(function(x){return"<li>"+x+"</li>"}).join("")}


function renderPre(){

  var a=D[st.dev+"Pre"],d=done[st.dev],n=d.filter(Boolean).length;

  document.getElementById("count").textContent=n+" / "+a.length+" pasos completados";
  document.getElementById("meter").style.width=(100*n/a.length)+"%";

  document.getElementById("pre").innerHTML=a.map(function(s,i){
    return'<li><button class="dot" data-i="'+i+'" aria-pressed="'+!!d[i]+'" aria-label="Marcar el paso '+(i+1)+' como hecho">'+(i+1)+'</button><article class="card"><h4>'+ic(IC[st.dev+"Pre"][i])+s.t+'</h4><p>'+s.d+'</p><div class="how"><b>Cómo hacerlo</b><ol>'+li(s.h)+'</ol></div>'+(FP[st.dev]&&FP[st.dev][i]?fig(FP[st.dev][i]):'')+(s.tip?'<p class="tip">Ojo: '+s.tip+'</p>':'')+'</article></li>'}).join("");
}

function renderCor(){

  var a=D[st.dev+"Cor"],f=a[st.sel];

  document.getElementById("syms").innerHTML=a.map(function(x,i){return'<button class="sym" data-k="'+i+'" aria-pressed="'+(i===st.sel)+'">'+ic(IC[st.dev+"Cor"][i],"ic-sym")+'<span>'+x.p+'</span></button>'}).join("");

  document.getElementById("fix").innerHTML='<h4>'+ic(IC[st.dev+"Cor"][st.sel])+f.p+'</h4><dl><dt>Lo que notas</dt><dd>'+f.s+'</dd><dt>Qué puede estar pasando</dt><dd>'+f.c+'</dd></dl><div class="how"><b>Cómo comprobarlo y arreglarlo</b><ol>'+li(f.f)+'</ol></div>'+(FC[st.dev]&&FC[st.dev][st.sel]?fig(FC[st.dev][st.sel]):'')+(f.x?'<p class="tip">Por dentro: '+f.x+'</p>':'');
}


function renderAll(){
  document.body.setAttribute("data-eq",st.dev);try{localStorage.setItem(DK,st.dev)}catch(e){}

  document.querySelectorAll(".tog button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.dev===st.dev)});
  renderPre();renderCor();  
}

document.addEventListener("click",function(e){
  var t;

  if(t=e.target.closest("[data-dev]")){st.dev=t.dataset.dev;st.sel=0;renderAll()}

  else if(t=e.target.closest(".dot")){var i=+t.dataset.i;done[st.dev][i]=!done[st.dev][i];save();renderPre()}

  else if(t=e.target.closest("#reset")){if(confirm("¿Borrar el progreso marcado en este equipo?")){done[st.dev]=[];save();renderPre()}}

  else if(t=e.target.closest(".sym")){st.sel=+t.dataset.k;renderCor()}
});

renderAll();
