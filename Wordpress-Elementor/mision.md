# Bloques HTML de Elementor: `mision.html`

Dado que el sitio tiene integradas todas las clases de Tailwind CSS, si tienes habilitado Tailwind en tu WordPress, el método más rápido y exacto para recrear la página en Elementor es **arrastrar un "Widget HTML" (HTML personalizado)** por cada sección visual y pegar el código directamente sin tener que rearmar todo de cero.

## ⚠️ CSS Global
Antes de comenzar, pega este pequeño bloque de estilos CSS en **Apariencia > Personalizar > CSS Adicional** o en tu hoja de estilos principal. Es vital para las transiciones y degradados:

```css
.hero-gradient { background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)); }
.values-carousel-container { overflow: hidden; position: relative; }
.values-carousel { display: flex; transition: transform 0.5s ease-in-out; }
.gallery-dots .dot { width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: #cbd5e1; transition: all 0.3s; cursor: pointer; }
.gallery-dots .dot.active { background-color: #1e3a8a; width: 2rem; }
```

*(Recuerda modificar las partes que dicen `src="assets/..."` por los links reales de tus imágenes en WordPress).*

---

### Bloque 1: Hero (Nuestra Identidad)
Copia y pega todo dentro de un Widget HTML nuevo:

```html
<section class="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
    <div class="absolute inset-0">
        <img src="assets/2.png" alt="Nuestra Identidad" class="w-full h-full object-cover" />
        <div class="absolute inset-0 hero-gradient"></div>
    </div>
    <div class="relative z-10 text-center mt-12 w-full">
        <h2 class="text-5xl md:text-7xl font-serif italic text-white drop-shadow-2xl mb-4">
            Nuestra Identidad
        </h2>
        <p class="text-xl md:text-2xl text-white/90 font-light tracking-wide uppercase">
            Colegio Gonzaga Maracaibo
        </p>
    </div>
</section>
```

### Bloque 2: Misión y Visión
Copia y pega todo dentro de otro Widget HTML abajo del primero:

```html
<section class="relative -mt-24 z-20 pb-20 w-full">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
                <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span class="material-symbols-outlined text-4xl">favorite</span>
                </div>
                <h3 class="text-3xl font-extrabold text-primary dark:text-blue-400 mb-4">Misión</h3>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Formamos ciudadanos en la excelencia humana y académica, inspirados por la espiritualidad ignaciana para servir con amor a Venezuela.
                </p>
            </div>
            <div class="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
                <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span class="material-symbols-outlined text-4xl">visibility</span>
                </div>
                <h3 class="text-3xl font-extrabold text-primary dark:text-blue-400 mb-4">Visión</h3>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Somos la institución educativa referente que impulsa una ciudadanía crítica y comprometida. Desde la innovación y la excelencia, lideramos la reconciliación y construimos el futuro de nuestra región y de Venezuela.
                </p>
            </div>
        </div>
    </div>
</section>
```

### Bloque 3: Valores (Carrusel Automático)
Este bloque ya incluye sus scripts para funcionar por sí solo (Copia en Widget HTML):

```html
<section class="py-20 bg-secondary/90 dark:bg-red-900/40 w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16 px-4">
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">Nuestros Valores</h2>
            <p class="text-white/90 text-lg max-w-2xl mx-auto italic font-light">
                En el Gonzaga, convertimos nuestros principios en acciones que transforman a Venezuela:
            </p>
        </div>

        <div class="values-carousel-container relative">
            <div class="values-carousel flex gap-6" id="values-track">
                <div class="min-w-[300px] md:min-w-[350px] bg-primary rounded-3xl p-8 flex flex-col justify-center text-white">
                    <h4 class="text-2xl font-bold mb-4">Excelencia con sentido humano</h4>
                    <p class="italic text-lg font-light">Buscamos el mayor nivel académico sin olvidar nunca la dignidad de la persona.</p>
                </div>
                <div class="min-w-[300px] md:min-w-[350px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="assets/beca1.png" alt="Excelencia" class="w-full h-full object-cover" />
                </div>
                <div class="min-w-[300px] md:min-w-[350px] bg-primary rounded-3xl p-8 flex flex-col justify-center text-white">
                    <h4 class="text-2xl font-bold mb-4">Fe fraterna y profunda</h4>
                    <p class="italic text-lg font-light">Vivimos una fe abierta que nos une como hermanos y nos mueve a servir.</p>
                </div>
                <div class="min-w-[300px] md:min-w-[350px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="assets/instagram2.png" alt="Fe" class="w-full h-full object-cover" />
                </div>
                <div class="min-w-[300px] md:min-w-[350px] bg-primary rounded-3xl p-8 flex flex-col justify-center text-white">
                    <h4 class="text-2xl font-bold mb-4">Servicio que transforma</h4>
                    <p class="italic text-lg font-light">Nos comprometemos con acciones reales que cambian nuestro entorno y nuestra región.</p>
                </div>
                <div class="min-w-[300px] md:min-w-[350px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="assets/instagram4.png" alt="Servicio" class="w-full h-full object-cover" />
                </div>
                <div class="min-w-[300px] md:min-w-[350px] bg-primary rounded-3xl p-8 flex flex-col justify-center text-white">
                    <h4 class="text-2xl font-bold mb-4">Fidelidad creativa</h4>
                    <p class="italic text-lg font-light">Respondemos con innovación a los retos de hoy, manteniéndonos fieles a nuestra esencia ignaciana.</p>
                </div>
            </div>

            <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 translate-y-[-50%]">
                <button onclick="scrollValues(-1)" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center pointer-events-auto hover:bg-white/40 transition-all">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button onclick="scrollValues(1)" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center pointer-events-auto hover:bg-white/40 transition-all">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const track = document.getElementById('values-track');
            let scrollPos = 0;
            if(!window.scrollValuesSet) {
                window.scrollValuesSet = true;
                window.scrollValues = function(dir) {
                    if(!track) return;
                    const cardWidth = track.children[0].offsetWidth + 24;
                    scrollPos += dir * cardWidth;
                    const maxScroll = track.scrollWidth - track.offsetWidth;
                    if (scrollPos < 0) scrollPos = 0;
                    if (scrollPos > maxScroll) scrollPos = maxScroll;
                    track.style.transform = `translateX(-${scrollPos}px)`;
                };
            }
        });
    </script>
</section>
```

### Bloque 4: Video Modal (Esencia Gonzaga)
Copia y pega en un widget HTML:

```html
<section class="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
    <div class="absolute inset-0">
        <img src="assets/slide2.jpeg" alt="Comunidad Gonzaga" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-primary/60 dark:bg-slate-900/70"></div>
    </div>
    <div class="relative z-10 text-center container mx-auto px-6">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight mb-6">
            Vivimos la Esencia Gonzaga
        </h2>
        <p class="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto italic mb-10 drop-shadow-md">
            Te invitamos a un recorrido por los detalles que nos hacen únicos. En el Gonzaga, transformamos cada espacio en un lugar de fe, aprendizaje y servicio para Venezuela.
        </p>
        <button class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group mx-auto">
            <span class="material-symbols-outlined text-4xl md:text-6xl group-hover:scale-110 transition-transform">play_arrow</span>
        </button>
    </div>
</section>
```

### Bloque 5: Galería Histórica Automática
Copia y pega en un widget HTML:

```html
<section class="py-20 bg-white dark:bg-slate-900 w-full">
    <div class="container mx-auto px-6">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-blue-400 mb-4">
                Capturamos nuestra historia
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg font-light italic">
                Instantes reales que definen quiénes somos y cómo servimos a Venezuela.
            </p>
        </div>

        <div class="relative group">
            <div class="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[21/9]">
                <div class="flex h-full transition-transform duration-700 ease-in-out" id="gallery-track">
                    <div class="min-w-full relative h-full">
                        <img src="assets/deporte.png" alt="Comunidad" class="w-full h-full object-cover" />
                        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl">Iniciamos el viaje</div>
                    </div>
                    <div class="min-w-full relative h-full">
                        <img src="assets/administrativos.jpeg" alt="Comunidad" class="w-full h-full object-cover" />
                        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl">Crecemos juntos</div>
                    </div>
                    <div class="min-w-full relative h-full">
                        <img src="assets/pastoral.jpeg" alt="Comunidad" class="w-full h-full object-cover" />
                        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl">Buscamos la Excelencia</div>
                    </div>
                    <div class="min-w-full relative h-full">
                        <img src="assets/profesoresmediageneral.jpeg" alt="Comunidad" class="w-full h-full object-cover" />
                        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl">Vivimos la Espiritualidad</div>
                    </div>
                </div>
            </div>

            <button onclick="moveGallery(-1)" class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button onclick="moveGallery(1)" class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>

            <div class="flex justify-center gap-3 mt-8 gallery-dots">
                <div class="dot active" onclick="setGallery(0)"></div>
                <div class="dot" onclick="setGallery(1)"></div>
                <div class="dot" onclick="setGallery(2)"></div>
                <div class="dot" onclick="setGallery(3)"></div>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            if(!window.galleryInitSet) {
                window.galleryInitSet = true;
                let galleryIndex = 0;
                const galleryTrack = document.getElementById('gallery-track');
                const dots = document.querySelectorAll('.gallery-dots .dot');
                window.moveGallery = function(dir) {
                    if(!galleryTrack) return;
                    galleryIndex = (galleryIndex + dir + 4) % 4;
                    updateGallery();
                };
                window.setGallery = function(idx) {
                    galleryIndex = idx;
                    updateGallery();
                };
                function updateGallery() {
                    if(!galleryTrack) return;
                    galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
                    dots.forEach((dot, i) => {
                        if (i === galleryIndex) dot.classList.add('active');
                        else dot.classList.remove('active');
                    });
                }
                setInterval(() => { if(window.moveGallery) window.moveGallery(1); }, 8000);
            }
        });
    </script>
</section>
```

### Bloque 6: CTA Admisiones
Copia y pega en un widget HTML:

```html
<section class="pb-24 pt-12 bg-white dark:bg-slate-900 text-center w-full">
    <div class="container mx-auto px-6 max-w-3xl">
        <h3 class="text-3xl md:text-4xl font-extrabold text-primary dark:text-blue-400 mb-6 font-display">
            ¿Listos para ser parte de nuestra historia?
        </h3>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 font-light leading-relaxed italic">
            "Descubre las oportunidades de formación que tenemos para ti."
        </p>
        <a href="#" class="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-white hover:bg-red-700 rounded-full font-bold transition-all duration-500 group shadow-xl hover:shadow-secondary/40 text-center justify-center">
            <span class="text-lg">Ver Admisiones</span>
            <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </a>
    </div>
</section>
```
