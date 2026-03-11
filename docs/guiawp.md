# Guía de Migración: De Código a WordPress (Elementor)

Esta guía detalla los pasos para replicar la página de inicio (`code.html`) en WordPress utilizando **Elementor Pro** y el tema oficial **Hello Elementor**.

> [!IMPORTANT]
> **Estructura de Trabajo**: Estamos utilizando un **Child Theme** (ubicado en `hello-elemento-child`) para proteger todas las personalizaciones y lógica de servidor, permitiendo actualizar el tema padre sin riesgos.

---

## 0. Configuración Inicial (Child Theme)

Antes de maquetar, asegúrate de que el Child Theme tenga la lógica de seguridad necesaria para ocultar los cambios en desarrollo.

### Lógica de Redirección (functions.php)
Hemos rescatado y mejorado la lógica del ingeniero anterior para asegurar que los visitantes no vean el sitio mientras trabajamos. Inserta esto en tu `functions.php` del tema hijo:

```php
add_action('template_redirect', function () {
    // Solo permite ver el sitio a administradores logueados
    if (is_user_logged_in() && current_user_can('administrator')) { return; }
    if (is_admin()) { return; }
    
    // Evita bucle si ya estamos en /home
    if (strpos($_SERVER['REQUEST_URI'], '/home') === 0) { return; }
    
    // Redirige todo lo demás a la página de "Próximamente" o Home actual
    wp_redirect('https://colegiogonzaga.org.ve/home', 302);
    exit;
});
```

---

## 1. ADN del Diseño (Ajustes de Sitio)

Antes de crear cualquier página, configura los **Ajustes de Sitio** en Elementor para garantizar la consistencia global.

### A. Colores Globales
Configura los siguientes colores en `Ajustes de Sitio > Colores Globales`:

| Nombre Elementor | Código Hex | Uso en el Código |
| :--- | :--- | :--- |
| **Principal (Primary)** | `#1e3a8a` | Azul Gonzaga |
| **Secundario (Secondary)** | `#dc2626` | Rojo Gonzaga |
| **Acento (Accent)** | `#facc15` | Amarillo Radio |
| **Fondo Claro** | `#f8fafc` | Background Light |
| **Fondo Oscuro** | `#0f172a` | Background Dark |

### B. Fuentes Globales (Configuración Detallada)
Para que Elementor se comporte exactamente como tu código, configura cada slot de la captura de la siguiente manera:

#### 1. Fuentes del Sistema (System Fonts)
| Slot | Familia | Peso (Weight) | Descripción |
| :--- | :--- | :--- | :--- |
| **Primary** | `Montserrat` | **800** | Títulos de máximo impacto. |
| **Secondary** | `Playfair Display` | **700 Italic** | Títulos elegantes (Efecto "Nunca Solos"). |
| **Text** | `Montserrat` | **400** | Cuerpo de texto principal. |
| **Accent** | `Montserrat` | **600** | Menús y etiquetas destacadas. |

#### 2. Fuentes Personalizadas (Heading Styles)
Configura estos perfiles para que coincidan con las clases de Tailwind:

| Slot UI | Familia | Peso | Escritorio (px / em) | Tablet | Móvil | Clase Tailwind |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Heading XL** | `Playfair Display` | **700 Italic** | `120px / 7.5em` | `80px` | `48px` | `text-5xl md:text-8xl` |
| **Heading L** | `Montserrat` | **800** | `36px / 2.25em` | `32px` | `28px` | `text-4xl` |
| **Heading M** | `Montserrat` | **800** | `30px / 1.875em` | `26px` | `24px` | `text-3xl` |
| **Heading S** | `Montserrat` | **700** | `18px / 1.125em` | `18px` | `16px` | `text-lg / font-bold` |
| **Body S** | `Montserrat` | **400** | `14px / 0.875em` | `14px` | `14px` | `text-sm` |

> [!TIP]
> **Puntos de Interrupción**: Elementor tiene 3 vistas por defecto. Asegúrate de configurar los tamaños para el icono de **Tablet** (768px a 1024px) y **Móvil** (menos de 768px).


### C. Layout y Contenedores (Disposición)
Configura la base estructural en `Ajustes de Sitio > Disposición (Layout)`:

- **Ancho del Contenido**: Configura el "Ancho del contenido predeterminado" en **1280px / 100% / 80em**. Esto equivale al `container mx-auto` de Tailwind.
- **Espaciado entre Widgets**: Déjalo en **0px / 0% / 0em**.
- **Puntos de Interrupción (Breakpoints)**: Asegúrate de que estén en los valores estándar:
    - Móvil: **767px**.
    - Tablet: **1024px**.

> [!TIP]
> Para el **Padding** de las secciones (`py-20`), lo ideal es usar **80px / 6.25% / 5em**.


---

## 2. Estructura de Secciones Paso a Paso

### Cabecera (Opción A: Elementor Theme Builder)
Para replicar el header de la propuesta, sigue estos pasos:

1. **Crear Plantilla**: Ve a `Plantillas > Theme Builder > Header > Añadir Nuevo`.
2. **Estructura (Flexbox)**: Crea un **Contenedor** principal y configúralo como **FLEXBOX**:
   - **Dirección**: Horizontal (Fila).
   - **Justificar Contenido**: Espacio entre (Space-between).
   - **Alinear Elementos**: Centrado (Para que el logo y el botón queden alineados a la misma altura).
   
3. **Las 3 Columnas**:
   Dentro del contenedor principal, crea 3 Contenedores hijos (o arrastra los widgets directamente si prefieres control simple):
   - **Logo**: Ancho **256px / 20% / 16em**.
   - **Menú**: Ancho **768px / 60% / 48em**.
   - **Botón**: Ancho **256px / 20% / 16em**.


#### A. El Logo (Columna 1)
- **Recomendación Técnica**: Aunque en el código HTML usamos texto vivo, en Elementor lo más limpio es **convertir el escudo + "Colegio Gonzaga" + "Maracaibo" en un solo archivo SVG**.
  - **Por qué?**: Aseguras que la alineación y el espaciado sean siempre perfectos y no dependan de cómo el navegador renderice la fuente en tamaños pequeños.
- **Configuración**:
  - **Escritorio**: Ancho `20%`. Widget Imagen (SVG).
  - **Tablet**: Ancho `30%`. 
  - **Móvil**: Ancho `50%`.

> [!TIP]
> **Si prefieres usar texto vivo (Widgets)**:
> Usa un **Contenedor secundario** (Horizontal) dentro de la Columna 1.
> 1. Widget Imagen (Escudo).
> 2. Contenedor (Vertical) con dos widgets de Título:
>    - "COLEGIO GONZAGA": Montserrat 800, `text-lg`, Uppercase.
>    - "MARACAIBO": Montserrat 500, `10px`, Espaciado entre letras `0.2em`.


#### B. El Menú (Columna 2)
Para que el widget **WordPress Menu** se comporte como el código Tailwind:

1. **Pestaña Contenido**:
   - **Menu**: Selecciona el menú que creaste en `Apariencia > Menús`.
   - **Layout**: Horizontal.
   - **Align**: Center.
   - **Pointer (Efecto)**: Ninguno o **Underline** (Sutil).
   - **Animation**: "Fade" para las transiciones.

2. **Pestaña Estilo (Menú Principal)**:
   - **Tipografía**: Montserrat, Peso 600, Tamaño **15px / 0.937em**.
   - **Color (Normal)**: `#334155` (Slate-700 en Tailwind).
   - **Color (Hover)**: `#1e3a8a` (Primary Blue).
   - **Horizontal Padding**: **15px / 1.17% / 0.937em** entre cada link.

3. **Pestaña Estilo (Dropdown / Desplegable)**:
   - **Color de Fondo**: Blanco.
   - **Borde**: Sólido (`1px`) color suave (`#f1f5f9`).
   - **Sombra de Caja**: Actívala (Suave, alfa 0.1).
   - **Tipografía**: Montserrat 500, **14px / 0.875em**.
   - **Hover**: Color de fondo `#f8fafc`.

4. **Responsive (Mobile Dropdown)**:
   - **Breakpoint**: Tablet (1024px).
   - **Full Width**: Sí.
   - **Toggle color**: `#1e3a8a`.
   - **Dropdown Background**: `#ffffff`.


#### C. El Botón "Dona Aquí" (Columna 3)
- **Escritorio**: Visible. Estilo Azul Gonzaga, 50px de radio.
- **Tablet**: **Ocultar**. (Pestaña Avanzado > Responsivo > Ocultar en Tablet). Esto da espacio al menú.
- **Móvil**: **Ocultar**. (Avanzado > Responsivo > Ocultar en Móvil). El botón de donar suele ir dentro del menú hamburguesa o como un icono pequeño flotante.
- **Radio de Borde**: **50px / 3.9% / 3.125em**.

#### 4. Estilos del Contenedor Principal (Avanzado)
- **CSS Personalizado**:
  ```css
  selector {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,0,0,0.1);
      height: 72px; /* 4.5em */ 
  }
  /* Ajuste de altura para móviles */
  @media (max-width: 767px) {
      selector { height: 64px; } /* 4em */
  }
  ```


### Hero Carousel (Slider de Impacto)
Para replicar el efecto "Nunca Solos" de la propuesta:

1. **Widget**: Usa el widget **Slides (Diapositivas)** de Elementor.
2. **Contenido**:
   - Sube las imágenes (`slide1.jpeg`, `slide2.jpeg`).
   - Elige **Altura**: `90vh`.
3. **Estilo del Slide (Pestaña Estilo)**:
   - **Custom Overlay**: Activa y usa un degrade de Negro (Opacidad 0.4) a Negro (Opacidad 0.85).
   - **Animación del Contenido**: "Up" (Arriba) para que el texto suba al entrar.
4. **Tipografía del Hero**:
   - **Título (XL)**: **120px / 9.37% / 7.5em**.
   - **Descripción**: **24px / 1.87% / 1.5em**.
5. **Botones del Hero**:
   - **Botón 1 (Principal)**: Fondo Blanco, Texto Primary, Borde Radio **50px / 3.9% / 3.125em**.
   - **Botón 2 (Secundario)**: Fondo Transparente, Borde Blanco (1px), Texto Blanco.

> [!TIP]
> **Efecto de Vidrio en Indicadores**: En la pestaña "Navegación" del widget Slides, busca los "Puntos" (Dots). Puedes darles un color blanco con opacidad 0.3 y que cambien a blanco sólido al estar activos.


### Vida Institucional (Grid Instagram)
Para replicar el efecto de las tarjetas de Instagram:

1. **Estructura**: Usa un **Contenedor Grid** (Cuadrícula).
   - **Desktop**: 4 columnas.
   - **Tablet/Móvil**: 2 columnas (`grid-cols-2`).
   - **Espaciado (Gap)**: **16px / 1.25% / 1em**.
2. **Encabezado de Sección**:
   - **Título**: Montserrat **800**, **36px / 2.8% / 2.25em**, Color: `#1e3a8a` (Primary).
   - **Subtítulo**: Montserrat **400**, **16px / 1.25% / 1em**, Color: `#64748b` (Slate-500).
   - **Enlace "Ver Perfil"**: Montserrat **700**, `14px` (`text-sm`), Color: `#1e3a8a`. Añade un icono `arrow_right_alt` con efecto hover de traslación.
3. **Tarjetas de Imagen**:
   - **Widget**: Caja de imagen o Contenedor con fondo.
   - **Dimensiones**: Proporción 1:1 (`aspect-square`).
   - **Borde**: **24px / 1.87% / 1.5em** de radio (`rounded-2xl`).
   - **Efecto de Hover**:
     - **Escala**: La imagen debe escalar a `1.1` en hover.
     - **Overlay**: Aplicar un fondo `rgba(30, 58, 138, 0.4)` (Azul Gonzaga 40%).
     - **Icono**: Icono `favorite` (Material Symbols) blanco en el centro con opacidad inicial 0.
4. **Sombra**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)` (`shadow-lg`).

5. **Botón "Ver Actualidad"**:
   - **Widget**: Botón de Elementor.
   - **Texto**: "VER ACTUALIDAD" (Mayúsculas).
   - **Icono**: `arrow_forward` (Material Symbols), alineado a la derecha.
   - **Estilo**:
     - **Color de Fondo**: `#1e3a8a` (Azul Gonzaga).
     - **Color de Texto**: Blanco.
     - **Tipografía**: Montserrat **700**, `14px`, transformación: **Mayúsculas**, Espaciado de letras: `0.1em`.
     - **Relleno (Padding)**: Arriba/Abajo `12px`, Izquierda/Derecha `40px`.
     - **Borde**: Radio `50px`.
     - **Hover**:
       - **Color de Fondo**: `#1d4ed8` (Azul más claro/vibrante).
       - **Animación**: "Float" (o `-translate-y-1` vía CSS).
       - **Sombra de Caja**: Azul suave.


### Radio Gonzaga y Noticias (Card Asimétrica)
Esta sección integra la Radio y las Noticias en un solo bloque visual de alto impacto:

1. **Contenedor Maestro**:
   - **Estructura**: Grid / Flexbox con proporción **40% / 60%**.
   - **Borde**: Radio de **40px / 3.12% / 2.5em** (`rounded-[2.5rem]`).
   - **Estilo**: Borde sólido de `1px` (`#e2e8f0`) y sombra suave (`shadow-sm`).
2. **Columna Izquierda (Radio)**:
   - **Fondo**: `#f8fafc` (Slate-50).
   - **Icono Principal**: Widget Icono `podcasts` en contenedor de **112px / 8.75% / 7em**, fondo blanco, radio de **24px / 1.87% / 1.5em**, color `#1e3a8a`.
   - **Badge Mic**: Mini icono `mic` en círculo rojo (`#dc2626`) en la esquina del icono principal.
   - **Badge "Próximamente"**: Fondo `#dc2626`, texto blanco, Montserrat **700**, `10px`, mayúsculas.
   - **Título**: "Radio Gonzaga" (H3, Montserrat 800, **36px / 2.8% / 2.25em**).
   - **Descripción**: Fuente **Italic**, Montserrat **300**, **18px / 1.4% / 1.125em**, Color: `#475569`.
3. **Columna Derecha (Noticias)**:
   - **Padding**: **48px / 3.75% / 3em** en todos los lados.
   - **Item de Noticia**:
     - **Fecha**: Montserrat **700**, `10px`, Color: `#94a3b8` (Slate-400), Mayúsculas.
     - **Título**: Montserrat **800**, `24px` a **30px / 2.34% / 1.875em**, Color: `#1e3a8a`.
     - **Enlace "Leer más"**: Montserrat **700**, `12px`, Color: `#dc2626` (Rojo). Añade icono `chevron_right`.
4. **Tablet/Móvil**: Cambiar la estructura a **1 columna** (Radio arriba, Noticias abajo).


### Propuesta Educativa (Tabs e Interactividad)
Esta sección utiliza un sistema de pestañas para mostrar las diferentes áreas formativas.

1. **Configuración de la Sección**:
   - **Padding**: Superior e Inferior **48px / 3.75% / 3em**.
   - **Fondo**: `#f8fafc` (Gris muy claro / Slate-50).
2. **Encabezado de Sección (`text-center`)**:
   - **Margen Inferior del Bloque**: **64px / 5% / 4em**.
   - **Título (H2)**: Montserrat **800**, **48px / 3.75% / 3em** (Escritorio) / `36px` (Móvil). Color: `#1e3a8a`. Margen inferior: `16px`.
   - **Subtítulo**: Montserrat **400**, **18px / 1.4% / 1.125em**. Color: `#475569`.
3. **Pestañas (Tabs Control)**:
   - **Widget**: Pestañas de Elementor (Tabs).
   - **Layout**: Centrado.
   - **Espaciado entre items**: **64px / 5% / 4em** (Escritorio) / `32px` (Móvil).
   - **Estilo de Pestaña**: Montserrat **700**, `14px`, Mayúsculas. Color inactivo: `#64748b`.
   - **Indicador Activo**: Línea sólida inferior roja (`#dc2626`) de **4px / 0.3% / 0.25em** de grosor.
4. **Contenido de la Pestaña (Layout Interno)**:
   - **Estructura**: Usa un **Contenedor Flex** o **Grid** de 2 columnas con un `gap` de **48px / 3.75% / 3em**.
   - **Columna Imagen**:
     - **Borde**: Radio de **24px / 1.87% / 1.5em** (`rounded-3xl`).
     - **Sombra**: `shadow-lg` (Suave).
     - **Dimensiones**: Debería cubrir el ancho de la columna manteniendo la proporción original.
   - **Columna Texto**:
     - **Etiqueta superior**: Montserrat **700**, `14px`, Mayúsculas, Color: `#1e3a8a`.
     - **Título (H3)**: Montserrat **800**, **36px / 2.8% / 2.25em** (Escritorio) / `30px` (Móvil). Margen superior/inferior: `16px`.
     - **Descripción**: Montserrat **400**, **18px / 1.4% / 1.125em**. Interlineado (Line-height) de `1.6` para legibilidad. Margen inferior: `32px`.
     - **Botón "Saber más"**: Estilo redondeado (50px), azul Gonzaga, icono `arrow_right`.


---

## 3. Componentes Especiales (Código Custom)

### El Marquee de Aliados (Logos Infinitos)
Elementor no tiene un marquee infinito nativo tan fluido como el de Tailwind. Usa un widget **HTML** con este código:

```html
<div class="marquee-container">
    <div class="marquee-content">
        <!-- Duplica los logos para el efecto infinito -->
        <img src="logo1.png"> <img src="logo2.png"> ...
        <img src="logo1.png"> <img src="logo2.png"> ...
    </div>
</div>

<style>
.marquee-container { overflow: hidden; white-space: nowrap; }
.marquee-content {
    display: inline-block;
    animation: marquee 40s linear infinite;
}
@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
</style>
```

### Modo Oscuro (Opcional)
Para replicar el comportamiento de `dark:bg-background-dark`, se recomienda usar el plugin **WP Dark Mode** o añadir clases condicionales vía JS si usas Elementor Pro.

### Proyectos de Financiamiento (Impacto Visual)
Esta sección combina texto informativo con un carrusel de campañas.

1. **Configuración de la Sección**:
   - **Padding**: Superior e Inferior **48px / 3.75% / 3em**.
   - **Borde**: Línea superior e inferior gris muy tenue (`border-y border-gray-100`).
2. **Distribución (Grid)**:
   - **Proporción**: **50% / 50%** (`grid-cols-2`).
   - **Espaciado (Gap)**: **64px / 5% / 4em**.
3. **Bloque de Texto (Izquierda)**:
   - **Etiqueta**: "PROYECTOS DE FINANCIAMIENTO" (Montserrat 700, 14px, Primary).
   - **Título**: "Tu aporte transforma vidas" (H2, Montserrat 800, **36px / 2.8% / 2.25em**).
   - **Barra de Progreso**:
     - **Contenedor**: Alto **16px / 1.25% / 1em**, Fondo gris suave, Radio `50px`.
     - **Progreso**: Azul (`#3b82f6`), Ancho según porcentaje (ej. 40%).
4. **Carrusel de Campañas (Derecha)**:
   - **Widget**: Carrusel de Elementor (Slides).
   - **Altura Mínima**: **300px / 23.4% / 18.75em**.
   - **Estilo de Slide**: Imagen de fondo con overlay negro al 60% (`bg-black/60`).
   - **Contenido**: Título H3 (**24px / 1.87% / 1.5em**, Blanco) + Descripción (Blanco/90).
   - **Botón Interno**: Blanco, Texto Primary, Redondeado.

### Comunidad Gonzaga (Accesos Rápidos)
Sección de herramientas digitales para el personal.

1. **Configuración**:
   - **Padding**: **48px / 3.75% / 3em**.
   - **Fondo**: Slate-50 (`#f8fafc`).
2. **Grid de Acceso**:
   - **Columnas**: 4 (Escritorio) / 1 (Móvil).
   - **Gap**: **24px / 1.87% / 1.5em**.
3. **Tarjetas (Cards)**:
   - **Fondo**: Blanco, Borde `1px` Slate-100, Radio **16px / 1.25% / 1em** (`rounded-2xl`).
   - **Iconos**: Contenedor de **64px / 5% / 4em** x **64px / 5% / 4em**, colores pasteles según categoría (Azul, Rojo, Verde, Púrpura).
   - **Efecto Hover**: Elevación (`shadow-xl`) y cambio de color del icono al color sólido de la categoría.

### Aliados y Marquee (Logos Infinitos)
1. **Título**: "Nunca solos..." (Montserrat 800, **36px / 2.8% / 2.25em**).
2. **Marquee**:
   - **Altura de Logos**: **80px / 6.25% / 5em**.
   - **Espaciado (Gap)**: **80px / 6.25% / 5em**.
   - **Animación**: 40 segundos, lineal, infinita.
   - **Filtro Modo Oscuro**: `brightness-0 invert opacity-80`.

### Preguntas Frecuentes (Accordion)
1. **Layout**: Centrado, Ancho máximo **768px / 60% / 48em**.
2. **Acordeón**:
   - **Pregunta**: Montserrat **600**, **18px / 1.4% / 1.125em**. Color: Primary. Fondo: Blanco.
   - **Borde**: Radio **8px / 0.62% / 0.5em**, Borde Slate-200.
   - **Respuesta**: Fondo Slate-50, Texto Slate-600, Montserrat 400.
   - **Icono**: `chevron_right`, rotación de 90° al abrir.

### Botón "Ver Actualidad"
- **Tipografía**: Montserrat 700, **14px / 0.875em**.
- **Padding**: V:**12px / 0.75em**, H:**40px / 3.12% / 2.5em**.
- **Radio (Radius)**: **50px / 3.125em**.

---

## 3. Componentes Especiales (Código Custom)

### El Marquee de Aliados (Logos Infinitos)
```css
.marquee-content {
    gap: 80px; /* 5em */
    animation: marquee 40s linear infinite;
}
```

---
*Guía preparada para el Colegio Gonzaga Maracaibo. v1.0*
