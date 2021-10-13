
import { Divider, Grid, Hidden, IconButton, useMediaQuery, useTheme} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toggleDrawer, useLayoutDispatch } from '../../../context/LayoutContext';
import './Header2.css';
import { HashLink } from 'react-router-hash-link';
import MenuDrawer from '../../../drawer/MenuDrawer';
const Header2 = () => {

    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const LayoutDispatch = useLayoutDispatch();

    return (
    <div className={'root-head2'} >
        <div className={'container'}>
            <Grid container spacing={1} style={{justifyContent:'space-between'}}>
                <Grid item  md={6}  sm={4}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <Hidden smDown>
                            <Link smooth to="/" className={'header-brand2'}>
                                <img src={'https://raheshgroup.com/wp-content/themes/rahesh/img/logo.png'} />
                            </Link>
                        </Hidden>
                        {isTabletSize && <IconButton onClick={() => toggleDrawer(LayoutDispatch)}><i className="fa fa-bars text-light" style={{outline:'unset'}} aria-hidden="true"></i></IconButton>}
                    
                        { isTabletSize ? <MenuDrawer/> :
                            <ul className={'ul-nav-homepage2'} >
                                <li>
                                    <Link smooth to="/servis">
                                        خدمات
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/about">
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </Grid>
                <Grid item  md={6}  sm={8} className={'grid-left-nav2'}>
                    <HashLink smooth to={'/#forms'}>
                        <button type="button" class="btn btn-outline ">ثبت سفارش</button>
                    </HashLink>
                </Grid>
            </Grid>
   
        </div>
       
    </div>
    );
}

export default Header2;
