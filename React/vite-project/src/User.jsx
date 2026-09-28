
// make user tag

let User = () =>{
   let data = [
    {_id:1, name:"aditya", age:20, address:"kathmandu", photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
    {_id:2, name:"sita", age:21, address:"kathmandu", photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
    {_id:3, name:"gita", age:22, address:"kathmandu", photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
    {_id:4, name:"ram", age:23, address:"kathmandu", photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
   ];
   return <div>
    {data.map((item, i) => {
            return( <div >
                <img src={item.photo} width="200px" height="200px" />
                <h3>{item.name}</h3>
                <p>Age: {item.age}</p>
                <p>Address: {item.address}</p>
            </div>)
        

            
            })
    }
   </div>
}

export default User