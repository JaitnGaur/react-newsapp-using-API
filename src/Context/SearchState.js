import { useState } from "react";
import searchContext from "./SearchContext";

const SearchState = (props) => {
    const [searchText, setsearchText] = useState('');

    return (
        <searchContext.Provider value={{ searchText, setsearchText }}>
            {props.children}
        </searchContext.Provider>
    );
}
export default SearchState;