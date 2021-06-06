import { useState } from 'react';
import './App.css';


function App() {


  const [Filter, setFilter] = useState('all')
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [err, seterr] = useState(false)

  const addToDo = () => {
    if (toDo !== ''){
      setToDos([...toDos,{id:Date.now(), name:toDo, isDone:false}])
      setToDo('')
    }
    else{
      seterr(true)
    }
    
 }

 const changeDone = (id)=>{
   setToDos(toDos.filter((obj)=>{
     if(obj.id===id){
       obj.isDone = !obj.isDone
      
     }
     return obj
   }))
   console.log(id)
 }



  return (
    <div className="App" >
      <h1>ToDo App</h1>
      <form>
        <div className="input">
          <input type="text" placeholder='To Do ??' value={toDo} onChange={(e) => { 
            setToDo(e.target.value)
            if(e.target.value){
              seterr(false)
            }
           }} autoFocus />
          <button onClick={addToDo} type="button"><i className="fas fa-plus"></i></button>
        </div>
        { err && <p className="error-message">Oops! Todo cannot be blank</p> }
      </form>
      <div className="options">
        <button type="button" onClick={() => { setFilter('all') }} className={Filter === 'all' ? "btn btn-primary btn" : "btn-outline-primary btn"} >all</button>
        <button type="button" onClick={() => { setFilter('done') }} className={Filter === 'done' ? "btn btn-primary btn" : "btn-outline-primary btn"}>Completed<i className="bi-alarm" ></i></button>
        <button type="button" onClick={() => { setFilter('toDo') }} className={Filter === 'notdone' ? "btn btn-primary btn" : "btn-outline-primary btn"}>ToDo</button>
      </div>

      <ul className="list-group list-group-flush oder">
        {toDos.map((obj) => {
          if(Filter==='done' && !obj.isDone) return null
          if(Filter==='toDo' && obj.isDone) return null
          return (<li className="" key={obj.id}><input type="checkbox" checked={obj.isDone} onChange={()=>{changeDone(obj.id)}} name="" id="" /><h3>{obj.name}</h3>   <button className='delet'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg></button></li>)

        })}





      </ul>



    </div>);

}

export default App;