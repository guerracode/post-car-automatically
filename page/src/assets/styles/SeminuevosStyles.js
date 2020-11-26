import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginTop: '100px',
    marginBottom: '30px',
  },
  price: {
    width: '30%',
    margin: '50px',
  },
  description: {
    width: '80%',
    margin: '50px',
  },
  button: {
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  media: {
    height: 600,
  },
}));

export default useStyles;
