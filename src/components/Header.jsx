import React from 'react'
import {Heading, Image, Text} from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg'
const Header = () => {
  return (
    <div>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        AI Keywoard
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract the keyboard for you
      </Text>
    </div>
  )
}

export default Header
