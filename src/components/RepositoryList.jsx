import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'


export function RepositoryList() {

    const [repositories, setRespositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/luanpires94/repos')
            .then(response => response.json())
            .then(data => setRespositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}
