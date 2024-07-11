import { BiSearch } from 'react-icons/bi';

import classes from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <form className={classes.searchBar}>
            <input type='text' placeholder='Search...' />
            <button onClick={() => {}}>
                <BiSearch size='1.4em' color='#ffffff' />
            </button>
         </form>
    );
}

export default SearchBar;