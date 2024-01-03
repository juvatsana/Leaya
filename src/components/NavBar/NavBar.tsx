'use client'
import Logo from '@/components/Logo/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'

const menuItems = [
  {
    label: 'A propos de nous',
    file: 'about',
    subMenu: [
      { label: 'Une plateforme responsable', path: 'about/reponsable' },
      { label: "Connecter l'Elite Africaine", path: 'about/elite' },
    ],
  },
  {
    label: 'Fonctionnalités',
    file: 'features',
    subMenu: [],
  },
  {
    label: 'Sécurité et confidentialité',
    file: 'security',
    subMenu: [],
  },
  {
    label: 'Rejoindre l’élite',
    file: 'elite',
    subMenu: [],
  },
  {
    label: 'Contacts',
    file: 'contact',
    subMenu: [],
  },
]

const pages = [
  { file: 'about', label: 'A propos de nous' },
  { file: 'features', label: 'Fonctionnalités' },
  { file: 'security', label: 'Sécurité et confidentialité' },
  { file: 'elite', label: 'Rejoindre l’élite' },
  { file: 'contact', label: 'Contacts' },
]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl" className="flex justify-center p-5">
        <Toolbar disableGutters>
          <Logo></Logo>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              marginLeft: '8rem',
            }}
          >
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
              {menuItems.map((page) => (
                <Link
                  key={page.label}
                  href={page.file}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((menuItem) => (
              <div key={menuItem.label}>
                {menuItem.subMenu.length > 0 ? (
                  <div>
                    <Button
                      color="inherit"
                      onClick={handleMenuOpen}
                      onMouseOver={handleMenuOpen}
                      onMouseOut={handleMenuClose}
                      style={{ textTransform: 'initial' }}
                      sx={{
                        my: 2,
                        mx: 2,
                        color: 'white',
                        display: 'block',
                        fontStyle: 'normal',
                        listStyle: 'none',
                        textTransform: 'none',
                      }}
                    >
                      {menuItem.label}
                      TODO
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      {menuItem.subMenu.map((subMenuItem) => (
                        <MenuItem key={subMenuItem.label}>
                          <Typography color="inherit">
                            {subMenuItem.label}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : (
                  <Link
                    key={menuItem.label}
                    href={menuItem.file}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      key={menuItem.label}
                      onClick={handleCloseNavMenu}
                      style={{ textTransform: 'initial' }}
                      sx={{
                        my: 2,
                        mx: 2,
                        color: 'white',
                        display: 'block',
                        fontStyle: 'normal',
                        listStyle: 'none',
                        textTransform: 'none',
                      }}
                    >
                      {menuItem.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            {/* {menuItems.map((page) => (
              <Link
                key={page.label}
                href={page.file}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  style={{ textTransform: 'initial' }}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: 'white',
                    display: 'block',
                    fontStyle: 'normal',
                    listStyle: 'none',
                    textTransform: 'none',
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))} */}
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                style={{
                  backgroundColor: '#B18F40',
                  borderRadius: '50px',
                  padding: '5px',
                }}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'normal',
                  backgroundColor: '#B18F40',
                  borderRadius: '15px',
                  textTransform: 'none',
                }}
              >
                Télécharger l'application
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
