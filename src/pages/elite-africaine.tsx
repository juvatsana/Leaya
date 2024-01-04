import { Grid } from '@mui/material'
import Image from 'next/image'

const Elite = () => {
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="p-0 m-0 overflow-hidden"
    >
      <Grid item sm={12} md={6} className="relative">
        <Image
          className="relative -translate-x-20"
          src="/assets/elite.png"
          alt="illustration d'une personne utilisant l'application Leaya sur smartphone"
          width={1000}
          height={676}
          style={{ borderRadius: '97px',}}
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
          <span style={{ color: '#B18F40' }}>LEAYA ELITE</span> est
          principalement destinée aux professionnels qui cherchent à étendre
          leur réseau et à explorer de nouvelles opportunités, mais aussi à ceux
          qui cherchent l’amour. Les différentes cibles de la plateforme sont :
        </p>
        <br />
        <div
          style={{
            backgroundColor: '#B18F40',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Homme et femme d’influence</span>
          : cadre d’entreprise, politicien, auteur, etc
        </div>
        <br />
        <div
          style={{
            backgroundColor: '#B18F40',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Homme et femme d’affaires</span>:
          entrepreneur, investisseur, trader, etc
        </div>
        <br />
        <div
          style={{
            backgroundColor: '#B18F40',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Artistes</span>: musique, cinéma,
          média, etc
        </div>
        <br />
        <div
          style={{
            backgroundColor: '#B18F40',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Célébrités</span>: sportif,
          animateur TV, influenceur, etc
        </div>
      </Grid>
    </Grid>
  )
}

// LEAYA ELITE est principalement destinée aux professionnels qui cherchent à étendre leur réseau et à explorer de nouvelles opportunités, mais aussi à ceux qui cherchent l’amour. Les différentes cibles de la plateforme sont : Homme et femme d’influence : cadre d’entreprise, politicien, auteur, etc Homme et femme d’affaires : entrepreneur, investisseur, trader, etc
//Artistes : musique, cinéma, média, etc
//Célébrités : sportif, animateur TV, influenceur, etc

export default Elite
