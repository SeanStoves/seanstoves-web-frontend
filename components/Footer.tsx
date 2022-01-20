import * as React from 'react';
import {useSession} from "next-auth/react"
import {withStyles} from "@mui/styles";
import {Button, Container, Toolbar, Box, AppBar, Link, NoSsr} from "@mui/material";

const pages = ['Home', 'Career', 'Blog', "Gaming"];
const settings = ['Profile'];


const styles = {
    Footer: {
        top: "auto",
        bottom: 0
    }
};

const Footer = ({ classes }) => {
    const {data: session} = useSession();

    return (
        <NoSsr>
        <AppBar position="fixed" className={classes.Footer}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <Button
                            sx={{color: 'white', display: 'block'}}
                            variant="outlined"
                            component={Link}
                            href="https://cloud-01.chaoticlogic.us/s/om9cYFKYHe5fsrA/download/SeanStoves-Resume2019.pdf"
                        >
                            Resume
                        </Button>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            sx={{color: 'white', display: 'block'}}
                            variant="outlined"
                            component={Link}
                            href="https://cloud-01.chaoticlogic.us/s/om9cYFKYHe5fsrA/download/SeanStoves-Resume2019.pdf"
                        >
                            Download Resume
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </NoSsr>
    );
};
export default withStyles(styles)(Footer);
