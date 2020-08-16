import styles from './PricingTable.module.css'
import { useState } from 'react'

const PricingTable = (props) => {
    const [currency, setCurrency] = useState("€");
    const [campaign, setCampaign] = useState("Monthly")


    const handleCurrency = (e) => {
        setCurrency(e.target.value)
    }
    const handleCampaign = (e) => {
        setCampaign(e.target.value)
    }
    const convertBytes = function(bytes) {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
      
        if (bytes == 0) {
          return "n/a"
        }
      
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      
        if (i == 0) {
          return bytes + " " + sizes[i]
        }
      
        return (bytes / Math.pow(1024, i)).toFixed() + " " + sizes[i]
      }

    const tableData = props.data.map(e=>{
       
        return (
            <div id={e.Name} className={styles.campaign}>
                    <div>
                        {e.Name === "plus" ? <h4 style={{position:"absolute", top:"0", left:"50%", transform:"translate(-50%)", color:"green",fontWeight:"400", alignSelf:"center"}}>MOST POPULAR</h4> : null}
                        <h2>{e.Name.toUpperCase()}</h2>
                        <p>{currency} <span style={{fontSize:"20px", fontWeight:"bold"}}>{(campaign === "Monthly" ? (e.Pricing["1"] / 100) : campaign === "Annualy" ? ((e.Pricing["12"] / 100) / 12) : campaign === "2 years" ? ((e.Pricing["24"] / 100) / 24) : null).toFixed(2)}</span>/mo</p>
                        <p style={{fontSize:"13px"}}>Billed as {currency} {(campaign === "Monthly" ? ((e.Pricing["1"] / 100 ) * 12) : campaign === "Annualy" ? (e.Pricing["12"] / 100) : campaign === "2 years" ? (e.Pricing["24"] / 100) : null)} per year</p>
                    </div>
                    <div>
                    <h4 style={{fontWeight:"500", lineHeight:"1.4"}} >
                        {e.Name === "plus" ? "Full-featured mailbox with advanced protection" : null}
                        {e.Name === "professional" ? "ProtonMail for professionals and businesses " : null}
                        {e.Name === "visionary" ? "ProtonMail for families and small businesses" : null}
                    </h4>
                    </div>
                    <div className={styles.descriptionList}>
                        <ul>
                            <li>{e.MaxMembers} {e.Name === "professional" ? " - 5000 *" : null} user</li>
                            <li>{convertBytes(e.MaxSpace)} storage *</li>
                            <li>{e.MaxAddresses} addresses *</li>
                            <li>Supports {e.MaxVPN} domain</li>
                            <li>
                            {e.Name === "plus" ? "Supports folders, labels, filters, auto-reply, IMAP/SMTP and more" : null}
                            {e.Name === "professional" ? "Catch all e-mail, multi user management, priority support and more " : null}
                            {e.Name === "visionary" ? "Priority support" : null}

                            </li>
                            <li> {e.Name === "visionary" ? "Includes ProtonVPN" : "ProtonVPN (optional) *"}</li>
                        </ul>
                    </div>
                    <div>
                        <button className="mainButton">Select</button>
                    </div>
            </div>
        )
    })
        return(
    <React.Fragment>
        <div className={styles.wrapper}>
            <div className="container">
                <h2>Plans and prices</h2>
                <div className={styles.selectBox}>
                  <select onClick={handleCampaign}>
                    <option value="Monthly">
                        Monthly
                    </option>
                      
                    <option value="Annualy">
                        Annualy
                    </option>

                    <option value="2 years">
                        2 years
                    </option>
                 </select>  

                 <select onClick={handleCurrency}>
                    <option value="€" >
                        Euro
                    </option>

                    <option value="$" >
                        USD
                    </option>
                       
                    <option value="CHF" >
                        CHF
                    </option>
                 </select>  
                   

                </div>
                <div className={styles.tableWrapper}>
                    <div id="free" className={styles.campaign}>
                        <div>
                            <h2>FREE</h2>
                            <p>$0/mo</p>
                            <p style={{visibility:"hidden"}}>asdfasdfasfsadf</p>
                        </div>
                        <div>
                            <h4 style={{fontWeight:"500", lineHeight:"1.4"}} >
                            The basics for private and secure communications
                            </h4>
                        </div>

                        <div className={styles.descriptionList}>
                        <ul>
                            <li>1 user</li>
                            <li>500 MB storage</li>
                            <li>1 address</li>
                            <li>No domain support</li>
                            <li>ProtonVPN (optional) *</li>
                            <li style={{visibility:"hidden"}}>PERO</li>
                        </ul>
                        </div>
                        <div>
                        <button className="mainButton">Select</button>
                        </div>

                    </div>
                {tableData}

                </div>
            </div>
        </div>
    </React.Fragment>
    )
}
export default PricingTable