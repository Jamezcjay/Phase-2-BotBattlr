//BotCollection component
import Row from "react-bootstrap/Row";
import Bot from "./Bot";

function BotCollection({ bots, addToBotArmy, removeFromBotCollection }) {
  return (
    <div className="box">
      <Row>
        {bots.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            addToBotArmy={addToBotArmy}
            removeFromBotCollection={removeFromBotCollection}
          />
        ))}
      </Row>
    </div>
  );
}

export default BotCollection;
