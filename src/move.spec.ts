import move from './move';

describe('move', () => {
  it('moves given person to another team', () => {
    const list = [
      {
        id: '1',
        name: 'Team X',
        people: [
          { id: '2', name: 'Clayton Gomez' },
          { id: '3', name: 'Leona Jacobs' },
          { id: '4', name: 'Mildred Becker' },
          { id: '5', name: 'Kayla Klein' },
        ],
      },
      {
        id: '6',
        name: 'Team Y',
        people: [{ id: '7', name: 'Randy Brock' }],
      },
    ];

    const result = [
      {
        id: '1',
        name: 'Team X',
        people: [
          { id: '2', name: 'Clayton Gomez' },
          { id: '3', name: 'Leona Jacobs' },
          { id: '5', name: 'Kayla Klein' },
        ],
      },
      {
        id: '6',
        name: 'Team Y',
        people: [
          { id: '7', name: 'Randy Brock' },
          { id: '4', name: 'Mildred Becker' },
        ],
      },
    ];

    expect(move(list, '4', '6')).toStrictEqual(result);
  });

  it('throws error if given source is not a person', () => {
    const list = [
      {
        id: '1',
        name: 'Team X',
        people: [{ id: '2', name: 'Clayton Gomez' }],
      },
      { id: '3', name: 'Team Y', people: [] },
    ];

    expect(() => move(list, '3', '1')).toThrow('You cannot move a team');
  });

  it('throws error if given destination is not a team', () => {
    const list = [
      {
        id: '1',
        name: 'Team X',
        people: [{ id: '2', name: 'Clayton Gomez' }],
      },
      { id: '3', name: 'Team Y', people: [{ id: '4', name: 'Mildred Becker' }] },
    ];

    expect(() => move(list, '2', '4')).toThrow('You cannot specify a person as the destination');
  });
});
