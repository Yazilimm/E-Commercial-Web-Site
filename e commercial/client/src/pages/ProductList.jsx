import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import { useLocation  } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters,setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]: value,
    });
  };
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Ürünleri Filtrele:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >
                    Renk
                    </Option>
                    <Option>Beyaz</Option>
                    <Option>Siyah</Option>
                    <Option>Kırmızı</Option>
                    <Option>Mavi</Option>
                    <Option>Sarı</Option>
                    <Option>Yeşil</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled >
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Ürünleri Sırala :</FilterText>
                <Select onChange={e =>setSort(e.target.value)}>
                    <Option value="newest">Yeni</Option>
                    <Option value="asc">Azalan Fiyat </Option>
                    <Option value="desc">Artan Fiyat</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList