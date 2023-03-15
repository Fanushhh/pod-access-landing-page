import styled from "styled-components";
import { variables } from "../../styles/variables";
import Form from "../Form/Form";

const Hero = styled.section`
    position: relative;
    z-index: 3;
    font-size: .937rem;
    color:${variables.desatuaredGray};
    line-height: 1.6rem;
    font-weight: 100;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .logoFormSection{
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 43.75rem) {
        background-color: ${variables.darkBlue};
        width: 635px;
        text-align: left;
        align-items: flex-start;
        position: static;
        padding-top: 5.81rem;
        & .logoFormSection{
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            gap:3rem;
            
        }
        .podcastLogoImg{
            position: absolute;
            top: 3.85rem;
        }
        
    }

    @media screen and (min-width: 62.5rem) { 
        width: 45.31rem;
        
        .podcastLogoImg{
            top: 7.5rem;
        }
    }
`;

const HeroDescription = styled.div`
    padding: 3.56rem 0 2rem;
    & p{
        max-width: 445px;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    @media screen and (min-width:700px) {
        padding: 0;
    }
`

const Title = styled.h1`
    font-size: 1.625rem;
    line-height: 2.37rem;
    font-weight: 100;
    text-transform: uppercase;
    font-style: normal;
    color:${variables.lightGreen};
    @media screen and (min-width:700px) {
        font-size: 3rem;
        line-height: 3.5rem;
    }
`

const Subtitle = styled(Title)`
    color:${variables.desatuaredGray};
    padding-bottom: 1rem;
    
`

const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-width: 315px;
    & img{
        max-width: 70px;
        height: 18px;
    }

    @media screen and (min-width:700px){
        max-width: 536px;
        justify-content: flex-start;
        gap:2.5rem;
        margin-top: 1rem;
        & img{
            max-width: 130px;
            height: auto;
        }
    }
`

export default function Description({props}){
    return( 
        <Hero>
            <div>
                <img className="podcastLogoImg" src={props.description.logoImg} alt='podcast logo'/>
            </div>
            <HeroDescription>
                <Title>{props.description.title}</Title>
                <Subtitle>{props.description.subtitle}</Subtitle>
                <p>{props.description.description}</p>
            </HeroDescription>
            <div className="logoFormSection">
                <StyledLogoContainer>
                    <img src={props.description.spotifyImg} alt='platform logos' />
                    <img src={props.description.appleImg} alt='platform logos' />
                    <img src={props.description.googleImg} alt='platform logos' />
                    <img src={props.description.pocketImg} alt='platform logos' />
                </StyledLogoContainer>
                <Form props={props.form}/>
            </div>
        </Hero>
    )
}