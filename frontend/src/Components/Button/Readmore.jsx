import React from 'react'
import './Readmore.css'

function Button(what_to_do) {
    const { link, target = "_self" } = what_to_do;
    if (link) {
        return (
            <a href={link} target={target} className='readmore_btn_link'>
                <button className='readmore_btn'>
                    Read More
                </button>
            </a>
        )
    }
    else {
        return (
            <>
                <button className='readmore_btn'>
                    Read More
                </button>
            </>
        )
    }
}


export default Button
