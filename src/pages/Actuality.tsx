import { Grid } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'

export default function Actuality() {

  return (
    <Grid
      container
      className="h-screen"
    >
      <Grid
        item
        xs={12}
        justifyContent="center"
      >
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
          Actualité
        </h1>
        <BrowserView>
            <iframe
              src="https://player.vimeo.com/video/908412098?h=6729a43105"
              frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
              className="m-auto aspect-video sm:w-4/5 lg:w-3/5 px-10"
              title="Leaya presentation">
            </iframe>
        </BrowserView>
        <MobileView>
            <iframe
              src="https://player.vimeo.com/video/908412042?h=66da399e54"
              frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
              className="m-auto aspect-video sm:w-4/5 lg:w-3/5 px-10"
              title="Leaya presentation">
            </iframe>
        </MobileView>

      </Grid>
    </Grid>
  )
}

