import * as React from 'react';
import Web3 from 'web3';



const Layout = ({pageTitle, children} : {pageTitle : string, children: any}) => {

    return(
        <div>
            <h1>Web3.js v{Web3.version}</h1>
            <h3>{pageTitle}</h3>
            {children}
        </div>
    );
}


export default Layout;