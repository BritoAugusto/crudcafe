import { Button } from "react-bootstrap";
import error from "../../assets/error404.png";

const Erro404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" />
      <div>
        <Button variant="primary">Volver al inicio</Button>
      </div>
    </section>
  );
};

export default Erro404;
