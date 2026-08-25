# Nazareno Rodríguez — Portfolio

Portafolio de **Nazareno Rodríguez**, desarrollador full stack de Concordia, Entre Ríos, Argentina. El sitio presenta los proyectos **Glamdo**, **Quiosquito** y **Zylos ERP**, además de su stack tecnológico y vías de contacto.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Para validar los tipos, ejecutar `pnpm check`. Para preparar una compilación de producción, ejecutar `pnpm build`.

## Stack

React, TypeScript, Vite y Tailwind CSS. Las imágenes y videos (logos, capturas y demos reales de cada proyecto) viven en `client/public/` y se sirven directamente desde el sitio.

## Despliegue

El push a `main` dispara `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages vía GitHub Actions. En **Settings → Pages** de este repo, la fuente debe estar configurada como **GitHub Actions** (no "Deploy from a branch").
