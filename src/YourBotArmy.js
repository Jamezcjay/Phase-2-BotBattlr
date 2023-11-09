//YourBotArmy component
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function YourBotArmy({ botArmy, releaseBot }) {
  return (
    <div className="botarmy">
      <h2>Your Bot Army</h2>
      <Row>
        {botArmy.map((bot) => (
          <BotInArmy key={bot.id} bot={bot} releaseBot={releaseBot} />
        ))}
      </Row>
    </div>
  );
}

function BotInArmy({ bot, releaseBot }) {
  const handleReleaseBot = () => {
    releaseBot(bot.id);
  };

  return (
    <Col>
      <Card
        onClick={handleReleaseBot}
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
    </Col>
  );
}

export default YourBotArmy;
