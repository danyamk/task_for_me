import React, {useState} from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './App.css';

function App() {

  const options = [
    { value: 'option1', label: 'A' },
    { value: 'option2', label: 'B' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedConferenceRoom, setSelectedConferenceRoom] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected);
  };

  const floors = Array.from({ length: 25 }, (_, index) => index + 3);
  const handleFloorChange = (event) => {
    setSelectedFloor(event.target.value);
  };

  const rooms = Array.from({ length: 10 }, (_, index) => index+1);
  const handleConferenceRoomChange = (event) => {
    setSelectedConferenceRoom(event.target.value);
  };

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleReset = () =>{
    setSelectedOption(options[0])
    setSelectedFloor('');
    setSelectedConferenceRoom('');
    setSelectedDateTime('');
    setInputText('');
  }

  const handleForm = () => {
    const FormData = {
      tower: selectedOption.label,
      floor: selectedFloor,
      conf: selectedConferenceRoom,
      date: selectedDateTime.toString(),
      comment: inputText  
    }
    const jsonData = JSON.stringify(FormData);
    console.log(jsonData);
  }

  return (
    <div className="App">
      <div className='App-header'>
        <div>
          <label>Быбор башен:</label>
          <select id="options" value={selectedOption.value} onChange={handleSelect}>

            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Выбор этажа:</label>
          <select id="floor-select" value={selectedFloor} onChange={handleFloorChange}>
            <option value="">-- Выбрать --</option>
            {floors.map((floor) => (
              <option key={floor} value={floor}>
                {floor}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Выбор комнаты:</label>
          <select id="room-select" value={selectedConferenceRoom} onChange={handleConferenceRoomChange}>
            <option value="">-- Выбрать --</option>
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Выбор времени:</label>
            <DateTime
              value={selectedDateTime}
              onChange={handleDateTimeChange}
            />
        </div>

        <div>
          <label>Введите комментарий:</label>
          <input
            id="text-input"
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div >
        <button type="sumbit" style={{marginRight: '10px'}} onClick={handleForm}>Отправить</button>
        <button type="button" onClick={handleReset}>Очистить</button>
        </div>

      </div>
    </div>
  );
}

export default App;
