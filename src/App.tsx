import { Route, Routes } from 'react-router-dom';
import UserBox from '@/components/UserBox';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>home</>} />
      <Route path="/user" element={<UserBox />} />
    </Routes>
  );
}

export default App;
