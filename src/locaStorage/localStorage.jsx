 import { useEffect } from "react";
import { atom  } from "recoil";

 let usersDataFromLocal=''

 if (JSON.parse(localStorage.getItem('users'))){
    usersDataFromLocal=JSON.parse(localStorage.getItem('users'))
 }

 export  const userData=atom({
    key:'userData',
    default:[{fname:'Anurag',lname:'Sharma',email:'arjunsharma705463@gmail.com' , password:'Arjun123'},...usersDataFromLocal]
})


export const showHome=atom({
   key:'showHome',
   default:false
})
