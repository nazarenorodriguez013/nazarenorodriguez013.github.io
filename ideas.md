# Dirección de diseño — Marcus Chen

## Tres enfoques explorados

### Enfoque 1
**Theme Name:** Terminal de autor

**Very Brief Intro:** Un portafolio con la disciplina visual de una estación de trabajo de ingeniería: austero, preciso y humano. El verde de señal funciona como una firma selectiva, nunca como una decoración invasiva.

**Probability:** 0.071

### Enfoque 2
**Theme Name:** Archivo de ingeniería

**Very Brief Intro:** Un sistema editorial en grafito con anotaciones técnicas, coordenadas y tipografía de revista. La experiencia se siente como abrir un cuaderno de laboratorio de software bien ordenado.

**Probability:** 0.043

### Enfoque 3
**Theme Name:** Luz residual

**Very Brief Intro:** Un ambiente nocturno y arquitectónico en el que planos de gris pizarra y reflejos verdes delinean cada bloque de información. Es sobrio y espacial, con la tecnología sugerida en lugar de ilustrada literalmente.

**Probability:** 0.089

---

## Enfoque seleccionado: Terminal de autor

### Design Movement
Minimalismo editorial técnico con influencias de **terminal contemporánea**, sistemas de señalización industrial y diseño suizo de información. El sitio evita la estética de panel genérico: se lee como el espacio de trabajo público de un ingeniero que cuida tanto el producto como el detalle de implementación.

### Core Principles
1. **Información con jerarquía de código:** números de sección, etiquetas monoespaciadas y líneas de regla convierten la navegación en una lectura técnica.
2. **Contraste disciplinado:** masas negras, grises grafito y texto hueso; el verde neón indica estado, enlaces y decisiones importantes.
3. **Asimetría estructural:** una rail lateral persistente, títulos de gran escala y bloques de contenido que rompen el eje convencional de una landing page centrada.
4. **Prueba antes que promesa:** métricas, stacks, enlaces y fragmentos de implementación tienen prioridad sobre frases de marketing.

### Color Philosophy
El negro carbón sostiene una atmósfera concentrada sin ser plano. El gris pizarra separa capas y aporta legibilidad; el hueso cálido suaviza los textos largos. **Signal Green (#B6FF3B)** se reserva para estados activos, rutas y llamadas a la acción para que cada aparición conserve valor semántico y no parezca neón decorativo.

### Layout Paradigm
Una columna-ríel delgada fija organiza identidad, navegación y estado de disponibilidad. A su derecha, el contenido se despliega como una secuencia editorial de anchos variables, con títulos que invaden varias columnas y tarjetas que se alinean contra una trama de reglas tenues. En móvil, la rail se transforma en una cabecera compacta con navegación contextual.

### Signature Elements
1. **Rail de control:** índice numerado, marca MC y pequeños indicadores de estado.
2. **Portada 3D de ingeniería:** una escultura modular MC en grafito, suspendida sobre una trama técnica y atravesada por una línea de Signal Green.
3. **Reglas de escaneo y etiquetas de sistema:** líneas horizontales y verticales muy finas, junto con chips monoespaciados con prefijos como `// stack`, `01—03`, `live` y `oss`.

### Interaction Philosophy
Todo gesto confirma intención: las tarjetas revelan un índice y cambian el peso del borde al pasar el cursor; las acciones principales se iluminan con verde señal y reducen levemente su escala al pulsar. Los enlaces externos conservan iconos claros y los saltos de sección son directos y previsibles.

### Animation
Las entradas usan solo opacidad y traslación vertical leve, con una cascada de 45 ms entre elementos y una curva `cubic-bezier(0.23, 1, 0.32, 1)`. Los cambios de hover duran entre 160 y 220 ms. Un pulso muy sutil en el indicador de disponibilidad comunica presencia sin distraer; todo movimiento se desactiva bajo `prefers-reduced-motion`.

### Typography System
**Space Grotesk** construye títulos, navegación y números de sección con una personalidad geométrica y condensada en pesos 500–700. **IBM Plex Mono** sustenta metadatos, etiquetas y microcopy. **Manrope** se reserva para descripciones y contenido de lectura extensa. Los titulares no se centran: se construyen en líneas cortas, con alto contraste de escala y aire amplio.

### Brand Essence
**Nazareno Rodríguez crea ERPs y SaaS completos para que los negocios reales operen con más claridad, control e integración.**

Personalidad: **preciso, inquisitivo, sereno**.

### Brand Voice
La voz es directa, específica y tranquila. Los titulares nombran una acción o una consecuencia técnica; las CTA describen el siguiente paso real, sin promesas vagas.

Ejemplos:

> “Interfaces que no pierden el hilo cuando el sistema crece.”

> “Abrir el repositorio y ver cómo está resuelto.”

### Wordmark & Logo
Un monograma **NR** construido con dos líneas angulares que comparten un mismo nodo: la N forma una ruta ascendente y la R queda sugerida por un corte diagonal. El símbolo funciona a una tinta en verde señal sobre negro y se acompaña de un wordmark de Space Grotesk ajustado, con un punto cuadrado como remate.

### Signature Brand Color
**Signal Green — #B6FF3B**. Un verde ácido de alta legibilidad diseñado para aparecer como marcador de estado y dirección, no como fondo dominante.
