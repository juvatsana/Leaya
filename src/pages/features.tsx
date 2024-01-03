import CardFeature from '@/components/CardFeature/CardFeature'
import { Grid } from '@mui/material'
import Link from 'next/link'

const Features = () => {
  const features = [
    {
      mediaPath: 'assets/featuresPictures/feature1.png',
      mediaTitle: 'La présentation vidéo',
      title: 'La présentation vidéo',
      url: 'feature_video_presentation',
    },
    {
      mediaPath: 'assets/featuresPictures/feature2.png',
      mediaTitle: 'La recherche avancée',
      title: 'La recherche avancée',
      url: 'feature_advanced_search',
    },
    {
      mediaPath: 'assets/featuresPictures/feature3.png',
      mediaTitle: 'La messagerie instantanée',
      title: 'La messagerie instantanée',
      url: 'feature_instant_messaging',
    },
    {
      mediaPath: 'assets/featuresPictures/feature4.png',
      mediaTitle: 'Le système de Match',
      title: 'Le système de Match',
      url: 'feature_matching_system',
    },
    {
      mediaPath: 'assets/featuresPictures/feature5.png',
      mediaTitle: 'Les notifications et alertes',
      title: 'Les notifications et alertes',
      url: 'feature_notifications',
    },
  ]

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="start"
        justifyContent="center"
        style={{ color: 'white', fontSize: '24px' }}
      >
        <Grid item xs={11}>
          <h1
            style={{
              position: 'relative',
              color: 'white',
              fontSize: '36px',
              fontWeight: '600',
              padding: '2rem',
              lineHeight: '3.5rem',
              textAlign: 'center',
            }}
          >
            UNE APPLICATION AUX MULTIPLES FONCTIONNALITÉS
          </h1>
          <p style={{ fontSize: '24px', paddingBottom: '2rem' }}>
            L'une des caractéristiques uniques de{' '}
            <span style={{ color: '#B18F40' }}>LEAYA ELITE</span> est son
            algorithme sophistiqué qui permet de trouver des personnes
            compatibles en fonction des données collectées. Avec{' '}
            <span style={{ color: '#B18F40' }}>LEAYA ELITE</span>, les
            utilisateurs bénéficieront de fonctionnalités pratiques telles que :
          </p>
        </Grid>
        <Grid
          container
          xs={11}
          direction="row"
          alignItems="start"
          justifyContent="center"
        >
          {features.map((feature, key) => (
            <Link href={feature.url} key={key}>
              <CardFeature key={key} {...feature} />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Features
