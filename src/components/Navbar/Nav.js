import React from 'react'
import NavIcon from './NavIcon'
import NavItem from './NavItem'
import {useState} from 'react'
function Nav({view,setView,items,control: open,setControl:setOpen }) {
    var  navItems = items;
    navItems = navItems.map((el,key) => {
       
        return (<NavItem isActive={el==view ? true :false } setView={setView} key={key} label={el}/>)
        
    });
    const toggleNav = () => {
        setOpen(!open);
    }
    return (
        <>
            <NavIcon onClick={toggleNav} isOpen={open}/>
            <div id="nav" style={{...navListContainer, left:open ? "0":"-400px"}}>
                {navItems}
            </div>
           
        </>
    )
}

const navListContainer = {
    width:"250px",
    height:"550px",
    position:"relative",
    
    transition:"0.3s ease all",
    paddingTop:"80px",
    float:'left'
}

export default Nav
