export const people = [
    {
        id:"0",
        name:"alpaca",
        age:'20',
        gender:'male'
    },{
        id:"1",
        name:"man",
        age:'13',
        gender:'female'
    },{
        id:"2",
        name:"super",
        age:'48',
        gender:'male'
    },{
        id:"3",
        name:"dark",
        age:'22',
        gender:'female'
    },{
        id:"4",
        name:"night",
        age:'13',
        gender:'female'
    },{
        id:"5",
        name:"sc",
        age:'61',
        gender:'male'
    },{
        id:"6",
        name:"craft",
        age:'42',
        gender:'male'
    },{
        id:"7",
        name:"february",
        age:'1',
        gender:'male'
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}