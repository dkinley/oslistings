import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { id, afterDeleteHandler } = props;

    const deleteHandler = (e, id) => {
		e.preventDefault();

        axios.delete("http://localhost:8000/api/osl/delete/" + id)
        .then((res) => {
            console.log(res.data);
            afterDeleteHandler(id);  // unique things that the parent component wants to do now!
        })
        .catch((err) => {
            console.log(err);
            console.log(".catch delete");
        })
}

    return (
        <button className="deleteBtn" onClick={ (e) => deleteHandler(e, id) }>Delete Opportunity</button>
    )
}

export default DeleteButton;