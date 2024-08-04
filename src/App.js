import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TicTacToe from "./pages/Tic-Tac-Toe";
import Info from "./pages/Info";
import RockPaperScissors from "./pages/Rock-Paper-Scissors";
import Match from "./pages/Match";


export default function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Info" element={<Info/>}/>
          <Route path="Rock-Paper-Scissors" element={<RockPaperScissors/>}/>
          <Route path="Tic-Tac-Toe" element={<TicTacToe/>}/>
          <Route path="Match" element={<Match/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
