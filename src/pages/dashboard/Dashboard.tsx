import {
    FaBoxOpen,
    FaCarrot,
    FaBookOpen,
    FaCalculator
} from "react-icons/fa";

function Dashboard() {
    return (
        <div className="dashboard-home">
            <h1>Bienvenida 👋</h1>
            <p>
                Panel administrativo de Tata Origen.
            </p>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <FaBoxOpen />
                    <h3>Productos</h3>
                    <span>0</span>
                </div>

                <div className="dashboard-card">
                    <FaCarrot />
                    <h3>Ingredientes</h3>
                    <span>0</span>
                </div>

                <div className="dashboard-card">
                    <FaBookOpen />
                    <h3>Recetas</h3>
                    <span>0</span>
                </div>

                <div className="dashboard-card">
                    <FaCalculator />
                    <h3>Cotizaciones</h3>
                    <span>0</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;