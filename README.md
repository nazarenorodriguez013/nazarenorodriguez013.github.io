# Nazareno Rodríguez — Portfolio

**🔗 Sitio en vivo: [nazarenorodriguez013.github.io](https://nazarenorodriguez013.github.io)**

Portafolio de **Nazareno Rodríguez**, desarrollador full stack de Concordia, Entre Ríos, Argentina. El sitio presenta los proyectos **Glamdo**, **Quiosquito** y **Zylos ERP** con capturas y videos reales de cada uno, además de su stack tecnológico y vías de contacto.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Para validar los tipos, ejecutar `pnpm check`. Para preparar una compilación de producción, ejecutar `pnpm build`.

## Stack

React, TypeScript, Vite y Tailwind CSS. Las imágenes y videos (logos, capturas y demos reales de cada proyecto) viven en `client/public/` y se sirven directamente desde el sitio.

## Despliegue

El push a `main` dispara `.github/workflows/deploy.yml`, que compila el sitio y publica el resultado en la rama `gh-pages`. En **Settings → Pages** de este repo, la fuente debe estar en **Deploy from a branch → `gh-pages` → / (root)**.
