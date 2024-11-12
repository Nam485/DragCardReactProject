import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCard({ onAdd, editingCard }) {
  const [desc, setDesc] = useState('');
  const [filesize, setFilesize] = useState('');
  const [tagTitle, setTagTitle] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [isOpenTag, setIsOpenTag] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (editingCard) {
      setDesc(editingCard.desc);
      setFilesize(editingCard.filesize);
      setTagTitle(editingCard.tag.tagTitle);
      setTagColor(editingCard.tag.tagColor);
      setIsOpenTag(editingCard.tag.isOpen);
      setIsOpen(true);
    }
  }, [editingCard]);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleAdd = () => {
    const newCard = {
      desc,
      filesize,
      tag: {
        isOpen: isOpenTag,
        tagTitle,
        tagColor,
      },
    };
    if (newCard.desc.length === 0 || newCard.filesize.length === 0) {
      toast.error("Please fill the Description and Date fields", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      onAdd(newCard);
      togglePopup();
      resetForm();
    }
  };

  const resetForm = () => {
    setDesc('');
    setFilesize('');
    setTagTitle('');
    setTagColor('');
    setIsOpenTag(true);
  };

  return (
    <div className='z-[50] absolute bottom-10 left-1/2 transform -translate-x-1/2'>
      <button onClick={togglePopup} className=" text-zinc-400 text-xl font-semibold w-40 transform -translate-x-1/2 absolute bottom-10 left-1/2">
        {editingCard ? 'Edit Card.' : 'Add Card.'}
      </button>

      {isOpen && (
        <div className="flex items-center justify-center">
          <div className="popup bg-white p-6 rounded-lg w-[400px] max-w-full z-[101] scale-95">
            <h3 className="text-xl mb-4">{editingCard ? 'Edit Card' : 'Add New Card'}</h3>
            <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full mb-2 p-2 border rounded" />
            <input type="text" placeholder="Card Date" value={filesize} onChange={(e) => setFilesize(e.target.value)} className="w-full mb-2 p-2 border rounded" />
            <input type="text" placeholder="Tag Title" value={tagTitle} onChange={(e) => setTagTitle(e.target.value)} className="w-full mb-2 p-2 border rounded" />
            <select value={tagColor} onChange={(e) => setTagColor(e.target.value)} className="w-full mb-2 p-2 border rounded">
              <option value="">Select Tag Color</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
            </select>
            <div className="flex items-center mb-2">
              <label className="mr-2">Tag Open:</label>
              <input type="checkbox" checked={isOpenTag} onChange={(e) => setIsOpenTag(e.target.checked)} />
            </div>
            <button onClick={handleAdd} className="w-full p-2 bg-green-600 text-white rounded-md mt-2">
              {editingCard ? 'Save Changes' : 'Add'}
            </button>
            <button onClick={togglePopup} className="w-full p-2 bg-red-600 text-white rounded-md mt-2">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCard;
