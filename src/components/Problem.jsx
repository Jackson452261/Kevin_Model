import Accordion from 'react-bootstrap/Accordion';

function Problem() {
  return (
     <div className=' '> 
    <Accordion className="mb-7" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>喜歡拍攝什麼題材？</Accordion.Header>
        <Accordion.Body>
        喜歡拍攝人像與風景:人像能捕捉情感的瞬間，而風景則呈現自然的壯麗與寧靜。 。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>拍攝的靈感來源是什麼？</Accordion.Header>
        <Accordion.Body>
        靈感來自生活中的每個細節——眼神、表情、光線變化，或是大自然的景色。每一次拍攝都是觀察世界、發現美的過程。
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Problem;