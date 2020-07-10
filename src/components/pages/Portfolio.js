import React from "react";
import PortfolioCard from "../PortfolioCard/index.js"

const Portfolio = () => (
    <div>
        <h2>Portfolio Page</h2>
        {/* <div class="container-fluid">
            <div class="row row-cols-3 row-cols-md-3">
                <div class=""col mb-6> */}
                    
                    <PortfolioCard style={{flexDirection: 'row'}}/>
                {/* </div>
            </div>
        </div>  */}
    </div>   
);

export default Portfolio;
