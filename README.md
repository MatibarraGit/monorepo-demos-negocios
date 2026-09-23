# Monorepo de Catálogos para demos a Negocios

Monorepo (pnpm) con una plantilla reutilizable de catálogo online, pensada para generar rápidamente sitios de demo/presentación para clientes (comercios, importadores, etc.).

## 🎯 Objetivo

Este repo sirve como base para mostrarle a clientes potenciales cómo se vería su presencia online, sin tener que armar cada sitio desde cero.

Actualmente el flujo es:
1. Se duplica el repo completo por cliente.
2. Se modifican `globals.css`, imágenes y datos del negocio (productos, contacto, branding).
3. Se despliega como demo.

## 📦 Estructura

```
.
├── apps/
│   └── [catalog_name]/          # App Next.js — el catálogo online en sí
└── packages/
    ├── catalog-core/       # Componentes compartidos entre catálogos
    ├── eslint-config/      # Configuración de ESLint compartida
    └── typescript-config/  # Configuración de TypeScript compartida
```

## 🛠️ Stack

- **Monorepo:** pnpm workspaces
- **Framework:** Next.js

## 🚀 Uso

```bash
# Instalar dependencias
pnpm install

# Levantar la app de catálogo en modo desarrollo
pnpm --filter [catalog_name] dev
```

> Ajustá los comandos según los scripts definidos en cada `package.json` si difieren de estos.

## 📄 Licencia

Privado / uso interno.