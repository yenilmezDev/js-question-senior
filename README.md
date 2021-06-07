# DeneBunu JS/TS Senior Question

Please update `src/move.ts` to pass tests. You can find the tests in `src/move.spec.ts`.

## Acceptance criteria

Imagine an array that contains teams and members. `move` function moves a person to another team and returns the new state of given list.

### Example list
```ts
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
]
```

If I run `move(list, '4', '6')` then I expect the person with id `4` moved to the team which has id `6`. Function should return the new state below;

```ts
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
```

### Move function signature

| Key         | Type             | Description                  |
|-------------|------------------|------------------------------|
| list        | Team[]           | Given list                   |
| source      | string           | Id of the moved person       |
| destination | string           | Id of the team to be moved   |


### Team shape

| Key    | Type           | Description                 |
|--------|----------------|-----------------------------|
| id     | string         | Unique identifier of team   |
| name   | string         | Name of the team            |
| people | Person[]       | People in this team         |

### Person shape

| Key  | Type   | Description                 |
|------|--------|-----------------------------|
| id   | string | Unique identifier of person |
| name | string | Name of the person          |


## Lint the code

```bash
yarn lint
```

## Running tests

```bash
yarn test
```

### Notes
- All IDs are unique.
- If you believe that some scenarios are missing in the tests, don't hesitate to add them to the test suite.
- You can make configuration changes as you see fit.
- Immutability is important!
