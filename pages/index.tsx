import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import moment from "moment";

const Home: NextPage = () => {
    const age = (birthday: string) => moment().diff(moment(birthday), 'years');

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to my page!
                </Typography>
            </Box>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    alignItems: 'left',
                }}
            >
                <Typography variant="body1" component="span">
                    Hey, Welcome to the website of Sean Stoves Sr a.k.a. Solao Bajiuik.
                </Typography>
                <Typography variant="body1" component="span">
                    I am a proud father of 3 young lads aged {age("20091213")}, {age("20100923")} and {age("20131124")}
                </Typography>

            </Box>
        </Container>
    );
};

export default Home;
