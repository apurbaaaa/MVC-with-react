import { useState } from 'react'
import SaveJournal from '../model/SaveJournal';
import Text from '../view/Text';
import SaveButton from '../view/SaveButton';
import TopNav from '../view/TopNav';



export default function App() {

  const [inputText, setInputText] = useState('')

  const handleInputChange = (event) =>{
    setInputText(event.target.value);
  }

  //because SaveJournal is an asynchronous event, async-await is to be used
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await SaveJournal(inputText); 
      console.log('Journal saved successfully');
    } catch (error) {
      console.error('Failed to save journal:', error);
    }
  };
    
  

  return (
    <div>
      <TopNav />
      <Text inputText={inputText} handleInputChange={handleInputChange} />
      <SaveButton handleSubmit={handleSubmit} />
    </div>
  )
}


