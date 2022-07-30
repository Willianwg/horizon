type NameProps={
    name: string;
    price: number;
    seller: string;
}


export function Product(props:NameProps) {
    return (
       
       <div>
       
        <h2>{ props.name }</h2>
        <h3>{ props.price }</h3>
        <h3>{ props.seller }</h3>
        
       </div>
       
    )
}