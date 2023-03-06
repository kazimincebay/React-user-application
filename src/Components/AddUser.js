import React, { Component } from 'react'
import UserConsumer from '../context';
var uniqid=require("uniqid");


class AddUser extends Component {

  state = {
    visible: true,
    name:"",
    department:"",
    salary:""
  }
  onchangestatus = (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }
  changeValue=(e)=>{
    this.setState({
    [e.target.name]:e.target.value})
  }
  formSubmit=(dispatch,e)=>{
    e.preventDefault();
    const {name,department,salary}=this.state;
    const newUser={
      id:uniqid(),
      name,
      department,
      salary
    }
    dispatch({type:"ADD_USER",payload:newUser});
    console.log(newUser)
  }
  
  
 
  
  render() {
    
    console.log(this.state)
    const { visible,name,department,salary } = this.state;
    return <UserConsumer>
      {
        value=>{
          const {dispatch}=value;
          return (

            <div className='col-md-8 mb-4'>
              <button className='btn btn-dark btn-block mb-2' onClick={this.onchangestatus}>{visible ? "Formu Gizle" : "Formu Göster"}</button>
              {visible ? 
                <div className="card">
                  <div className="card-header text-center">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.formSubmit.bind(this,dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Ad</label>
                        <input type="text" name="name" id="name" placeholder='Adınızı Giriniz' value={name} onChange={this.changeValue} className='form-control' />
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Departman</label>
                        <input type="text" name="department" id="department"  placeholder='Departman Giriniz' value={department} onChange={this.changeValue} className='form-control' />
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">Maaş</label>
                        <input type="text" name="salary" id="salary" placeholder='Maaş Giriniz' value={salary} onChange={this.changeValue} className='form-control' />
                      </div>
                      <button type="submit" className='btn btn-success btn-block'>Kullanıcı Ekle</button>
                    </form>
                  </div>
                </div>
                :null}
            </div>
          )
        }
      }
    </UserConsumer>
    
   
  }
}

export default AddUser;