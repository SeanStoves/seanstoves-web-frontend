import React, {useEffect, useMemo, useState} from 'react';
import {GoogleOAuthProvider, useGoogleLogin} from '@react-oauth/google';
import {createTheme, CssBaseline, IconButton, ThemeProvider} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faGamepad, faLock} from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon icon for dark mode
import LightModeIcon from '@mui/icons-material/LightMode';
import md5 from "md5"; // Sun icon for light mode

const App: React.FC = () => {
    const handleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const response = await fetch('http://api.seanstoves.com:5096/auth/google', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({authorization_code: codeResponse.code}).toString(),
            });
            const tokens = JSON.parse(await response.json());

            localStorage.setItem('accessToken', tokens.access_token);
            localStorage.setItem('refreshToken', tokens.refresh_token);

            const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokens.access_token}` },
            });

            const userInfo = await userInfoResponse.json();
            localStorage.setItem('email', userInfo.email);

            window.location.reload();
        },
        onError: () => {
            console.error('Google login failed');
        },
    });

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('email');
        window.location.reload();
    };

    const [siteMode, setSiteMode] = useState<'gaming' | 'professional'>(() => {
        return localStorage.getItem('siteMode') === 'professional' ? 'professional' : 'gaming';
    });

    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        return localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark';
    });

    const [menuOpen, setMenuOpen] = useState(false);

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
                            primary: { main: '#4DABF7' },
                            background: { default: '#2B2B2B', paper: '#3C3F41' },
                            text: { primary: '#A9B7C6', secondary: '#8F908A' },
                        }
                        : {
                            // Light Mode Colors
                            primary: { main: '#1E88E5' },
                            background: { default: '#FAFAFA', paper: '#FFFFFF' },
                            text: { primary: '#313131', secondary: '#525252' },
                        }),
                },
                typography: { fontFamily: 'Inter, Arial, sans-serif' },
            }),
        [mode]
    );

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const toggleSiteMode = () => {
        setSiteMode((prevMode) => (prevMode === 'gaming' ? 'professional' : 'gaming'));
    };

    const kidsBirthdays = ["2009-12-13", "2010-09-23", "2013-01-24"];
    const kidsAges = kidsBirthdays.map(calculateAge);

    function calculateAge(birthdate: string): number {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

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
                    <Header
                        siteConfig={{
                            logo: siteMode === 'gaming' ? 'images/solao-logo.png' : 'images/sean-faceshot.png',
                            siteName: siteMode === 'gaming' ? 'Solao Bajiuik' : 'Sean Stoves',
                        }}
                    />

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

                        {localStorage.getItem('accessToken') ? (
                            <Box
                                sx={{ position: 'relative', display: 'inline-block' }}
                                onMouseEnter={() => setMenuOpen(true)}
                                onMouseLeave={() => setMenuOpen(false)}
                            >
                                <img
                                    src={`https://www.gravatar.com/avatar/${md5(localStorage.getItem('email') || '')}?d=identicon`}
                                    alt="Gravatar"
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                    }}
                                />
                                {menuOpen && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            right: 0,
                                            background: mode === 'dark' ? '#3C3F41' : '#FFFFFF',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                            borderRadius: '8px',
                                            zIndex: 100,
                                            minWidth: '50px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <button
                                            onClick={handleLogout}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: mode === 'dark' ? '#A9B7C6' : '#313131',
                                                padding: '10px',
                                                width: '100%',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </Box>
                                )}
                            </Box>
                        ) : (
                            <IconButton
                                onClick={handleLogin}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    color: 'inherit'
                                }}
                            >
                                <FontAwesomeIcon icon={faLock}/>
                            </IconButton>

                        )}
                    </Box>

                    {/* Main Content */}
                    <Box
                        component="main"
                        sx={{
                            flex: 1,
                            width: {
                                xs: '90%',
                                sm: '70%',
                                lg: '60%',
                            },
                            marginX: 'auto',
                            textAlign: 'left',
                            padding: 4,
                        }}
                    >
                        <h1>Introduction</h1>
                        <p>Hi, I’m Sean Stoves – but online and in the gaming world, you might know me as Solao Bajiuik!
                            I’m
                            a Platform Engineer at Wizards of the Coast, contributing to the amazing D&D Beyond
                            platform,
                            which brings the magic of Dungeons & Dragons to countless players around the globe.</p>
                        <p>Outside of work, I’m a proud dad to three incredible boys: my eldest is {kidsAges[0]}, my
                            middle son
                            is {kidsAges[1]}, and my youngest is {kidsAges[2]}. We’re a family of gamers at heart,
                            whether
                            it’s on PC, Xbox, VR, TTRPGs, or board games. We also love taking family trips to amusement
                            parks.
                            We all enjoy roller coasters! On a more personal level, I particularly enjoy mentoring my
                            eldest son as
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

const AppWrapper: React.FC = () => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    );
};

export default AppWrapper;
