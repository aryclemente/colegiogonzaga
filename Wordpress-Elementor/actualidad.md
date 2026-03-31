# Bloques HTML de Elementor: `actualidad.html`

Estos bloques están diseñados para pegarse en **Widgets HTML** dentro de Elementor, asegurando una copia idéntica a nivel visual *(He removido las etiquetas `@apply` del código y las he insertado directamente en el HTML de las tarjetas de Instagram para que no tengas problemas de CSS en WordPress).*

## ⚠️ CSS Global
Pega este pequeño bloque de gradientes en **Apariencia > Personalizar > CSS Adicional**:

```css
.radio-gradient { background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); }
```

---

### Bloque 1: Hero (Radio Live Hub)
Copia y pega en un Widget HTML:

```html
<section class="radio-gradient min-h-[calc(100vh-72px)] flex flex-col justify-center py-12 relative overflow-hidden w-full">
    <!-- Decorative circles -->
    <div class="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    <div class="absolute bottom-10 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10 w-full">
        <div class="text-center mb-6">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Actualidad & Radio Live Hub
            </h2>

            <!-- Radio Logo/Branding -->
            <div class="inline-flex flex-col items-center mb-6">
                <img src="assets/radiogonzaganegrofondo.png" alt="Radio Gonzaga" class="h-40 md:h-52 lg:h-60 xl:h-64 w-auto object-contain">
                <p class="text-white/80 uppercase tracking-[0.4em] text-[10px] font-semibold mt-2">Tu voz, nuestra historia</p>
            </div>
        </div>

        <!-- Audio Player Hub -->
        <div class="max-w-4xl mx-auto bg-blue-900/40 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- Play Button Container -->
                <div class="relative group">
                    <button class="w-24 h-24 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 group">
                        <span class="material-symbols-outlined text-5xl ml-1 fill-current group-hover:animate-pulse">play_arrow</span>
                    </button>
                </div>

                <div class="flex-1 text-center md:text-left">
                    <button class="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm mb-4 hover:bg-yellow-300 transition-colors uppercase tracking-wider">
                        Sintonizar Radio
                    </button>
                    <div class="text-white">
                        <h4 class="text-xl font-bold mb-1">En reproducción:</h4>
                        <p class="text-white/70 font-light italic">"Al aire ahora: “Buenos Días Gonzaga”"</p>
                        <p class="text-white/60 text-sm mt-1">Crónicas del 80° Aniversario: Un recorrido por nuestra memoria.</p>
                    </div>
                </div>

                <!-- Volume/Controls -->
                <div class="flex items-center gap-4 w-full md:w-48">
                    <span class="material-symbols-outlined text-white/70">volume_up</span>
                    <div class="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                        <div class="absolute inset-y-0 left-0 w-3/4 bg-yellow-400"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Bloque 2: Instagram Feed (Tiempo Real)
Copia y pega en un Widget HTML:

```html
<section class="min-h-screen flex flex-col justify-center py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 w-full">
    <div class="container mx-auto px-8 md:px-12 lg:px-20">
        <div class="text-center mb-10">
            <h3 class="text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-400 mb-4">
                Gonzaga en Tiempo Real
            </h3>
            <p class="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Síguenos en Instagram y vive el día a día de nuestra comunidad a través de cada historia.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Instagram Card 1 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl transition-all hover:-translate-y-2">
                <div class="p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center p-[2px]">
                        <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                            <img src="assets/LogoColegioGonzaga.png" class="w-4 h-4" alt="logo">
                        </div>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">@colegiogonzaga</span>
                </div>
                <div class="aspect-square bg-slate-100 overflow-hidden">
                    <img src="assets/instagram1.png" alt="IG Post" class="w-full h-full object-cover">
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-4 mb-3 text-slate-600 dark:text-slate-400">
                        <span class="material-symbols-outlined text-xl">favorite</span>
                        <span class="material-symbols-outlined text-xl">chat_bubble</span>
                        <span class="material-symbols-outlined text-xl">send</span>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                        <strong>@colegiogonzaga:</strong> Hoy celebramos el Día del Maestro, un pilar fundamental en nuestra misión de formar hombres y mujeres...
                    </p>
                </div>
            </div>

            <!-- Instagram Card 2 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl transition-all hover:-translate-y-2">
                <div class="p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center p-[2px]">
                        <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                            <img src="assets/LogoColegioGonzaga.png" class="w-4 h-4" alt="logo">
                        </div>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">@colegiogonzaga</span>
                </div>
                <div class="aspect-square bg-slate-100 overflow-hidden">
                    <img src="assets/instagram2.png" alt="IG Post" class="w-full h-full object-cover">
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-4 mb-3 text-slate-600 dark:text-slate-400">
                        <span class="material-symbols-outlined text-xl">favorite</span>
                        <span class="material-symbols-outlined text-xl">chat_bubble</span>
                        <span class="material-symbols-outlined text-xl">send</span>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                        <strong>@colegiogonzaga:</strong> Nuestros estudiantes de 5to año en sus prácticas de laboratorio de química. ¡La ciencia es divertida!
                    </p>
                </div>
            </div>

            <!-- Instagram Card 3 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl transition-all hover:-translate-y-2">
                <div class="p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center p-[2px]">
                        <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                            <img src="assets/LogoColegioGonzaga.png" class="w-4 h-4" alt="logo">
                        </div>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">@colegiogonzaga</span>
                </div>
                <div class="aspect-square bg-slate-100 overflow-hidden">
                    <img src="assets/instagram3.png" alt="IG Post" class="w-full h-full object-cover">
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-4 mb-3 text-slate-600 dark:text-slate-400">
                        <span class="material-symbols-outlined text-xl">favorite</span>
                        <span class="material-symbols-outlined text-xl">chat_bubble</span>
                        <span class="material-symbols-outlined text-xl">send</span>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                        <strong>@colegiogonzaga:</strong> Un momento de oración y reflexión en nuestra capilla institucional. Nunca solos.
                    </p>
                </div>
            </div>

            <!-- Instagram Card 4 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl transition-all hover:-translate-y-2">
                <div class="p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center p-[2px]">
                        <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                            <img src="assets/LogoColegioGonzaga.png" class="w-4 h-4" alt="logo">
                        </div>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">@colegiogonzaga</span>
                </div>
                <div class="aspect-square bg-slate-100 overflow-hidden">
                    <img src="assets/instagram4.png" alt="IG Post" class="w-full h-full object-cover">
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-4 mb-3 text-slate-600 dark:text-slate-400">
                        <span class="material-symbols-outlined text-xl">favorite</span>
                        <span class="material-symbols-outlined text-xl">chat_bubble</span>
                        <span class="material-symbols-outlined text-xl">send</span>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                        <strong>@colegiogonzaga:</strong> ¡Gritamos de emoción! Nuestro equipo de baloncesto logró el primer lugar en el torneo regional.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Bloque 3: Centro de Noticias
Copia y pega en un Widget HTML:

```html
<section class="min-h-screen flex flex-col justify-center py-20 bg-slate-50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800 w-full">
    <div class="container mx-auto px-8 md:px-12 lg:px-20">
        <div class="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
                <h3 class="text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-400">
                    Actualidad Gonzaga
                </h3>
                <p class="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl">
                    Entérate de lo que sucede hoy en nuestra comunidad y descubre cómo seguimos haciendo historia.
                </p>
            </div>
            <a href="#" class="text-primary dark:text-blue-400 font-bold hover:underline flex items-center gap-2 shrink-0">
                Ver todas las noticias
                <span class="material-symbols-outlined">arrow_forward</span>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Noticia 1 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div class="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src="assets/slide2.jpeg" alt="News Image" class="w-full h-full object-cover">
                </div>
                <div class="p-8 md:w-2/3 flex flex-col justify-center">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-display">25 Feb, 2026</p>
                    <h4 class="text-xl font-extrabold text-slate-800 dark:text-white mb-3">Logros Académicos en Olimpiadas de Matemáticas</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Nuestros estudiantes destacaron en la fase regional de las olimpiadas nacionales...</p>
                    <a href="#" class="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Leer más <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </div>
            </div>

            <!-- Noticia 2 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div class="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src="assets/deporte.png" alt="News Image" class="w-full h-full object-cover">
                </div>
                <div class="p-8 md:w-2/3 flex flex-col justify-center">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">18 Feb, 2026</p>
                    <h4 class="text-xl font-extrabold text-slate-800 dark:text-white mb-3">Éxito en el Torneo Deportivo Intercolegial</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Varias disciplinas lograron medallas de oro en el encuentro celebrado en Maracaibo...</p>
                    <a href="#" class="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Leer más <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </div>
            </div>

            <!-- Noticia 3 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div class="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src="assets/pastoral.jpeg" alt="News Image" class="w-full h-full object-cover">
                </div>
                <div class="p-8 md:w-2/3 flex flex-col justify-center">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">12 Feb, 2026</p>
                    <h4 class="text-xl font-extrabold text-slate-800 dark:text-white mb-3">Muestra fotográfica: "Miradas al Corazón del Zulia"</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Una exposición que resalta la belleza de nuestra región a través de la lente estudiantil...</p>
                    <a href="#" class="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Leer más <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </div>
            </div>

            <!-- Noticia 4 -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div class="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src="assets/propuestaeducativa.jpeg" alt="News Image" class="w-full h-full object-cover">
                </div>
                <div class="p-8 md:w-2/3 flex flex-col justify-center">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">05 Feb, 2026</p>
                    <h4 class="text-xl font-extrabold text-slate-800 dark:text-white mb-3">Innovación en el Aula: Nuevas Tecnologías Aplicadas</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">Implementamos nuevos recursos digitales para potenciar el aprendizaje significativo...</p>
                    <a href="#" class="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Leer más <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Bloque 4: Newsletter (CTA)
Copia y pega en un Widget HTML:

```html
<section class="py-10 relative overflow-hidden w-full">
    <div class="absolute inset-0 bg-primary skew-y-1 origin-right translate-y-4"></div>
    <div class="absolute inset-0 bg-primary/90"></div>

    <div class="container mx-auto px-6 relative z-10 text-center">
        <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Suscríbete a nuestro boletín
        </h3>
        <p class="text-white/80 text-sm mb-6 max-w-xl mx-auto">
            Recibe cada semana las noticias, eventos y logros de nuestra comunidad directamente en tu bandeja de entrada.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Tu correo electrónico" class="px-6 py-2.5 rounded-full text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full" required />
            <button class="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest whitespace-nowrap">
                Suscribirme
            </button>
        </div>
    </div>
</section>
```
