// Este script clona el contenido de la carpetta apps/template, symlinkeando las fuentes en /public en base a las fuentes que hay en /packages/catalog-core/src/fonts. 
// Además, cambia automáticamente el nombre en el package.json de la carpeta clonada al nombre que le paso como argumento en el comando.
import { cpSync, symlinkSync, readFileSync, writeFileSync } from "node:fs";

const name = process.argv[2];
if (!name) throw new Error("Uso: pnpm new-catalog <nombre>");

const dest = `apps/${name}`;
cpSync("apps/template", dest, { recursive: true });
symlinkSync("../../../packages/catalog-core/src/fonts", `${dest}/public/fonts`, "junction");

const pkgPath = `${dest}/package.json`;
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
pkg.name = name;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");