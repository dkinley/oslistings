import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ errs, setErrs ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/osl/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); 
                let osl = res.data;
                setStreet(osl.street); //this is saying set osl listing street adrs to osl street adrs that is pulled from db via reach router
                setCity(osl.city);
                setState(osl.state);
                setZipcode(osl.zipcode);
                setPrice(osl.price);
                setDescription(osl.description);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        axios.put("http://localhost:8000/api/osl/" + props.id, {
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            price: price,
            description: description,

            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/osl/" + props.id); //this takes the :id via props so after editing user is now on the details
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Edit Opportunity</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Street Address: </label>
                    <input type="text"
                    name="street"
                    value={street}
                    onChange={ (e) => setStreet( e.target.value ) }
                    />
                    {
                        errs.name ?
                            <span className="error-text">{errs.street.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> City: </label>
                    <input type="text"
                    name="city"
                    value={city}
                    onChange={ (e) => setCity( e.target.value ) }
                    />
                    {
                        errs.type ?
                        <span className="error-text">{errs.city.message}</span>
                            : null
                    }
                </div>
                <div>
                <label> State: </label>
                <input type="text"
                name="state"
                value={state}
                onChange={ (e) => setState( e.target.value ) }
                />
                {
                    errs.type ?
                    <span className="error-text">{errs.state.message}</span>
                        : null
                }
            </div>
            <div>
            <label> Zip Code: </label>
            <input type="number"
            name="zipcode"
            value={zipcode}
            onChange={ (e) => setZipcode( e.target.value ) }
            />
            {
                errs.type ?
                <span className="error-text">{errs.zipcode.message}</span>
                    : null
            }
        </div>
        <div>
        <label> Price: </label>
        <input type="number"
        name="price"
        value={price}
        onChange={ (e) => setPrice( e.target.value ) }
        />
        {
            errs.type ?
            <span className="error-text">{errs.price.message}</span>
                : null
        }
    </div>
                <div>
                    <label> Description: </label>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />
                    {
                        errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                </div>
                <div>
                <button type="submit">Update Opportunity</button>
                <button onClick={ () => navigate("/osl")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;