import React from 'react'

//image imports
import apple from '../images/apple.svg'
import googleplay from '../images/googleplay.svg'
import frame from '../images/frame.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import Downarrow from '../images/Downarrow.svg'

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui imports
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Grid container item direction={'row'} >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: phone?'50rem':'20rem', marginLeft: phone?'8rem':'4rem', padding: phone?'3rem':'1rem', position: 'absolute',
            left:phone?'8rem':'4rem',
            border:'0.1rem solid white'
        }}>
                <img src={apple} alt='apple' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'2rem':'0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    APP_STORE
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: phone?'50rem':'20rem', marginLeft: phone?'-3rem': '3rem', padding: phone?'3rem':'1rem', position: 'absolute',
            left:phone?'45rem':'15rem',
             border:'0.1rem solid white'
         }} >
                <img src={googleplay} alt='playstore' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'2rem':'0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    PLAY_STORE
                </Typography>
            </Box>

            <Box sx={{ marginTop: phone?'30rem':'20rem', marginLeft: '30rem',padding: '1rem',position:'absolute',left:phone?'4rem':'18rem'}}>
                <img style={{width: phone?'4rem':'1.125rem',height:phone?'6rem': '1.875rem'}} src={Downarrow} alt='downArrow'/>
            </Box>

            <Box sx={{ marginTop:'20rem', marginLeft: '30rem', padding: '1rem' }}>
                <Typography sx={{
                    color: '#B6B6B6',
                    fontFamily: 'Mulish',
                    fontSize: phone?'2rem':'0.625rem',
                    fontStyle: 'normal',
                    fontWeight: 200,
                    lineHeight: phone?'2rem':'0.8125rem',
                    position: 'absolute',
                    right:phone?'-44rem':'17rem',
                    bottom: phone?'-75rem':'1.25rem',
                }}>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br />
                    See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br />
                    trading offered by Cash App. Cash App Investing does not trade bitcoin and <br />
                    Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br />
                    services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', marginLeft: phone?'26rem':'45rem', marginTop: phone?'60rem':'19rem', padding: '1rem' }}>
                <img style={{width:phone?'5rem':''}} src={frame} alt='frame' />
                <img style={{width:phone?'5rem':''}} src={twitter} alt='twitter' />
                <img style={{width:phone?'5rem':''}} src={instagram} alt='instagram' />
            </Box>
        </Grid>
    )
}

export default Footer