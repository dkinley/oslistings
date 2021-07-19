import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    console.log("Delete Button is being called!")
    console.log(props.id);
    const { id, afterDeleteHandler } = props;

    const deleteHandler = (e, id) => {
		e.preventDefault();

        axios.delete("http://localhost:8000/api/osl/" + id)
        .then((res) => {
            console.log(res.data);
            afterDeleteHandler(id);  // unique things that the parent component wants to do now!
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401) {
                navigate("/loginRegister")
            }
        })
}

    return (
        <button className="deleteBtn" onClick={ (e) => deleteHandler(e, id) }>Delete Opportunity</button>
    )
}

export default DeleteButton;