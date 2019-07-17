import moment from 'moment';

// Get visible course recommendations

export default (courserecommendations, { text, sortBy, startDate, endDate }) => {
  return courserecommendations.filter((courserecommendation) => {
    const createdAtMoment = moment(courserecommendation.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = courserecommendation.course.content.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'knowledgearea') {
      return a.knowledgearea < b.knowledgearea ? 1 : -1;
    }
  });
};