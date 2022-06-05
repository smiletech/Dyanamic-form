import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import Textbox from './Textbox'

function AddField() {
    const [lebel, setlebel] = useState("")
    const [field, setfield] = useState("")
    const [name, setname] = useState("")
    const [Value, setValue] = useState("")
    const [dynamic, setdynamic] = useState(false)
    const [dynamic1, setdynamic1] = useState(false)
    const [DataArray, setDataArray] = useState([])

    const submithndler = () => {
        const arr=Value.trim().split(',');
                       
     if(lebel!=="" && field!=="" && name!=="" || Value!=="")
      {  const data = {
            lebel,
            name,
            Option:arr,
            field
        }
        console.log(data)
     setDataArray([...DataArray,data])
        setdynamic1(true)
    }
        else{
            alert(" something is wrong ")
        }
    }

    console.log(DataArray)
    const SelectHnd=(e)=>{
      if(e.target.value==='text' || e.target.value=='textarea' || e.target.value=='')
        setdynamic(false)
        else
        setdynamic(true)
        setfield(e.target.value)
    }



    return (
        <>
            <div className='d-flex'>
                <div>
                    <div className="col-sm-6 d-flex my-4 ">
                        <label className="form-label mx-5 ">Lebel</label>
                        <input
                            type="text"
                            className=""
                            value={lebel}
                            onChange={(e) => setlebel(e.target.value)}
                        />
                    </div>

                    <div className="col-sm-6 d-flex my-4">
                        <label className="form-label">TextField</label>
                        <select className="form-select mx-5 " aria-label="Default select example"
                            value={field}
                            onChange={(e) => SelectHnd(e)}
                            style={{
                                width: "250px"
                            }}>
                            <option value="" selected>Open this select menu</option>
                            <option value="text">text</option>
                            <option value="textarea">textarea</option>
                            <option value="checkbox">checkbox</option>
                            <option value="radio">radio</option>
                            <option value="select">select</option>
                        </select>
                    </div>

                  {dynamic &&<div > <div  className="col-sm-6 d-flex my-4">
                        <label className="form-label mx-5">value</label>
                        <input
                            type="text"
                            className=""
                            value={Value}
                            onChange={(e) => { setValue(e.target.value) }}
                        />
                    </div>
                    <span className=''>sperate with (,)</span>
                    </div>
                    }

                    <div className="col-sm-6 d-flex my-4">
                        <label className="form-label mx-5 ">Name</label>
                        <input
                            type="text"
                            className=""
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={submithndler}>submit</button>
                </div>

                <div>
                    {
                        dynamic1 ? <Textbox DataArray={DataArray} />:""
                        
                    }
                </div>


            </div>


        </>
    )
}

export default AddField