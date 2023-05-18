import React from "react";
import { unstable_HistoryRouter } from "react-router-dom";


interface messageLinkStyles {
    display : string;
    textAlign : string;
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
        textAlign: 'center',
        background: '#039be5',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: 'white',
        padding: '16px',
        borderRadius: '4px',
      };
      return(
        <>
        </>
      )
}
export default Hoxy;