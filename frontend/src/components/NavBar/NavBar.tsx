import { Center, Flex } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import AuthContent from "./AuthContent"
import SearchBar from "./SearchBar"

const NavBar : React.FC = () =>
{

    //change: if logged in show Profile 
    return (
        <Flex bg='white' padding='6px 12px' height='44px'>
            <Flex align='center'>
                <Link href = '/'>Home</Link>
            </Flex>
            <SearchBar/>
            <AuthContent/> 
        </Flex>
    );
}

export default NavBar