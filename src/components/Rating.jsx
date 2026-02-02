const Rating = () => {
  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <span key={star} className="star">
            {"\u2605"}
            {"\n"}
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
