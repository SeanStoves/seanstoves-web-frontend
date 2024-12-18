import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter, faGithub, faSteam, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                backgroundColor: 'background.paper', // Use theme background
                color: 'text.primary', // Use theme-based text color
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 1, flex: '1', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Typography variant="body2" sx={{ textAlign: 'left' }}> <a href="mailto:sean@seanstoves.com">sean@seanstoves.com</a></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FontAwesomeIcon icon={faPhone} />
                        <Typography variant="body2" sx={{ textAlign: 'left' }}> +1 570-778-5064</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        flexWrap: 'wrap',
                        columnGap: 0,
                        rowGap: 0,
                        flex: 2,
                        maxWidth: { xs: '100%', sm: '80%' }, // Set maxWidth for better scaling
                    }}
                >
                    <IconButton href="https://www.facebook.com/sstoves" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/seanstoves" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </IconButton>
                    <IconButton href="https://x.com/sstoves" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </IconButton>
                    <IconButton href="https://github.com/SeanStoves" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                    <IconButton href="https://steamcommunity.com/id/solaobajiuik" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSteam} />
                    </IconButton>
                    <IconButton href="https://discord.com/invite/f7YJ4q4DaY" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </IconButton>
                    <IconButton href="https://twitch.tv/solaobajiuik" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitch} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
