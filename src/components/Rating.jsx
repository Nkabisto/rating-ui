const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => console.log("Clicked!", index);
  const hovered = (direction) => console.log("Hovered!", direction);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => clicked(star)}
            onMouseEnter={() => hovered("enter")}
            onMouseLeave={() => hovered("leave")}
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
