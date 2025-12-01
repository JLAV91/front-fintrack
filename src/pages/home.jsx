

export default function Home() {
    return (
        <main className="container py-3 flex-fill">

            <section className="text-center mb-5" id="Nosotros">
                <h1 className="display-4 fw-bold">Bienvenido EcoMarket</h1>
                <p className="lead">Donde encuentras productos ecológicos y sostenibles para un estilo de vida consciente
                </p>
                <a href="" className="btn btn-info text-white btn-lg">Crea tu cuenta</a>
            </section>
            <section className="container mb-5 mt-5">
                <h2 className="text-center mb-4">¿Que quieres hacer ahora?</h2>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Ingresa tu orden de compra</h5>
                                <p className="card-text">
                                    Aqui puedes ingresar tu orden de compra para adquirir productos ecológicos y sostenibles.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Gestiona tu pedido</h5>
                                <p className="card-text">
                                    Tu tambien aportas al cuidado del planeta al elegir productos que respetan el medio ambiente.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Estado de pedidos</h5>
                                <p className="card-text">
                                    Conocenos mejor y descubre como juntos podemos hacer la diferencia.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-md-auto">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Pedidos enviados</h5>
                                <p className="card-text">
                                    Organiza tus compras y recibe tus productos de manera eficiente y sostenible.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}