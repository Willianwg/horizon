import { styled, globalStyles } from "../stitches.config";


export function SingIn(){
    globalStyles();
    
    return(
                
          <Page>
            <Container>
               <Form>
                <label>Name</label>
                <Input />
                <label>Email</label>
                <Input />
                <label>Password</label>
                <Input type="password"/>
                
                <label>Quero: </label>         
                <select name="select">
                    <option value="valor1" selected>Comprar</option>
                    <option value="valor2">Vender</option>
                </select>
                
                <Button>Submit</Button>
               </Form>
            </Container>
          </Page>
        
    )
}


const Page = styled("div",{
    display:"flex",
    width:"100%",
    height:"100vh",
    background:"darkWhite",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
});

const Container = styled("div",{
    display:"flex",
    boxSizing:"border-box",
    width:"80%",
    maxWidth:400,
    height:350,
    background:"white",
    justifySelf:"center",
    boxShadow:"0px 0px 20px black",
    padding:40,
    justifyContent:"center",
    borderRadius:5,
});

const Form = styled("div",{
    
});

const Picture = styled("img",{
    display:"block",
    width:80,
    height:80,
    borderRadius:"50%",
    background:"white",
    boxShadow:" 0px 0px 10px black",
    margin:"auto",
    
    
});

const Input = styled("input",{
    display:"block",
    width:280,
    height:30,
    marginBottom:15,
    border:"1px black solid",
    padding:5,
    
});

const Button = styled("button",{
  
    display:"block",
    height:50,
    width:100,
    color:"white",
    background:"orange",
    marginLeft:"auto",
    fontWeight:900,
});
