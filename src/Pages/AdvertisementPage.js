import React from 'react'

//image imports
import introcube from '../images/introcube.png'
import introstairs from '../images/introstairs.png'
import intropillar from '../images/intropillar.png'
import introhalfcubes from '../images/introhalfcubes.png'

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui imports
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';

//project imports
import Firstrow from '../component/Firstrow'
import CenterRow from '../component/CenterRow'
import Footer from '../component/Footer'

const AdvertisementPage = () => {

    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));


  return (
    <Grid direction={'column'} justifyContent={'space-between'} sx={{width:'100vw'}}>
    <Grid container item direction={'row'}>
       <Firstrow/>
    </Grid>
    <Grid item>
      <img style={{ marginTop:phone?'10rem':'',marginLeft: '8rem', width: phone?'15rem':'4.625rem', height:phone?'15rem': '4.57575rem'}} src={introcube} alt='cube' />
    </Grid>
    <Grid>
      <img  style={{width:phone?'20rem': '12.5rem',height: '16.3065rem',position:'absolute',top:phone?'12rem':'4rem',left:phone?'50rem':'65rem'}} src={introstairs} alt='stairs'/>
    </Grid>

    <CenterRow/>
   
   
    <Grid>
      <img style={{width:phone?'20rem': '11.75rem',height: phone?'15rem':'11.02988rem',position:'absolute',bottom:phone?'-35rem':'3rem',left:phone?'5rem':'11rem'}} src={introhalfcubes} alt='intropillar'/>
    </Grid>

    <Grid>
      <img style={{width:phone?'20rem':'17.5rem',height: '20.61738rem',position:'absolute',left:'53rem',bottom:phone?'-35rem':'-3rem'}} src={intropillar} alt='introcubes'/>
    </Grid>

    <Footer/>
  </Grid>
  )
}

export default AdvertisementPage