# Bloques HTML de Elementor: `voluntarios.html`

Estos bloques están diseñados para pegarse en **Widgets HTML** dentro de Elementor, garantizando que el diseño y comportamiento sea exactamente como se validó visualmente en Tailwind.

*(Nota: Las clases personalizadas del formulario como `.form-input` han sido expandidas a clases nativas para ahorrar pasos en WordPress).*

## ⚠️ CSS Global
Pega esto en **Apariencia > Personalizar > CSS Adicional** o en tu hoja global:

```css
.hero-gradient { background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75)); }
.card-shadow { box-shadow: 0 10px 30px -5px rgba(0,0,0,0.05); }
.dark .card-shadow { box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3); }
```

---

### Bloque 1: Hero
Copia y pega en un Widget HTML:

```html
<section class="relative h-[65vh] min-h-[550px] flex items-center overflow-hidden w-full">
    <div class="absolute inset-0">
        <img src="assets/slide2.jpeg" alt="Voluntariado Gonzaga" class="w-full h-full object-cover">
        <div class="absolute inset-0 hero-gradient"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10 w-full">
        <div class="max-w-3xl">
            <h2 class="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight drop-shadow-2xl">
                Red de Voluntariado: <br> Tu talento al servicio de los demás
            </h2>
            <p class="text-xl text-white/90 font-light leading-relaxed drop-shadow-lg italic">
                Únete a nuestra misión ignaciana y pon tus capacidades al servicio de la comunidad. En el Gonzaga, tu compromiso nos ayuda a seguir formando a los ciudadanos que nuestra región necesita.
            </p>
        </div>
    </div>
</section>
```

### Bloque 2: Áreas de Interés
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 w-full">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Cards -->
            <div class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:scale-[1.02]">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-4xl">school</span>
                </div>
                <h4 class="font-bold text-lg mb-3">Apoyo Académico</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Comparte tu conocimiento y ayuda a nuestros estudiantes a alcanzar sus metas.
                </p>
            </div>

            <div class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:scale-[1.02]">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-4xl">fitness_center</span>
                </div>
                <h4 class="font-bold text-lg mb-3">Deporte y Convivencia</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Fomenta el bienestar y el trabajo en equipo a través de juegos y actividades recreativas.
                </p>
            </div>

            <div class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:scale-[1.02]">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-4xl">edit</span>
                </div>
                <h4 class="font-bold text-lg mb-3">Cultura y Artes</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Inspira y promueve la expresión artística dentro de nuestra comunidad educativa.
                </p>
            </div>

            <div class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 transition-all flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:scale-[1.02]">
                <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-4xl">architecture</span>
                </div>
                <h4 class="font-bold text-lg mb-3">Infraestructura</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    Colabora en el cuidado y mejora de nuestras instalaciones para garantizar un entorno seguro.
                </p>
            </div>
        </div>
    </div>
</section>
```

### Bloque 3: Regístrate Ahora (Formulario)
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-slate-50 dark:bg-slate-800/20 w-full">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-2 font-display uppercase tracking-tight">Regístrate Ahora</h3>
            <div class="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div class="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
            <form class="space-y-6" onsubmit="event.preventDefault(); alert('Solicitud enviada con éxito!');">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-400">Nombre Completo</label>
                    <input type="text" placeholder="Ej. Juan Pérez" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-400">Correo electrónico</label>
                        <input type="email" placeholder="ejemplo@email.com" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-400">Teléfono</label>
                        <input type="tel" placeholder="+58 4XX XXXXXXX" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required>
                    </div>
                </div>

                <div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p class="text-[10px] font-bold uppercase tracking-wider mb-6 text-slate-400">Áreas de interés (Selecciona las que apliquen)</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label class="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary">
                            <span class="text-sm">Apoyo Académico</span>
                        </label>
                        <label class="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary">
                            <span class="text-sm">Deporte y Convivencia</span>
                        </label>
                        <label class="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary">
                            <span class="text-sm">Cultura y Artes</span>
                        </label>
                        <label class="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary">
                            <span class="text-sm">Infraestructura</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-400">¿Cómo te gustaría ayudar?</label>
                    <textarea rows="4" placeholder="Cuéntanos un poco sobre tus habilidades y disponibilidad..." class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                </div>

                <div class="pt-4 text-center">
                    <button type="submit" class="w-full md:w-auto px-12 bg-yellow-400 hover:bg-yellow-500 text-primary font-black py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] uppercase tracking-widest text-sm">
                        Enviar solicitud
                    </button>
                    <p class="text-[10px] text-slate-400 italic mt-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl leading-relaxed">
                        Al unirte, recibirás un correo de bienvenida para coordinar tu primer día de colaboración. <br>
                        <strong>¡Gracias por ser parte de la familia Gonzaga!</strong>
                    </p>
                </div>
            </form>
        </div>
    </div>
</section>
```

### Bloque 4: Voluntariado en Acción
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-white dark:bg-slate-900 w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-5xl font-extrabold text-primary dark:text-white mb-2 font-display uppercase tracking-tight italic">
                Voluntariado en Acción</h3>
            <p class="text-slate-500 font-light italic">Conoce el impacto de nuestra red en la comunidad</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
            <!-- Cards de Noticias -->
            <div class="group cursor-pointer">
                <div class="relative h-64 rounded-3xl overflow-hidden shadow-xl mb-6">
                    <img src="assets/instagram1.png" alt="Jornada San José" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Voluntariado</span>
                </div>
                <h4 class="text-xl font-bold text-primary dark:text-blue-400 mb-3 leading-tight group-hover:text-secondary transition-colors">
                    Nueva jornada de apoyo escolar en San José</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Más de 50 estudiantes recibieron tutorías personalizadas por parte de nuestra red.</p>
            </div>

            <div class="group cursor-pointer text-center">
                <div class="relative h-64 rounded-3xl overflow-hidden shadow-xl mb-6">
                    <img src="assets/instagram2.png" alt="Torneo Deportivo" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Voluntariado</span>
                </div>
                <h4 class="text-xl font-bold text-primary dark:text-blue-400 mb-3 leading-tight group-hover:text-secondary transition-colors text-center">
                    Éxito en el torneo deportivo inter-barrial</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed text-center">
                    Nuestros voluntarios lideraron las categorías de fútbol y atletismo juvenil.</p>
            </div>

            <div class="group cursor-pointer">
                <div class="relative h-64 rounded-3xl overflow-hidden shadow-xl mb-6">
                    <img src="assets/instagram3.png" alt="Mantenimiento Verdes" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Voluntariado</span>
                </div>
                <h4 class="text-xl font-bold text-primary dark:text-blue-400 mb-3 leading-tight group-hover:text-secondary transition-colors">
                    Mantenimiento de áreas verdes comunitarias</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Voluntarios de infraestructura recuperaron espacios de recreación para el colegio.</p>
            </div>
        </div>

        <div class="text-center">
            <a href="actualidad.html" class="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all group">
                Ver más noticias de impacto
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
        </div>
    </div>
</section>
```
