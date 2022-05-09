import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import {getCharacterByID} from "../utils/api"
const Character = (req, res) => {
    const {character_id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getCharacterByID(character_id).then((data) => {
            console.log(data)
            setCharacter(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [character_id])

    return <p>I am character {character.character_name}</p>
}

export default Character