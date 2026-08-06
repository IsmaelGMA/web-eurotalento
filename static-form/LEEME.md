# Formulario de contacto para la web estática (lucushost / cPanel)

Sin DNS, sin registros NS, sin servicios externos. Solo PHP, que ya viene incluido en tu hosting.

## 1. Sube el archivo

Sube `contacto.php` a la carpeta pública de tu hosting (normalmente `public_html`),
al mismo nivel que tu `index.html`.

En `contacto.php` puedes ajustar arriba:

- `$DESTINO` → `hola@eurotalento.com` (donde te llegan los avisos)
- `$REMITENTE` → una dirección **de tu dominio**, p. ej. `web@eurotalento.com`
  (créala en cPanel → Cuentas de correo; mejora mucho la entrega)
- `$GRACIAS` → página a la que redirigir tras enviar (opcional)

## 2. Ajusta tu HTML

En tu formulario, pon `action` y `method`, y usa estos `name`:

```html
<form id="form-contacto" action="/contacto.php" method="POST">
  <input type="text"  name="nombre"   required>
  <input type="email" name="email"    required>
  <input type="text"  name="empresa">
  <input type="tel"   name="telefono">
  <textarea name="mensaje" required></textarea>

  <!-- Anti-spam: no lo rellenes ni lo quites -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <button type="submit">Enviar</button>
  <p id="form-estado" role="status"></p>
</form>
```

Así ya funciona sin JavaScript (recarga y redirige a la página de gracias).

## 3. (Opcional) Envío sin recargar la página

```html
<script>
  const form = document.getElementById('form-contacto');
  const estado = document.getElementById('form-estado');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const boton = form.querySelector('button[type="submit"]');
    boton.disabled = true;
    estado.textContent = 'Enviando…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        form.reset();
        estado.textContent = 'Gracias. Te responderemos muy pronto.';
      } else {
        estado.textContent = (data.errores && data.errores.join(' ')) ||
          'No se ha podido enviar. Escríbenos a hola@eurotalento.com.';
      }
    } catch {
      estado.textContent = 'No se ha podido enviar. Escríbenos a hola@eurotalento.com.';
    } finally {
      boton.disabled = false;
    }
  });
</script>
```

## 4. Prueba

Rellena el formulario en tu web y comprueba `hola@eurotalento.com`
(revisa también la carpeta de spam la primera vez).

## Si tu hosting tuviera `mail()` desactivado

En cPanel → *Cuentas de correo* crea `web@eurotalento.com` y dime la contraseña de
la cuenta: cambiamos el script a envío SMTP autenticado (`smtp.eurotalento.com`),
que además entrega mejor. No hace falta tocar DNS en ningún caso.
