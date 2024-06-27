import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Todo=()=> {
  const getItems = () => {
    const list = localStorage.getItem('todo');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};
  const[name,setName] = useState("");
  const [items, setItems] = useState(getItems());
  const[index,setIndex]=useState(null);
  const handleChange=(e)=>{
    setName(e.target.value);
    console.log(e.target.value)
  }

useEffect(()=>{
  setItems(getItems());
},[]);
  const addItem=()=>{     
        
            let newItem = [name,false];
            const items = localStorage.getItem('todo');
            let updatedItems = [];

            if (items) {
                updatedItems = JSON.parse(items);
            }

            updatedItems.push(newItem);
            localStorage.setItem('todo', JSON.stringify(updatedItems)); 
            setItems(updatedItems);
            setName("");
  }
 const handleUpdate=()=>{
   const text= document.getElementById('text').innerHTML;
    const items = localStorage.getItem('todo');
    let updatedItems = [];
    if (items) {
      updatedItems = JSON.parse(items);
      updatedItems[index][0] = text; 
      localStorage.setItem('todo', JSON.stringify(updatedItems));
      }
    
  
    setName("");
    setItems(updatedItems);
    document.getElementById('update').classList.add('hidden');
    
   
 }
  
  const updateItem=(id)=>{
    setIndex(id);
    document.getElementById('update').classList.remove('hidden');  
    const updatedItems = [...items];
    setName(updatedItems[id][0]);
    document.getElementById('text').innerHTML=name;
  }

  const checkItem=(index)=>{
    const updatedItems = [...items];
    updatedItems[index][1] = !updatedItems[index][1]; 
    setItems(updatedItems);
    localStorage.setItem('todo', JSON.stringify(updatedItems));
  }

  const deleteItem=(id)=>{
    const updatedItems = items.filter((ele,index)=>{
      return index !== id;
  })

  setItems(updatedItems);
  localStorage.setItem('todo', JSON.stringify(updatedItems));



  }

  return(
    <>
        <div className="button w-fit p-2 bg-sky-300 hover:cursor-pointer m-5 rounded-full">
            <NavLink to='/login'>
                    Login
            </NavLink>
        </div>
        <div className="box w-80  mx-auto translate-y-10 p-3 relative">
          <div className=" input flex justify-center gap-2">
          <input className='bg-slate-100 font-serif p-2 pl-2 rounded-full mt-1' type="text" placeholder='Add your task...' value={name} onChange={(e)=>handleChange(e)}/>
          <button className='bg-blue-700 rounded-full p-1 mt-1 w-20 hover:cursor-pointer text-slate-50' onClick={addItem}>Add</button>
          </div>
          <div className="items flex-col mt-10">
          {items.length > 0 ? (
                        items.map((item, index) => {
                            
                            
                           
                               
                                return(
                                    <>
                                   
                                    <div className="orderList  border-2 bg-slate-300 rounded-3xl p-3 flex gap-3 items-center justify-between ml-5 mt-3 font-serif text-sky-900">
                                      <div className="item">
                                        <p key={index} className="orders ">{item}</p>
                                        </div>
                                        <div className="button flex gap-2">
                                        <i class="fa-solid fa-pen-to-square hover:cursor-pointer" onClick={()=>updateItem(index)}></i>
                                        <i class="fa-solid fa-trash hover:cursor-pointer" onClick={()=>deleteItem(index)}></i>
                                        <input type="checkbox" id={index} onChange={()=>checkItem(index)} checked={item[1]} />
                                        </div>
                                    </div>
                                    
                                    </>
                                );
                          


                           
})
                    ) : (
                        <p>No items in the cart</p>
                    )}
                    </div>

        </div>
                  <div className="update hidden absolute inset-0 flex z-10 gap-2 justify-center bg-blue-50 " id='update'>
                    
                     <textarea className="bg-slate-100 font-serif  p-1 pl-2  mt-10" id='text' value={name} onChange={handleChange}></textarea>
                     <div className='bg-blue-200 rounded-full h-fit mt-10 p-2 hover:cursor-pointer' onClick={()=>handleUpdate()} >Update</div>
                  </div>
        
    </>
  );
  
}

export default Todo;