import styles from "./loading.module.css"

// import { Ripple } from "react-css-spinners"

// export default function  Loading(){
//     return(
//        <div > 

//   <Ripple
//     color="#d36ac2"
//     size={100}
//   />
// </div>
//     )
// }


import { Roller } from "react-css-spinners"
export default function  Loading(){
    return(
       <div className={styles.spinner}> 

  <Roller
    color="black"
    size={100}
  />
  <h1 className={styles.head}>Loading.....</h1>
</div>)}

