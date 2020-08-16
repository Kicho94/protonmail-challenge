import styles from './TextPicture.module.css'
import PrimaryAnchor from '../../PrimaryAnchor/PrimaryAnchor'

const TextPicture = (props) => {
    if(props.textRight){
        return(
            <div ref={props.forwardedRef} id={props.title} style={{backgroundImage:props.image}} className={styles.wrapperRight}>
                <div style={{display:"flex"}} className="container">
                    
                    <div className={styles.background}></div>
                    

                    <div className={styles.rightText}>
                        <h4>{props.title}</h4>
                        <p>{props.content}</p>
                        {props.button && <p>DAMN</p>}
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div ref={props.forwardedRef} id={props.title} style={{backgroundImage:props.image}} className={styles.wrapperLeft}>
            <div style={{display:"flex"}} className="container">
                
                <div className={styles.rightText}>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    {props.button && <><br></br> <PrimaryAnchor title={props.button} destination={props.destination} /></>}
                </div>
                <div className={styles.background}></div>

            </div>
        </div>
        )
    }
}
export default TextPicture