const Header = () => {
  return (
    <div className="topbar">
      <h2>Home</h2>
      <div className="date-box">
        <span>Today's Date</span>
        <strong>{new Date().toISOString().slice(0,10)}</strong>
      </div>
    </div>
  );
};

export default Header;
