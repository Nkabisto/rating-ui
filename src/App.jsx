import Rating from "./components/Rating.jsx";

const App = () => {
  return (
    <div>
      <Rating
        heading="How did you feel about React?"
        feedbackMessages={["hate it","dislike it", "meh", "like it", "love it"]}
      />
    </div>
  );
};

export default App;
