import CenteredText from '../components/Index/CenteredText/CenteredText';
import Badge from '../components/Badge/Bagde';
import TextPicture from '../components/Index/TextPicture/TextPicture';
import Contribute from '../components/Contribute';
import PrimaryAnchor from '../components/PrimaryAnchor/PrimaryAnchor';
import Contact from '../components/Contact'
import PricingTable from '../components/Index/PricingTable/PricingTable';
import Footer from '../components/Footer/Footer'

import { ProtonMailFeatures } from '../assets/ProtonMailPricing';
import { useEffect, useRef } from 'react';

const comSupportedContent = "ProtonMail is community software, funded by the community, and open source. We do not show ads or make money by abusing your privacy. Instead, we depend on your support to keep the service running. Revenue from paid accounts is used to further develop ProtonMail and support free users such as democracy activists and dissidents who need privacy but can't necessarily afford it."

export default function Home(props) {

  let refs = {}

  useEffect(()=>{
    console.log(refs)
  },)
  
const pricingPlans = props.requestPlans.filter((e)=>{
  if(e.Name === "plus" || e.Name === "professional" || e.Name === "visionary"){
    return e
  } else {
    return
  }
})
  //function that renders a TextPictures component for each of the ProtonMail features 
const features = ProtonMailFeatures.map((item,index) => {
  
  refs[item.title] = useRef(null)
  if(index % 2 === 0){
    return (
    <TextPicture
    title={item.title}
    content={item.content}
    image={item.image}
    forwardedRef={refs[item.title]}
    />
    )
    }
    else {
      return(
        <TextPicture
        title={item.title}
        content={item.content}
        image={item.image}
        textRight={true}
        forwardedRef={refs[item.title]}
        />
      )
  }
}) 
// function that renders Badge component for each of the ProtonMail features
const badges = ProtonMailFeatures.map((item)=>{
  let scrollToMyRef = () => window.scrollTo({
    top:(refs[item.title].current.offsetTop - 105),
    behavior: 'smooth'
  }) 
  return (
    <Badge 
    name = {item.title}
    destination = {`#${item.title}`}
    func={scrollToMyRef}
    />
  )
})

  return (
    <React.Fragment>

        <CenteredText 
         title="Community Supported."
         text={comSupportedContent}
         /> 
         <PricingTable data={pricingPlans}/>
         <CenteredText
         title="Why pay for ProtonMail?"
         text="ProtonMail is the world's largest secure email service with millions of users, and the service requires extensive infrastructure and expertise to run. Our mandate from the community is to provide the highest level of security and privacy, with the cost considerations secondary."
         button={badges}
         />  
        {features}
        <Contribute/>

        <div style={{padding:"6rem", textAlign:"center", color:"#fff", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundImage:"url(https://protonmail.com/images/pricing/pricing-enterprise.jpg)"}}>
          <h3 style={{marginTop:"20px", marginBottom:"10px"}}>Do you need more?</h3>
          <p style={{fontSize:"21px", marginBottom:"20px", lineHeight:"1.4"}}>We also offer custom enterprise plans to fit into your business.</p>
          <PrimaryAnchor destination="mailto:contact@protonmail.com" large={true} title="CONTACT OUR SALES TEAM"/>
        </div>

        <div style={{padding:"3rem 0 4rem", borderTop:"1px solid #eee", borderBottom:"1px solid #eee"}}>
          <div className="container" style={{textAlign:"center"}}>
            <h5>Get your secure email account</h5>
            <PrimaryAnchor large={true} title="Create Acount" destination="https://protonmail.com/signup"/>
          </div>
        </div>
        <Contact/>
        <Footer/>
     
    </React.Fragment>

   
  )
}

export async function getStaticProps() {
  
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('x-pm-appversion', 'Other');
  myHeaders.append('x-pm-apiversion', '3');
  myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

  const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
  };

  const response = await fetch(`https://api.protonmail.ch/payments/plans?EUR`, myInit)
  const result = await response.json();


  return {
    props: {requestPlans: result.Plans}, 
  }
}
