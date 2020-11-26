import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  CardMedia,
  CircularProgress,
} from '@material-ui/core';
import '../assets/styles/App.css';
import useStyles from '../assets/styles/SeminuevosStyles';

const initialFormData = Object.freeze({
  price: '',
  description: '',
});

const SemiNuevos = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = e => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Activate loader
    updateFormData({ loader: true, screenshot: true });
    // Maker request to the server
    fetch('http://localhost:3000/api/seminuevos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: formData.price,
        description: formData.description,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        updateFormData({ error: true });
      })
      .then(images => {
        // Create a local URL for the image and print it
        var image = URL.createObjectURL(images);
        updateFormData({ screenshot: image });
      })
      .catch(() => {
        updateFormData({ error: true });
      });
  };

  const handleBack = e => {
    e.preventDefault();
    updateFormData(initialFormData);
  };

  const classes = useStyles();

  return (
    <>
      <Box width={800} height={800} margin='auto'>
        <Typography variant='h4' color='primary' align='center' paragraph>
          seminuevos.com
        </Typography>
        {!formData.screenshot ? (
          <form
            className={classes.form}
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <TextField
              className={classes.price}
              id='standard-basic'
              label='Precio'
              name='price'
              type='number'
              onChange={handleChange}
            />
            <TextField
              className={classes.description}
              id='standard-multiline-static'
              label='Descripcion'
              multiline
              rows={4}
              name='description'
              onChange={handleChange}
            />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
            >
              Publicar
            </Button>
            {formData.error && (
              <Typography
                variant='body1'
                color='secondary'
                align='center'
                paragraph
              >
                Algo salio mal, favor de intentar de nuevo.
              </Typography>
            )}
          </form>
        ) : formData.loader ? (
          <Box className={classes.loaderContainer}>
            <CircularProgress className={classes.loader} />
            <Typography
              variant='body1'
              color='primary'
              align='center'
              paragraph
            >
              publicando
            </Typography>
          </Box>
        ) : (
          <Box className={classes.image}>
            <CardMedia
              className={classes.media}
              image={formData.screenshot}
              title='Screenshot'
            />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleBack}
            >
              Regresar
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default SemiNuevos;
