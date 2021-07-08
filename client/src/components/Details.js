import React, { useEffect, useState } from 'react';
// import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const Details = (props) => {
    const [ osl, setOsl ] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/osl/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); //.then gives response object which is commonly referred to as res
                setOsl(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    return (
        <div>
            <h1>Opportunity Details</h1>
            <table>
                <tr>
                <td>
                    Street Address:
                </td>
                <td>
                    { osl.street }
                </td>
                </tr>
                <tr>
                <td>
                    City:
                </td>
                <td>
                    { osl.city }
                </td>
                </tr>
                <tr>
                <td>
                    State:
                </td>
                <td>
                    { osl.state }
                </td>
                </tr>
                <tr>
                <td>
                    Zip Code:
                </td>
                <td>
                    { osl.zipcode }
                </td>
                </tr>
                <tr>
                <td>
                    Price:
                </td>
                <td>
                    { osl.price }
                </td>
                </tr>
                <tr>
                <td>
                    Description:
                </td>
                <td>
                    { osl.description }
                </td>
                </tr>
            </table>
            <DeleteButton _id={ osl._id }/>
        </div>
    )
};

export default Details;