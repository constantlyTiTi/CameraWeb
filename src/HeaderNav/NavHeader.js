import React from 'react';

import {
    Link,
    useRouteMatch
  } from "react-router-dom";


const headerNav=(prop)=>
{
    return (
        <span className={prop.className} onMouseOver={prop.onMouseOver} onMouseOut={prop.onMouseOut}>
            <NavHeaderLink label={prop.name} to={prop.to} actWhenExact={true}></NavHeaderLink>
            {prop.children}
        </span>
    )
}

function NavHeaderLink({label, to, actWhenExact})
{
    let match=useRouteMatch({
        path: to,
        exact: actWhenExact
    });
    return(
        <>
            {match&&""}
            <Link to={to} replace> {label}</Link>
        </>
    )
}

export default headerNav;