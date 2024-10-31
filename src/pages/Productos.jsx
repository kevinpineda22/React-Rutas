import '../pages/Productos.css';

const Productos = () => {
    return (
        <div className="productos-container">
            <h1>Productos</h1>
            <div className="imagenes-container">
                <img src="/aseo2.png" alt="Producto 1" className="producto-imagen" />
                <img src="/aseo1.png" alt="Producto 2" className="producto-imagen" />
                <img src="/aseo3.png" alt="Producto 3" className="producto-imagen" />
                <img src="/aseo4.png" alt="Producto 4" className="producto-imagen" />
                <img src="/Group 1.png" alt="Producto 5" className="producto-imagen" />
            </div>
        </div>
    );
};

export { Productos };
