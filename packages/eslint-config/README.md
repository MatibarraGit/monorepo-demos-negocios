# `@turbo/eslint-config`

Collection of internal eslint configurations.

### Versiones de TypeScript y EsLint
Este repo usa "typescript": "~6.0.3", ya que "typescript-eslint": "^8.70.1" (que estoy usando en base.js) no soporta versiones de typescript más altas, versiones que son el compilador nativo de Microsoft y están reescritas en Go. 
El soporte recién está previsto para la versión 7.1 de TypeScript. Mientras tanto, tuve que bajar a la versión 6 (solo en este repo) para poder lintear correctamente con tseslint.
El resto de los repos deben declarar explícitamente su versión de typescript 7 explícitamente para evitar errores.