import { range, pluck } from './utility';

describe('Utility', () => {
  describe('range', () => {
    it('should return an array of range', () => {
      expect(range(2, 8)).toEqual([2, 3, 4, 5, 6, 7, 8] );
    })
  })

  describe('random', () => {
    let dummyArrayOfObject = [
      {
        'id': 1,
        'name': 'test'
      },
      {
        'id': 2,
        'name': 'test 2'
      },
      {
        'id': 3,
        'name': 'test 3'
      },
    ]

    it('should return an array of ids', () => {
      expect(pluck(dummyArrayOfObject, 'id')).toEqual([1, 2, 3]);
    })

    it('should return an array of names', () => {
      expect(pluck(dummyArrayOfObject, 'name')).toEqual(["test","test 2","test 3"]);
    })

  })
})
