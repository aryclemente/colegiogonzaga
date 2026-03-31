# Bloques HTML de Elementor: `exalumnos.html`

Estos bloques están formateados para copiarse y pegarse en los **Widgets HTML** de Elementor.

*(Nota: Las clases personalizadas del formulario como `.form-input` han sido sustituidas por sus equivalentes nativas de Tailwind en este código para que no necesites configurar dependencias complejas en WordPress).*

## ⚠️ CSS Global
Pega esto en **Apariencia > Personalizar > CSS Adicional** o en tu hoja global:

```css
.hero-gradient { background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)); }
.card-shadow { box-shadow: 0 10px 30px -5px rgba(0,0,0,0.05); }
.dark .card-shadow { box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3); }
```

---

### Bloque 1: Hero
Copia y pega en un Widget HTML:

```html
<section class="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden w-full">
    <div class="absolute inset-0">
        <img src="assets/propuestaeducativa.jpeg" alt="Comunidad de Exalumnos" class="w-full h-full object-cover">
        <div class="absolute inset-0 hero-gradient"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10 text-center w-full">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight drop-shadow-2xl">
                RedExAlumnos: Tu historia sigue aquí
            </h2>
            <p class="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg italic">
                Vuelve a casa para reencontrarte con tu promoción. Tu experiencia es clave para seguir construyendo el futuro del Gonzaga y acompañar a las nuevas generaciones.
            </p>
        </div>
    </div>
</section>
```

### Bloque 2: Nuestra Huella (Testimonios)
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-white dark:bg-slate-900 w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-2 font-display uppercase tracking-tight">
                Nuestra Huella
            </h3>
            <div class="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Tarjeta 1 -->
            <div class="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl card-shadow border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center">
                <img src="assets/administrativos.jpeg" alt="Alfredo Mendéz" class="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white dark:border-slate-700 shadow-lg">
                <h4 class="font-bold text-lg mb-1">Alfredo Mendéz</h4>
                <p class="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">Delicias 1965-1969</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 italic font-light leading-relaxed opacity-60">
                    *[En espera de testimonio]*
                </p>
            </div>

            <!-- Tarjeta 2 -->
            <div class="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl card-shadow border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center">
                <img src="assets/administrativos.jpeg" alt="Nomes Madtio" class="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white dark:border-slate-700 shadow-lg">
                <h4 class="font-bold text-lg mb-1">Nomes Madtio</h4>
                <p class="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">Milagros</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 italic font-light leading-relaxed opacity-60">
                    *[En espera de testimonio]*
                </p>
            </div>

            <!-- Tarjeta 3 -->
            <div class="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl card-shadow border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center">
                <img src="assets/administrativos.jpeg" alt="Alumnis Risrlanez" class="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white dark:border-slate-700 shadow-lg">
                <h4 class="font-bold text-lg mb-1">Alumnis Risrlanez</h4>
                <p class="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">San José</p>
                <p class="text-sm text-slate-600 dark:text-slate-400 italic font-light leading-relaxed opacity-60">
                    *[En espera de testimonio]*
                </p>
            </div>
        </div>
    </div>
</section>
```

### Bloque 3: Únete a nuestra red (Formulario)
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-slate-50 dark:bg-slate-800/20 w-full">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div class="p-8 md:p-12 text-center text-white">
                <h3 class="text-3xl md:text-4xl font-extrabold mb-4 font-display uppercase tracking-tight">Únete a nuestra red</h3>
                <p class="text-blue-100 font-light italic mb-10">Mantente conectado con nosotros para participar en eventos, encuentros de promociones y nuevos proyectos del Gonzaga.</p>

                <form class="space-y-6 text-left" onsubmit="event.preventDefault(); alert('Gracias por unirte a la red!');">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Nombre</label>
                            <input type="text" placeholder="Tu nombre" class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner" required>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Apellido</label>
                            <input type="text" placeholder="Tu apellido" class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner" required>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Año de Egreso (Último año cursado)</label>
                        <select class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat" required>
                            <option value="" disabled selected>Seleccionar año escolar</option>
                            <option>2024-2025</option>
                            <option>2023-2024</option>
                            <option>2022-2023</option>
                            <option>2021-2022</option>
                            <option>Anterior</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Email</label>
                        <input type="email" placeholder="ejemplo@correo.com" class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner" required>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Teléfono</label>
                        <div class="flex gap-4">
                            <div class="w-32 flex items-center bg-white rounded-xl px-4 shadow-inner">
                                <img src="https://flagcdn.com/w20/ve.png" alt="VE" class="w-5 h-auto mr-2">
                                <span class="text-slate-900 font-bold">+58</span>
                            </div>
                            <input type="tel" placeholder="0412 000 0000" class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner flex-1" required>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-blue-200">Cuéntanos algo</label>
                        <textarea rows="4" placeholder="¿A qué te dedicas ahora? ¿Qué recuerdos tienes del colegio?" class="w-full px-4 py-3 rounded-xl bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-slate-900 border-none shadow-inner resize-none"></textarea>
                        <p class="text-[9px] text-blue-300 mt-2 text-right">0/280</p>
                    </div>

                    <div class="pt-4">
                        <button type="submit" class="w-full bg-yellow-400 hover:bg-yellow-500 text-primary font-black py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] uppercase tracking-widest">
                            Unirme a la Red
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
```

### Bloque 4: Nuestro Impacto
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-white dark:bg-slate-900 w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-2 font-display uppercase tracking-tight">
                Nuestro Impacto
            </h3>
            <div class="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] card-shadow border border-slate-100 dark:border-slate-800 flex items-center gap-8">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 text-4xl">school</span>
                </div>
                <div>
                    <p class="text-4xl font-black text-primary dark:text-white leading-tight">12k+</p>
                    <p class="text-xs text-slate-500 uppercase font-bold tracking-widest">Estudiantes Totales</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] card-shadow border border-slate-100 dark:border-slate-800 flex items-center gap-8">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400 text-4xl">groups</span>
                </div>
                <div>
                    <p class="text-4xl font-black text-primary dark:text-white leading-tight">3.5k+</p>
                    <p class="text-xs text-slate-500 uppercase font-bold tracking-widest">Ex-Alumnos Registrados</p>
                </div>
            </div>
        </div>
    </div>
</section>
```
