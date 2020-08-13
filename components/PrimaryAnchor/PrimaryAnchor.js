// component that renders anchor tag that looks like a button

const PrimaryAnchor = (props) =>{
   return <> <a href={props.destination} target="_blank">
        {props.title}
    </a>
    <style jsx>
        {`
        a {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
            border-radius: 4px;
            padding: ${props.large ? "10px 16px" : "6px 12px"};
            font-size: ${props.large ? "18px" : "14px"};
            line-height: 20px;
            margin-left: 5px;
            display: inline-block

        }
        `}
    </style>
    </>
}
export default PrimaryAnchor