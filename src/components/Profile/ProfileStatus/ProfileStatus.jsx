import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  } // State хранит состояние в булевом значении

  activateEditMode = () => {
    this.setState({editMode: true})
  } 

  deactivateEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  } 
  /* Callback изменит состояние стэйта, когда этот callback вызовут
  Формат this.state.editMode = true здесь не работает.
  Важно знать, что .setState() - асинхронный метод - он не выполняет код сразу.
  */

 onStatusChange = (e) => {
  this.setState({
    status: e.currentTarget.value,
  });
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.status !== this.props.status) {
    this.setState({
      status: this.props.status
    });
  }
}

  render() {
    return (
      <>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status || "----------"}</span>}
        {this.state.editMode && <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>}
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