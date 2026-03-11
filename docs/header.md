# Especificaciones Técnicas: Cabecera (Header)

Este documento detalla la anatomía visual y técnica de la cabecera del Colegio Gonzaga, basada en la propuesta aprobada en `Propuesta/code.html`.

---

## 🏗️ Estructura y Disposición (Layout)

### Contenedor Principal
- **Tipo**: Flexbox (Fila).
- **Posición**: Fija al tope (`fixed top-0`).
- **Ancho**: 100% (`w-full`).
- **Z-Index**: 50 (Prioridad máxima sobre otros elementos).
- **Altura recomendada**: `72px` (aprox. `py-3` + iconos).

### Seccionalización (3 Contenedores)
Para una distribución equilibrada en Elementor, usa estos anchos de columna:
1. **Contenedor Logo**: **20%** de ancho.
2. **Contenedor Menú**: **60%** de ancho.
3. **Contenedor Botones**: **20%** de ancho.

---

## 🎨 Estilos Visuales (Aesthetics)

### Efecto Cristal (Glassmorphism)
- **Fondo**: `rgba(255, 255, 255, 0.95)` (Blanco con 95% opacidad).
- **Desenfoque**: `backdrop-filter: blur(10px)`.
- **Borde Inferior**: `1px solid #e2e8f0` (Slate-200).

---

## 🔡 Tipografía y Marca

### 1. Marca Colegio (Logo Text)
- **Nombre ("COLEGIO GONZAGA")**:
  - Fuente: `Montserrat`.
  - Peso: `800` (Extra Bold).
  - Tamaño: `18px`.
  - Color: `#1e3a8a` (Primary).
- **Localidad ("MARACAIBO")**:
  - Fuente: `Montserrat`.
  - Peso: `700` (Bold).
  - Tamaño: `10px`.
  - Transformación: Mayúsculas (`uppercase`).
  - Espaciado entre letras (Letter Spacing): `0.2em`.

### 2. Menú de Navegación
- **Tipografía**: `Montserrat`.
- **Peso**: `600` (Semi Bold).
- **Tamaño**: `14px` (Equivale a `text-sm`).
- **Color Normal**: `#334155` (Slate-700).
- **Color Hover**: `#1e3a8a` (Azul Primary).
- **Espaciado entre opciones**: `32px` (Equivalente al `gap-8` de Tailwind). En Elementor, esto se configura como "Horizontal Padding" de `16px` en cada lado de los ítems.

---

## 🔘 Botón "Dona Aquí" (Tipografía y Estilo)
- **Tipografía**: `Montserrat`.
- **Peso**: `700` (Bold).
- **Tamaño**: `14px`.
- **Fondo**: `#1e3a8a` (Azul Gonzaga).
- **Texto**: Blanco (`#ffffff`).
- **Padding Interno**: `10px` arriba/abajo y `24px` a los lados.
- **Borde Radio**: `50px` (Píldora).

- **Efecto Hover**: Escalar ligeramente (`scale-105`) y cambio de color a azul más oscuro.

---

## 📱 Comportamiento Responsivo

| Dispositivo | Comportamiento |
| :--- | :--- |
| **Escritorio (>1024px)** | Menú completo visible. Logo y Botón en extremos. |
| **Tablet (768px - 1024px)** | Ocultar Menú Desktop. Mostrar Icono Hamburguesa. Ocultar Botón "Dona Aquí" para espacio. |
| **Móvil (<768px)** | Altura reducida a `64px`. Logo simplificado (solo escudo) u ocultar nombre del colegio. |

---
*Referencia técnica extraída de la Propuesta de Diseño v1.0*
