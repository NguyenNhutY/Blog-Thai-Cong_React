import "./header.css";

export default function Header() {
  return (
   
    <div className="header">
     <div className="headerMargin"></div>
      <div className="headerTitles">
        <span className="headerTitleSm">QUACH THAI CONG</span>
      </div>
      <img
        className="headerImg"
        src="https://thaicong.com/wp-content/uploads/2023/04/DSCF7636-banner_QTC.jpg"
        alt=""
      />
    </div>
  );
}
