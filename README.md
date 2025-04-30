Rock Paper Scissors Lizard Spock

Juego clásico Piedra, Papel, Tijera, Lagarto, Spock implementado con Vite y JavaScript puro, usando manejadores onclick inline.

### Estrategia de trabajo

#	Definición clara de objetivos

Crear una UI intuitiva y responsiva usando Bootstrap y CSS propio.

Mantener la lógica original de juego sin modificaciones fundamentales.

Incorporar mejoras: conteo regresivo, emojis en lugar de texto, uso de Vite.

Incorporar tu link de github con tu nombre en el footer.

###	Metodología Gitflow

#	Ramas principales:

main: versión estable y desplegable.

#	Ramas individuales:

Cada miembro del equipo deberá crearse su propia rama para efectuar los cambios necesarios, y poder hacer la PR y el merge al main

###	CleanCode

Definición de nombres y funciones en inglés usando camelCase

Usar funciones con una única responsabilidad (Principios SOLID)

###	Nomenclaturas de funciones secundarias en base a su rol:

_get+lo que va a retornar : Funciones que siempre RETORNAN UN VALOR.

_is: Prefijo para el sustantivo de un BOOLEANO.

_set+nombre del estado: Si el proceso o la rutina no retorna un valor si no que CAMBIA UN ESTADO.

Usar herramientas como ESLint y/o Prettier 

###	División de tareas individual

Frontend/UI: construcción de index.html y estilos (style.css), integración con Bootstrap.

Lógica de juego: desarrollo de main.js: selección aleatoria, gestión de resultados, conteo atrás y render de emojis.

Configuración de Vite: setup inicial.
