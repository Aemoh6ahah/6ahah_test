import React from 'react'
import Pubsub from 'pubsub-js'

export default class Search extends React.Component{
    getSearchContent=()=>{
       let searchKW = this.refs.searchKW.value
        Pubsub.publish('searchKW',searchKW)
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={'searchKW'} placeholder="enter the name you search"/>
                    <button onClick={this.getSearchContent}>Search</button>
                </div>
            </section>
        )
    }

}