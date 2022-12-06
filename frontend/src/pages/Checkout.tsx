import React, { useState, useEffect, ChangeEvent } from "react";
import { styled, globalStyles} from "../stitches.config";
import { Input, Button } from "../styles/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useApi } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Checkout (){
    const auth = useContext(AuthContext);
    const api = useApi();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [productId, setId] = useState("");
    const [stage, setStage] = useState(1);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [document, setDocument] = useState("");
    
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardExpiration, setExpiration] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    
    const [price, setPrice] = useState(0);
    
    const [cartCode, setCartCode] = useState("");
    
    const [installments, setInstallments] = useState(1);
    
    const [processing, setProcessing] = useState(false);
    
    
    useEffect(()=>{
        const id = location.pathname.split("/")[2];
        setId(id)
        
        async function loadProduct(){
            const data = await api.getProductDetails(id);
            
            setPrice(data.price);
            
            const response = await api.generateCart(data.price);
            
            setCartCode(response.code);
        }
        
       loadProduct();
       
    },[location])
    
    
    function checkInputs(){
        
       if(stage === 1){
        if(name && email && phone && document && street && zipCode && neighborhood && houseNumber)
        return true;
        
        return false;
       }
       
       if(cardNumber && cardExpiration && cardHolderName && cardCvv) 
       return true;
       
       return false;
       
    }
    
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        
        e.preventDefault();
        
        const allFilled = checkInputs();
        
        if(!allFilled) return alert("Preencha todos os campos");
        
        if(stage === 1) return setStage(2);
        
        setStage(3);
        
        const transactionData = formatData();
        //const response = await api.pay(transactionData);

        if(!auth.user) return;
        const savePurchase = await api.savePurchase(auth.user.email, productId);
        
        navigate("/");
    }
    
    function formatData(){
        
         const content = {
              cartCode,
              paymentType: 'credit_card',
              installments,
              customerName: name,
              customerEmail: email,
              customerMobile: phone,
              customerDocument: document,
              billingAddress: street,
              billingNumber: houseNumber,
              billingNeighborhood: neighborhood,
              billingCity: city,
              billingState: state,
              billingZipCode: zipCode,
              creditCardNumber: cardNumber,
              creditCardExpiration: cardExpiration,
              creditCardHolderName: cardHolderName,
              creditCardCvv:cardCvv
        }
        
        return content;
        
    }
    
    function installmentValue(){
        const value = price/installments;
        return value.toFixed(2);
    }
    
    function installmentOptions(){
        let a=[];
        
        for (let i = 1; i <= 10; i++) {
            a.push(i);
        }
        
       return a;
    }
    
    return (
        <Page>
         <Container onSubmit={ handleSubmit }>
         { stage === 1 &&
         <>
         <div>
          <h1>Checkout Page</h1>
          <Input  placeholder="Name" onChange={ e=> setName(e.target.value) }/>
          <Input type="email" placeholder="Complete email" onChange={ e=> setEmail(e.target.value) }/>
          <Input type="tel" placeholder="mobile phone" onChange={ e=> setPhone(e.target.value) }/>
          <Input type="number" placeholder="Document (cpf/cnpj)" onChange={ e=> setDocument(e.target.value) }/>
          
          </div>
          <div>
          <h3>Address</h3>
          <Input  placeholder="zip code" onChange={ e=> setZipCode(e.target.value) }/>
          <Input  placeholder="street" onChange={ e=> setStreet(e.target.value) }/>
          <Input  placeholder="number" onChange={ e=> setHouseNumber(e.target.value) }/>
          <Input  placeholder="neighborhood" onChange={ e=> setNeighborhood(e.target.value) }/>
          <Input  placeholder="state" onChange={ e=> setState(e.target.value) }/>
          <Input  placeholder="city" onChange={ e=> setCity(e.target.value) }/>
          
          <Button type="submit" css={{ alignSelf:"bottom"}}>Avançar</Button>
         </div>
         </>
         }
         
         { stage === 2 &&
         <div>
          <h3>Credit Card</h3>
          <Input  placeholder="Credit Card Holder Name" onChange={ e=> setCardHolderName(e.target.value) }/>
          <Input type="number" placeholder="Credit Card Number" onChange={ e=> setCardNumber(e.target.value) }/>
          <Input  placeholder="Credit Expiration (MM/YY)" onChange={ e=> setExpiration(e.target.value) }/>
          <Input type="number" placeholder="Credit Card Cvv" onChange={ e=> setCardCvv(e.target.value) }/>
          
          <select name="select" onChange={ e=>setInstallments(parseInt(e.target.value))}>
          
           { installmentOptions().map( (item, index) =>  <option key={index} value={item}>{item}x</option> ) }
           
          </select>
           
          <h4>Valor: {installments}x { installmentValue() }</h4>
          
          <Button type="submit" css={{ alignSelf:"bottom"}}>Comprar</Button>
       
          </div>
         }
         
        { stage === 3 &&
         <div>
          <h3>Processando pagamento...</h3>
          </div>
         }
 
         </Container>
        </Page>
    )
}

const Page = styled("div",{
    display:"grid",
    height:"100vh",
    alignItems:"center",
});

const Container = styled("form",{
    display:"flex",
    gap:50,
    justifyContent:"center",
    background:"white",
    margin:"auto",
    border:"1px solid grey",
    padding:15,
    
    "@sm":{
        display:"block"
    }
});
