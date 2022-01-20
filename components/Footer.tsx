import * as React from 'react';
import {useSession} from "next-auth/react"
import {withStyles, styled} from "@mui/styles";
import {Button, Container, Toolbar, Box, AppBar, Link, NoSsr, Stack, Paper} from "@mui/material";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faGithub, faDAndD, faTwitch, faSteam } from '@fortawesome/free-brands-svg-icons';
import {createTheme} from "@mui/system";



const styles = {
    Footer: {
        top: "auto",
        bottom: 0
    }
};

const Item = styled(Paper)(() => {
    const theme = createTheme();

    return ({
        padding: theme.spacing(0.1),
        textAlign: 'left',
        backgroundColor: 'inherit',
        boxShadow: 'none',
        backgroundImage: 'none'
    });
});

class Footer extends React.Component<{ classes: any }> {
    render() {
        let {classes} = this.props;
        const {data: session} = useSession();

        return (
            <NoSsr>
                <AppBar position="fixed" className={classes.Footer}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                            <Box sx={{flexGrow: 2, display: {xs: 'flex', md: 'none'}}} alignItems="left"
                                 justifyContent="left">
                                <Button
                                    sx={{color: 'white', display: 'block'}}
                                    variant="outlined"
                                    component={Link}
                                    href="https://cloud-01.chaoticlogic.us/s/om9cYFKYHe5fsrA/download/SeanStoves-Resume2019.pdf"
                                >
                                    Download Resume
                                </Button>
                            </Box>

                            <Box sx={{flexGrow: 2, display: {xs: 'none', md: 'flex'}}} alignItems="center"
                                 justifyContent="center">
                                <Button
                                    sx={{color: 'white', display: 'block'}}
                                    variant="outlined"
                                    component={Link}
                                    href="https://cloud-01.chaoticlogic.us/s/om9cYFKYHe5fsrA/download/SeanStoves-Resume2019.pdf"
                                >
                                    Download Resume
                                </Button>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}} alignItems="left"
                                 justifyContent="left">
                                <Stack>
                                    <Item><AlternateEmailRoundedIcon fontSize="small"/> sean@seanstoves.com</Item>
                                    <Item><PhoneAndroidRoundedIcon fontSize="small"/> +1 570.778.5064</Item>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} alignItems="left"
                                 justifyContent="left">
                                <Stack>
                                    <Item><AlternateEmailRoundedIcon fontSize="small"/> sean@seanstoves.com</Item>
                                    <Item><PhoneAndroidRoundedIcon fontSize="small"/> +1 570.778.5064</Item>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}} alignItems="left"
                                 justifyContent="left">
                                <Stack>
                                    <Item>204 W White Street</Item>
                                    <Item>Summit Hill, Pa 18250</Item>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                <Stack>
                                    <Item>204 W White Street</Item>
                                    <Item>Summit Hill, Pa 18250</Item>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}} alignItems="left"
                                 justifyContent="left">
                                <Stack direction="row" spacing={2}>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.facebook.com/sstoves"><FontAwesomeIcon
                                        icon={faFacebookF}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.linkedin.com/in/seanstoves"><FontAwesomeIcon
                                        icon={faLinkedinIn}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://twitter.com/sstoves"><FontAwesomeIcon
                                        icon={faTwitter}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://github.com/SeanStoves"><FontAwesomeIcon icon={faGithub}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.dndbeyond.com/members/SolaoBajiuik"><FontAwesomeIcon
                                        icon={faDAndD}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://twitch.tv/solaobajiuik"><FontAwesomeIcon icon={faTwitch}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://steamcommunity.com/id/solaobajiuik"><FontAwesomeIcon
                                        icon={faSteam}/></Link></Item>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                <Stack direction="row" spacing={2}>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.facebook.com/sstoves"><FontAwesomeIcon
                                        icon={faFacebookF}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.linkedin.com/in/seanstoves"><FontAwesomeIcon
                                        icon={faLinkedinIn}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://twitter.com/sstoves"><FontAwesomeIcon
                                        icon={faTwitter}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://github.com/SeanStoves"><FontAwesomeIcon icon={faGithub}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://www.dndbeyond.com/members/SolaoBajiuik"><FontAwesomeIcon
                                        icon={faDAndD}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://twitch.tv/solaobajiuik"><FontAwesomeIcon icon={faTwitch}/></Link></Item>
                                    <Item><Link target="_blank" rel="noopener" color="#fff"
                                                href="https://steamcommunity.com/id/solaobajiuik"><FontAwesomeIcon
                                        icon={faSteam}/></Link></Item>
                                </Stack>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </NoSsr>
        );
    }
}

export default withStyles(styles)(Footer);
