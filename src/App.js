import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const baseUrl = "http://localhost:8001/bots";

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  //GET data from db.json
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToBotArmy = (bot) => {
    // Check if the bot is already in YourBotArmy
    if (!botArmy.some((addedBot) => addedBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    } else {
      // Display an alert message if the bot is already in YourBotArmy
      alert("Bot already added to Your Bot Army.");
    }
  };

  // remove a bot from both the frontend and backend permanently by DELETE
  const removeFromBotCollection = (botId) => {
    fetch(`${baseUrl}/${botId}`, {
      method: "DELETE",
    }).then((response) => {
      //update your botCollection and yourBotArmy once a bot is deleted
      if (response.ok) {
        const updatedBotCollection = bots.filter((bot) => bot.id !== botId);
        setBots(updatedBotCollection);
        const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
        setBotArmy(updatedBotArmy);
      }
    });
  };

  //release a bot from yourBotArmy
  const releaseBot = (botId) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} releaseBot={releaseBot} />
      <BotCollection
        bots={bots}
        addToBotArmy={addToBotArmy}
        removeFromBotCollection={removeFromBotCollection}
      />
    </div>
  );
}

export default App;
