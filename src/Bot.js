import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//passing props by distructuring
function Bot({ bot, addToBotArmy, removeFromBotCollection }) {
  const handleAddToBotArmy = () => {
    addToBotArmy(bot);
  };

  const handleRemoveFromBotCollection = () => {
    removeFromBotCollection(bot.id);
  };

  return (
    <Col>
      <Card
        onClick={handleAddToBotArmy}
        style={{ width: "18rem", marginTop: "20px" }}
      >
        <Card.Img
          variant="top"
          src={bot.avatar_url}
          alt={bot.name}
          style={{ backgroundColor: "grey" }}
        />
        <Card.Body>
          <Card.Title>
            <h2>{bot.name}</h2>
          </Card.Title>
          <Card.Text>{bot.catchphrase}</Card.Text>
        </Card.Body>
      </Card>
      <Button
        variant="danger"
        style={{ width: "18rem", color: "black" }}
        onClick={handleRemoveFromBotCollection}
      >
        X
      </Button>
    </Col>
  );
}

export default Bot;
