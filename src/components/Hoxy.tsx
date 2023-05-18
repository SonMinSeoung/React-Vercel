import React from "react";
import { Link } from "react-router-dom";



interface messageLinkStyles {
    display : string;
    background : string;
    textTransform : string;
    textDecoration : string;
    color : string;
    padding : string;
    borderRadius : string;
}
function Hoxy(){
    const messageLinkStyles: messageLinkStyles = {
        display: 'block',
        background: '#039be5',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: 'white',
        padding: '16px',
        borderRadius: '4px',
      };
      return(
        <>
        <div>
          <Link to="/">home 안가면 Gpt 대가리망치ㅜㅃ갬</Link>
          <Link to="/error">home 안가면 Gpt </Link>
        </div>
        </>
      )
}
export default Hoxy;