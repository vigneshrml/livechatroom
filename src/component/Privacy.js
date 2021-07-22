import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <Container maxWidth="lg" >
          <Button to="/dashboard" component={Link} variant='contained' color='primary' size='small' style={{marginTop : 20}}>Back To Home</Button>
        <Typography variant='caption'>
        <h2>Privacy Policy</h2>
          <div>
          <p>
            At KCEspot.in, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by KCEspot.in and how it is used.
          </p>
          <p>
            <strong>Log Files</strong><br></br>
            Like many other Web sites, www.KCEspot.in makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and the number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
          </p>
          <p>
            <strong>Cookies and Web Beacons</strong><br></br>
            KCEspot.in does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.
          </p>
          <p>
            <strong>DoubleClick DART Cookie</strong><br></br>
            Google, as a third party vendor, uses cookies to serve ads on KCEspot.in.
            <br></br>
            Google’s use of the DART cookie enables it to serve ads to users based on their visit to KCEspot.in and other sites on the Internet.
            <br></br>
            Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL – <a href="https://www.google.com/privacy_ads.html">http://www.google.com/privacy_ads.html</a>
          </p>
          <p>
            Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include Google Adsense
          </p>
          <p>
            These third-party ad servers or ad networks use technology to the advertisements and links that appear on KCEspot.in send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and/or to personalize the advertising content that you see.
          </p>
          <p>
            KCEspot.in has no access to or control over these cookies that are used by third-party advertisers.
          </p>
          <p>
            You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. KCEspot.in‘s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or websites.
          </p>
          <p>
            If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers’ respective websites.
          </p>
          </div>
        </Typography>
        </Container>
    )
}
