import { useSelector } from "react-redux";
import { RootState } from './redux/store';

const App = () => {
  const user = useSelector((state: RootState) => state.user);


  return(
    <div>
      Meu nome é: {user.name} <br />
      e tenho {user.age} anos. <br />

      Tema:

      <hr />
      <input type="text" value={user.name}/>
      <hr />

      <button>Switch Theme</button>
    </div>
  );
}

export default App;