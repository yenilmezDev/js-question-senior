// Please update this type
// according to data shape.

type people = { id: string, name: string }

type obj = {
  id: string,
  name: string,
  people: people[],
}

type List = obj[]| Error;

export default function move(list: List, source: string, destination: string): List {
  console.log('initial list : ', JSON.stringify(list))
  if (Array.isArray(list) && list.length > 0) {

    const destinationExist = list.findIndex(listObj => listObj.id === destination)

    if (destinationExist >= 0) {
      const element = list[0].people.find(peopleObj => peopleObj.id === source)
      if (typeof element === "object") {
        const toBeUpdated = list.find(obj => obj.id === destination)
        if (typeof toBeUpdated === "object" && toBeUpdated.hasOwnProperty("people")) {
          toBeUpdated["people"] = [...toBeUpdated["people"], element]
          list[0].people = list[0].people.filter(peopleObj => peopleObj.id !== source)
          console.log('updated list : ', JSON.stringify(list))
          return list
        } else {
          throw new Error('You cannot move a team');
        }
      } else {
        throw new Error('You cannot move a team');
      }
    } else {
      throw new Error('You cannot specify a person as the destination');
    }
  } else {
    throw new Error('You cannot move a team');
  }
  // throw new Error('Not implemented');
}
