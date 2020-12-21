import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movieql.new.sh/"
})

export default client;