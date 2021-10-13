import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({

  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    paddingTop:'20px',
    fontWeight: 'bold !important',
    
   
  },
  menuItem: {
    margin:"5px 0",
    display:'block',
    width:'120px',
    
    
  },
  menuLink: {

    padding: ' 10px 20px',
    display: 'block',
    textAlign: 'right',
    width: '100%',
    cursor: 'pointer',
    color:'#000 !important',
    '&:hover': {
      background:'#eee ',
      alignItems:'center'
    },
  },
  drawer: {
    zIndex: '10002',

  },
  


}));


export default useStyles;