export default (courserecommendations) => {
    return courserecommendations
        .map((courserecommendation) => courserecommendation.counter)
        .reduce((sum, value) => sum + value, 0);
  };
  