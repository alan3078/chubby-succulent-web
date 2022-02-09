import React, { useContext, useState, useEffect, createContext } from 'react'
import './Navbar.scss'
import logo from "../../assets/logo.jpg"
import Grid from '@mui/material/Grid';

const Navbar: React.FC<{}> = props => {

    return (
        <Grid
            className="navbar"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <div className="logo-div">
                <img className="logo" src={logo} alt="Logo" />
                <div>
                    <span className="chubby">
                        Chubby
                    </span>
                    <span className="succulent">
                        Succulent
                    </span>
                </div>

            </div>
            <div>
                <span>Home</span>
                <hr></hr>
            </div>
        </Grid>
    )
}

export default Navbar
