import React from 'react'
import './TodoList.css'
const ToList = (props) =>{
    const {items,deleted}=props;
    const len=items.length;
    const itemList= len ? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=> deleted(item.id)}>&times;</span>
                </div>
        )
    })
        ):<h3>There Is No Items In The List</h3>
    
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Id</span>
                <span className="age title">Name</span>
                <span className="action title">Age</span>
            </div>
            {itemList}
        </div>
    
    )
    
}
export default ToList;