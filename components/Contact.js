
const Contact = () => {
    return (
       <> 
        <div id="contact-cols" style={{padding:"1rem 0 4rem"}}>
          <div className="container">
            <p>Proton Technologies AG</p>
            <div className="contactCols row"  style={{color:"#848792"}}>
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
                  <i className="fa fa-envelope"></i><span> Media: </span><a target="_blank" href="mailto:media@protonmail.com">media@protonmail.com</a><br></br>
                  <i className="fa fa-envelope"></i><span> Legal: </span><a target="_blank" href="mailto:legal@protonmail.com">legal@protonmail.community</a><br></br>
                  <i className="fa fa-envelope"></i><span> Partnership: </span><a target="_blank" href="mailto:p%61r%74n%65%72%73@p%72oton%6da%69l%2ecom">partners@protonmail.com</a>
                </p>
              </div>

              <div>
              <p>
                  <i className="fa fa-envelope"></i><span> Security: </span><a>security@protonmail.com</a><br></br>
                  <i className="fa fa-key"></i><br></br>
                  <span> Abuse: </span><a target="_blank" href="mailto:security@protonmail.com">abuse@protonmail.com</a><br></br>
                  <span> For legal/police inquiries</span><br></br><a target="_blank" href="https://protonmail.com/law-enforcement">click here</a>
                </p>
              </div>

              <div>
                <p>
                  <span>For support inquiries, please visit</span><a target="_blank" href="https://protonmail.com/support/"><br></br><i className="fa fa-arrow-right"></i> protonmail.com/support</a>
                </p>
              </div>

            </div>
          </div>
        </div>
        
        <style jsx>
            {`
            .contactCols {
                display: flex;
                
            }
            .contactCols div {
                padding: 0 15px;
                
            }
            
            .contactCols div p{
                margin: 1.8em 0 0 0;
                font-weight: 400;
                font-style: normal;
                font-size: 1.5rem;
                line-height: 1.7
            }
            .contactCols div p a {
                color: #9497ce;
                text-decoration: underline
            }
            `}
        </style>
        </>
    )
}

export default Contact