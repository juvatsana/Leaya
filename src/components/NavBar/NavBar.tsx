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
      { label: 'A propos de nous', file: 'about' },
      { label: 'Une plateforme responsable', file: 'reponsable' },
      { label: "Connecter l'Elite Africaine", file: 'elite-africaine' },
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

const menuMobile = [
  { file: 'about', label: 'A propos de nous' },
  { file: 'reponsable', label: 'Une plateforme responsable' },
  { file: 'elite-africaine', label: "Connecter l'Elite Africaine" },
  { file: 'features', label: 'Fonctionnalités' },
  { file: 'security', label: 'Sécurité et confidentialité' },
  { file: 'elite', label: 'Rejoindre l’élite' },
  { file: 'contact', label: 'Contacts' },
]

export default function Navbar() {
  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(
    null
  )
  const [anchorElSubMenu, setAnchorElSubMenu] =
    React.useState<null | HTMLElement>(null)
  const isSubMenuOpen = anchorElSubMenu !== null

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorElMenu(null)
  }

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSubMenu(event.currentTarget)
  }

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null)
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
              onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuMobile.map((page) => (
                <Link
                  key={page.label}
                  href={page.file}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem key={page.label} onClick={handleCloseMenu}>
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
                      onClick={handleOpenSubMenu}
                      onMouseOver={handleOpenSubMenu}
                      onMouseOut={handleCloseSubMenu}
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
                    <Menu
                      anchorEl={anchorElSubMenu}
                      open={isSubMenuOpen}
                      onClose={handleCloseSubMenu}
                    >
                      {menuItem.subMenu.map((subMenuItem) => (
                        <Link
                          key={subMenuItem.label}
                          href={subMenuItem.file}
                          style={{ textDecoration: 'none' }}
                        >
                          <MenuItem key={subMenuItem.label}>
                            <Typography color="inherit">
                              {subMenuItem.label}
                            </Typography>
                          </MenuItem>
                        </Link>
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
                      onClick={handleCloseMenu}
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
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseMenu}
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
