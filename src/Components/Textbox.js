import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


// const selecter=(data)=>{
// console.log("first")
//   return(
//  <select class="form-select" aria-label="Default select example">
//   <option selected>Open this select menu</option>
//   {data.map((ele)=><option value={`${ele}`}>{ele}</option>)
// }
// </select>
//   )
// }

function Textbox(props) {
  const { DataArray } = props;

  const { register, watch, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

  const onSubmit=(data)=>{
console.log(data)
  }
  return (
    <>
      <main>

        <form onSubmit={handleSubmit(onSubmit)}>
        {DataArray.map((ele,index) => (
          <div>
            <label>{ele.lebel}</label>
            <br/>
            {
            (ele.field === 'text' || ele.field === "textarea") ?
             <input type={ele.field} name={`${ele.name}`} {...register(`${ele.name}`)}/> :""
            } 
          {
            ele.field === 'select'?
            <select className="form-select" aria-label="Default select example" name={`${ele.name}`} {...register(`${ele.name}`)}>
            <option value="" selected>Open this select menu</option>
            {
            ele.Option.map((ele)=><option value={`${ele}`}>{ele}</option>)
             }
          </select>:""
          }
           {
            (ele.field === 'checkbox'||ele.field === 'radio') ?
             ele.Option.map((ele1, index) => (
                    <div name={`${ele.name}`} >
                    <input type={ele.field}  />{" "}<span> {ele1}</span>
                    </div>
                    )):""
          }
          </div>))}

        <button className='btn btn-primary' type='submit'>submit</button>
        </form>
      </ main>


    </>
  )
}

export default Textbox