import styled from 'styled-components'
import { MdSearch } from "react-icons/md"

function Search({ handleSearch, darkMode }) {
    return (
        <SearchWrapper className={darkMode ? 'dark' : null}>
            <MdSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search for your notes..."
                onChange={(e) => handleSearch(e.target.value)} />
        </SearchWrapper>
    )
}

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid var(--primary-clr);
    padding: .5rem 1rem;
    border-radius: 5px;

    &.dark{
        border-color: var(--dark-mode-primary-clr);

        input{
            color: #eee;
        }
    }
    .search-icon{
        font-size: 1.5rem;
        color: var(--primary-clr);
    }
    input{
        border: none;
        outline: none;
        background-color: transparent;
    }
`

export default Search
