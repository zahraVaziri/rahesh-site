
import { Divider, Grid, Hidden, IconButton, useMediaQuery, useTheme} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toggleDrawer, useLayoutDispatch } from '../../context/LayoutContext';
import MenuDrawer from '../../drawer/MenuDrawer';
import './Header.css'
const Header = () => {

    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const LayoutDispatch = useLayoutDispatch();

    return (
    <div className={'root-head'} >
        <div className={'container'}>
            <Grid container spacing={1} style={{justifyContent:'space-between'}}>
                <Grid item  md={6}  sm={4}>
                    <div style={{display:'flex',alignItems:'center',}}>
                        <Hidden smDown>
                            <Link  to="/" className={'header-brand'}>
                                <img src={'https://raheshgroup.com/wp-content/themes/rahesh/img/logo.png'}  className={'Group-head-rule single-head-logo'}/>
                            </Link>
                        </Hidden>
                        {isTabletSize && <IconButton onClick={() => toggleDrawer(LayoutDispatch)}><i className="fa fa-bars text-light" style={{outline:'unset'}} aria-hidden="true"></i></IconButton>}
                    
                        { isTabletSize ? <MenuDrawer className={'btn-drawer'}/> :
                            <ul className={'ul-nav-homepage'} >
                                <li>
                                    <Link  to="/servis">
                                        خدمات
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </Grid>
                <Grid item  md={6}  sm={8} className={'grid-left-nav'}>
                   
                    <a type="button" href={'#forms'} class="btn btn-outline ">ثبت سفارش</a>
               
                </Grid>
            </Grid>
           <div className={'divider-nav'}></div>
        </div>
        <div className={'container'}>
            <div className={'header-text-center'}>
                 <h1>سوژه‌یابی، ایده‌پردازی و افکارسنجی</h1>       
                 <p>در راستای خلق مؤثرترین آثار هنری و رسانه ای</p>
                 <Link  to="/about">
                 <button type="button" class="btn btn-outline mt-4 ">گروه رصد و پژوهش رهش</button>
                 </Link>
            </div> 
        </div>
    </div>
    );
}

export default Header;
