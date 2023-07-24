
import './App.css';
import ListUsers from './Component/List';
import User from './Component/UserName';
import userName2 from './Component/UserName';
import UserObject from './Component/useObject';


const UserAbiltiy = {
  firstName :"Taha",
  lastName  : "Caglar"
}

const UserList = [
  {
    firstName :"Doga",
    lastName  : "YagliCizbek"
  },
  {
    firstName :"Emirhan",
    lastName : "Oz"
  },
  {
    firstName :"Canberk",
    lastName : "Kırlı"
  }
]


function App() {
  return (
    <div className="App">
<User  status={true} name="taha" ></User>  
<UserObject name={UserAbiltiy} ></UserObject>
<ListUsers user={UserList}></ListUsers>
    </div>
  );
}

export default App;