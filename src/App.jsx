import useOnlineStatus from './Components/useOnlineStatus';
import useFormInput from './Components/useFormInput';
import './App.css';

function App() {
  const isOnline = useOnlineStatus();
  const firstName = useFormInput("Hakeem");
  const lastName = useFormInput("Bello");

  function handleSaveClick(){
    alert("Progress Saved!");
    clearInputs();
  }

  console.log(firstName);
  console.log(lastName);  

  return (
    <>
      <form>
        <div className='name'>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            value={firstName.value}
            id="fname"
            onChange={firstName.onchange}
          />
        </div>
        <div className='surname'>
          <label htmlFor="lname">Last Name</label>
          <input 
            type="text" 
            value={lastName.value} 
            id='lname'
            onChange={lastName.onchange}
          />
        </div>

        <button disabled={!isOnline} onClick={handleSaveClick}>
          {isOnline ? 'Save Progress':'Reconnecting ...'}
        </button>
      </form>   
    </>
  )
}

export default App
