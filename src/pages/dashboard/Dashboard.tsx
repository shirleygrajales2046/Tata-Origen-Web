function Dashboard() {
    return (
        <div className="dashboard-home">
            <h3>Dashboard Tata Origen</h3>

            <p>Bienvenida al panel administrativo de Tata Origen. </p>

            <div className="dashboard-card">
                <div className="dashboard-card">
                    <h2>Calculadora</h2>
                    <p>Calcula automáticamente el costo y precio de venta. </p>
                </div>

                <div className="dashboard-card">
                    <h2>Recetas</h2>
                    <p>Administra las recetas de cada producto. </p>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

import "../../styles/dashboard.css";