import React, { useEffect,useState } from 'react';
import Recipe from './components/Recipes';
import { Button,InputGroup,Row,FormControl,Col} from 'react-bootstrap';
import styled from 'styled-components';
import NavScaleRotate from '../components/NavScaleRotate';

const SearchSize = styled.div`
margin-top: 10px;
width: 600px;
margin-right: 300px;;
`;
const FoodApp = () => 
{   

    const AppId = "81ebdfb2";
    const AppKey = "834066f858ed86e7356e2acb1e6c979a";

    const[recipes,setRecipes] = useState([]);
    const[search,setSearch] = useState('');
    const[query,setQuery] = useState('chicken');

    const URL = `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`;

    useEffect(
        () => {sendRequest()},
        [query]
    )

    const sendRequest = async () => 
    {
        const response = await fetch(URL);
        const data = await response.json();
        setRecipes(data.hits);
        //console.log(data.hits);
    }

    const upDateSearch = e => 
    {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const getSearch = e => 
    {   
        e.preventDefault();
        setQuery(search);
    }
    return(
        <div id="outer-container">
             <NavScaleRotate></NavScaleRotate>
             
            <Row className="justify-content-md-center">
                <form className="search-form" onSubmit={getSearch}>
                    <InputGroup size="lg">
                        
                            <FormControl value={search} onChange={upDateSearch} type="text">
                            </FormControl>
                            <Button color="primary" type="submit">Search</Button> 
                        
                    </InputGroup>
                </form>
            </Row>
            <Row>
                <Col md="10">
        <main id="page-wrap">
            
            
                {
                    recipes.map(
                            singleRecipe => (
                            <Recipe
                                key = {singleRecipe.recipe.label}
                                title = {singleRecipe.recipe.label}
                                calories = {singleRecipe.recipe.calories}
                                img = {singleRecipe.recipe.image}
                                source = {singleRecipe.recipe.source}
                                ingredients = {singleRecipe.recipe.ingredients}
                            />
                        )
                    )
                }
                </main>
            </Col>
            
            </Row>
        </div>
    );
}

export default FoodApp;