import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './style';


const Header: React.FC = () =>{

   const { colors } = useContext(ThemeContext);

   return (
      <Container>
         Hello Word!
         
         <Switch
            onChange={() => {}}
            checked={false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={colors.secondary}
         />
      </Container>
   );
};

export default Header;