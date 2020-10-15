import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  } // State хранит состояние в булевом значении

  activateEditMode = () => {
    this.setState({editMode: true})
  } 

  deactivateEditMode = () => {
    this.setState({editMode: false})
  } 
  /* Callback изменит состояние стэйта, когда этот callback вызовут
  Формат this.state.editMode = true здесь не работает.
  Важно знать, что .setState() - асинхронный метод - он не выполняет код сразу.
  */

  render() {
    return (
      <>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
        {this.state.editMode && <input onBlur={this.deactivateEditMode} value={this.props.status} autoFocus={true}></input>}
      </>
    );
  }
}

export default ProfileStatus;

/*
Класс ProfileStatus содержит условие, при котором
в статусе юзера отображается надпись или, после двойного клика, - поле для ввода статуса.
State создан прямо здесь, т.к. он не играет роли за пределами элемента
*/