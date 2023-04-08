const Button = ({ handleClick, color, text, showTaskForm }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={showTaskForm}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
