
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import './HomePage.css';
import * as React from 'react';
import DataTable from "./check-in";



export default function HomePage() {

    const [card, setCard] = useState('');

    const handleSubmit = async e => {

    }

    //the body is a form that calls the handleSubmit function above on submit
    return (
        <div>
            <div className="borrower">
                <h1>Profile:</h1>
                <form onSubmit={handleSubmit}>
                    <label>Card Id:</label>

                    <input
                        type="text"
                        required
                        value={card}
                        onChange={
                            (e) => setCard(e.target.value)
                        }
                    />

                    <button type = "submit">Submit</button>
                </form>
            </div>
            <div>
                <DataTable/>
            </div>
        </div>
    )
}