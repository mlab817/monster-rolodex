import {ChangeEventHandler, FC} from "react";

import './search-box.styles'
import {SearchBoxContainer} from "./search-box.styles";

type SearchBoxProps = {
    className: string;
    placeholder: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox: FC<SearchBoxProps> = ({ className, placeholder, onChangeHandler}) => (
  <SearchBoxContainer
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}/>
)

export default SearchBox