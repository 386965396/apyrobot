const { GraphQLClient } = require('graphql-request');

const graph_client = new GraphQLClient('https://graph.mdex.com/subgraphs/name/mdex/swap', {
    credentials: 'include',
    mode: 'cors'
});

const block_client = new GraphQLClient('https://graph.mdex.com/subgraphs/name/mdex-heco-blocks', {
    credentials: 'include',
    mode: 'cors'
});

module.exports = { 
    graph_client, 
    block_client 
}