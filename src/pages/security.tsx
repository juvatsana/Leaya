import { Grid } from '@mui/material'
import Image from 'next/image'

const Security = () => {
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="p-0 py-10 m-0 overflow-hidden"
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
      <Grid
        item
        sm={12}
        md={6}
        className="relative flex-col text-justify p-10 md:text-2xl "
      >
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '48px',
            fontWeight: '600',
            padding: '2rem',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          SECURITE ET CONFIDENTIALITE
        </h1>
        <p style={{ fontSize: '24px', paddingBottom: '2rem' }}>
          <span style={{ color: '#B18F40' }}>
            LEAYA ELITE garantit la sécurité et la confidentialité auprès de ces
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

export default Security
