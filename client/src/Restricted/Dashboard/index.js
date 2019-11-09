import React, { useState, useEffect } from 'react';
import {  Grid, CssBaseline, Box, Paper, Typography, Divider, Table, TableBody, TableCell } from "@material-ui/core"
import { Menu } from "../../base/Menu"
import { Footer } from "../../base/Footer"
import axios from "axios"
import Chart from 'react-google-charts';

const Dashboard = () => {

  const [scores, setScores] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      axios(
        'http://localhost:3030/scores',
      ).then(result => {
        setScores(result.data);
        [result.data].map(item => console.log(item.scales))
      })
  }, []);

    /**
    {
      scores.scales !== void 0
      ? Object.keys(scores.scales).map(item => <span>{item}</span>)
      : null
    }
    */

  return (
      <React.Fragment>
      <CssBaseline />
      <Menu/>
      <Box p={4}>

      <Grid container spacing={3}>
      {[scores].map((item, index) => <Grid item xs={6}>
                        <Paper>
                          <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Typography variant="h2" color="textSecondary">
                                Score:
                            </Typography>
                            <Box mx={1}>
                              <Divider orientation="vertical" />
                            </Box>
                            <Typography variant="h2" color="textPrimary">
                                  {item !== void 0 ? item.score : "-"}
                            </Typography>
                          </Box>
                        </Paper>
                    </Grid>)}
      <Grid item xs={6}>
                        <Paper>
                          <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                          <Chart
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                              ['Scale', 'Value', ],
                              ['Ease of Use', 2.5]                            ]}
                            options={{
                              title: 'Sum total of all scales',
                              //chartArea: { width: '30%' },
                              hAxis: {
                                title: 'Value',
                                minValue: 0,
                              },
                              vAxis: {
                                title: 'Scale',
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
