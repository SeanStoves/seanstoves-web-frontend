import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Footer from './components/Footer';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon icon for dark mode
import LightModeIcon from '@mui/icons-material/LightMode'; // Sun icon for light mode

const App: React.FC = () => {
    const [siteMode, setSiteMode] = useState<'gaming' | 'professional'>(() => {
        return localStorage.getItem('siteMode') === 'professional' ? 'professional' : 'gaming';
    });
    // Load the theme mode from localStorage, default to 'dark' if not set
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        return localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark';
    });

    // Save theme mode to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    useEffect(() => {
        localStorage.setItem('siteMode', siteMode);
    }, [siteMode]);

    // WebStorm-inspired dark and light themes
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    ...(mode === 'dark'
                        ? {
                            // Dark Mode Colors
                            primary: {
                                main: '#4DABF7', // Light Blue
                            },
                            background: {
                                default: '#2B2B2B', // Dark Gray
                                paper: '#3C3F41', // Slightly lighter shade
                            },
                            text: {
                                primary: '#A9B7C6', // Light Gray
                                secondary: '#8F908A', // Dimmed
                            },
                        }
                        : {
                            // Light Mode Colors
                            primary: {
                                main: '#1E88E5', // Blue
                            },
                            background: {
                                default: '#FAFAFA', // Light background
                                paper: '#FFFFFF', // Plain white paper
                            },
                            text: {
                                primary: '#313131', // Dark text
                                secondary: '#525252', // Grayish text
                            },
                        }),
                },
                typography: {
                    fontFamily: 'Inter, Arial, sans-serif',
                },
            }),
        [mode]
    );

    // Toggles between light and dark mode
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // Toggles between gaming and professional modes
    const toggleSiteMode = () => {
        setSiteMode((prevMode) => (prevMode === 'gaming' ? 'professional' : 'gaming'));
    };

    const kidsBirthdays = ["2009-12-13", "2010-09-23", "2013-01-24"];

    // Calculate their ages as an array
    const kidsAges = kidsBirthdays.map(calculateAge);

    function calculateAge(birthdate: string): number {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birth month/day hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Normalize styles with theme */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    width: '100vw',
                    margin: 0,
                    padding: 0,
                }}
            >
                {/* Header */}
                <Header siteConfig={{
                    logo: siteMode === 'gaming' ? 'images/solao-logo.png' : 'images/sean-faceshot.png',
                    siteName: siteMode === 'gaming' ? 'Solao Bajiuik' : 'Sean Stoves',
                }} />

                {/* Dark/Light Mode Toggle Button */}
                <Box
                    sx={{
                        position: 'fixed',
                        top: 16,
                        right: 16,
                        display: 'flex',
                        gap: 1,
                        zIndex: 1000,
                    }}
                >
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                    <IconButton onClick={toggleSiteMode} color="inherit">
                        <FontAwesomeIcon icon={siteMode === 'gaming' ? faBriefcase : faGamepad} />
                    </IconButton>
                </Box>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        width: {
                            xs: '90%', // For smaller screens
                            sm: '70%', // For medium screens
                            lg: '60%', // For larger screens
                        },
                        marginX: 'auto',
                        textAlign: 'left',
                        padding: 4,
                    }}
                >
                    <h1>Introduction</h1>
                    <p>Hi, I’m Sean Stoves – but online and in the gaming world, you might know me as Solao Bajiuik! I’m
                        a Platform Engineer at Wizards of the Coast, contributing to the amazing D&D Beyond platform,
                        which brings the magic of Dungeons & Dragons to countless players around the globe.</p>
                    <p>Outside of work, I’m a proud dad to three incredible boys: my eldest is {kidsAges[0]}, my middle son
                            is {kidsAges[1]}, and my youngest is {kidsAges[2]}. We’re a family of gamers at heart, whether
                            it’s on PC, Xbox, VR, TTRPGs, or board games. We also love taking family trips to amusement parks.
                            We all enjoy roller coasters! On a more personal level, I particularly enjoy mentoring my eldest son as
                            he works toward his dream of becoming a software engineer.</p>
                    <p>When I’m not working or spending time with family, I love to immerse myself in my hobbies:
                            reading, programming, and, of course, gaming. I also stream on Twitch as Solao
                            Bajiuik, where I share my passion for gaming and connect with like-minded adventurers.</p>
                    <p>This space will also feature my blog, where I’ll share a mix of professional insights,
                            educational topics, and fun gaming stories.
                            Thanks for visiting, and I hope you enjoy following along on my journey through work,
                            family, and play!</p>
                </Box>

                {/* Footer */}
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;
