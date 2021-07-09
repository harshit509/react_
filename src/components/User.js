
// by function
// props=props is something that i need to pass data form one component to another
// const User = (props) => {
//     return (
//         <div>
//             <h1>getting started with React </h1>
//             <div>
//             <h2>{props.name}</h2>
//             <h2>{props.description}</h2>
//             </div>
//         </div>  
//     );
// };
// by classes
// state=a set of data that only individual component hold
import React from"react";
class User extends React.Component{
   constructor(props){
       super(props);
       this.state={
           planet:"earth",
       }
       console.log("hii i am from constructor");
   }

componentDidMount(){
    console.log("hii i am from component did mount")
    this.setState({planet:"mars"})
}

//  now updating
 shouldComponentUpdate(nextProps,nextState){
    console.log("hii iam froms should component update");
    console.log({
        nextProps,
        nextState
    })
    return true;
}
   getSnapshotBeforeUpdate(prevProp,prevState){
       console.log("hii  iam from getsnapshot before update");
       console.log({
           prevProp,prevState
       })
       return true;
   }
componentDidUpdate(){
    console.log(this.state);
}

render(){
    console.log("hey i am from render");
    return(
<div>
        {/* <h1>getting started with React </h1> */}
             <div>
            <h2>{this.props.name}</h2>
              <h2>{this.props.description}</h2>
              <h2>{this.state.planet}</h2>
              <br></br>
                 </div>         
             </div>  
              
    );
}

}
export default User;

          