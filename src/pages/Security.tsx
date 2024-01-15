import { Grid } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';

export default function Security() {
  const theme = useTheme()
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="m-0 overflow-hidden font-thin text-2xl"
      height="100%"
    >
      <Grid item sm={12} md={6} className="relative">
        <Image
          className="relative -translate-x-24"
          src="/assets/security.png"
          alt="illustration d'une personne utilisant l'application Leaya sur smartphone"
          width={1000}
          height={676}
          style={{ borderRadius: '97px' }}
        />
      </Grid>
      <Grid item sm={12} md={6} className="relative flex-col px-10 md:pr-10 md:pl-0 py-10 md:py-0">
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '48px',
            fontWeight: '600',
            textAlign: 'center',
          }}
          className="text-3xl md:text-4xl lg:text-5xl pb-10"
        >
          SECURITE ET CONFIDENTIALITE
        </h1>
        <p
          className="text-2xl"
          style={{
            paddingBottom: '2rem',
          }}
        >
          <span style={{ color: '#B18F40' }}>
            <span
              style={{
                color: 'transparent',
                backgroundImage: `${theme.palette.background.paper}`,
                backgroundClip: 'text',
              }}
            >
              LEAYA ELITE
            </span>{' '}
            garantit la sécurité et la confidentialité auprès de ces
            utilisateurs afin d’offrir une expérience fiable et agréable.
          </span>
          <br />
          <br />
          De la protection des données personnelles à la vérification des
          profils utilisateurs en passant par la confidentialité des
          informations personnelles, l’application promet aux utilisateurs de
          profiter, en toute sérénité, de toutes les fonctionnalités mises à
          disposition.
        </p>
      </Grid>
    </Grid>
  )
}