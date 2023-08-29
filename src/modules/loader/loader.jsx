import FadeLoader from "react-spinners/FadeLoader";
import './loader.css'

function Loader() {

  return (
    <div className="loader">
      <FadeLoader className="loader_fade"
        color={"blue"}
        title={"loader"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;