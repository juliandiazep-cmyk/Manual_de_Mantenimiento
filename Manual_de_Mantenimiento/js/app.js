/* PASOS Y FALLAS: aquí está todo el texto del manual, por equipo (pc / lap) */
var D={
 "pcPre": [
  {
   "t": "Apaga, desconecta y descarga la estática",
   "d": "Este es el paso que casi todos se saltan y el que más importa. La fuente de poder guarda un poco de energía aunque el equipo esté apagado, así que conviene dejarla sin carga antes de meter la mano.",
   "h": [
    "Guarda lo que tengas abierto y apaga desde Inicio > Apagar.",
    "Atrás del gabinete, en la fuente de poder, hay un interruptor. Ponlo en 0 (la raya | es encendido y el círculo O es apagado) y saca el cable de la pared.",
    "Con todo desconectado, mantén presionado el botón de encendido unos 5 segundos. Así se gasta la energía que quedó guardada.",
    "Antes de tocar cualquier pieza, apoya la mano un momento en una parte metálica del gabinete. Tu cuerpo y el equipo quedan con la misma carga y no le pasas estática a nada."
   ],
   "tip": "Antes de mover un solo cable, tómale fotos con el celular. Cuando toque volver a conectar todo, te vas a alegrar de tenerlas."
  },
  {
   "t": "Aprende cómo anda tu equipo cuando está sano",
   "d": "Para darte cuenta de que algo anda mal, primero tienes que saber cómo es lo normal. Son cinco minutos y te sirven por años.",
   "h": [
    "Presiona Ctrl + Shift + Esc para abrir el Administrador de tareas y entra a la pestaña Rendimiento.",
    "Con el equipo tranquilo, sin programas pesados abiertos, anota cuánto usan la CPU, la memoria y el disco.",
    "Fíjate en el valor Confirmada de la memoria. Si se acerca al total, Windows ya está usando el disco como memoria de emergencia.",
    "Entra a Inicio (en Windows 11 se llama Aplicaciones de arranque) y mira cuántos programas se abren contigo y cuánto impacto tienen."
   ],
   "tip": "Toma una captura de pantalla y guárdala. El día que el equipo ande lento, la comparas."
  },
  {
   "t": "Límpialo por fuera y deja respirar al gabinete",
   "d": "Una PC toma el aire por el frente y lo bota por atrás y por las rejillas. Si esas entradas están tapadas, todo lo que hay adentro se calienta.",
   "h": [
    "Humedece un poco un paño de microfibra con alcohol isopropílico al 70 % (húmedo, no empapado) y pásalo por el gabinete, el teclado y el mouse.",
    "La pantalla se limpia solo con un paño seco de microfibra, siempre en la misma dirección y sin apretar.",
    "Deja unos centímetros libres adelante y atrás del gabinete. Si lo tienes metido en un mueble cerrado, sácalo o ábrele ventilación.",
    "Si el gabinete tiene filtros de polvo, sácalos y límpialos también."
   ],
   "tip": "El líquido siempre va en el paño, nunca directo sobre el equipo."
  },
  {
   "t": "Limpia el interior siguiendo el camino del aire",
   "d": "Por dentro, el aire entra por el frente, pasa por los componentes y sale por atrás o por arriba. El polvo se acumula justo donde ese aire se frena, así que ahí es donde hay que buscarlo.",
   "h": [
    "Quita los tornillos de la tapa lateral con el destornillador Phillips y guárdalos en un recipiente para que no se pierdan.",
    "Sujeta cada ventilador con un palito o con un dedo para que no gire de golpe, y sopla el aire comprimido en ráfagas cortas.",
    "Limpia siguiendo el camino del aire: primero la rejilla o el filtro frontal, luego el disipador del procesador, la tarjeta de video, la fuente y la salida de atrás.",
    "No uses aspiradora porque genera estática. Si puedes, hazlo en un patio o en un balcón para que el polvo no se te quede en la casa."
   ],
   "tip": "Mantén la lata de aire derecha. Si la inclinas, puede salir líquido helado y caer sobre la placa."
  },
  {
   "t": "Revisa ventiladores, temperaturas y pasta térmica",
   "d": "Cuando el procesador se calienta de más, se protege bajando su propia velocidad. Por eso a veces la PC se siente lenta sin motivo aparente: no está dañada, está pasando calor.",
   "h": [
    "Con la tapa abierta, enciende el equipo y comprueba que todos los ventiladores giren sin ruidos raros.",
    "Si alguno está parado o suena mal, cámbialo por otro de las mismas medidas y con el mismo tipo de conector.",
    "Mide la temperatura en reposo y con carga usando un programa gratuito como HWMonitor, y compárala con el máximo que publica el fabricante de tu procesador.",
    "La pasta térmica solo se renueva si las temperaturas suben sin otra causa o si el disipador ya es muy viejo. En ese caso desmóntalo, limpia las dos superficies con alcohol, pon una cantidad pequeña (más o menos como un grano de arroz) en el centro del procesador y vuelve a montarlo."
   ],
   "tip": "Más pasta no es mejor: lo que sobra se desborda y ensucia el socket."
  },
  {
   "t": "Reasienta la RAM y prueba la memoria",
   "d": "Una memoria mal asentada produce fallas que parecen graves y no lo son. Primero se revisa el contacto físico y después se prueba la memoria con una herramienta que ya trae Windows.",
   "h": [
    "Revisa que los cables de la fuente, los de datos (SATA) y los del panel frontal estén bien firmes.",
    "Saca cada módulo de RAM abriendo las pestañas de los extremos de la ranura, limpia los contactos dorados con una goma de borrar blanca y vuelve a ponerlo, empujando parejo hasta oír un clic.",
    "Con Windows abierto, presiona Windows + R, escribe mdsched y elige reiniciar y comprobar. La herramienta prueba la memoria mientras el equipo arranca.",
    "El resultado aparece cuando inicies sesión. Si no lo ves, abre el Visor de eventos y busca el registro MemoryDiagnostics-Results."
   ]
  },
  {
   "t": "Mira la salud del disco y haz tu respaldo 3-2-1",
   "d": "Los discos casi siempre dan señales antes de dañarse, pero solo si los miras. Y un respaldo guardado en el mismo disco no sirve de nada si ese disco falla.",
   "h": [
    "Abre PowerShell como administrador y escribe: Get-PhysicalDisk | Select-Object FriendlyName, HealthStatus. Lo que quieres ver es Healthy.",
    "Si quieres más detalle (por ejemplo, los sectores reasignados), usa un programa gratuito como CrystalDiskInfo.",
    "Desde un Símbolo del sistema como administrador, ejecuta chkdsk C: /scan para revisar el sistema de archivos sin reiniciar.",
    "Sigue la regla 3-2-1: tres copias de tus datos, en dos tipos de medios distintos, y una de ellas fuera de tu casa (por ejemplo, un disco externo y la nube).",
    "Si tu disco es mecánico (HDD), usa Optimizar unidades. Si es SSD, Windows ya se encarga solo."
   ]
  },
  {
   "t": "Mantén al día el sistema, los controladores y el arranque",
   "d": "El sistema operativo es el que le habla a todo el hardware. Si lo descuidas, hasta el mejor equipo se porta mal.",
   "h": [
    "Entra a Configuración > Windows Update y busca actualizaciones. Mira también las opcionales, porque ahí Windows deja los controladores nuevos.",
    "Si no aparece un controlador reciente, búscalo en la página del fabricante, sobre todo el de video y el del chipset.",
    "Abre Seguridad de Windows y haz un Análisis completo.",
    "Antes de un cambio grande (un controlador, una actualización mayor), crea un punto de restauración desde Protección del sistema.",
    "En Inicio, desactiva los programas que no necesites al arrancar."
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
    "Revisa el cable de poder y que el interruptor de la fuente esté en 1 y no en 0.",
    "Desconecta todo lo que no sea indispensable (USB, discos extra, tarjetas) y prueba solo con la placa, el procesador, una RAM y la fuente.",
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
    "Si tienes tarjeta de video dedicada, el cable del monitor va conectado a ella y no a la placa madre. Las salidas de video de la tarjeta quedan más abajo, en la parte de atrás del gabinete.",
    "Prueba con otro cable o con otro monitor.",
    "Saca la RAM, límpiala y vuélvela a poner. Si tienes varios módulos, prueba con uno solo."
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
    "Reasienta la RAM y la tarjeta de video.",
    "Prueba los módulos de memoria de uno en uno para encontrar el que está dañado."
   ],
   "x": "El pitido es la forma que tiene el firmware de avisarte cuando todavía no hay video. Muchas placas modernas traen luces de diagnóstico en lugar de bocina: revisa su manual."
  },
  {
   "p": "Se apaga o se reinicia sola",
   "s": "Estás jugando, editando un video o compilando y, de pronto, todo negro. A veces ni te da tiempo de guardar.",
   "c": "Calor excesivo, una fuente que no aguanta la carga, RAM defectuosa o un controlador con errores.",
   "f": [
    "Abre el Visor de eventos (eventvwr.msc) > Registros de Windows > Sistema y busca el evento 41 de Kernel-Power.",
    "Fíjate en la hora del evento. Si coincide con un juego o una tarea pesada, apunta al calor o a la fuente.",
    "Haz la limpieza interna, comprueba los ventiladores y vigila la temperatura con HWMonitor.",
    "Si no es el calor, prueba la memoria con mdsched y verifica que la fuente tenga la potencia que piden tus componentes."
   ],
   "x": "El evento 41 de Kernel-Power significa que Windows, al arrancar, encontró que el apagado anterior no fue limpio. No dice por qué: solo es la pista de que algo cortó el equipo (calor, energía, hardware o un controlador). Y si el procesador llega a su límite de temperatura, primero baja su frecuencia (thermal throttling) y, si eso no alcanza, se apaga para protegerse."
  },
  {
   "p": "Está muy lenta",
   "s": "Tarda minutos en arrancar, los programas se quedan «pensando» y el ventilador no para.",
   "c": "El disco está casi lleno o muy exigido, hay poca RAM, demasiados programas arrancan al inicio, hay malware o el disco mecánico ya no da más.",
   "f": [
    "Abre el Administrador de tareas y ordena la pestaña Procesos por CPU, Memoria y Disco: ¿quién consume más?",
    "Si el tiempo activo del Disco se queda cerca del 100 %, el cuello de botella es el almacenamiento. Con un disco mecánico, pasar a un SSD es el cambio que más se nota.",
    "En Rendimiento > Memoria, si casi toda la memoria está en uso, cierra programas o amplía la RAM.",
    "Desactiva en Inicio lo que no necesites, pasa un análisis completo con Seguridad de Windows y libera espacio."
   ],
   "x": "Cuando la RAM se llena, Windows mueve datos a un archivo de paginación (pagefile.sys) que vive en el disco. Es memoria virtual: funciona, pero es muchísimo más lenta que la RAM, y por eso todo se arrastra."
  },
  {
   "p": "Pantalla azul o Windows no inicia",
   "s": "Aparece una pantalla azul con una carita triste y un código, o el equipo se reinicia una y otra vez.",
   "c": "Un controlador defectuoso, archivos del sistema dañados, memoria con errores o un disco en mal estado.",
   "f": [
    "Tranquilo. Lo primero es anotar o fotografiar el código de detención (por ejemplo, CRITICAL_PROCESS_DIED): es la pista más útil que tienes.",
    "Si Windows abre, ejecuta como administrador DISM /Online /Cleanup-Image /RestoreHealth y, al terminar, sfc /scannow para reparar archivos del sistema.",
    "Si empezó después de instalar un controlador, revierte o actualiza ese controlador desde el Administrador de dispositivos.",
    "Si no abre pero llegas a la pantalla de inicio de sesión, mantén Shift mientras pulsas Reiniciar para entrar al Entorno de recuperación > Solucionar problemas > Opciones avanzadas, y prueba Reparación de inicio, Restaurar sistema o el Modo seguro.",
    "Si nada funciona, respalda tus archivos y reinstala Windows."
   ],
   "x": "Los controladores trabajan en modo kernel, que es el nivel de mayor privilegio del sistema. Si uno falla ahí, Windows se detiene a propósito (la pantalla azul) para no seguir dañando datos."
  },
  {
   "p": "Un dispositivo no funciona (USB, sonido, Wi-Fi)",
   "s": "El sistema no reconoce el USB, el audio desapareció o la tarjeta de red ya no aparece.",
   "c": "Un controlador dañado o incompatible, un puerto o cable defectuoso, o un conflicto después de una actualización.",
   "f": [
    "Prueba el dispositivo en otro puerto y, si puedes, en otro equipo. Así sabes si falla el dispositivo o el sistema.",
    "Abre el Administrador de dispositivos. Un triángulo amarillo indica problema, y con doble clic, la pestaña General te muestra el código de error.",
    "En la pestaña Controlador usa Revertir controlador si el fallo empezó tras una actualización, o Actualizar controlador si es más antiguo.",
    "Como último paso, usa Desinstalar dispositivo y reinicia. Windows lo detecta de nuevo y reinstala el controlador."
   ],
   "x": "Un «Código 43» significa que el controlador le avisó a Windows de que el dispositivo falló, y Windows lo detuvo. Microsoft recomienda desinstalar el dispositivo y volver a instalarlo."
  }
 ],
 "lapPre": [
  {
   "t": "Apaga, desconecta y respeta la batería",
   "d": "La batería de una laptop es de litio. No es peligrosa si la tratas bien, pero no se limpia ni se abre con el equipo conectado.",
   "h": [
    "Apaga desde Inicio > Apagar y desconecta el cargador.",
    "Fíjate en la parte de abajo. Si la batería es extraíble, verás un seguro deslizante y una pieza grande que sale como una tapa. Sácala. Si no ves nada de eso, tu batería es interna y no hay que quitarla.",
    "Cierra la tapa solo cuando la pantalla ya se apagó, para que no se quede encendida dentro de una mochila."
   ],
   "tip": "Si ves la batería hinchada o la base de la laptop abultada, deja de usarla y llévala a un técnico."
  },
  {
   "t": "Mira cómo está tu batería (línea base)",
   "d": "La batería envejece aunque la cuides, y medirla es la única forma de saber cuánta vida le queda de verdad.",
   "h": [
    "Abre el Símbolo del sistema como administrador, escribe powercfg /batteryreport y abre el archivo HTML cuya ruta te muestra.",
    "Baja hasta la sección de baterías instaladas y compara dos números: la capacidad de diseño (lo que la batería tenía cuando era nueva) y la capacidad de carga completa (lo que carga hoy). Por ejemplo, si el diseño era 50 000 mWh y hoy carga 38 000 mWh, conserva más o menos el 76 %.",
    "Mira también el historial de uso para ver cuánto te dura en la vida real.",
    "Anota los dos valores y repite la medición cada pocos meses."
   ],
   "tip": "Perder algo de capacidad con los años es normal. Lo que importa es la tendencia, no un número suelto."
  },
  {
   "t": "Limpia el teclado y la pantalla",
   "d": "Es lo que más ves y lo que más se ensucia: migas, grasa de los dedos y polvo.",
   "h": [
    "Inclina la laptop y aplica aire comprimido entre las teclas en ráfagas cortas, para que lo que haya entre ellas salga.",
    "Pasa por las teclas un paño apenas humedecido con alcohol isopropílico al 70 %.",
    "Limpia la pantalla con un paño de microfibra seco, sin presionar."
   ],
   "tip": "Nada de amoníaco ni papel de cocina en la pantalla: la rayan."
  },
  {
   "t": "Despeja las rejillas y cuida dónde la usas",
   "d": "Una laptop saca el calor por muy pocas ranuras. Las rejillas son esas aberturas finas que se ven en la parte de abajo, en los costados o detrás de la bisagra de la pantalla. Si se tapan, la laptop se calienta y se frena sola.",
   "h": [
    "Ubica las rejillas y sopla aire comprimido en ráfagas cortas, sujetando el ventilador para que no gire de golpe.",
    "Úsala sobre una superficie dura y plana, como una mesa. Las patas de goma la mantienen un poquito levantada y el aire entra por debajo. Sobre una cama, un sofá o las piernas con una tela en medio, esas entradas quedan tapadas y el calor no tiene por dónde salir.",
    "Si la exiges mucho (juegos, edición de video), una base con ventiladores ayuda.",
    "Si el calor persiste, baja el Estado máximo del procesador en Opciones de energía > Cambiar la configuración del plan > Configuración avanzada > Administración de energía del procesador. Pierdes algo de rendimiento, pero baja la temperatura."
   ]
  },
  {
   "t": "Cuida la batería con hábitos, no con manías",
   "d": "El calor y las cargas extremas la desgastan más que el uso de todos los días. Para una batería de litio, lo más cómodo es andar entre el 20 % y el 80 %: por debajo del 20 % trabaja forzada, y por encima del 80 %, sobre todo al 100 % y con calor, se gasta más rápido.",
   "h": [
    "Procura mantener la carga entre el 20 % y el 80 % cuando puedas.",
    "No la dejes al sol ni dentro de un carro caliente: el calor causa una pérdida permanente de capacidad.",
    "Si tu laptop trae carga inteligente o un límite de carga (en Windows o en el programa del fabricante), actívalo cuando casi siempre la uses enchufada."
   ],
   "tip": "Si trabajas casi siempre conectada, activar el límite de carga está bien: la batería pasa menos tiempo al 100 %."
  },
  {
   "t": "Revisa el disco y haz tu respaldo 3-2-1",
   "d": "Tu laptop se mueve, se golpea y se calienta. Tus archivos merecen estar en más de un lugar.",
   "h": [
    "Abre PowerShell como administrador y ejecuta: Get-PhysicalDisk | Select-Object FriendlyName, HealthStatus. Lo que quieres ver es Healthy.",
    "Usa el Liberador de espacio en disco y desinstala en Configuración > Aplicaciones lo que ya no uses.",
    "Sigue la regla 3-2-1: tres copias, en dos tipos de medios distintos, y una fuera de tu casa.",
    "Si tu laptop tiene disco mecánico, es más frágil a los golpes que un SSD: muévela apagada o en suspensión."
   ]
  },
  {
   "t": "Actualiza el sistema, los controladores y el firmware con cuidado",
   "d": "En una laptop, el fabricante prepara controladores propios para la energía y los gráficos. Conviene usar los de tu modelo.",
   "h": [
    "Entra a Configuración > Windows Update y busca actualizaciones, incluidas las opcionales.",
    "Descarga los controladores de tu modelo exacto desde la página del fabricante, en especial los de video y los de energía.",
    "Si decides actualizar el BIOS/UEFI, hazlo con el cargador conectado y sin interrumpirlo nunca: si falla a la mitad, la laptop puede quedar sin arrancar.",
    "Haz un Análisis completo en Seguridad de Windows y crea un punto de restauración antes de cambios grandes."
   ]
  },
  {
   "t": "Haz una limpieza profunda cada 1 o 2 años",
   "d": "Es la limpieza que más baja la temperatura y también la que más calma pide. Se trata de abrir la tapa de abajo y limpiar el ventilador y el disipador, que son los que más polvo atrapan.",
   "h": [
    "Apaga, desconecta y quita los tornillos de la tapa inferior. Guárdalos en orden: dibuja un esquema de la tapa en un papel y pega cada tornillo en su lugar con cinta, porque suelen ser de distinto largo.",
    "Con la tapa abierta, desconecta primero el conector de la batería interna. Es un conector pequeño que sale de la batería hacia la placa y se despega haciendo palanca con cuidado.",
    "Limpia el ventilador y el disipador con una brocha y aire comprimido, sin dejar que el ventilador gire libremente: sujétalo con un palito.",
    "Renueva la pasta térmica solo si las temperaturas lo piden. Cierra, vuelve a conectar y comprueba que todo enciende.",
    "Si es tu primera vez o la laptop sigue en garantía, deja que lo haga un técnico."
   ],
   "tip": "Antes de empezar, busca en video el desarme de tu modelo exacto. Cada laptop es un rompecabezas distinto."
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
    "Limpia el puerto de carga con un palito de madera, sin forzar.",
    "En el Administrador de dispositivos > Baterías, desinstala «Batería con método de control compatible con ACPI de Microsoft» y reinicia. Windows la detectará de nuevo.",
    "Si la batería es extraíble, prueba sin ella y solo con el cargador."
   ],
   "x": "Windows se comunica con la batería mediante un controlador ACPI. Si ese controlador queda en un estado raro, el sistema puede ver la batería y aun así no cargarla; reinstalarlo a veces basta."
  },
  {
   "p": "La batería dura muy poco",
   "s": "Se descarga en una hora o menos, aunque no estés haciendo nada pesado.",
   "c": "La batería está desgastada, el brillo está muy alto o hay programas gastando energía en segundo plano.",
   "f": [
    "Genera el informe con powercfg /batteryreport y compara la capacidad de diseño con la de carga completa. Si la segunda es muy baja, ya toca cambiar la batería.",
    "En el Administrador de tareas > Procesos, activa la columna de consumo de energía para ver qué programas gastan más.",
    "Baja el brillo y activa el Ahorro de batería (Configuración > Sistema > Energía y batería).",
    "Revisa Inicio y cierra los programas que no necesites."
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
    "Limpia las rejillas con aire comprimido.",
    "Si sigue igual, haz la limpieza profunda y renueva la pasta térmica."
   ],
   "x": "Cuando el procesador llega a su límite de temperatura, reduce su frecuencia (thermal throttling). Por eso la laptop se siente más lenta justo cuando más calor tiene."
  },
  {
   "p": "Se derramó líquido",
   "s": "Café, agua o refresco sobre el teclado. Pánico.",
   "c": "El líquido puede llegar a la placa y causar cortocircuitos o corrosión, incluso horas después.",
   "f": [
    "Respira y actúa rápido: apaga, desconecta el cargador y quita la batería si se puede.",
    "Ábrela y ponla boca abajo sobre una toalla o un paño, con la pantalla y el teclado mirando hacia la mesa y las bisagras arriba, como una carpa o una V invertida. Así el líquido sale por donde entró en lugar de bajar hacia la placa. Seca por fuera con un paño, sin frotar fuerte.",
    "Déjala secar entre 24 y 48 horas sin encenderla y sin secador de pelo.",
    "Si el líquido tenía azúcar (refresco, café con azúcar), llévala a un técnico aunque parezca funcionar: el azúcar pega y corroe."
   ],
   "x": "El mayor peligro no es el agua sino lo que lleva disuelto (azúcar, sal, ácidos): se queda sobre los circuitos y los va corroyendo con el tiempo."
  },
  {
   "p": "La pantalla está negra",
   "s": "La laptop suena y tiene luces, pero no se ve nada.",
   "c": "El brillo está al mínimo, la pantalla o su cable están dañados, o hay una falla del video o del sistema.",
   "f": [
    "Sube el brillo con las teclas de función.",
    "Alumbra la pantalla con una linterna desde un lado. Si ves la imagen muy tenue, lo que falló es la luz de fondo (backlight).",
    "Conéctala a un monitor externo por HDMI y presiona Windows + P para proyectar.",
    "Si en el monitor sí se ve, la falla es de la pantalla o de su cable. Si tampoco se ve, apunta al video, a la RAM o al sistema."
   ]
  },
  {
   "p": "Va lenta o Windows no inicia",
   "s": "Tarda una eternidad en arrancar o se queda en el logo.",
   "c": "Disco lleno o dañado, demasiados programas al inicio, malware o archivos del sistema dañados.",
   "f": [
    "Mantén presionado el botón de encendido unos 15 segundos y vuelve a encenderla.",
    "Si llegas a la pantalla de inicio de sesión, mantén Shift mientras pulsas Reiniciar para entrar al Entorno de recuperación > Solucionar problemas > Opciones avanzadas, y prueba Reparación de inicio o Restaurar sistema.",
    "Para arrancar con lo mínimo: Opciones avanzadas > Configuración de inicio > Reiniciar, y pulsa 4 o F4 para el Modo seguro.",
    "Si inicia, ejecuta como administrador DISM /Online /Cleanup-Image /RestoreHealth y después sfc /scannow.",
    "Cambiar un disco mecánico por un SSD es la mejora de velocidad más grande."
   ],
   "x": "El Modo seguro carga solo los controladores y servicios básicos. Si ahí todo anda bien, el culpable suele ser un programa o un controlador instalado después."
  },
  {
   "p": "Hay Wi-Fi, pero no hay internet",
   "s": "El icono dice «conectado», pero las páginas no cargan.",
   "c": "La falla puede estar en una de varias capas: la señal Wi-Fi, la dirección IP que entrega el router, la resolución de nombres (DNS) o la salida del router hacia internet.",
   "f": [
    "Reinicia el router y la laptop (sí, en serio: arregla muchos casos).",
    "Abre el Símbolo del sistema y escribe ping 8.8.8.8. Si responde, tienes salida a internet.",
    "Ahora prueba ping google.com. Si el primero funciona y el segundo no, el problema es el DNS: ejecuta ipconfig /flushdns.",
    "Si ninguno responde, escribe ipconfig /release y luego ipconfig /renew para pedirle una dirección nueva al router.",
    "Si aún falla, usa Configuración > Red e Internet > Configuración de red avanzada > Restablecimiento de red."
   ],
   "x": "Probar de la capa más baja a la más alta (señal, IP, DNS) es la forma de aislar dónde se corta la comunicación. Es el mismo método de diagnóstico de la sección 00, aplicado a una red."
  }
 ]
};

/* ICONOS: uno por cada paso y por cada síntoma, en el mismo orden que las listas de arriba. */
var IC={
  pcPre:["power","gauge","drop","wind","fan","ram","disk","refresh"],
  pcCor:["power","monitor-x","beep","restart","hourglass","bsod","plug"],
  lapPre:["power","battery","keyboard","laptop","battery-low","disk","refresh","tool"],
  lapCor:["battery-bolt","battery-low","thermo","drop","laptop-off","hourglass","wifi"]
};
function ic(n,c){return'<svg class="ic'+(c?" "+c:"")+'" aria-hidden="true"><use href="#i-'+n+'"/></svg>'}

/* FIGURAS: solo quedan dos fotos de Wikimedia, el diagrama 3-2-1 y el de las capas de red. */
var FIG={
  polvo:{u:"Dusty-dirty_PC.jpg",a:"Interior de una PC con polvo acumulado",c:"Un gabinete con polvo acumulado: justo lo que se limpia en este paso."},
  pasta:{u:"Thermal_CompoundApplying.JPG",a:"Aplicación de pasta térmica",c:"Aplicación de pasta térmica."},
  ram:{u:"Four_SDRAM_DIMM_slots_on_a_computer_motherboard.jpg",a:"Ranuras de memoria en una placa madre",c:"Ranuras de memoria RAM en una placa madre."},
  b321:{w:360,h:146,a:"Regla 3-2-1: tres copias de tus datos, en dos tipos de medio distintos y una de ellas fuera de casa.",c:"Regla 3-2-1."},
  net:{w:486,h:136,a:"Cuatro capas de la conexión: señal Wi-Fi, dirección IP, nombres DNS y salida a internet, cada una con el comando para probarla.",c:"Cada capa tiene su prueba: la primera que falle te dice dónde está el problema.",big:1}
};
var FP={pc:{3:"polvo",4:"pasta",5:"ram"},lap:{5:"b321"}},FC={lap:{6:"net"}};
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
