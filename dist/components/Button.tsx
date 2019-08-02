
import React from 'react';
import {Button}  from "@rmwc/button";
import "../scss/index.scss";

interface ButtonProps {
   
    // Make button smaller.
    small?: boolean,

    // onClick handler.
    onClick?: (event:React.MouseEvent<HTMLElement>)=>void|null,

   
    children?: any,

    // Show ripple effect on button click. Default: true
    ripple?: boolean,

    disabled?: boolean,

    style?: Object
};

 const AppButton = (props: ButtonProps) => {
    const { disabled, onClick, children, small, ripple = true , style={}} = props;

    return (
        <Button  ripple={ripple}  dense={small} disabled={disabled} style={style} onClick={onClick}>
            {children}
        </Button>
    );
};

export default AppButton;
