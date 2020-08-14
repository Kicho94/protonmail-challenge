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
        <React.Fragment>
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
                    <i class="fab fa-mastodon"></i>
                    </a>
                    <span className={styles.headerTopUl}>
                         <ul className={styles.visible}>
                         
                            {languages.map((e,index)=>{
                              
                                if(index === 0) {
                                    return   <li key={index} id={e} onClick={handleChange} className={styles.visible}><i className="fa fa-globe"></i> {e}</li>
                                } else {
                                return <li key={index} id={e} onClick={handleChange} className={styles.hidden}><i className="fa fa-globe" style={{visibility:"hidden"}}></i> {e}</li>
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
            <div style={{height:"160px"}}></div>
        </React.Fragment>
    )
}

export default Header