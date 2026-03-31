# Bloques HTML de Elementor: `historia.html`

Para garantizar un diseño idéntico sin dependencias complejas, usaremos **Widgets HTML** de Elementor por cada sección. *(Recuerda que debes modificar manualmente las rutas `src="assets/..."` por las URLs reales de los medios en tu WordPress).*

## ⚠️ CSS Global
Antes de comenzar, pega este pequeño bloque de estilos CSS en **Apariencia > Personalizar > CSS Adicional** o en tu hoja de estilos principal:

```css
.hero-maroon { background: linear-gradient(to bottom, #8b1a1a, #5a1111); }
.polaroid { background: white; padding: 1rem 1rem 3rem 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transform: rotate(-2deg); transition: transform 0.3s ease; }
.polaroid:hover { transform: rotate(0deg) scale(1.05); }
.timeline-dot::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #e2e8f0; transform: translateX(-50%); z-index: -1; }
.dark .timeline-dot::before { background: #334155; }
```

---

### Bloque 1: Hero (Escribimos Historia)
Copia y pega en un Widget HTML:

```html
<section class="relative h-[70vh] flex items-center overflow-hidden w-full">
    <div class="absolute inset-0">
        <img src="assets/slide1.jpeg" alt="Campus Colegio Gonzaga" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10 w-full">
        <div class="max-w-3xl">
            <h2 class="text-5xl md:text-7xl font-serif italic text-white mb-6 leading-[1.1] drop-shadow-2xl">
                Escribimos historia<br />
                desde 1945
            </h2>
            <p class="text-xl md:text-2xl font-light text-white/95 max-w-xl leading-relaxed drop-shadow-xl">
                Ocho décadas de compromiso, fe y formación integral en nuestra región.
            </p>
        </div>
    </div>
</section>
```

### Bloque 2: Línea de Tiempo / Sedes
Copia y pega en un Widget HTML:

```html
<section class="pt-10 pb-24 bg-white dark:bg-slate-900 overflow-hidden w-full">
    <div class="container mx-auto px-6">
        <!-- Sede 1: Delicias -->
        <div class="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div class="order-2 md:order-1">
                <span class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
                    1945 - 1965
                </span>
                <h3 class="text-4xl md:text-5xl font-serif italic text-primary dark:text-white mb-6">
                    El Inicio de un Sueño
                </h3>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    Fundamos nuestra primera sede en el sector Las Delicias, marcando el nacimiento de una propuesta educativa jesuita que pronto se convirtió en un referente para Maracaibo. En estos primeros 20 años, sembramos las bases de la excelencia y la espiritualidad que hoy, ocho décadas después, siguen definiendo nuestra identidad.
                </p>
                <a href="#" class="inline-flex items-center gap-2 text-secondary font-bold hover:translate-x-2 transition-transform">
                    <span class="material-symbols-outlined rounded-full border-2 border-secondary p-1">play_arrow</span>
                    Ver Testimonio: Primeros Alumnos
                </a>
            </div>
            <div class="order-1 md:order-2 flex justify-center py-12 md:py-0">
                <div class="flex flex-col sm:flex-row gap-6 items-center">
                    <div class="polaroid -rotate-3 hover:rotate-0 transition-transform">
                        <img src="assets/raicesdelicias.jpeg" alt="Delicias 1" class="w-44 h-56 md:w-56 md:h-64 object-cover" />
                        <p class="mt-4 font-serif italic text-slate-500 text-center text-xs">Aulas de Delicias</p>
                    </div>
                    <div class="polaroid rotate-3 hover:rotate-0 transition-transform md:mt-12">
                        <img src="assets/raicesdelicias2.jpeg" alt="Delicias 2" class="w-44 h-56 md:w-56 md:h-64 object-cover grayscale" />
                        <p class="mt-4 font-serif italic text-slate-500 text-center text-xs">Primera Banda de Guerra</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sede 2: El Milagro -->
        <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mb-32">
            <div class="flex justify-center">
                <div class="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
                    <img src="assets/slide1.jpeg" alt="El Milagro" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div class="absolute inset-0 bg-primary/40 flex items-center justify-center">
                        <button class="w-24 h-24 bg-white text-primary rounded-full shadow-2xl hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-5xl">play_arrow</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                    1966 - 1975
                </span>
                <h3 class="text-4xl md:text-5xl font-serif italic text-primary dark:text-white mb-6">
                    Crecemos y nos consolidamos
                </h3>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    Nuestra llegada a la sede de El Milagro respondió a la necesidad de expandir horizontes. Este campus más moderno nos permitió ampliar la oferta académica y consolidar la formación ignaciana, fortaleciendo el vínculo con las familias que confiaron en nuestro modelo educativo durante una década de gran crecimiento.
                </p>
                <a href="#" class="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:translate-x-2 transition-transform">
                    <span class="material-symbols-outlined rounded-full border-2 border-primary dark:border-blue-400 p-1">play_arrow</span>
                    Memorias de la Coeducación
                </a>
            </div>
        </div>

        <!-- Sede 3: Cañada Honda -->
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <span class="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
                    1976 - PRESENTE
                </span>
                <h3 class="text-4xl md:text-5xl font-serif italic text-primary dark:text-white mb-6">
                    Impacto en nuestra comunidad
                </h3>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    Desde 1976, nuestra sede en Cañada Honda representa la madurez de nuestra misión. Aquí, el Gonzaga se integra profundamente con su entorno, demostrando que la verdadera excelencia solo es completa cuando se traduce en un servicio social activo y en un compromiso inquebrantable con el desarrollo de nuestra comunidad.
                </p>
                <a href="#" class="inline-flex items-center gap-2 text-green-600 font-bold hover:translate-x-2 transition-transform">
                    <span class="material-symbols-outlined rounded-full border-2 border-green-600 p-1">forum</span>
                    Voces de Cañada Honda
                </a>
            </div>
            <div class="flex gap-4">
                <img src="assets/rectores.jpeg" alt="Cañada Honda 1" class="w-1/2 aspect-[4/5] object-cover rounded-3xl shadow-xl hover:-translate-y-2 transition-transform" />
                <img src="assets/beca1.png" alt="Cañada Honda 2" class="w-1/2 aspect-[4/5] object-cover rounded-3xl shadow-xl mt-12 hover:-translate-y-2 transition-transform" />
            </div>
        </div>
    </div>
</section>
```

### Bloque 3: Nuestro Equipo (Rectoral y Gonzaga)
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-slate-50 dark:bg-slate-800/50 overflow-hidden w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-20">
            <h2 class="text-5xl font-extrabold text-primary dark:text-white mb-6">
                Nuestro Equipo
            </h2>
            <p class="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Conozca a los miembros de nuestro equipo y descubra cómo su experiencia y dedicación respaldan nuestra misión.
            </p>
        </div>

        <!-- Equipo Rectoral -->
        <div class="mb-24">
            <h3 class="text-2xl font-bold text-slate-800 dark:text-white text-center mb-12">Equipo Rectoral</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Rector Card 1 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center lg:items-start lg:flex-row gap-6">
                    <img src="assets/LogoColegioGonzaga.png" alt="Eneida Tapia" class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl" />
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-1">Eneida Tapia</h4>
                        <p class="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Rector</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Magíster en Gerencia Educativa con 20 años de experiencia.</p>
                        <div class="flex gap-4">
                            <a href="mailto:contacto@colegiogonzaga.edu.ve" class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">mail</span></a>
                        </div>
                    </div>
                </div>

                <!-- Rector Card 2 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center lg:items-start lg:flex-row gap-6">
                    <img src="assets/LogoColegioGonzaga.png" alt="P. Javier Alvis, S.J." class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl" />
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-1">P. Javier Alvis, S.J.</h4>
                        <p class="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Director Pastoral</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Guía espiritual y pilar de los valores ignacianos en la institución.</p>
                        <div class="flex gap-4">
                            <a href="mailto:contacto@colegiogonzaga.edu.ve" class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">mail</span></a>
                        </div>
                    </div>
                </div>

                <!-- Rector Card 3 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center lg:items-start lg:flex-row gap-6">
                    <img src="assets/LogoColegioGonzaga.png" alt="Diana Galbán" class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl" />
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-1">Diana Galbán</h4>
                        <p class="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Coordinadora de Eventos</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Especialista en Planificación Estratégica y Comunicación.</p>
                        <div class="flex gap-4">
                            <a href="mailto:contacto@colegiogonzaga.edu.ve" class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">mail</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Equipos Gonzaga -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <!-- Team 1 -->
            <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all duration-300">
                <div class="rounded-[2rem] overflow-hidden aspect-video mb-6">
                    <img src="assets/administrativos.jpeg" alt="Cuerpo Docente" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="px-2 pb-4">
                    <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Equipo Administrativo</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Gestión y eficiencia para el soporte institucional.</p>
                </div>
            </div>
            <!-- Team 2 -->
            <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all duration-300">
                <div class="rounded-[2rem] overflow-hidden aspect-video mb-6">
                    <img src="assets/mantenimiento.jpeg" alt="Equipo Mantenimiento" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="px-2 pb-4">
                    <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Equipo Mantenimiento</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Cuidando nuestro hogar común con dedicación.</p>
                </div>
            </div>
            <!-- Team 3 -->
            <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all duration-300">
                <div class="rounded-[2rem] overflow-hidden aspect-video mb-6">
                    <img src="assets/profesoresmediageneral.jpeg" alt="Equipo Docente" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="px-2 pb-4">
                    <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Equipo Docente Media General</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Formadores de líderes comprometidos con el servicio.</p>
                </div>
            </div>
            <!-- Team 4 -->
            <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all duration-300">
                <div class="rounded-[2rem] overflow-hidden aspect-video mb-6">
                    <img src="assets/profesoresprimaria.jpeg" alt="Equipo Primaria" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="px-2 pb-4">
                    <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Equipo Docente Primaria</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Sentando las bases de la excelencia desde la infancia.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Bloque 4: Exhibición de Egresados
Copia y pega en un Widget HTML:

```html
<section class="py-24 bg-primary text-white overflow-hidden relative w-full">
    <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h3 class="text-4xl md:text-5xl font-serif italic mb-6">
                    Exhibición de Egresados
                </h3>
                <p class="text-lg opacity-80 leading-relaxed mb-10">
                    Nuestra historia vive en cada uno de nuestros graduados.
                </p>
                
                <!-- Cierre Histórico -->
                <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mt-12">
                    <div class="flex items-start gap-4 mb-6">
                        <span class="material-symbols-outlined text-secondary text-3xl">volunteer_activism</span>
                        <div>
                            <h4 class="font-bold text-xl">Tú eres parte de este legado</h4>
                            <p class="opacity-70 text-sm">"Ayúdanos a asegurar el futuro de los nuevos estudiantes con una donación."</p>
                        </div>
                    </div>
                    <div class="text-center mt-6">
                        <a href="financiamiento.html" class="inline-block bg-secondary hover:bg-red-700 text-white font-bold py-3 px-10 rounded-full shadow-xl transition-all hover:scale-105">
                            Donar Aquí
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="relative w-full aspect-square mt-12 overflow-hidden rounded-2xl group">
                    <img src="assets/galeria.jpeg" alt="Promoción 2023" class="w-full h-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute bottom-4 left-4 right-4 text-center bg-white border border-slate-200 text-primary py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold shadow-lg">Promoción 2023 / 2022</div>
                </div>
                <div class="relative w-full aspect-square overflow-hidden rounded-2xl group">
                    <img src="assets/galeria2.jpeg" alt="Promoción 2021" class="w-full h-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute bottom-4 left-4 right-4 text-center bg-white border border-slate-200 text-primary py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold shadow-lg">Promoción 2021 / 2020</div>
                </div>
                <div class="relative w-full aspect-square overflow-hidden rounded-2xl group">
                    <img src="assets/galeria3.jpg" alt="Promoción 2019" class="w-full h-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute bottom-4 left-4 right-4 text-center bg-white border border-slate-200 text-primary py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold shadow-lg">Promoción 2019 / 2018</div>
                </div>
                <div class="relative w-full aspect-square overflow-hidden rounded-2xl group">
                    <img src="assets/instagram4.png" alt="Otras Promociones" class="w-full h-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute bottom-4 left-4 right-4 text-center bg-white border border-slate-200 text-primary py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold shadow-lg">Catálogo Histórico</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Decorative blur -->
    <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
</section>
```
