import styles from './centeredText.module.css'

// Component that takes title, text, button as props, and centers all the content in it.

const CenteredText = (props) =>{
    return(
    <React.Fragment>
        <div className={styles.wrapper + ' container'}>
            <div className="row">
                <div style={{width:"calc(100% - 17%)", margin:"0 auto", padding:"0 15px"}}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p> 
                    <div className="row">
                     {props.button}
                    </div>
                        
                      
                </div>
           
            </div>
        </div>
        </React.Fragment>
    )
}
export default CenteredText