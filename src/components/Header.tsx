import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Header: React.FC<{ siteConfig: { logo: string; siteName: string } }> = ({ siteConfig }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
            <AppBar position="static" sx={{ width: '100%', margin: 0, padding: 1 }}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo Image */}
                <IconButton edge="start" color="inherit" sx={{ p: 0, mr: 2 }}>
                    <Box
                        component="img"
                        src={siteConfig.logo}
                        alt="Logo"
                        sx={{
                            height: { xs: 30, sm: 40 },
                            width: { xs: 30, sm: 40 },
                            borderRadius: '50%',
                        }}
                    />
                </IconButton>

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontSize: { xs: '1rem', sm: '1.5rem' },
                    }}
                >
                    {siteConfig.siteName}
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Contact</Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, alignItems: 'center' }}>
                    {/* Theme Toggle and Hamburger Menu for Smaller Screens */}
                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 1 }}>
                        {/* Hamburger Menu */}
                        <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'flex' }, gap: { xs: 1, sm: 2 }, alignItems: 'center', justifyContent: 'center', minWidth: '100px' }}>
                    {/* Reserved space for Theme Toggle Button */}
                    <Box sx={{ width: { xs: '24px', sm: '32px' }, height: { xs: '24px', sm: '32px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Add theme toggle button here */}
                    </Box>
                </Box>

            </Toolbar>

            {/* Drawer for Small Screens */}
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {['Home', 'About', 'Contact'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
