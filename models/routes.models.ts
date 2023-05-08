export const Rutas = {
    HOME:{
        name: 'INICIO',
        path: '/'
    },
    CONTACTO:{
        name: 'CONTACTO',
        path: '/contacto'
    },
    CATALOGO:{
        name: 'CATALOGO',
        path: '/catalogo'
    },
}

export interface Ruta {
    name:string,
    path:string
}