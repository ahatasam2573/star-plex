import React from 'react'

const Button = ({ title, onClick, variant, disabled, fullWidth, type }) => {


    return (
        <button style={{ marginLeft: '90px' }} className="w-semi bg-primary p-1 text-white pointer b-none br-1  mt-1" type={type}>
            {title}
        </button >
    )
}

export default Button