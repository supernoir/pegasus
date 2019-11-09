import React, { useState, useEffect } from 'react';
import {  Grid, CssBaseline, Box, Paper, Typography, Divider, Table, TableBody, TableCell } from "@material-ui/core"
import { Menu } from "../../base/Menu"
import { Footer } from "../../base/Footer"
import axios from "axios"
import Chart from 'react-google-charts';

const Dashboard = () => {

  const [score, setScore] = useState("-");
  const [scales, setScales] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      axios(
        'http://localhost:3030/scores',
      ).then(result => {
        setScore(result.data.score);

        let arr = [["Scale","Value"]]
        for (let scale in result.data.scales) {
          arr.push([scale, result.data.scales[scale]])
        }
        setScales(arr)
        console.log(arr)
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
              <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Typography variant="h2" color="textSecondary">
                    Score:
                </Typography>
                <Box mx={1}>
                  <Divider orientation="vertical" />
                </Box>
                <Typography variant="h2" color="textPrimary">
                      {score !== void 0 ? score : "-"}
                </Typography>
              </Box>
            </Paper>
        </Grid>
      <Grid item xs={6}>
                        <Paper>
                          <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                          <Chart
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={scales}
                            options={{
                              title: 'Sum total of all scales',
                              hAxis: {
                                title: 'Scale',
                                minValue: 0,
                              },
                              vAxis: {
                                title: 'Value',
                              },
                            }}
                            legendToggle
                          />
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
