import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddCard from './components/AddCard';
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    toast.success("Card successfully added!", {
      position:"top-right",
      autoClose:3000,
    })
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
    toast.success("Card deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleEditCard = (index) => {
    setEditingCard({ ...cards[index], index });
  };

  const handleSaveEdit = (updatedCard) => {
    const updatedCards = [...cards];
    updatedCards[editingCard.index] = updatedCard;
    setCards(updatedCards);
    setEditingCard(null);
    toast.success("Card edited successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <ToastContainer />
      <Background />
      <Foreground data={cards} onDelete={handleDeleteCard} onEdit={handleEditCard} />
      <AddCard onAdd={editingCard ? handleSaveEdit : handleAddCard} editingCard={editingCard} />
    </div>
  );
}

export default App;
