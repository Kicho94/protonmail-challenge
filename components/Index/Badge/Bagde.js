
const Badge = (props) => {
    return(
        <React.Fragment>
        <a href={props.destination}>
            <span>{props.name}</span>
        </a>
        <style jsx> {`
           
            a{
                text-decoration:none

            }
            a span {
                padding: 1rem;
                margin: 5px 10px;
                display: inline-block;
                min-width: 10px;
                font-size: 12px;
                font-weight: 700;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                background-color: #777;
                border-radius: 10px
            }
            

            
            `}</style>
            </React.Fragment>
    )
}
export default Badge