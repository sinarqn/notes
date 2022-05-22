import styled from 'styled-components'
import { } from 'react-icons/bi'
import { } from 'react-icons/fa'
import { GiMoon, GiSun } from 'react-icons/gi'

const Header = ({ darkMode, handleDarkMode }) => {
    return (
        <HeaderWrapper className={darkMode ? 'dark' : null}>
            <h1><span>React</span> Notes</h1>
            {darkMode ? <GiSun onClick={handleDarkMode} className='sun-icon' /> : <GiMoon onClick={handleDarkMode} className='moon-icon' />}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;

    &.dark{
        h1{
            color: #fff;

            span{
                color: var(--dark-mode-primary-clr);
            }
        }
        svg{
            color: #fff;
        }
    }
    h1{
        span{
        color: var(--primary-clr);
        }  
    }
    svg{
        font-size: 1.3rem;
    }
`

export default Header
