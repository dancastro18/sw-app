import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { fetchEntities } from "../services/swapi";
import Card from '../components/Card';
import LoadingSpinner from "../components/LoadingSpinner";
import { colors } from "../styles/variables";


const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: ${colors.primary};
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 40px;
`;
const SelectionButton = styled.button`
    background-color:${props => props.$active ? colors.primary : colors.secondary};
    color: ${props => props.$active ? colors.tertiary : colors.text};
    border: 2px solid ${colors.primary};
    padding: 15px 30px;
    margin: 0 15px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${props => props.$active ? colors.primary : colors.border};
        color: ${props => props.$active ? colors.tertiary : colors.text};
  }
`;

const CarsdGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const HomePage = ()=>{
    const [selectedType, setSelectedType] = useState(null);
    const [entities, setEntities] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if (!selectedType) return;

        const loadEntities = async()=>{
            setLoading(true);
            setError(null);
            try{
                const data = await fetchEntities(selectedType);
                setEntities(data.results);
            }catch (err){
                setError('Error al cargar la informacion, intente nuevamente');
                console.error(err);
            }finally{
                setLoading(false);
            }
        };
        loadEntities();
    },[selectedType]);

    const getCardDetails = (entity, type)=>{

        if (type === 'people'){
            return {
                'Genero': entity.gender,
                'Estatura': entity.height,
                'Peso': entity.mass,
            };
        
        } else if (type === 'planets'){
            return {
                'Clima': entity.climate,
                'Terreno': entity.terrain,
                'Poblacion': entity.population,
            };
        } else if (type === 'species'){
            return {
                'Nombre': entity.name,
                'Clasificacion': entity.classification,
                'Lenguaje': entity.language,
            }
            
        } else if (type === 'starships'){
            return{
                'Nombre': entity.name,
                'Modelo': entity.model,
                'Precio': entity.cost_in_credits,
            }
        }
        return {};
    };
    return (
        <HomePageContainer>
            <SectionTitle>Elige tu camino en la Galaxia</SectionTitle>
            <ButtonContainer>
                <SelectionButton
                    $active={selectedType === 'people'}
                    onClick={()=> setSelectedType('people')}>
                        Personajes
                </SelectionButton>
                <SelectionButton
                    $active={selectedType === 'planets'}
                    onClick={()=> setSelectedType('planets')}>
                        Planetas
                </SelectionButton>
                <SelectionButton
                    $active={selectedType === 'species'}
                    onClick={()=> setSelectedType('species')}>
                        Especies
                </SelectionButton>
                <SelectionButton
                    $active={selectedType === 'starships'}
                    onClick={()=> setSelectedType('starships')}>
                        Naves
                </SelectionButton>
            </ButtonContainer>
            {loading && <LoadingSpinner/>}
            {error && <p style={{color: 'red'}}>{error}</p>}

            {!loading && !error && selectedType && (
                <CarsdGrid>
                    {entities.map((entity)=>(
                        <Card
                            key={entity.url}
                            name={entity.name}
                            type={selectedType}
                            details={getCardDetails(entity,selectedType)}
                            url={entity.url}
                        />
                    ))}
                </CarsdGrid>
            )}
        </HomePageContainer>
    );
};

export default HomePage;