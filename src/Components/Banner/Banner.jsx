import React from 'react'
import './Banner.css'
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <Container
            sx={{
                height: 400,
                display: 'flex',
                flexDirection: "column",
                paddingTop: 25,
                justifyContent: "space-around",
            }}
        >
            <div className="tagLine">
                <Typography
                    variant='h2'
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}
                >
                    Crypto Hunter
                </Typography>
                <Typography
                    variant='subtitle2'
                    sx={{
                        color: "darkgray",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                    }}
                >
                    Get all the info regarding your favorite Crypto Currency
                </Typography>
            </div>
            <Carousel />
        </Container>
      </div>
    </>
  )
}

export default Banner
