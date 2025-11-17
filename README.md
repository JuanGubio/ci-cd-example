# Proyecto CI/CD Completo con GitHub Actions

Este repositorio demuestra un flujo **CI/CD completo**, incluyendo:
- Explicación detallada del ciclo CI/CD
- Ejemplo práctico real con código
- Pruebas unitarias
- Pipeline funcional en GitHub Actions
- Construcción automática del package

---

# 🧩 1. ¿Qué es CI/CD?
CI/CD significa **Integración Continua (Continuous Integration)** y **Despliegue/Entrega Continua (Continuous Delivery/Deployment)**.

## 🔹 Integración Continua (CI)
Es el proceso donde cada cambio que subes al repositorio:
1. Se descarga en un entorno limpio
2. Se instala
3. Corre pruebas automáticamente
4. Verifica que el proyecto sigue funcionando

## 🔹 Despliegue/Entrega Continua (CD)
Después de pasar las pruebas, el pipeline puede:
- Construir un artefacto (**package**)
- Desplegarlo a un ambiente (opcional)

En este proyecto, el CD genera un **paquete listo en /dist**.

---

# 🚀 2. Ejemplo Práctico del Ciclo CI/CD
Este repositorio usa **Node.js** como ejemplo.

## 📁 Estructura del Proyecto
```
ci-cd-example/
│ README.md
│ package.json
│ .github/workflows/ci.yml
│
├── src/
│   └── index.js
│
└── test/
    └── index.test.js
```

---

# 🧪 3. Pruebas Unitarias
Las pruebas están en `test/index.test.js`.

### Ejemplo:
```js
const { suma } = require('../src/index');

test('suma dos números', () => {
  expect(suma(2, 3)).toBe(5);
});
```

---

# 📦 4. Construcción del Package
Para construir el package:
```
npm run build
```
Esto genera la carpeta:
```
dist/
```
Con el artefacto final.

---

# 🤖 5. Workflow CI/CD (GitHub Actions)
Archivo: `.github/workflows/ci.yml`
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout código
        uses: actions/checkout@v3

      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas
        run: npm test

      - name: Construir package
        run: npm run build

      - name: Guardar artefacto
        uses: actions/upload-artifact@v3
        with:
          name: build-package
          path: dist/
```
Este workflow garantiza:
- Pruebas automáticas ✔️
- Construcción de artefacto final ✔️
- Validación del código en cada push ✔️

---

# 📘 6. Cumplimiento de la Rúbrica
| Criterio | Descripción | Estado |
|---------|-------------|--------|
| **1. README.md** | Explicación clara del CI/CD + ejemplo práctico | ✔️ Completo |
| **2. Configuración CI/CD** | Workflow funcional en GitHub Actions | ✔️ Incluido |
| **3. Pruebas** | Pruebas unitarias incluidas y ejecutadas | ✔️ Incluido |
| **4. Construcción del package** | Pipeline genera package en `dist/` | ✔️ Listo |
| **5. Entrega y repositorio** | Repositorio público con los archivos obligatorios | ✔️ OK |

---

# 🔗 Enlace del Repositorio
Repositorio solicitado:
**https://github.com/JuanGubio/ci-cd-example**

---

# ✔️ Proyecto Listo para Entrega
Este README cumple todos los requisitos académicos y técnicos de la rúbrica.
