import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api'

const Home = () => {
    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes()
    }, [navigate])

    if (loading) {
        return (
            <div className="align-middle">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
                Carregando...
            </div>
        )
    }

    return (
        <div className="container">
            {filmes.map((filme) => {
                return (
                    <article key={filme.id}>
                        <div className="card mb-3">
                            <h5 className="card-header">{filme.nome}</h5>
                            <div className="card-body">
                                <p>{filme.sinopse}</p>
                                <div className="text-center mb-3">
                                    <img
                                        className="mw-100"
                                        src={filme.foto}
                                        alt={filme.nome}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <Link
                                        to={`/filme/${filme.id}`}
                                        className="btn btn-info"
                                    >
                                        Acessar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Home
