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
        style={{ color: 'white'}}
        className='font-thin text-2xl'
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
          <p style={{ paddingBottom: '2rem' }}>
            L'une des caractéristiques uniques de{' '}
            <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)', backgroundClip: 'text'  }}>LEAYA ELITE</span> est son
            algorithme sophistiqué qui permet de trouver des personnes
            compatibles en fonction des données collectées. Avec{' '}
            <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)', backgroundClip: 'text'  }}>LEAYA ELITE</span>, les
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
            <Link href={feature.url} key={key} className='py-2 md:py-0'>
              <CardFeature key={key} {...feature} />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Features
