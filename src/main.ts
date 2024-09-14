import './style.css'
//import './temas-ts/01-tipos-bas.ts'
//import './temas-ts/02-interfaz-arre.ts'
//import './temas-ts/03-funciones.ts'
//import './temas-ts/04-desestructuracion-obj-arre.ts'
//import './temas-ts/05-desestructura-funciones.ts'
//import './src/temas-ts/06-import-export.ts'
//import '/src/temas-ts/07-classes.ts'
//import '/src/temas-ts/08-herencia.ts'
//import '/src/temas-ts/distancia-entre-dos-puntos.ts'
import '/src/temas-ts/seber-si-es-un-triangulo.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
