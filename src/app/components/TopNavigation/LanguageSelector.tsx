import { Fragment } from "react";

const LanguageSelector = () => {

    return(
        <Fragment>
           <select>
            <option value={"en"}>English</option>
            <option value={"es"}>Espanôl</option>
           </select>
        </Fragment>
    )


  }

  export { LanguageSelector };