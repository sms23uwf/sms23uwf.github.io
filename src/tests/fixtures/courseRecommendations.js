import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  knowledgearea: 'xyz',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  knowledgearea: 'abc',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  knowledgearea: 'def',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
