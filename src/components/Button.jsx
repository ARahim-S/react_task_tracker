const Button = ({ handleClick, color, text }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
