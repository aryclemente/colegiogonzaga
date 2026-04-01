const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\Users\\user\\Desktop\\Colegio Gonzaga - Maracaibo\\Gonzaga\\Propuesta';

const desktopComunidad = `          <div class="nav-dropdown group h-full flex items-center relative">
            <a class="hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-default py-2"
              href="#">Comunidad
              <span class="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform">expand_more</span>
            </a>
            <div class="dropdown-content absolute top-full left-0 w-64 bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 rounded-b-xl py-4">
              <ul class="space-y-1">
                <li><a class="block px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">EDUCA</a></li>
                <li><a class="block px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">Correo Electrónico</a></li>
                <li><a class="block px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" href="#">Asistencia</a></li>
              </ul>
            </div>
          </div>
`;

const mobileComunidad = `          <!-- Comunidad -->
          <li>
            <button class="mobile-dropdown-btn w-full flex items-center justify-between py-2 text-lg font-bold text-slate-800 dark:text-white" data-target="m-comunidad">
              Comunidad
              <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
            </button>
            <div id="m-comunidad" class="hidden pl-4 mt-2 space-y-3 border-l-2 border-slate-100 dark:border-slate-800">
              <a href="#" class="block py-1 text-slate-600 dark:text-slate-400 hover:text-primary">EDUCA</a>
              <a href="#" class="block py-1 text-slate-600 dark:text-slate-400 hover:text-primary">Correo Electrónico</a>
              <a href="#" class="block py-1 text-slate-600 dark:text-slate-400 hover:text-primary">Asistencia</a>
            </div>
          </li>
`;

let filesUpdated = 0;

try {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
      const filepath = path.join(dirPath, file);
      let content = fs.readFileSync(filepath, 'utf8');

      const posActualidadDesktop = content.indexOf('href="actualidad.html"');
      if (posActualidadDesktop !== -1) {
        const segmentStart = Math.max(0, posActualidadDesktop - 500);
        const segment = content.substring(segmentStart, posActualidadDesktop);
        
        if (!segment.includes('Comunidad')) {
          // Replace desktop pattern
          const desktopActualidadPattern = /(\s*<a[^>]*href="actualidad\.html"[^>]*>Actualidad<\/a>)/;
          content = content.replace(desktopActualidadPattern, desktopComunidad + '$1');

          // Replace mobile pattern
          const mobileActualidadPattern = /(\s*<!--\s*Actualidad\s*-->\s*<li>\s*<a[^>]*href="actualidad\.html"[^>]*>Actualidad<\/a>)/;
          content = content.replace(mobileActualidadPattern, mobileComunidad + '$1');

          fs.writeFileSync(filepath, content, 'utf8');
          filesUpdated++;
          console.log(`Updated ${file}`);
        }
      }
    }
  });

  console.log(`Total files updated: ${filesUpdated}`);
} catch (err) {
  console.error("Error reading directory or files:", err);
}
