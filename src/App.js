
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';
import Update from './components/Update';
import "react-toastify/dist/ReactToastify.css";
import Apply from './components/Apply';

function App() {

  var updateButton= useSelector(state=> state.updateButton)

  var apply = useSelector(state=>state.apply)


  return (
    <div className="App mt-8 ">
      {( !updateButton && !apply) && <Add/>}
      {!updateButton && !apply && <List/>}

      {updateButton && <Update/>}

      {apply && <Apply/>}

      <ToastContainer
         theme="colored"
      />
    </div>
  );
}

export default App;
