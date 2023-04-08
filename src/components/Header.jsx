import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showTaskForm, showTaskBar }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showTaskBar ? "red" : "blue"}
        text={showTaskBar ? "Close Add Task Bar" : "Show Add Task Bar"}
        showTaskForm={showTaskForm}
      />
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
