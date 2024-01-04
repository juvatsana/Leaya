import { Grid } from '@mui/material'
import Image from 'next/image'

const Elite = () => {
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="p-0 m-0 overflow-hidden font-thin"
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
        className="relative flex-col  p-10 md:text-2xl "
      >
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '40px',
            fontWeight: '600',
            padding: '2rem',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          CONNECTER L’ELITE AFRICAINE
        </h1>
        <p>
          <span style={{ 
            color: 'transparent',
            backgroundImage: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
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
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
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
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
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
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
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
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
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

// LEAYA ELITE est principalement destinée aux professionnels qui cherchent à étendre leur réseau et à explorer de nouvelles opportunités, mais aussi à ceux qui cherchent l’amour. Les différentes cibles de la plateforme sont : Homme et femme d’influence : cadre d’entreprise, politicien, auteur, etc Homme et femme d’affaires : entrepreneur, investisseur, trader, etc
//Artistes : musique, cinéma, média, etc
//Célébrités : sportif, animateur TV, influenceur, etc

export default Elite
