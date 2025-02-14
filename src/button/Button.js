import React from 'react';
import 'bulma/css/bulma.css';

const buttonShapes = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  }


const Button = props => {
    var styleArr = "button";
    Object.keys(props).forEach((buttonStyleEl) => {
        if(buttonShapes[buttonStyleEl]) {
            styleArr +=" "+buttonShapes[buttonStyleEl]; 
            console.log(buttonShapes[buttonStyleEl]) 
        }
    });
    console.log(styleArr);
    return (
        <button className={styleArr + " "+ props.className} >{props.children}</button>
    )
};

export default Button;