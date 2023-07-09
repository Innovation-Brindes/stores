import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  margin: 0;

  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
`;

export const CardHeader = styled.div`
  padding-block: 0.3rem;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-weight: bold;
  text-align: center;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  padding-inline: 2rem;
  padding-bottom: 1rem;

  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0rem;
    padding-inline: 0.9rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

export const TdContent = styled.div`
  display: flex;
`;
