import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Typography} from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    return(
        <Grid>
            <Typography style = {{fontFamily: 'Raleway'}} variant = "h6"><b>Quick Menu</b></Typography>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Botanical Gardens Civil Marriage' >Botanical Gardens Civil Marriage</Link>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./Mons Calpe Suite Civil Marriage">Mons Calpe Suite Civil Marriage</Link>
                </Grid >
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./Rock Hotel Civil Marriage">Rock Hotel Civil Marriage</Link>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Sunborn Hotel Civil Marriage'>Sunborn Hotel Civil Marriage</Link>
                </Grid>
            </Grid>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Elopement - Registry Office' >Elopement - Registry Office</Link>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./The Marina Civil Marriage">The Marina Civil Marriage</Link>
                </Grid >
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./St Michael's Cave Civil Marriage">St Michael's Cave Civil Marriage</Link>
                </Grid>
                <Grid xs = {12} sm = {3}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Caleta Hotel Civil Marriage'>Caleta Hotel Civil Marriage</Link>
                </Grid>
            </Grid>

            <Grid container style = {{position: "relative", margin: "30px"}}>
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Terms and Conditions' >Terms and Conditions</Link>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./Legal Requirements">Legal Requirements</Link>
                </Grid >
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = "./Cookie Policy">Cookie Policy</Link>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Privacy Policy'>Privacy Policy</Link>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Work with us'>Work with us</Link>
                </Grid>
                <Grid xs = {12} sm = {2}>
                    <Link style = {{fontFamily: 'Raleway', color: "#8d6235"}} to = './Get married in Gibraltar'>Get married in Gibraltar</Link>
                </Grid>
            </Grid>

            <Grid>
                <Grid container style = {{position: "relative", marginTop: "30px"}}>
                <Grid style = {{textAlign: "center"}} xs = {12} sm = {4}>
                    <Typography style = {{fontFamily: 'Raleway'}}variant = "p"><b>Hour Weddings 5 Convent Place Gibraltar GX11 1 AA</b></Typography>
                </Grid>
                <Grid style = {{textAlign: "center"}} xs = {12} sm = {4}>
                    <Typography style = {{fontFamily: 'Raleway'}} variant = "p"><b>info@hourweddings.com  |  (+350) 5800  9685</b></Typography>
                </Grid>
                <Grid>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <PinterestIcon/>
                    <YouTubeIcon/>
                    <LinkedInIcon/>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Footer