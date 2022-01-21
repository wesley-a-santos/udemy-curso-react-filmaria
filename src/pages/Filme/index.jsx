import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import api from '../../services/api'

const Filme = () => {
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    const notify = () =>
        toast('Wow so easy!', {
            position: toast.POSITION.TOP_CENTER,
        })

    useEffect(() => {
        async function loadfilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                navigate('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadfilme()
    }, [id, navigate])

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
                        <div className="d-flex justify-content-between">
                            <Link
                                to={`/`}
                                className="btn btn-info flex-fill me-3"
                            >
                                Voltar
                            </Link>
                            <button
                                onClick={notify}
                                className="btn btn-info flex-fill"
                                type="button"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Filme
