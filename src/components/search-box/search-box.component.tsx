import {ChangeEventHandler, FC} from "react";

import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeholder: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox: FC<SearchBoxProps> = ({ className, placeholder, onChangeHandler}) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}/>
)

export default SearchBox