import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const GetAll = (props) => {
    const [ allOsl, setAllOsl ] = useState([]); // put in an array, as there is an array of objects expected, see postman which gets back and array of objects
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/osl") //use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data came back correctly in the console
                //need state to hold onto the data we just called, do this above with const all
                setAllOsl(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>Address</th>
                    <th>City</th>
                    <th>Price</th>
                    <th>Edit</th>
                </thead>
                <tbody>
                    {
                        allOsl.map((osl, index) => (
                        <tr>
                            <td>
                                <Link to={ `/osl/${osl._id}`} >{osl.street} </Link>
                            </td>
                            <td>
                            <p>{osl.city} </p>
                            </td>
                            <td>
                            <p>{osl.price} </p>
                            </td>
                            <td>
                                <Link to={ `/osl/${osl._id}/edit`}><button>Edit</button></Link>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={ `/osl/create`}><button>Add New Opportunity</button></Link>
        </div>
    )
};

export default GetAll;