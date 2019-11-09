import React from "react"
import {Box, Typography} from "@material-ui/core"

export const Footer = () => {
    return (
        <Box p={3}>
            <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
                &copy; PegaSUS 2020
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Your trusty steed for accumulating comparitable UX KPIs
            </Typography>
        </Box>
    )
}