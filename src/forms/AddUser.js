import axios from 'axios';
import React, { Component } from 'react'
import UserConsumer from '../context';
var uniqid=require("uniqid");


class AddUser extends Component {

  state = {
    visible: true,
    name:"",
    department:"",
    salary:"",
    error:false
  }
  onchangestatus = (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }
  validateForm=()=>{
    const {name,salary,department}=this.state;
    if (name===""||salary===""||department===""){
      return false
    }return true;
  }
  changeValue=(e)=>{
    this.setState({
    [e.target.name]:e.target.value})
  }
  formSubmit=async (dispatch,e)=>{
    e.preventDefault();
    const {name,department,salary}=this.state;
    const newUser={
      id:uniqid(),
      name,
      department,
      salary
    }

    if(!this.validateForm()){
      this.setState({
        error:true
      })
      return;
    }
    const response= await axios.post("http://localhost:3004/users",newUser)
    dispatch({type:"ADD_USER",payload:response.data});
    //redirect
    this.props.history.push("/")
    // console.log(newUser)
  }
  
  
 
  
  render() {
    
    console.log(this.state)
    const { visible,name,department,salary,error } = this.state;
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
                    <h4>Kullanıcı Ekleme Formu</h4>
                  </div>
                  <div className="card-body">
                    {error? <div className='alert alert-danger'>Lütfen Bilgilerinizi Kontrol Ediniz</div>:null}
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