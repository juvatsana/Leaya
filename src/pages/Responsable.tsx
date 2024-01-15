import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function Responsable() {
  const theme = useTheme()
  return (
    <Grid
      container
      style={{ color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="m-0 overflow-hidden font-thin"
    >
      <Grid item sm={11} md={10} className="relative flex-col text-2xl p-10">
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: 'transparent',
              backgroundImage: `${theme.palette.background.paper}`,
              backgroundClip: 'text',
            }}
          >
            LEAYA ELITE
          </span>
          , UNE PLATEFORME RESPONSABLE
        </h1>
        <p className="pt-5">
          <span
            style={{
              color: 'transparent',
              backgroundImage: `${theme.palette.background.paper}`,
              backgroundClip: 'text',
            }}
          >
            LEAYA ELITE
          </span>{' '}
          entend construire une relation de confiance avec les différentes
          parties prenantes et de favoriser un environnement en ligne plus sain
          et plus éthique. C’est ainsi que nous accordons une importance
          capitale aux points ci-dessous :
        </p>
        <br />
        <div
          className="px-5 py-1"
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Diversité et Inclusion</span> :{' '}
          <br />
          Conformément à nos valeurs, Leaya entend encourager la diversité et
          l'inclusion au sein de la plateforme pour représenter au mieux la
          diversité culturelle africaine.
        </div>
        <br />
        <div
          className="px-5 py-1"
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>
            Éducation et Sensibilisation
          </span>{' '}
          : <br />
          En sensibilisant les utilisateurs aux enjeux du consentement et du
          respect mutuel dans les rencontres en ligne.
        </div>
        <br />
        <div
          className="px-5 py-1"
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Engagement Communautaire</span> :{' '}
          <br />
          Nous comptons promouvoir des activités bénévoles ou des projets
          communautaires en partenariat avec des organisations locales sur notre
          application.
          <span style={{ fontStyle: 'italic' }}>
            {' '}
            Nous prévoyons également de reverser une part de notre chiffre
            d’affaires à des ONG œuvrant dans la lutte contre les violences
            faites aux femmes.
          </span>
        </div>
        <br />
        <div
          className="px-5 py-1"
          style={{
            background: `${theme.palette.background.paper}`,
            borderRadius: '35px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>
            Promotion de la Culture Africaine
          </span>{' '}
          : <br />
          Nous prévoyons mettre en valeur la richesse des cultures africaines à
          travers l'application en promouvant des langues locales, des
          événements culturels, des traditions et des valeurs positives. Aussi,
          nous soutiendrons des initiatives locales de préservation de la
          culture et de l'histoire africaines.
        </div>
        <br />
      </Grid>
    </Grid>
  )
}
