
import styled from 'styled-components';
import { cor_base_2 } from '../../../services/cores';

export const IconPhone = styled.div`
    width: ${props => (props.wid ? props.wid : 15)}px;
    height:${props => (props.hei ? props.hei : 15)}px;
    background-color: transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid ${cor_base_2};
    border-radius:15px;
`

export const IconCart = styled.div`
    width: ${props => (props.wid ? props.wid : 15)}px;
    height:${props => (props.hei ? props.hei : 15)}px;
    background-color: transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid ${cor_base_2};
    border-radius:15px;
    cursor: pointer;
    i{
        font-size: ${props => (props.wid == 30 ? 18 : 15)}px;
        margin-left:2px;
        color:${cor_base_2}
    }
`