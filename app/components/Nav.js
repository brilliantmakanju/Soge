'use client'
import Link from 'next/link';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { signOut, useSession } from 'next-auth/react';
import Logout from '@/app/components/authentication/Logout';
import { Skeleton } from '@mui/material';



const pages = ['Home', 'Properties', 'Service', 'About', 'Contact Us'];

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function ResponsiveAppBar(props) {
    const { data: session, status } = useSession()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <ElevationScroll {...props}>
            <AppBar >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SOGE
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center"  >{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SOGE
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex ' } }}  >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {
                            status === 'unauthenticated'
                                ?
                                <>
                                    {
                                        session

                                            ?
                                            <></>

                                            :
                                            <>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, display: { xs: 'none', md: 'flex ' } }} >
                                                    <Link className='flex  ' href={"/register"}>
                                                        Register
                                                    </Link>
                                                    <Link className='flex justify-center items-center p-3 px-8 rounded-md bg-[#00204A] hover:bg-[#00204a6a] border-[2px]  border-[#00204A] transition duration-300 ease-in-out ' href={"/login"}>
                                                        Login
                                                    </Link>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, display: { xs: 'flex', md: 'none ' } }} >
                                                    <Link className='flex justify-center items-center p-2 px-6 rounded-md bg-[#00204A] hover:bg-[#00204a6a] border-[2px]  border-[#00204A] transition duration-300 ease-in-out ' href={"/login"}>
                                                        Login
                                                    </Link>
                                                </Box>
                                            </>
                                    }
                                </>
                                :
                                <></>

                        }

                        {
                            session
                                ?
                                <>
                                    {
                                        status === 'authenticated' ?
                                            <>

                                                <Box sx={{ flexGrow: 0 }}>
                                                    <Tooltip title={`${session?.user?.name}`}>
                                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                            <Avatar alt="Remy Sharp" src={session?.user?.image} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Menu
                                                        sx={{ mt: '40px', display: 'flex', justifyItems: 'start', alignItems: 'start' }}
                                                        id="menu-appbar"
                                                        anchorEl={anchorElUser}
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        keepMounted
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        open={Boolean(anchorElUser)}
                                                        onClose={handleCloseUserMenu}
                                                    >
                                                        <MenuItem className='flex flex-col justify-start items-start text-left gap-8'  onClick={handleCloseUserMenu}>
                                                            <Link className='flex w-full justify-start items-start' href="/user/profile">
                                                                Profile
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem className='flex flex-col justify-start items-start text-left gap-8' onClick={handleCloseUserMenu}>
                                                            <Link className='flex w-full justify-start items-start' href="/">
                                                                Dashboard
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem className='flex flex-col justify-start items-start text-left gap-8' onClick={handleCloseUserMenu}>
                                                            <Link className='flex w-full justify-start items-start'href="/user/properties">
                                                                Properties
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem className='flex flex-col justify-start items-start text-left gap-8' onClick={handleCloseUserMenu}>
                                                            <Link className='flex w-full justify-start items-start' href="/user/profile/settings">
                                                                Setting
                                                            </Link>
                                                        </MenuItem>
                                                        {
                                                            session?.user?.provider === 'credentials' 
                                                                ?
                                                                <MenuItem className='flex flex-col justify-start items-start text-left gap-8' onClick={handleCloseUserMenu}>
                                                                    <Link className='flex w-full justify-start items-start' href="/user/changepassword">
                                                                        Change Password
                                                                    </Link>
                                                                </MenuItem>
                                                                :
                                                                <></>
                                                        }
                                                        <MenuItem className='flex flex-col justify-start items-start text-left gap-8' onClick={handleCloseUserMenu}>
                                                            <Logout />
                                                        </MenuItem>
                                                    </Menu>
                                                </Box>

                                            </>
                                            :
                                            <Skeleton animation="wave" variant="circular" width={50} height={50} />
                                    }
                                </>
                                :
                                <></>
                        }




                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
}
export default ResponsiveAppBar;