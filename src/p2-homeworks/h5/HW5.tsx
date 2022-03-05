import React from 'react'
import Header from './Header'
import RoutesMy from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <RoutesMy/>
            </HashRouter>
        </div>
    )
}

export default HW5
