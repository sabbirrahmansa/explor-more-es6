
const bio = [
    {id:1, name: 'sabbir ' , home:'bogra'},
    {id:2, name: 'sohan  ' , home:'rongpur'},
    {id:3, name: 'adnan  ' , home:'dhaka'},
    

]


const biodata = bio.map(p => p.name[0])

console.log(biodata);

//chain
const data1 ={
    produck :500,
    data:[
        {id:1 , name:'pc' ,price: 50000},
        {id:2 , name:'laptop' ,price: 70000}
    ]
   

}

console.log(data1.data[0].id)