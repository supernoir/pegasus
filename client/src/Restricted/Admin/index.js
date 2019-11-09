import React from "react"
import {  Grid, CssBaseline, Box, Paper } from "@material-ui/core"
import { Menu } from "../../base/Menu"
import { Footer } from "../../base/Footer"

export default class Admin extends React.Component {
render(){
    return(
        <React.Fragment>
        <CssBaseline />
        <Menu/>
        <Box p={4}>
            <h1>Administration</h1>
            <Footer/>
        </Box>
      </React.Fragment>
        )
    }
}