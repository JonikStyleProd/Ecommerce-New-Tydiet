import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * I will have to type Link and button
 * If isButton it will be normal button else it will be Link
 */


/** props
 * isButton default true
 * title 
 * action => onClick for button 
 * href => destnation for Link
 * moreStyle for add more style beside a defualt 
 */

const Button = ({isButton = true, title='', action, href, moreStyle, type='button'}) => {
    const style = `font-bold rounded-md px-3 py-2 text-base cursor-pointer animate focus:outline-none ${moreStyle}`;
    return (
        <Fragment>
            {isButton ? (
                <button className={style} type={type}>{ title }</button>
            ) : (
                <Link to={href} className={style}>
                    {title}
                </Link>
            )}
            
        </Fragment>
    );
};

Button.propTypes = {

}

export default Button
