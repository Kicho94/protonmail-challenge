
// Component that makes a grey anchor link that looks like button, gets props.name and prop destination
const Badge = (props) => {
    return(
        <React.Fragment>
        <a onClick={props.func}>
            <span >{props.name}</span>
        </a>
        <style jsx> {`
           
            a{
                text-decoration:none;
                transition: all 550ms cubic-bezier(.45,1,.32,1);
                cursor: pointer;

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