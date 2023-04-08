import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="blue" text="Show Add Task Bar" handleClick={handleClick} />
    </div>
  );
};

// For checking the props value. You will see the alert at console
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Task Tracker",
};

//{title: 'Task Tracker'} --> You can use a default value like that

export default Header;
