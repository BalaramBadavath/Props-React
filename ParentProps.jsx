// import React from 'react'
// import ChildProps from './ChildProps'

// const ParentProps = () => {

//   return (
//     <>
//         <ChildProps name="Rahul" age={23} obj = {{place:"Hyderabad",pincode:560005}} fun={()=>{
//         console.log("I am Priniting........")
//     }}/>
//     </>
//   )
// }

// export default ParentProps

//!DefaultProps
// import React from 'react'
// import ChildProps from './ChildProps'

// const ParentProps = () => {
//   return (
//     <>
//         <ChildProps name="Rahul"/>
//     </>
//   )
// }

// export default ParentProps

//!Props Children

import React from 'react'
import ChildProps from './ChildProps'

const ParentProps = () => {
  return (
    <>
        <ChildProps name="Rahul">
           <button>Prop Children Button</button>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque, quam similique ducimus quos nemo eum, dolorum sunt dolorem ipsa accusantium quidem minima repudiandae ipsam illum necessitatibus fugit ex quibusdam!</p>
        </ChildProps>
    </>
  )
}

export default ParentProps