import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
color: aqua;
justify-content: space-between;
`

const Navbar = () => {
    return (
        <div className='Container'>
            <h1> Top gYm </h1>
        </div>
    )
}

export default Navbar