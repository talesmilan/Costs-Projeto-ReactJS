import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and service
        project.cost = 0
        project.service = []
        if (project.name && project.budget && project.category.name) {
            fetch("http://localhost:5000/projects", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/projects', {message: 'Projeto criado com sucesso!'})
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject