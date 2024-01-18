import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

interface MenuProps{
    scrollToRef : (index:number) => void;
}
const MenuLayout : React.FC<MenuProps>=({scrollToRef})=>{


    return(
        <div className='menulayout'>
                    <a key={'menulayout1'} onClick={()=>scrollToRef(0)}>소개</a>  
                    <a key={'menulayout2'} onClick={()=>scrollToRef(1)}>스킬</a>  
                    <a key={'menulayout3'} onClick={()=>scrollToRef(2)}>경험</a>  
        </div>
    )
}
export default MenuLayout;