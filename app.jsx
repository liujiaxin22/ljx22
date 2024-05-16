import React from "react";
class Mange extends React.Component{
    // 数据
    constructor(){
        super();
        this.state={
            txt:'',
            arr:[1,2,3]

        }
    }

    // 方法
    add=()=>{
        // 增加数据
        this.state.arr.unshift(4)
        // 更新状态数据arr的值
        this.setState({
            arr:this.state.arr
        })
        console.log(this.state.arr);
    }


    // 渲染
    render(){
        return(
            <div>
                {/*push/unshift添加*/}
                {/*1.在state中添加一个状态，作为表单元素的value值*/}
                {/*2.给表单绑定一个change事件，将表单元素的值设置为state的txt*/}
                用户名：<input type="text" value={this.state.txt} onChange={e=>this.setState({txt:e.target.value})}/>
                <p>当前文本框输入的值为：{this.state.txt}</p>
                <button onClick={this.add}>增加</button>
            </div>
        )    
    }
}
export default Mange
