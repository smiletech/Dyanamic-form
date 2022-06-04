import React from 'react'

function Textbox(props) {
  const { DataArray } = props;
  return (
    <>
      <main>
        {DataArray.map((ele,index) => (
          <div>
            <label>{ele.lebel}</label>
            <br/>

            {(ele.field === 'text' || ele.field === "textarea") ? <input type={ele.field} /> :

              ele.Option.map((ele1, index) => (
              <div>
                
              <input type={ele.field} />{" "}<span> {ele1}</span>
              </div>
              ))

            }
          </div>))}

        <button className='btn btn-primary'>submit</button>
      </ main>


    </>
  )
}

export default Textbox