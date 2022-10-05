import ResimCek from "./ResimCek";

function index({ arkaplan }) {
  return (
    <div className="arkaplan">
      <div className="overlay"></div>
      <ResimCek durum={arkaplan}></ResimCek>
    </div>
  );
}

export default index;
