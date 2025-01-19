export const validateLogin = (email, password, setErrors, navigate) => {
  const validationErrors = {};

  if (!email) {
    validationErrors.email = 'Por favor, ingrese su correo electrónico.';
  }

  if (!password) {
    validationErrors.password = 'Por favor, ingrese su contraseña.';
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  navigate('/facturas');
};

