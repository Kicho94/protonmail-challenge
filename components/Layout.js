import Header from './Header/Header';
import Head from 'next/head';


const Layout = (props) => {
 return(
    <React.Fragment>
      <Head>
        <title>ProtonMail - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
      </Head>
      <Header/>    
      {props.children}
    </React.Fragment>
 )
}

export default Layout