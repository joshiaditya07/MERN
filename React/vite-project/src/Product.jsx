let Product = () => {
    let data = [
       {_id:1, name:"Bag", price:10000, quantity:10,  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeidoNtXhdASmbpqw2BRjfVL2SGnQUL-iozp7Db_quw&s"},
       {_id:2,name:"Camera",price:200000, quantity:20, pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOk1EKjHbCZUKmLVpTblAwD_XQaeV2FSpNqae-cmIoQ&s=10" }
    ];
    return <div>
        {data.map((item,i) => {
            return (<div key={item._id}>
                <img src={item.pic} width="200px" height="200px" />
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)
        })}
    </div>
}
export default Product