import React from "react"
import { Link as RouterLink } from "@reach/router"
import { AppBar, Toolbar, Typography, Button} from "@material-ui/core"

const Link = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export const Menu = () => {
    return <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    PegaSUS
                </Typography>
                <nav>
                    <Button component={Link} to="/">
                        Score Input
                    </Button>
                    <Button component={Link} to="/admin/">
                        Administration
                    </Button>
                    <Button component={Link} to="/dashboard">
                        Dashboard
                    </Button>
                </nav>
            </Toolbar>
        </AppBar>
}
