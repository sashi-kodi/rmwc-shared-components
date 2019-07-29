import '@material/button/dist/mdc.button.css';
import React from 'react';
import * as R from "@rmwc/button";
type Props = {
    // Make button flat (only applicable to Primary button).
    flat?: boolean,

    // Make button smaller.
    small?: boolean,

    // onClick handler.
    onClick?: Function,

    // Label and optionally an icon (using Button.Icon component).
    children?: any,

    // Show ripple effect on button click. Default: true
    ripple?: boolean,

    className?: string,

    disabled?: boolean,

    style?: Object
};

export const Button = (props: Props) => {
    const { disabled, onClick, children, small, ripple = true, className = "" } = props;

    return (
        <R.Button
            disabled={disabled}
            dense={small}
            onClick={onClick}
            ripple={ripple}
            className={className}
        >
            {children}
        </R.Button>
    );
};
