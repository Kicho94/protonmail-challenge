import styles from './Header.module.css'
import LanguageList from './LanguageList'
import { useState, useEffect } from 'react';
import {throttle} from 'lodash'


const Header = (props) => {
    const [languages, setLanguages] = useState(LanguageList)
    const [scrollSize, setScrollSize] = useState(false)
    

    // function which takes clicked language and puts it on top, puts English second and sorts the array alphabeticaly
const handleChange = (event) => {
    
      let newLanguages = languages.slice()

      newLanguages = newLanguages.filter(e=>{
       return  e !== event.target.id
      })
       
        newLanguages =  newLanguages.filter(e=>{
         return e !== "EN - English"
      })
      newLanguages = newLanguages.filter(e=>{
          return e !== "Help Translate"
      })
      
      newLanguages.sort();
      newLanguages.push("Help Translate");
      newLanguages.unshift(event.target.id);
      if(event.target.id !== "EN - English"){
        newLanguages.splice(1,0,"EN - English" )
      };
     
      setLanguages(newLanguages); 
    }
    //captures scroll size and if scroll size is bigger than 50 sets it to true, othervise false
const handleWindowSize = () =>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setScrollSize(true)
      } else {
        setScrollSize(false)
      }
}
// adding throttle
const handleDocumentScrollThrottled = throttle(handleWindowSize, 250);

// making sure that handleDocumentScrollThrottled gets called on scroll
useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);
    return () => window.removeEventListener("scroll", handleDocumentScrollThrottled);
  });

    return(
        <nav className={styles.wrapper}>
            <div className={styles.headerTop }> 
                <div className={styles.headerTopItems +" container" }>
                    <a href="https://facebook.com/ProtonMail" rel="noreferrer noopener" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>

                    <a href="https://twitter.com/ProtonMail" rel="noreferrer noopener"  target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>

                    <a href="https://reddit.com/r/ProtonMail" rel="noreferrer noopener"  target="_blank">
                        <i className="fa fa-reddit-alien"></i>
                    </a>

                    <a href="https://instagram.com/ProtonMail" rel="noreferrer noopener"  target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a href="https://mastodon.social/@protonmail" rel="noreferrer noopener" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" className="mastodon-icon">
                            <path d="M13.578 5.205c0-2.778-1.823-3.593-1.823-3.593-.916-.42-2.493-.598-4.132-.612h-.044c-1.64.014-3.211.193-4.132.612 0 0-1.823.815-1.823 3.593 0 .636-.01 1.398.01 2.203.067 2.72.496 5.396 3.009 6.062a9.46 9.46 0 0 0 2.956.328c1.451-.082 2.27-.516 2.27-.516l-.047-1.056s-1.042.328-2.204.29c-1.153-.04-2.373-.126-2.56-1.544a2.626 2.626 0 0 1-.025-.4s1.133.28 2.57.342c.878.044 1.703-.048 2.542-.15 1.606-.192 3.004-1.18 3.178-2.082.28-1.428.255-3.477.255-3.477zm-2.146 3.578h-1.33V5.518c0-.69-.29-1.037-.869-1.037-.641 0-.96.415-.96 1.235v1.789H6.949v-1.79c0-.819-.323-1.234-.96-1.234-.579 0-.868.348-.868 1.037v3.265H3.775V5.417c0-.69.173-1.235.525-1.64.362-.405.84-.612 1.428-.612.68 0 1.2.26 1.538.786l.333.555.332-.555c.343-.526.859-.786 1.539-.786.588 0 1.065.207 1.427.612.352.405.526.95.526 1.64v3.366z"></path>
                        </svg>
                    </a>
                    <span className={styles.headerTopUl}>
                         <ul className={styles.visible}>
                         
                            {languages.map((e,index)=>{
                              
                                if(index === 0) {
                                    return   <li id={e} onClick={handleChange} className={styles.visible}><i class="fa fa-globe"></i> {e}</li>
                                } else {
                                return <li id={e} onClick={handleChange} className={styles.hidden}><i class="fa fa-globe" style={{visibility:"hidden"}}></i> {e}</li>
                                }
                            })}
                         </ul> 
                    </span>
                   
                </div>
               
             </div>
            <div  style={scrollSize ? {padding:"1.5rem 0 ", transition:"all 1 ease"} : null} className={styles.headerBottom}>
                <div className={styles.headerBottomContent + " container"}>
                    <div >
                        <a href="https://protonmail.com/" rel="noreferrer noopener" target="_blank"><img height="23" src="/images/pm-logo-white.svg"></img></a>
                    </div>

                    <div style={{paddingTop:"0.65em"}}>
                        <ul className={styles.bottomUl}>
                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/about">About</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/security-details">Security</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/blog/">Blog</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://careers.protonmail.com/">Careers</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/support/">Support</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/business/">Business</a></li>

                            <li className={styles.listItems}><a rel="noreferrer noopener" target="_blank" href="https://protonvpn.com/?utm_campaign=ww-all-2a-vpn-pmm_mail-cross-promotion&utm_source=protonmail.com&utm_medium=link&utm_content=static&utm_term=header_menu_link">VPN</a></li>

                            <li><a rel="noreferrer noopener" target="_blank" href="https://mail.protonmail.com/login" className={styles.buttonLogIn}>LOG IN</a></li>

                            <li><a rel="noreferrer noopener" target="_blank" href="https://protonmail.com/signup" className={styles.buttonSignUp}>SIGN UP</a></li>

                        </ul>
                    </div>
                   
                </div>
            </div>  
        </nav>
        
    )
}

export default Header