import { Servicios } from "../pages/Servicios"
import { Contacto } from "../pages/Contacto"
import { Productos } from "../pages/Productos"
import { Nosotros } from "../pages/Nosotros"
import { Home } from "../pages/Home"

export let routes = [
 
    {
        path: '/Home',
        element:<Home />
    },
    {
        path: '/',
        element:<Home />
    },
    {
        path: '/Servicios',
        element:<Servicios />
    },
    {
        path: '/Contacto',
        element:<Contacto />
    },
    {
        path: '/Productos',
        element:<Productos />
    },
    {
        path: '/Nosotros',
        element:<Nosotros />
    }

]