// static import (executed eagerly)
// import { uuid } from './modules/uuid.js';

// dynamic import (executed lazily)
function loadComponent() {
    return import('./modules/uuid.js');
}

export async function run() {
    console.log('main.js run()');
    const component = await loadComponent();
    

}

