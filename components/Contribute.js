import PrimaryAnchor from './PrimaryAnchor/PrimaryAnchor';

const Contribute = ()=> {
    return (
        <div id="contribute" style={{backgroundColor:"#e5e5e5"}}>
        <div style={{padding:"2rem 0", display:"flex", justifyContent:"space-between"}} className="container">
            <div style={{float:"left", maxWidth:"50%",}}>
              <h3>
                Other ways to contribute?
                <br></br>
                It is also possible to donate or even contribute code.
              </h3>
            </div>
            
            <div style={{display:"flex", alignItems:"center"}}>
              <PrimaryAnchor title="PAYPAL" destination="https://www.paypal.com"/>
              <PrimaryAnchor title="BLOCKCHAIN" destination="https://www.blockchain.com/btc/address/1NLTg5PbVKAvfUBte2RmkymsUQGjtY2Z4s?filter=2"/>
              <PrimaryAnchor title="CONTRIBUTE" destination="https://github.com/ProtonMail/WebClient"/>

            </div>
        </div>
    </div>
    )
}
export default Contribute