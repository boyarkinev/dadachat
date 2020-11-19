import React, { useState } from 'react';
import Preloader from '../../commons/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import AvatarPlug from '../../../img/userpic.svg';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import ReactTooltip from 'react-tooltip';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return (
      <div className={classes.preloaderContainer}>
        <Preloader />
      </div>
    );
  }
  /*
  Изначально сюда проходит два profile - initialState и state.
  Первый равен null, так как мы присвоили ему это значение.
  Второй содержит данные с сервера, но они еще не загрузились в initialState.
  Чтобы страница не падала при первом обращении, написали условие, при котором
  в случае пустого state она перерисовывается с данными, который к тому моменту
  уже загрузились.
  */

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    }) 
  };

  return (
    <div>
      <div className={classes.user}>
        <div className={classes.user_pic}>
          <div>
            {isOwner && (
              <div className={classes.fileUpload} data-tip={'Изменить фото'}>
                <label>
                  <input
                    type={'file'}
                    id={'uploadFile'}
                    onChange={onMainPhotoSelected}
                  />
                  <span></span>
                </label>
              </div>
            )}
            <div className={classes.uploadFileClip}></div>
          </div>
          <img src={profile.photos.large || AvatarPlug} alt='Avatar' />
        </div>
        <div className={classes.user_data}>
          <h2 className={classes.user_name}>{profile.fullName}</h2>
          <p
            className={classes.user_info}
            data-tip={'Двойной щелчок для редактирования'}>
            <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
            />
          </p>
          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />
          }
        </div>
        <ReactTooltip />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <button onClick={goToEditMode}>Редактировать</button>}
      <p className={classes.user_info}>Имя: {profile.fullName}</p>
      <p className={classes.user_info}>
        В поисках работы: {profile.lookingForAJob ? 'Да' : 'Нет'}
      </p>
      {profile.lookingForAJob && (
        <p className={classes.user_info}>
          Мой стек: {profile.lookingForAJobDescription}
        </p>
      )}
      <p className={classes.user_info}>Обо мне: {profile.aboutMe}</p>
      <div className={classes.user_info}>
        Контакты:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <p className={classes.user_info}>
      {contactTitle}: {contactValue}
    </p>
  );
};

export default ProfileInfo;
