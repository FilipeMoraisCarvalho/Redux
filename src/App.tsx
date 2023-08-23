import { useAppSelector } from "./redux/hooks/useAppSelector";
import {useDispatch} from 'react-redux'
import {setAge, setName} from './redux/reducers/user.Reducer';
import {setTheme} from './redux/reducers/themeReducer';

const App = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);


  return(
    <div>
      Meu nome é: {user.name} <br />
      e tenho {user.age} anos. <br/ >

      <span onClick={(e) => dispatch(setTheme(theme.status === 'ligth' ? 'dark' : 'ligth'))}>Tema: {theme.status}</span>

      <hr />
      <input 
        type="text" 
        onChange={(e) => dispatch(setName(e.target.value))} value={user.name}/>
      
      <input 
        type="number" 
        onChange= {(e) => dispatch(setAge(parseInt(e.target.value)))}
          
        
        value={user.age}/>
      <hr />

      <button>Switch Theme</button>
    </div>
  );
}

export default App;