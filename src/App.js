import "./App.css";
import React, {useState} from 'react'
import { calculateEquity } from "poker-odds";
//import PokerResults from "./components/PokerResults";

function App() {
  const [values, setvalues] = useState({
    heroCard1: "",
    heroCard2: "",
    villainCard1: "",
    villainCard2: "",
    communityCard1: "",
    communityCard2: "",
    communityCard3: "",
  })

  //const [submitted, setState] = useState(false);

  const handleHeroCard1Inputchange = (e) =>{
    setvalues({...values, heroCard1: e.target.value})
  }

  const handleHeroCard2Inputchange = (e) =>{
    setvalues({...values, heroCard2: e.target.value})
  }

  const handleVillainCard1Inputchange = (e) =>{
    setvalues({...values, villainCard1: e.target.value})
  }

  const handleVillainCard2Inputchange = (e) =>{
    setvalues({...values, villainCard2: e.target.value})
  }

  const handleCommunityCard1Inputchange = (e) =>{
    setvalues({...values, communityCard1: e.target.value})
  }

  const handleCommunityCard2Inputchange = (e) =>{
    setvalues({...values, communityCard2: e.target.value})
  }

  const handlecommunityCard3Inputchange = (e) =>{
    setvalues({...values, communityCard3: e.target.value})
  }

  //is this what i need?
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const heroHand = [];
    const villainHand = [];
    const hands = [];
    const board = [];
    const iterations = 100000; // optional
    const exhaustive = false; // optional]

    heroHand.push(values.heroCard1);
    heroHand.push(values.heroCard2);

    villainHand.push(values.villainCard1);
    villainHand.push(values.villainCard2);

    hands.push(heroHand);
    hands.push(villainHand);

    board.push(values.communityCard1);
    board.push(values.communityCard2);
    board.push(values.communityCard3)

    const pokerEquityResults = calculateEquity(hands, board, iterations, exhaustive);
    console.log(pokerEquityResults)
   setData(pokerEquityResults)
  // return pokerEquityResults;

  //nedd to set state here with poker equity results
  }

  return (
    <div className="form-container">
      <form className="poker-form" onSubmit={handleSubmit}>
        <div className="title-message">Poker Equity Calculator</div>
        <input
          onChange={handleHeroCard1Inputchange}
          value={values.heroCard1}
          id="hero-card-1"
          className="form-field"
          type="text"
          placeholder="Hero Card 1"
          name="heroCard1"
        />
        <input
          onChange={handleHeroCard2Inputchange}
          value={values.heroCard2}
          id="hero-card-2"
          className="form-field"
          type="text"
          placeholder="Hero Card 2"
          name="heroCard2"
        />
        <input
         onChange={handleVillainCard1Inputchange}
         value={values.villainCard1}
         id="villain-card-1"
         className="form-field"
         type="text"
         placeholder="Villain Card 1"
         name="villainCard1"
        />
        <input
         onChange={handleVillainCard2Inputchange}
         value={values.villainCard2}
         id="villain-card-2"
         className="form-field"
         type="text"
         placeholder="Villain Card 2"
         name="villainCard2"
        />
        <input
         onChange={handleCommunityCard1Inputchange}
         value={values.communityCard1}
         id="community-card-1"
         className="form-field"
         type="text"
         placeholder="Community Card 1"
         name="communityCard1"
        />
        <input
         onChange={handleCommunityCard2Inputchange}
         value={values.communityCard2}
         id="community-card-2"
         className="form-field"
         type="text"
         placeholder="Community Card 2"
         name="communityCard2"
        />
        <input
         onChange={handlecommunityCard3Inputchange}
         value={values.communityCard3}
         id="community-card-3"
         className="form-field"
         type="text"
         placeholder="Community Card 3"
         name="communityCard3"
        />
   {
  data && <ul>
  {data.map(index =>{
    return data[index].handChances.map(chance =>console.log(chance))
  }) }
  </ul>
}
 
        
        <button className="form-field" type="submit" id="calculate-equity-submit-button">
          Calculate Equity
        </button>
      </form>
    </div>
  );
}

export default App;
