# Especificaciones Técnicas: Pie de Página (Footer)

Este documento detalla la anatomía visual y técnica del pie de página del Colegio Gonzaga, basada en la propuesta aprobada en `Propuesta/code.html`.

---

## 🏗️ Estructura y Disposición (Layout)

### Contenedor Principal
- **Tipo**: Grid (Cuadrícula).
- **Fondo**: Azul Gonzaga (`#1e3a8a`).
- **Padding Superior**: `80px` (`pt-20`).
- **Padding Inferior**: `40px` (`pb-10`).
- **Espaciado entre Columnas**: `48px` (`gap-12`).

### Seccionalización (3 Columnas en Desktop)
1. **Columna 1: Identidad y Redes (40%)**:
   - Logo del Colegio (Escudo).
   - Descripción institucional.
   - Fila de iconos de redes sociales (Instagram, WhatsApp, Radio).
2. **Columna 2: Navegación Rápida (20%)**:
   - Título: "Enlaces Rápidos".
   - Lista vertical de 4-6 enlaces estratégicos.
3. **Columna 3: Contacto y Acción (40%)**:
   - Título: "Contacto".
   - Datos de contacto (Dirección, Teléfono, Email) con iconos.
   - Botón de llamado a la acción (CTA) "Donar Aquí".

### 🔗 Enlaces Rápidos Recomendados
Para optimizar la navegación y los objetivos del sitio, se recomienda incluir los siguientes enlaces en la columna central:
1. **Misión, Visión y Valores**: Refuerza la identidad institucional.
2. **Propuesta Educativa**: Acceso directo al núcleo académico.
3. **Plan de Financiamiento**: Crucial para la sostenibilidad y captación de donaciones.
4. **Red de Exalumnos**: Fomenta el sentido de pertenencia y red de apoyo.
5. **Red de Voluntarios**: Invita a la participación activa de la comunidad.
6. **Actualidad**: Mantiene al usuario informado sobre las últimas novedades.

---

## 🎨 Estilos Visuales (Design Tokens)

### 🎨 Colores
- **Fondo Principal**: `#1e3a8a` (Azul Gonzaga).
- **Texto Principal**: `#ffffff` (Blanco).
- **Texto Secundario**: `#bfdbfe` (Blue-200) - Usado en descripciones y enlaces.
- **Iconos de Contacto**: `#60a5fa` (Blue-400).
- **Botón "Donar Aquí"**: `#dc2626` (Rojo Secondary).
- **Línea de Separación Inferior**: `rgba(255, 255, 255, 0.1)` (Blanco con 10% opacidad).

### 🔢 Medidas de Iconos Sociales
- **Contenedor**: Círculo de `40px x 40px` (`w-10 h-10`).
- **Fondo de Icono**: `rgba(255, 255, 255, 0.1)`.
- **Efecto Hover**: Fondo sube a `rgba(255, 255, 255, 0.2)`.

---

## 🔡 Tipografía

### 1. Títulos de Columna
- **Fuente**: `Montserrat`.
- **Peso**: `700` (Bold).
- **Tamaño**: `18px` (`text-lg`).
- **Color**: Blanco (`#ffffff`).

### 2. Enlaces y Texto de Contacto
- **Fuente**: `Montserrat`.
- **Peso**: `400` (Regular) / `500` (Medium).
- **Tamaño**: `14px` (`text-sm`).
- **Color**: `#bfdbfe` (Blue-200).

### 3. Barra de Copyright (Bottom Bar)
- **Fuente**: `Montserrat`.
- **Peso**: `400`.
- **Tamaño**: `12px` (`text-xs`).
- **Color**: `#93c5fd` (Blue-300).

---

## 📱 Comportamiento Responsivo

| Elemento | Escritorio (>1024px) | Tablet (768px - 1024px) | Móvil (<768px) |
| :--- | :--- | :--- | :--- |
| **Columnas** | 3 columnas horizontales. | 3 columnas (más estrechas). | 1 columna (apilamiento vertical). |
| **Alineación** | Izquierda. | Izquierda. | Centrado o Izquierda (según contenido). |
| **Barra Inferior** | Flex horizontal (Espacio entre). | Flex horizontal. | Centrado vertical (`flex-col`). |
| **Espaciado** | `gap-12`. | `gap-8`. | `gap-12` (Vertical). |

---

## 🔘 Botón "Donar Aquí" (Footer CTA)
- **Fondo**: `#dc2626` (Rojo).
- **Texto**: Blanco.
- **Icono**: Corazón (`favorite`) a la izquierda.
- **Borde Radio**: `50px` (Píldora).
- **Sombra**: `shadow-lg` con color secundario al hacer hover.

---
*Referencia técnica extraída de la Propuesta de Diseño v1.0*
