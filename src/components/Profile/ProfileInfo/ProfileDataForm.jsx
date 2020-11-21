import classes from './ProfileInfo.module.css';
import reusable from '../../../styles/reusable.module.css';

import React from 'react';
import { reduxForm } from 'redux-form';

import styleError from '../../commons/FormsControls/FormsControls.module.css';
import {
  createField,
  Input,
  Textarea,
} from '../../commons/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <button className={reusable.submitButton}>Сохранить</button>
      {error && <div className={styleError.formSummaryError}>{error}</div>}
      <div className={classes.user_info}>
        Имя: {createField('Имя', 'fullName', [], Input)}
      </div>
      <div className={classes.user_info}>
        В поисках работы:{' '}
        {createField('', 'lookingForAJob', [], Input, null, {
          type: 'checkbox',
        })}
      </div>
      <div className={classes.user_info}>
        Мой стек:{' '}
        {createField('Мой стек', 'lookingForAJobDescription', [], Textarea)}
      </div>
      <div className={classes.user_info}>
        Обо мне: {createField('Обо мне', 'aboutMe', [], Textarea)}
      </div>

      <div className={classes.user_info}>
        Контакты:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, 'contacts.' + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;
