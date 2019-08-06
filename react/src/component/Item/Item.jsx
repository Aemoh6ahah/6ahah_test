import React from 'react'

export default class Item extends React.Component{




    render() {
        return (
            <div>
               { [...this.props.itemArr].map((item,index)=>{
                return (<div>
                <div className="card" key={index}>
                <a href={item.html_url} target="_blank">
                <img  src={item.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{item.login}</p>
                </div>
                </div>)
            })}

            </div>

        )
    }

}
