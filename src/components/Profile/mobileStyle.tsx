import { makeStyles } from '@mui/styles';

const padding = 20;

export default makeStyles(() => ({
  container: {
    padding: '0 10px',
  },

  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  socialButton: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20',
  },

  socialButton_span: {
    marginLeft: '10px',
  },
  profileName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: padding,
  },

  profileName_loginUser: {
    color: '#706e6e',
  },

  profileBio: {
    textAlign: 'center',
    paddingTop: padding,
    color: '#706e6e',
  },

  socialGroup: {
    margin: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
  },
  socialGroupMenus: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: padding,
  },
  socialMenuButton: {
    marginTop: padding,
    borderStyle: 'solid',
    color: 'primary',
    borderRadius: '100px',
  },

  socialMenuButton_link: {
    textDecoration: 'none',
    color: 'blue',
    borderRadius: '50px',
  },

  socialMenuItem: {
    color: 'blue',
    fontSize: 'small',
  },
  socialButton_count: {
    marginLeft: '20',
    justifyContent: 'center',
    padding: '4px 4px',
    borderRadius: '50px',
    fontSize: '12px',
    backgroundColor: 'green',
    color: 'white',
  },

}));