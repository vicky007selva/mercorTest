import React from 'react'

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//image imports 
import introphone from '../images/introphone.png'

//import material ui
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const CenterRow = () => {

    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

    console.log('phone'+phone)
    console.log('tablet'+tablet)
    console.log('laptop'+laptop)
    console.log('desktop'+desktop)
    console.log('largescreen'+largescreen)
    return (
        <>
            <Grid sx={{ marginTop: phone?'10rem':'6rem', marginLeft:phone?'10rem':'' }}>
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'20rem':'12.0625rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '10.375rem', /* 86.01% */
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase'
                }}>
                    CASH
                </Typography>
            </Grid>

            <Grid >
                <img style={{ width: phone?'30rem':'23.125rem', height: phone?'40rem':'28.31769rem', marginLeft: phone?'28rem':'36.5rem', position: 'absolute', top: phone?'36rem':'12rem' }} src={introphone} alt="phone" />
            </Grid>

            <Grid>
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'20rem':'12.0625rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '10.375rem', /* 86.01% */
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                    position: 'absolute',
                    top: phone?'55rem':'26rem',
                    left: phone?'20rem':tablet? '34rem':laptop?'30rem':desktop?'34rem':''
                }}>
                    APP
                </Typography>
            </Grid>
        </>
    )
}

export default CenterRow