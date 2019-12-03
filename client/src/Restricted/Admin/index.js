import React, { useState, useEffect } from 'react';
import {  Grid, CssBaseline, Box, Paper, Typography, Divider, Table, TableBody, TableCell } from "@material-ui/core"
import { Menu } from "../../base/Menu"
import { Footer } from "../../base/Footer"
import axios from "axios"

const Dashboard = () => {

  const [config, setConfig] = useState("-");

  useEffect(() => {
      axios(
        'http://localhost:3030/config',
      ).then(result => {
        setConfig(result.data.config);
        console.log(result.data)
      })
  }, []);

  return (
      <React.Fragment>
      <CssBaseline />
      <Menu/>
      <Box p={4}>

      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h3" color="textSecondary">
                    Project Configuration
                </Typography>
                <Box mx={1}>
                  <Divider orientation="vertical" />
                </Box>
                 <Typography variant="subtitle1" color="textPrimary">
                      {config !== void 0 && config.project !== void 0 ? config.project.name : "-"}
                </Typography>
                <Typography variant="subtitle2">
                      {config !== void 0 && config.project !== void 0  ? config.project.scope : "-"}
                </Typography>
              </Box>
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h3" color="textSecondary">
                    App Configuration
                </Typography>
                <Box mx={1}>
                  <Divider orientation="vertical" />
                </Box>
                <Typography variant="subtitle1" color="textPrimary">
                {config !== void 0 && config.app !== void 0 ? config.app.name : "-"}
                </Typography>
                <Typography variant="subtitle2">
                {config !== void 0 && config.app !== void 0 ? config.app.description : "-"}
                </Typography>
              </Box>
            </Paper>
        </Grid>
     
          </Grid>
          <Footer/>
      </Box>
    </React.Fragment>
      )
}

export default Dashboard
