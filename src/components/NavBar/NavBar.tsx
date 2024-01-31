'use client'
import * as React from 'react'
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
import { useTheme } from '@mui/material/styles';

const itemsStyle = "sm:text-sm md:text-md lg:text-lg xl:text-xl ml-5"
const menuItems = [
  {
    label: 'A propos de nous',
    file: 'About',
    subMenu: [
      { label: 'Actualité', file: 'Actuality' },
      { label: 'A propos de nous', file: 'About' },
      { label: 'Une plateforme responsable', file: 'Responsable' },
      { label: "Connecter l'Elite Africaine", file: 'Elite-africaine' },
    ],
  },
  {
    label: 'Fonctionnalités',
    file: 'Features',
    subMenu: [],
  },
  {
    label: 'Sécurité et confidentialité',
    file: 'Security',
    subMenu: [],
  },
  {
    label: 'Rejoindre l’élite',
    file: 'Elite',
    subMenu: [],
  },
  {
    label: 'Contacts',
    file: 'Contact',
    subMenu: [],
  },
]

const menuMobile = [
  { file: 'Actuality', label: 'Actualité' },
  { file: 'About', label: 'A propos de nous' },
  { file: 'Responsable', label: 'Une plateforme responsable' },
  { file: 'Elite-africaine', label: "Connecter l'Elite Africaine" },
  { file: 'Features', label: 'Fonctionnalités' },
  { file: 'Security', label: 'Sécurité et confidentialité' },
  { file: 'Elite', label: 'Rejoindre l’élite' },
  { file: 'Contact', label: 'Contacts' },
]

export default function Navbar() {
  const theme = useTheme();
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
      className='pb-16'
    >
      <Container maxWidth="xl" className="flex justify-center pt-5">
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
                  style={{ textDecoration: 'none'}}
                >
                  <MenuItem 
                  className='mb-1'
                  key={page.label} 
                  onClick={handleCloseMenu}
                  style={{
                    color: 'white',
                    background: `${theme.palette.background.paper}`
                  }}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' } ,
            }}
          >
            {menuItems.map((menuItem) => (
              <div key={menuItem.label}>
                {menuItem.subMenu.length > 0 ? (
                  <div>
                    <Button
                      className={itemsStyle}
                      color="inherit"
                      onClick={handleOpenSubMenu}
                      style={{ textTransform: 'initial'}}
                      sx={{
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
                          style={{
                            textDecoration: 'none',
                            color: 'white',
                            background: `${theme.palette.background.paper}`
                          }}
                        >
                          <MenuItem
                            className='mb-1'
                            key={subMenuItem.label}
                            onClick={handleCloseSubMenu}
                            style={{
                              background: `${theme.palette.background.paper}`
                            }}
                          >
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
                      className={itemsStyle}
                      key={menuItem.label}
                      onClick={handleCloseMenu}
                      style={{ textTransform: 'initial'}}
                      sx={{
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
            <Link 
            href="https://apps.apple.com/fr/app/leaya-elite/id6474127173" 
            style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseMenu}
                className={itemsStyle}
                style={{
                  background: `${theme.palette.background.paper}`,
                }}
                sx={{
                  color: 'black',
                  display: 'block',
                  fontStyle: 'normal',
                  borderRadius: '20px',
                  textTransform: 'none',
                  padding: '8px'
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
