import { Outlet, Link } from "react-router-dom";
import "../../styles/dashboard.css"

function DashboardLayout() {

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <h2>Tata Origen</h2>
                <nav>
                    <Link to="/dashboard">
                        Inicio
                    </Link>

                    <Link to="/dashboard/productos">
                        Productos
                    </Link>

                    <Link to="/dashboard/ingredientes">
                        Ingredientes
                    </Link>

                    <Link to="/dashboard/recetas">
                        Recetas
                    </Link>

                    <Link to="/dashboard/calculadora">
                        Calculadora
                    </Link>

                    <Link to="/dashboard/cotizaciones">
                        Cotizaciones
                    </Link>

                    <Link to="/dashboard/configuracion">
                        Configuración
                    </Link>
                </nav>
            </aside>

            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;