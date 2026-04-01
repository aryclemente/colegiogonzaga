import os
import re

dir_path = r'C:\Users\user\Desktop\Colegio Gonzaga - Maracaibo\Gonzaga\Propuesta'

desktop_comunidad = """          <div class="nav-dropdown group h-full flex items-center relative">
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
"""

mobile_comunidad = """          <!-- Comunidad -->
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
"""

files_updated = 0
for file in os.listdir(dir_path):
    if file.endswith('.html') and file != 'index.html':
        filepath = os.path.join(dir_path, file)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Ensure we haven't already added Comunidad near Actualidad
        pos_actualidad_desktop = content.find('href="actualidad.html"')
        if pos_actualidad_desktop != -1:
            segment = content[max(0, pos_actualidad_desktop-500):pos_actualidad_desktop]
            if "Comunidad" not in segment:
                desktop_actualidad_pattern = r'(\s*<a[^>]*href="actualidad\.html"[^>]*>Actualidad</a>)'
                content = re.sub(desktop_actualidad_pattern, desktop_comunidad + r'\1', content, count=1)
                
                mobile_actualidad_pattern = r'(\s*<!--\s*Actualidad\s*-->\s*<li>\s*<a[^>]*href="actualidad\.html"[^>]*>Actualidad</a>\s*</li>)'
                content = re.sub(mobile_actualidad_pattern, mobile_comunidad + r'\1', content, count=1)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_updated += 1
                print(f"Updated {file}")
print(f"Total files updated: {files_updated}")
