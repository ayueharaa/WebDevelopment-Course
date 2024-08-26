import React from "react";

import AboutMe from "./body/aboutme";
import Design from "./body/design";
import Programming from "./body/programing";
import Education from "./body/education";

function Body(){
    return(
        <div>
            <AboutMe/>
            <Design/>
            <Programming/>
            <Education/>
        </div>
    )
}

export default Body;