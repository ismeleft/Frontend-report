import Nav from "../components/Nav/Nav";
// import App from "../App";
import propTypes from "prop-types";

export default function Root({ children }) {
  return (
    <>
      <div id="nav">
        <Nav />
        {/* <App /> */}
        {children}
      </div>
    </>
  );
}

Root.propTypes = {
  children: propTypes.node.isRequired,
};
