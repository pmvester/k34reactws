import { useState, useEffect } from 'react';
import TempTable from './components/TempTable';

const ws = new WebSocket('ws://localhost:8081');

function App() {
  const [messages, setMessages] = useState(new Map());
  const [utime, setUtime] = useState('-');

  useEffect(() => {
    ws.onopen = (event) => {
      console.log('ws connected server');
    };

    ws.onmessage = function (event) {
      const msg = JSON.parse(event.data);
      messages.set(msg.topic, msg.payload.temperature);
      setMessages(messages);
      setUtime(new Date().toLocaleTimeString('sv-SE'));
    };
  }, [messages, utime]);

  return (
    <div className="App">
      <TempTable messages={messages} utime={utime} />
    </div>
  );
}

export default App;