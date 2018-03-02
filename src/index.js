import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
//Import dependencies for Apollo client 
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

//Create httplink that connect the apollo client to the graphql server
const httpLink = new HttpLink({ uri: "http://localhost:4000" });

//Instance of Apollo client 
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

//Wrap the App with apollo provider
ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));

    // registerServiceWorker();
