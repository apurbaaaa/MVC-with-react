import { useState } from 'react'
import SaveJournal from '../model/SaveJournal';
import Text from '../view/Text';
import SaveButton from '../view/SaveButton';
import TopNav from '../view/TopNav';
import NavBar from '../view/NavBar';



export default function App() {

  const [inputText, setInputText] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleInputChange = (event) =>{
    setInputText(event.target.value);
  }

  const handleMenuButton = (event) =>{
    setMenuOpen(!menuOpen);
  }

  const handleClose = () =>{
    setMenuOpen(!menuOpen);
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
    
  const handleNavClick = (event) =>{
    console.log("NavButton Clicked");
  }

  return (
    <div>
      <TopNav handleMenuButton = {handleMenuButton} />
      <NavBar isOpen = {menuOpen} handleClose={handleClose} handleNavClick={handleNavClick}/>
      <Text inputText={inputText} handleInputChange={handleInputChange} />
      <SaveButton handleSubmit={handleSubmit} />
    </div>
  )
}


