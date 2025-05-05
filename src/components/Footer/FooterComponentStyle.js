import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding-block: 2rem;
  position: relative;
  margin-top: 2rem;
  background-color: white;
  border-top: 1px solid #cecece;

  position: relative;

  margin-top: 10rem;


  @media (max-width: 768px) {
    padding: 2rem 1rem;

    padding-top: 2rem;

  }

  .icon-border {
    border: 1px solid #9fcd42;
    padding: .3rem;
    border-radius: .5rem;
  }

 
`;

export const Title = styled.h3`
   font-size: 1.5rem;
   font-weight: 500;
   margin-bottom: 1rem;
   color: #9fcd42; 
   background-color: white;

   text-align: ${props => props.align || 'left'};


   @media (max-width: 768px) {
    text-align: left!important;
  }	
`;

export const MobileContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const FooterHeader = styled.header`
  height: fit-content;
  background-color: white;
  position: absolute;
  top: -2.2rem;
  width: calc(100% - 8rem);
  padding-inline: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    width: 100%;
    padding-inline: 0;
    position: relative;
    padding-top: 4rem!important;

    display: flex;
    flex-direction: column;


    .logo_div {
      position: relative;
      align-self: flex-start;
      margin-bottom: 1rem;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -12rem;
        width: 100%;
        height: 3px;
        background-color: #cecece;

        @media (max-width: 768px) {
          right: -8rem;
          width: 60%;
        }
      }
    }

  }

`;

export const IconsSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-inline: 1rem;
  background: #fff;
  background-color: white;

  position: absolute;

  top: -1.4rem;

  transform: translateX(1.3rem);

 

  @media (max-width: 768px) {
    display: none;
  }
`;


export const Features = styled.div`

  display: none;

 

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const HeaderContent = styled.div`
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterLogo = styled.img`
  background: #fff;
  padding-inline: 1rem;
  display: inline;

  margin-bottom: ${({ margin }) => margin};
  

  
  @media (max-width: 768px) {
    &:not(:first-child) {
    display: none;
  }
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;


  div {
    position: relative;

    span {
      position: absolute;
      top: -1rem;
      left: 2rem;

      --webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: .9rem;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }

`;


export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px 1fr 250px;
  background-color: white;

  .soaqui {
    list-style: none;
    padding: 0;

    ul {
      padding: 0px;

      @media (max-width: 768px) {
        padding-left: 2rem;
      }
    }

  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
`;

export const FooterBodyContentLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  padding: 0;

`;

export const FooterBodyContent = styled.div`
  text-align: center;

  background-color: white;

  @media (max-width: 768px) {
    text-align: left;
    padding-inline: 2rem;
  }

  .soaqui {
    display: flex;
    flex-direction: column;
    text-align: center;

    h3 {
      text-align: center;
    }

    @media (max-width: 768px) {
      text-align: left!important;

      h3 {
        padding-inline: 2rem!important;
      }
    }
  }

  &:not(:first-child) {
    border-left: 1px solid #cecece;

    @media (max-width: 768px) {
      border-left: none;
      padding-left: 0;
    }
  }
`;

export const FooterBodyContentTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: #9fcd42; 
  background-color: white;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: left!important;
    padding-inline: 2rem!important;
  }

`;

export const DividierMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #cecece;
    margin: 2rem 0;
  }
`

export const FooterBodyContentInfo = styled.ul`
  list-style: none;


  .list_atendimento {
    @media (max-width: 768px) {
      transform: translateX(-2rem);
    }
  }

  li {
    display: flex;
    align-items: ${props => props.align || 'flex-start'};
    gap: 1rem;
    flex-direction: column;

    @media (max-width: 768px) {
      &:not(:last-child) {
        transform: translateX(-2rem);
    }
  }

  }

  div {
    display: flex;
    align-items: center;
    gap: .6rem;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #9fcd42;
    }
    

  }

  .info-horarios {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin: 0
    }
  }
`;

export const FooterBodyContentLink = styled.li`
  list-style: none;
  background-color: white;

  a {
    color: #333;
    text-decoration: none;
    display: inline-block;

    &:hover {
      color: #9fcd42;
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &::after {
      content: '';
      width: 0px;
      height: 2px;
      display: block;
      background: #9fcd42;
      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  
  }
`;
