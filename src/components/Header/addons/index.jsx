import { PhoneIcon } from "@chakra-ui/icons";
import { cor_base_2 } from "../../../services/cores";
import { IconCart, IconPhone } from "./styled";


export function IconPhone30(){
    return  (<IconPhone wid={30} hei={30}>
                <PhoneIcon transform={'rotateY(180deg)'} color={cor_base_2}/>
            </IconPhone>);
}

export function IconPhone20(){
    return  (<IconPhone wid={20} hei={20}>
                <PhoneIcon fontSize={10} transform={'rotateY(180deg)'} color={cor_base_2}/>
            </IconPhone>);
}

export function IconPhone10(){
    return  (<IconPhone wid={10} hei={10}>
                <PhoneIcon fontSize={4} transform={'rotateY(180deg)'} color={cor_base_2}/>
            </IconPhone>);
}


export function IconCart30(){
    return  (<IconCart wid={30} hei={30}>
                <i className="material-icons">
                  shopping_cart
                </i>
            </IconCart>);
}
