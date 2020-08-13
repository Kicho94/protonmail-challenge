import styles from '../styles/Home.module.css';
import CenteredText from '../components/Index/CenteredText/CenteredText';
import Badge from '../components/Index/Badge/Bagde';

const comSupportedContent = "ProtonMail is community software, funded by the community, and open source. We do not show ads or make money by abusing your privacy. Instead, we depend on your support to keep the service running. Revenue from paid accounts is used to further develop ProtonMail and support free users such as democracy activists and dissidents who need privacy but can't necessarily afford it."
const pero = <button style={{padding:"15px", border:"1px solid black"}}>Pero</button>


export default function Home() {
  return (
    <React.Fragment>

        <CenteredText 
         title={"Community Supported."} 
         text={comSupportedContent}
         button={
           <>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>         
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>         
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>         
          <Badge name="24/7 Operations" destination="https://www.w3schools.com"/>
          </>  
        }
         /> 
        <div style={{width:"100%", background:"grey",height:"500px"}}>[asoidfh[auisdhfuaidfipasdf[aoidsihfiau[shdfasdfuiasdf</div>
    </React.Fragment>

   
  )
}
