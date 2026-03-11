# Sistema de Diseño - Colegio Gonzaga

Este documento define la identidad visual y los componentes de interfaz utilizados en el ecosistema web del Colegio Gonzaga. Sirve como referencia para mantener la consistencia en futuros desarrollos.

---

## 1. Identidad Visual

### Paleta de Colores
Utilizamos una paleta que combina la seriedad institucional con acentos vibrantes.

| Color | Variable Tailwind | Hex | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Azul Gonzaga** | `primary` | `#1e3a8a` | Header, Footer, Botones Primarios, Títulos. |
| **Rojo Gonzaga** | `secondary` | `#dc2626` | Acentos, Botones de CTA secundarios, Hovers. |
| **Amarillo Radio** | `yellow-400` | `#facc15` | Secciones de Radio, Botones de suscripción, Íconos. |
| **Gris Fondo Ligero** | `background-light` | `#f8fafc` | Fondos de página en modo claro. |
| **Azul Oscuro** | `background-dark` | `#0f172a` | Fondos de página en modo oscuro. |

### Gradientes
- **Radio Hub**: `linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)`

---

## 2. Tipografía

El sistema utiliza dos familias tipográficas complementarias:

1.  **Montserrat** (`font-display`): Utilizada para títulos, navegación y cuerpo de texto general. Transmite modernidad y orden.
2.  **Playfair Display** (`font-serif`): Utilizada para acentos elegantes, citas o títulos específicos que requieren un toque tradicional y distinguido.

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

| Slot UI | Familia | Peso | Escritorio | Tablet | Móvil | Clase Tailwind |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Heading XL** | `Playfair Display` | **700 Italic** | `120px` | `80px` | `48px` | `text-5xl md:text-8xl` |
| **Heading L** | `Montserrat` | **800** | `36px` | `32px` | `28px` | `text-4xl` |
| **Heading M** | `Montserrat` | **800** | `30px` | `26px` | `24px` | `text-3xl` |
| **Heading S** | `Montserrat` | **700** | `18px` | `18px` | `16px` | `text-lg / font-bold` |
| **Body S** | `Montserrat` | **400** | `14px` | `14px` | `14px` | `text-sm` |

> [!TIP]
> **Puntos de Interrupción**: Elementor tiene 3 vistas por defecto. Asegúrate de configurar los tamaños para el icono de **Tablet** (768px a 1024px) y **Móvil** (menos de 768px).
---

## 3. Componentes de Interfaz

### Navegación (Glassmorphism)
- **Clase**: `.glass-nav`
- **Efecto**: `backdrop-filter: blur(10px)` con fondo semitransparente.
- **Comportamiento**: Sticky (fijado a la parte superior) con menús desplegables (`dropdown-content`).

### Botones (CTA)
- **Primary**: `bg-primary`, texto blanco, bordes redondeados (`rounded-full`), sombras suaves.
- **Radio/Direct**: `bg-yellow-400`, contraste alto, utilizado para llamadas a la acción inmediatas.
- **Hover Transitions**: Aplicamos `transition-all` y `hover:scale-105` para interactividad.

### Tarjetas (Cards)
- **Insta-Card**: Diseño basado en redes sociales con avatar superior, imagen central y descripción inferior.
- **News Card**: Formato horizontal con imagen lateral y extracto textual.
- **Shadows**: Utilizamos `shadow-xl` para elevar elementos sobre el fondo.

---

## 4. Patrones de Diseño

### Modo Oscuro
El sitio soporta un modo oscuro completo basado en la clase `.dark` en el elemento `html`.
- Fondos claros pasan a `#0f172a`.
- Texto principal pasa a `slate-100`.
- Bordes y divisores se ajustan a `slate-800`.

### Layout y Espaciado
- **Container**: `mx-auto px-6` (estándar) o `px-12/px-20` (secciones premium).
- **Secciones Full-Height**: Se utiliza `min-h-screen` con flexbox para centrar contenido verticalmente en páginas de impacto como Actualidad.

---
*Colegio Gonzaga - Formando hombres y mujeres para los demás.*
