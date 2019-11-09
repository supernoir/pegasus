import React, { useState } from 'react';
import {  Grid, CssBaseline, Box, Paper } from "@material-ui/core"
import { Menu } from "../../base/Menu"
import { Footer } from "../../base/Footer"
import axios from "axios"

const Dashboard = () => {

const [scores, setScores] = useState([]);

axios.get("http://localhost:3030/scores").then((res) => {
  setScores(res.body)
})

return(
    <React.Fragment>
    <CssBaseline />
    <Menu/>
    <Box p={4}>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper>SCORE</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>SUM TOTAL DIAGRAM</Paper>
            </Grid>
        </Grid>
        <Footer/>
    </Box>
  </React.Fragment>
    )
}

export default Dashboard
