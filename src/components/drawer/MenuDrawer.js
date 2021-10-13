import React from 'react';

import { Drawer } from '@material-ui/core';
import { toggleDrawer, useLayoutDispatch, useLayoutState } from '../context/LayoutContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './MenuDrawer.css'
const MenuDrawer = () => {

  const { drawerOpen } = useLayoutState();
  const LayoutDispatch = useLayoutDispatch()

  return (
    <Drawer className={'drawer'} anchor={'right'} open={drawerOpen} onClose={() => { toggleDrawer(LayoutDispatch) }}>
      <ul className={'menu'} >
                    <li className={'menuItem'} >
                        <HashLink className={'menuLink'} smooth to="/">
                        خانه
                        </HashLink>
                    </li>
                 
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/servis" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      خدمات
                      </HashLink>
                    </li>
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/about" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      درباره ما
                      </HashLink>
                    </li>
                    
                  </ul>
    </Drawer>
  )
}
export default MenuDrawer