import React from 'react'
import axios from 'axios'

import Search from './component/Search'
import List from './component/List'
export default class App extends React.Component{
    state={

    }

    render(){
        return (<div id="app">
            <div className="container">
                <Search />
                <List />
            </div>
        </div>)
    }
}