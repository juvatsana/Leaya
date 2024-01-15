import { Grid } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';

export default function Elite() {
  const theme = useTheme()
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      className="p-0 m-0 overflow-hidden text-2xl font-thin"
    >
      <Grid item sm={12} md={6} className="relative">
        <Image
          className="relative -translate-x-20"
          src="/assets/elite.png"
          alt="illustration d'une personne utilisant l'application Leaya sur smartphone"
          width={700}
          height={676}
          style={{ borderRadius: '97px',}}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        className="relative flex-col px-10 md:pr-10 md:pl-0 py-10 md:py-0"
      >
        <h1
          className='pb-5'
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          CONNECTER L’ELITE AFRICAINE
        </h1>
        <p>
          <span style={{ 
            color: 'transparent',
            backgroundImage: `${theme.palette.background.paper}`,
            backgroundClip: 'text' 
          }}>
            LEAYA ELITE
          </span> est
          principalement destinée aux professionnels qui cherchent à étendre
          leur réseau et à explorer de nouvelles opportunités, mais aussi à ceux
          qui cherchent l’amour. Les différentes cibles de la plateforme sont :
        </p>
        <br />
        <div
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Homme et femme d’influence</span>
          <span> : cadre d’entreprise, politicien, auteur, etc</span>
        </div>
        <br />
        <div
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Homme et femme d’affaires</span> 
          <span> : entrepreneur, investisseur, trader, etc</span>
        </div>
        <br />
        <div
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Artistes</span>
          <span> : musique, cinéma, média, etc</span>
        </div>
        <br />
        <div
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Célébrités</span>
          <span> : sportif, animateur TV, influenceur, etc</span>
        </div>
      </Grid>
    </Grid>
  )
}