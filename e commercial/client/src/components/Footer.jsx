import styled from "styled-components"
import { Twitter, Instagram , YouTube, Facebook, Room, Phone, MailOutline, } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Enes</Logo>
            <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </Desc>
            <SocialContainer>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Anasayfa</ListItem>
                <ListItem>Sepet</ListItem>
                <ListItem>Erkek</ListItem>
                <ListItem>Kadın</ListItem>
                <ListItem>Aksesuar</ListItem>
                <ListItem>Hesabım</ListItem>
                <ListItem>Sipariş Takibi</ListItem>
                <ListItem>Favoriler</ListItem>
                <ListItem>Sözleşmeler</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                Kirikkale Universitesi
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +90 5465465465465
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                @enesemretuglu572@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>{/* </Payment> <PaymentOutlined/>Payment */}   
        </Right>
    </Container>
  )
}
export default Footer