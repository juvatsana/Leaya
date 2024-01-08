import emailjs from '@emailjs/browser'
import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from '@mui/material/styles';


export default function Contact() {
  const theme = useTheme()
  const { register, handleSubmit } = useForm()
  const form = useRef<any>()

  const onSubmit = (data: any) => {
    console.log(data)
    console.log(form.current)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const styleLink: CSSProperties = {
    display: 'flex',
    marginTop: '5px',
    marginBottom: '5px',
    color: 'white',
  }

  const styleIcon: CSSProperties = {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '5px',
    marginBottom: '5px',
    color: 'white',
  }

  return (
    <Grid container style={{ justifyContent: 'center', fontSize: '24px' }}>
      <Grid item sm={0} md={6}></Grid>
      <Grid item xs={12} md={6} style={{ paddingLeft: '1rem' }}>
        <h1
          style={{
            color: 'white',
            fontSize: '40px',
            fontWeight: '600',
          }}
        >
          Formulaire de contact
        </h1>
        <span style={{ 
          fontWeight: 'bold', 
          color: 'transparent', 
          backgroundImage: `${theme.palette.background.paper}`, 
          backgroundClip: 'text',
        }}>
          Besoin d’aide ? Nous sommes là pour vous
        </span>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container style={{ justifyContent: 'center' }}>
            <Grid
              item
              xs={12}
              style={{ marginTop: '20px', marginBottom: '10px' }}
            >
              <label
                style={{
                  fontWeight: 'bold',
                  color: 'transparent', 
                  backgroundImage: `${theme.palette.background.paper}`, 
                  backgroundClip: 'text',
                }}
                htmlFor="nom"
              >
                Votre nom
              </label>
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  background: `${theme.palette.background.paper}`,
                  width: '70%',
                  color: 'white',
                }}
                type="text"
                id="nom"
                className="placeholder-white text-sm"
                placeholder="Veuillez entrer votre nom"
                {...register('nom', { required: 'Ce champ est requis' })}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              <label
                style={{ 
                  fontWeight: 'bold', 
                  color: 'transparent', 
                  backgroundImage: `${theme.palette.background.paper}`, 
                  backgroundClip: 'text', 
                }}
                htmlFor="email"
              >
                Votre e-mail
              </label>
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  background: `${theme.palette.background.paper}`,
                  width: '70%',
                  color: 'white',
                }}
                className="placeholder-white text-sm"
                type="email"
                id="email"
                placeholder="Veuillez entrer votre e-mail"
                {...register('email', {
                  required: 'Ce champ est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Adresse e-mail invalide',
                  },
                })}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              <label
                htmlFor="message"
                style={{ 
                  fontWeight: 'bold', 
                  color: 'transparent', 
                  backgroundImage: `${theme.palette.background.paper}`, 
                  backgroundClip: 'text', 
                }}
              >
                Votre message
              </label>
            </Grid>
            <Grid item xs={12}>
              <textarea
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  background: `${theme.palette.background.paper}`,
                  width: '70%',
                  height: '110px',
                  color: 'white',
                }}
                className="placeholder-white text-sm"
                placeholder="Veuillez entrer votre message"
                id="message"
                {...register('message', { required: 'Ce champ est requis' })}
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: '20px' }}>
              <Button
                size="small"
                style={{ 
                  background: `${theme.palette.background.paper}`, 
                  color: 'white' 
                }}
                type="submit"
                variant="outlined"
              >
                Envoyer
              </Button>
            </Grid>
            <Grid item xs={2} style={{ ...styleIcon, marginTop: '40px' }}>
              <Link href="#">
                <Image
                  src="./assets/email_gold.svg"
                  alt="Email"
                  width="50"
                  height="50"
                />
              </Link>
            </Grid>
            <Grid item xs={10} style={{ ...styleLink, marginTop: '40px' }}>
              contact@leayaapp.com
            </Grid>
            <Grid item xs={2} style={styleIcon}>
              <Link href="#">
                <Image
                  src="./assets/instagram_gold.svg"
                  alt="Instagram"
                  width="50"
                  height="50"
                />
              </Link>
            </Grid>
            <Grid item xs={10} style={styleLink}>
              @leaya.elite
            </Grid>
            <Grid item xs={2} style={styleIcon}>
              <Link href="#">
                <Image
                  src="./assets/facebook_gold.svg"
                  alt="Facebook"
                  width="50"
                  height="50"
                />
              </Link>
            </Grid>
            <Grid item xs={10} style={styleLink}>
              @leayaelite
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
