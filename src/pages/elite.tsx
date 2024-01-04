import { Grid } from '@mui/material'
import Image from 'next/image'

const Elite = () => {
  return (
    <Grid
      container
      style={{ color: 'white'}}
      className="p-0 m-0 font-thin text-2xl"
    >
      <Grid 
        item 
        sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }} 
        sm={12} 
        md={6}
        lg={6}  
        className="relative">
        <Image
          className="fixed bottom-0"
          src="/assets/phone_hand.png"
          alt="Une main tenant un smartphone utilisant l'application Leaya"
          width={534}
          height={850}
          style={{height: '80vh', width: 'auto'}}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={12}
        lg={6}
        className="relative flex-col text-justify md:text-2xl px-10"
        // style={{fontSize: "24px", padding: '5%'}}
      >
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '40px',
            fontWeight: '600',
            paddingBottom: '2rem',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          COMMENT REJOINDRE <span style={{ 
            color: 'transparent',
            backgroundImage: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
            backgroundClip: 'text'  }}>
              LEAYA ELITE
            </span>
        </h1>
        <p>
          <span 
          style={{ 
            color: 'transparent',
            backgroundImage: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
            backgroundClip: 'text' 
          }}>
            LEAYA ELITE 
          </span> est une application de rencontres payante accessible 
        sur les plateformes App Store et Play Store.
        </p>
        <br />
        <p>L'adhésion est conditionnée par :</p>
        <br />
        <div
          style={{
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          Une recommandation ou une invitation d'un utilisateur déjà enregistré sur l'application.
        </div>
        <br />
        <div
          style={{
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          La validation du dossier de candidature que soumet l’utilisateur.
        </div>
        <br />
        <div
          style={{
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
            borderRadius: '35px',
            padding: '15px',
          }}
        >
          <p>Le paiement d’un abonnement</p>
          <br />
          <p>Mensuel :  39.99 €</p>
          <p>Trimestriel : 104.99 €</p>
          <p>Annuel : 404.99 €</p>
        </div>
      </Grid>
    </Grid>
  )
}

export default Elite
