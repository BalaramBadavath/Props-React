// import React from 'react'

// const ChildProps = ({name,age,fun,obj:{place,pincode}}) => {
//   return (
//     <div>
//       <h1>My name is : {name}</h1>
//       <h1>My age is : {age}</h1>
//       <h1>My place is : {place}</h1>
//       <h1>My pincode is : {pincode}</h1>
//       <button onClick={fun}>Click to PRINT</button>
//     </div>
//   )
// }

// export default ChildProps

//!DefaultProps
// import React from 'react'

// const ChildProps = (props) => {
//   return (
//     <>
//       <h1>My name is : {props.name}</h1>
//       <h1>I want to display some message:{props.msg}</h1>
//     </>
//   )
// }
// ChildProps.defaultProps = {
//   name:"Monty",
//   msg: "Tomorrow also you have class"
// }
// export default ChildProps

//!Props Children
import React from 'react'

const ChildProps = ({name,children}) => {

  return (
    <div>
        <h1>{name}</h1>
              {children}
    </div>
  )
}

export default ChildProps



