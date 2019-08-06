import React from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'


import Item from './Item/Item'
export default class List extends React.Component{
    state={
        firstView:true,
        loading:false,
        itemArr:[],
        err:false
    }
    componentDidMount() {
        Pubsub.subscribe('searchKW',async (msg,searchKW)=>{
            this.setState({
                firstView:false,
                loading:true,
            })
            let url = `https://api.github.com/search/users?q=${searchKW}`
            try {
                let result = await axios.get(url)
                this.setState({
                    firstView:false,
                    loading:false,
                    itemArr:result.data.items,
                    err:false
                })
            }catch (e) {
                console.log(e)
                this.setState({
                    firstView:false,
                    loading:false,
                    itemArr:[],
                    err:true
                })
            }
        })
    }

    render() {
        let {firstView,loading,itemArr,err}=this.state
        if (firstView) {
            return (<div>
                请输入用户名查找
            </div>)
        }else if (loading) {
            return (<div>
                <h3>LOADING</h3>
            </div>)
        }else if (itemArr) {
           return <Item itemArr={itemArr}/>
        }else if (err) {
            return (<div>
                <h3>暂时无法匹配到</h3>
            </div>)
        }else {
            return (<div>
                <h3>暂时无法匹配到</h3>
            </div>)
        }

    }

}