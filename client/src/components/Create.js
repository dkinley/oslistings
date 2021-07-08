import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Create = (props) => {
    
    const [ street, setStreet ] = useState();
    const [ city, setCity ] = useState();
    const [ state, setState ] = useState();
    const [ zipcode, setZipcode ] = useState();
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState({});
    

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        
        axios.post("http://localhost:8000/api/osl", {
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            description: description,
            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/osl");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>New Opportunity</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Street: </label>
                    {
                        errs.street ?
                            <span className="error-text">{errs.street.message}</span>
                            : null
                    }
                    <input type="text"
                    name="street"
                    value={street}
                    onChange={ (e) => setStreet( e.target.value ) }
                    />


                </div>
                <div>
                    <label> City: </label>
                    {
                        errs.city ?
                        <span className="error-text">{errs.city.message}</span>
                            : null
                    }
                    <input city="text"
                    name="city"
                    value={city}
                    onChange={ (e) => setCity( e.target.value ) }
                    />
                </div>
                <div>
                <label> State: </label>
                {
                    errs.state ?
                    <span className="error-text">{errs.state.message}</span>
                        : null
                }
                <input type="text"
                name="state"
                value={state}
                onChange={ (e) => setState( e.target.value ) }
                />

            </div>
            <div>
            <label> Zip Code: </label>
            {
                errs.zipcode ?
                <span className="error-text">{errs.zipcode.message}</span>
                    : null
            }
            <input type="text"
            name="zipcode"
            value={zipcode}
            onChange={ (e) => setZipcode( e.target.value ) }
            />

        </div>
        <div>
        <label> Price: </label>
        {
            errs.price ?
            <span className="error-text">{errs.price.message}</span>
                : null
        }
        <input type="text"
        name="price"
        value={price}
        onChange={ (e) => setPrice( e.target.value ) }
        />

    </div>
                <div>
                    <label> Description: </label>
                    {
                        errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />

                </div>
                <div>
                    <input type="checkbox"
                    name="favorite"
                    checked={favorite}
                    onChange={ () => setFavorite( !favorite ) }
                    />
                    <label> Favorite? </label>
                </div>

                <div>
                <button type="submit">Add Opportunity</button>
                <button onClick={ () => navigate("/osl")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Create;