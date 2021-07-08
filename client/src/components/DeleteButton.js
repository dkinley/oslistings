import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ oslId, setOslId ] = useState (props.id);
    const deleteOsl = (oslId) => {
        axios.delete(`http://localhost:8000/api/osl/${ oslId }`)
            .then((res) => {
                console.log(res.data);
                // e.g. setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                navigate('/osl');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteOsl(props._id) }>Delete</button>
    )
}

export default DeleteButton;