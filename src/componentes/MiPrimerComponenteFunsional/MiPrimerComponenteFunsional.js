import { useParams } from "react-router-dom"

const MiPrimerComponenteFunsional = props => {

const {texto} = useParams();

    return (
        <div>
            <h2>Este es mi primer componente Funsional {texto}</h2>
        </div>
    )

}

export default MiPrimerComponenteFunsional