const alpaca = {
    name:"alpaca",
    age:'99',
    gender:'not'
}

const resolvers = { 
    Query : {
        person : () => alpaca
    }
}

export default resolvers;