# Eurotalento — web estática (HTML + CSS + JS)

Versión de la web lista para subir a lucushost. Sin React, sin compilación:
son archivos que se copian tal cual y funcionan.

## Contenido

```
index.html        Página principal (una sola página, ES/EN)
privacidad.html   Política de privacidad (ES/EN)
gracias.html      Página de agradecimiento tras enviar el formulario
contacto.php      Procesa el formulario y envía el aviso a hola@eurotalento.com
styles.css        Todos los estilos
script.js         Idioma ES/EN, menú móvil, animaciones y envío del formulario
assets/           Logo de Eurotalento y logos de clientes
robots.txt        Indicaciones para buscadores
sitemap.xml       Mapa del sitio
```

## Cómo subirlo a lucushost

1. Entra en el **cPanel** de lucushost → **Administrador de archivos**.
2. Abre la carpeta **`public_html`**.
3. Sube **todo el contenido de esta carpeta** (incluida la carpeta `assets`)
   dentro de `public_html`, al mismo nivel.
   - Si subes el ZIP, usa *Cargar* y luego *Extraer* en `public_html`.
4. Abre `https://eurotalento.com` y comprueba que se ve bien.

Nada más. El idioma ES/EN, el menú y las animaciones funcionan sin configuración.

## Formulario de contacto

Ya está conectado a `contacto.php`, que envía el aviso a **hola@eurotalento.com**
usando el correo de tu propio hosting. No hace falta configurar DNS ni servicios externos.

Antes de darlo por bueno, abre `contacto.php` y revisa las tres primeras líneas de configuración:

- `$DESTINO` → `hola@eurotalento.com` (dónde quieres recibir los mensajes)
- `$REMITENTE` → una cuenta **de tu dominio**, por ejemplo `web@eurotalento.com`.
  Créala en cPanel → *Cuentas de correo*. Mejora mucho la entrega y evita el spam.
- `$GRACIAS` → `/gracias.html` (página a la que va quien envíe sin JavaScript)

Después haz una prueba real: rellena el formulario en la web y revisa la bandeja
de `hola@eurotalento.com` (mira también en spam la primera vez).

### Si no llega ningún correo

Algunos hostings tienen desactivado el envío directo desde PHP. En ese caso, crea
la cuenta `web@eurotalento.com` en cPanel y dímelo: cambio el script a envío SMTP
autenticado por `smtp.eurotalento.com`, que entrega mejor. Tampoco requiere tocar DNS.

## Cómo editar textos

- **Textos en español e inglés**: están en `script.js`, en el bloque `DICT`
  (arriba del archivo). Cada texto aparece dos veces: `es:` y `en:`.
  El español también está escrito en `index.html` para que los buscadores lo lean;
  si cambias una frase, cámbiala en los dos sitios.
- **Colores**: en `styles.css`, en el bloque `:root` del principio
  (verde `--sage-deep`, terracota `--rust`, etc.).
- **Logos de clientes**: sustituye los archivos de `assets/clientes/`
  manteniendo el mismo nombre, o edita la lista de la sección "CLIENTES" en `index.html`.

## Notas

- Las direcciones de las metaetiquetas (`og:url`, `canonical`, `sitemap.xml`)
  apuntan a `https://eurotalento.com`. Si el dominio final es otro, cámbialas.
- El sitio funciona también sin JavaScript: se ve en español y el formulario
  se envía recargando la página hacia `gracias.html`.
