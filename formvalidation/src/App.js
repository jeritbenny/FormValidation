import './App.css';
import { useFormik } from 'formik';
import { signup } from './Schema';
function App() {

  const initialValues={
    name:"",
    email:"",
    password:"", 
    repassword:""

  };

 const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
   initialValues:initialValues,
   validationSchema:signup,
  onSubmit:(values,action)=>{
    console.log(values);
     action.resetForm()
  }
  })
  console.log(errors);

  return (
    <div className="App">
      <div className='img'>
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png?f=webp' alt='pic'/>
      </div>
<div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
      <div className='space'>
        {/* <label htmlFor='name'>Name</label> */}
        <input type='text'name='name' id='name'
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur} placeholder='Name'/><br/>
         {errors.name&&touched.name?(<p className='form-error'>
          {errors.name}
         </p>):null}
         </div>
         <div className='space'>
        {/* <label htmlFor='email'>Email</label> */}
        <input type='email'name='email' id='email'
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur} placeholder='Email'/>
         {errors.email&&touched.email?(<p>{errors.email}</p>):null}
         </div>
         <div className='space'>
        {/* <label htmlFor='password'>Password</label> */}
        <input type='password' name='password' id='password'
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur} placeholder='Password'/>
       { errors.password&&touched.password?( <p>{errors.password}</p>):null}
        
         </div>
         <div className='space'>
         {/* <label htmlFor='repassword'>Re-type Password</label> */}
         <input type='password' name='repassword' id='repassword'values={values.repassword} placeholder='Re-type Password'></input>
    { errors.repassword&&touched.repassword?( <p>{errors.repassword}</p>):null}
    
    
    </div>
        <button className='button' type='submit'>Register</button>

      </form>
      </div>
    </div>
  );
}

export default App;
