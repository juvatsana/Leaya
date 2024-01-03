import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

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
    <Grid container style={{ justifyContent: 'center' }}>
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
        <span style={{ fontWeight: 'bold', color: '#B18F40' }}>
          Besoin d’aide? Nous sommes là pour vous
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container style={{ justifyContent: 'center' }}>
            <Grid
              item
              xs={12}
              style={{ marginTop: '20px', marginBottom: '10px' }}
            >
              <label
                style={{
                  fontWeight: 'bold',
                  color: '#B18F40',
                }}
                htmlFor="nom"
              >
                Votre nom
              </label>
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  padding: '1px',
                  border: '1px solid',
                  borderRadius: '8px',
                  backgroundColor: '#B18F40',
                  width: '70%',
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
                style={{ fontWeight: 'bold', color: '#B18F40' }}
                htmlFor="email"
              >
                Votre e-mail
              </label>
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  padding: '1px',
                  border: '1px solid',
                  borderRadius: '8px',
                  backgroundColor: '#B18F40',
                  width: '70%',
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
                style={{ fontWeight: 'bold', color: '#B18F40' }}
              >
                Votre message
              </label>
            </Grid>
            <Grid item xs={12}>
              <textarea
                style={{
                  padding: '1px',
                  border: '1px solid',
                  borderRadius: '8px',
                  backgroundColor: '#B18F40',
                  width: '70%',
                  height: '110px',
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
                style={{ backgroundColor: '#B18F40', color: 'white' }}
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
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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
