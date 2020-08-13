import styles from '../styles/Home.module.css';
import CenteredText from '../components/Index/CenteredText/CenteredText';
import Badge from '../components/Badge/Bagde';
import TextPicture from '../components/Index/TextPicture/TextPicture';
import Contribute from '../components/Contribute';
import PrimaryAnchor from '../components/PrimaryAnchor/PrimaryAnchor';

import { ProtonMailFeatures } from '../assets/ProtonMailPricing';


const comSupportedContent = "ProtonMail is community software, funded by the community, and open source. We do not show ads or make money by abusing your privacy. Instead, we depend on your support to keep the service running. Revenue from paid accounts is used to further develop ProtonMail and support free users such as democracy activists and dissidents who need privacy but can't necessarily afford it."
const pero = <button style={{padding:"15px", border:"1px solid black"}}>Pero</button>


export default function Home() {

  //function that renders a TextPictures component for each of the ProtonMail features 
const features = ProtonMailFeatures.map((item,index) => {
  if(index % 2 === 0){
    return (
    <TextPicture
    title={item.title}
    content={item.content}
    image={item.image}
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
        />
      )
  }
}) 
// function that renders Badge component for each of the ProtonMail features
const badges = ProtonMailFeatures.map((item)=>{
  return (
    <Badge 
    name={item.title}
    destination={`#${item.title}`}
    />
  )
})

  return (
    <React.Fragment>

        <CenteredText 
         title="Community Supported."
         text={comSupportedContent}
         /> 
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
     
        <div style={{padding:"1rem 0 4rem"}}>
          <div className="container">
            <p>Proton Technologies AG</p>
            <div className={styles.contactCols + " row"} style={{color:"#848792"}}>
              <div >
                <p>
                  <span>Chemin du Pré-Fleuri, 3</span>
                  <br></br>
                  <span>CH-1228 Plan-les-Ouates, Genève,</span>
                  <br></br>
                  <span>Switzerland</span>
                </p>
              </div>

              <div>
                <p>
                  <i className="fa fa-envelope"></i><span> General: </span><a>Show email</a><br></br>
                  <i className="fa fa-envelope"></i><span> Media: </span><a href="mailto:media@protonmail.com">media@protonmail.com</a><br></br>
                  <i className="fa fa-envelope"></i><span> Legal: </span><a href="mailto:legal@protonmail.com">legal@protonmail.community</a><br></br>
                  <i className="fa fa-envelope"></i><span> Partnership: </span><a href="mailto:p%61r%74n%65%72%73@p%72oton%6da%69l%2ecom">partners@protonmail.com</a>
                </p>
              </div>

              <div>
              <p>
                  <i className="fa fa-envelope"></i><span> Security: </span><a>security@protonmail.com</a><br></br>
                  <i className="fa fa-key"></i><br></br>
                  <span> Abuse: </span><a href="mailto:security@protonmail.com">abuse@protonmail.com</a><br></br>
                  <span> For legal/police inquiries</span><br></br><a href="https://protonmail.com/law-enforcement">click here</a>
                </p>
              </div>

              <div>
                <p>
                  <span>For support inquiries, please visit</span><a href="https://protonmail.com/support/"><br></br><i className="fa fa-arrow-right"></i> protonmail.com/support</a>
                </p>
              </div>

            </div>
          </div>
        </div>
    </React.Fragment>

   
  )
}
