const Shimmer = () => {
  return (
    <div className="resturent-list">
      {Array(16)
        .fill("")
        .map((item, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
