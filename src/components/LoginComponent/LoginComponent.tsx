import "./LoginComponent.css";

export function LoginComponent(): JSX.Element {
  return (
    <div className="login-container">
      <div className="title">
        <p>Ingresa tus datos</p>
      </div>
      <div className="header">
        <input className="neo-input" type="text" />
        <input className="neo-input" type="text" />
      </div>
      <div className="header">
        <button className="button">Hola</button>
      </div>
    </div>
  );
}
