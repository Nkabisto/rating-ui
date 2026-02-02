const Rating = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Rate Your Experience</h2>
    </div>
  );
};

const styles = {
  container: {
    margin: 0,
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },
  heading: { color: "red" },
};

export default Rating;
