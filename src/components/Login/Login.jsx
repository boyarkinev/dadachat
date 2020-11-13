import styleError from '../commons/FormsControls/FormsControls.module.css';
import classes from './Login.module.css'

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../commons/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


// Создаем собственную форму
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginItems}>
      <div>
        <Field
          validate={[required]}
          placeholder={'Е-мэйл'}
          name={'email'}
          component={Input}
          className={classes.input}
        />
      </div>
      <div>
        <Field
          validate={[required]}
          placeholder={'Пароль'} 
          name={'password'}
          type={'password'}
          component={Input}
          className={classes.input}
        />
      </div>
      <div className={classes.checkboxElems}>
        <Field
          type={'checkbox'}
          name={'rememberMe'}
          component={Input}
        />
        <div className={classes.checkboxDescription}>
          {' '} Запомнить меня
        </div>
      </div>
      {props.error &&
        <div className={styleError.formSummaryError}>
          {props.error}
        </div>
      }
      <div>
        <button className={classes.button}>Войти</button>
      </div>
    </form>
  );
};

// Создали хок из redux-библиотеки, в который передаем нашу форму
const LoginReduxForm = reduxForm({
  form: 'login',
  /* В сторе может быть много разных форм, поэтому нужно задать уникальное имя
  Здесь ключ form не связан c одноименным ключом в сторе
  */
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1 className={classes.title}>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

/* Для начала создали компоненту прямо в файле разметки.
Так можно делать, когда кода немного и он не загромождает приложение.
*/
export default connect(mapStateToProps, {login})(Login);

/* Цепочка:
  1. LoginReduxForm закинет в форму Login событие handleSubmit
  2. handleSubmit вызовется во время события
  3. Внутри handleSubmit вызовется то, что передано в LoginReduxForm
  4. В onSubmit-метод придут данные, собранные контейнерной компонентой LoginReduxForm
*/
