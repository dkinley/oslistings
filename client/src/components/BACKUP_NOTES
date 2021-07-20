import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    console.log("Delete Button is being called!")
    console.log(props.id);
    const [ oslId, setOslId ] = useState (props.id);
    const deleteOsl = (oslId) => {
        axios.delete(`http://localhost:8000/api/osl/${ oslId }`)
            .then((res) => {
                console.log(res.data);
                // e.g. setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                // need to fix to refresh post delete: props.allOsl && props.setAllOsl(props.allOsl.filter((osl) => osl._id !== oslId))
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteOsl(props.id) }>Delete</button>
    )
}

export default DeleteButton;