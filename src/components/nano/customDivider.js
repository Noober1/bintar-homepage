import React from 'react'
import { Samy, SvgProxy } from 'react-samy-svg';
import Divider from '../../assets/svgs/divider1.svg'
import Divider2 from '../../assets/svgs/divider2.svg'

const CustomDivider = ({style,className,fill,variant}) => {

    const DividerType = variant == 'zigzag' ? Divider : Divider2;

    return (
        <div className={className} style={style}>
            <Samy path={DividerType}>
                <SvgProxy selector="#fill" fill={fill}/>
            </Samy>
        </div>
    )
}

export default CustomDivider
