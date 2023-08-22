import { useAppSelector } from "./redux/hooks/useAppSelector";
import {useDispatch} from 'react-redux'
import {setAge, setName} from './redux/reducers/user.Reducer';


const App = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);


  return(
    <div>
      Meu nome é: {user.name} <br />
      e tenho {user.age} anos. <br />

      Tema:

      <hr />
      <input 
        type="text" 
        onChange={(e) => dispatch(setName(e.target.value))} value={user.name}/>
      
      <input 
        type="number" 
        onChange= {(e) => dispatch(setAge(e.target.value))}
          
        
        value={user.age}/>
      <hr />

      <button>Switch Theme</button>
    </div>
  );
}

export default App;