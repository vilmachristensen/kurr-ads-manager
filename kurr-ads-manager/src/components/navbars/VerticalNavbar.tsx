import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { Default, Menu } from '../../styles/Text';

const VerticalNavbar: React.FC = () => {
  const [navBar, setNavBar] = useState<number | null>(null);

  const handleNavBar = (circleNumber: number) => {
    setNavBar(circleNumber);
  };

  return (
    <NavBar>
      <Items onClick={() => handleNavBar(1)} active={navBar === 1}>
        <Circle>
          <Default>
            <Text>1</Text>
          </Default>
        </Circle>
        <TextStyle>
          <Menu>Skapa kampanj</Menu>
        </TextStyle>
      </Items>
      <Line>
        <GreyLine />
        <PinkLine />
      </Line>
      <Items onClick={() => handleNavBar(2)} active={navBar === 2}>
        <Circle>
          <Default>
            <Text>2</Text>
          </Default>
        </Circle>
        <TextStyle>
          <Menu>Skapa målgrupp</Menu>
        </TextStyle>
      </Items>
      <Line>
        <GreyLine />
        <PinkLine />
      </Line>
      <Items onClick={() => handleNavBar(3)} active={navBar === 3}>
        <Circle>
          <Default>
            <Text>3</Text>
          </Default>
        </Circle>
        <TextStyle>
          <Menu>Skapa annons</Menu>
        </TextStyle>
      </Items>
      <Line>
        <GreyLine />
        <PinkLine />
      </Line>
      <Items onClick={() => handleNavBar(4)} active={navBar === 4}>
        <Circle>
          <Default>
            <Text>4</Text>
          </Default>
        </Circle>
        <TextStyle>
          <Menu>Skapa publicera</Menu>
        </TextStyle>
      </Items>
    </NavBar>
  );
};

const NavBar = styled.div`
    display: flex;  
    flex-direction: column;
    gap: 6px;
}`;

const Items = styled.div<{ active: boolean }>`
    display: flex;  
    flex-direction: row;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    ${(props) =>
      props.active &&
      `
        ${Circle} {
          background-color: ${Colors.kurr_primary_piglet_peach};
        }
        ${Text} {
            color: ${Colors.kurr_white};
          }
        ${TextStyle} {
            color: ${Colors.grey_45};
        }
      `}
}`;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    background-color: ${Colors.light_grey};
    border-radius: 50%;
}`;

const Line = styled.div`
    position: relative;
    margin-left: 15px;
}`;

const GreyLine = styled.div`
    width: 3px;
    height: 39px;
    background-color: ${Colors.light_grey};
    border-radius: 4px;
}`;

const PinkLine = styled.div`
    width: 3px;
    height: 19px;
    background-color: ${Colors.kurr_primary_piglet_peach};
    border-radius: 4px;
    top: 0;
    position: absolute;
}`;

const TextStyle = styled.p`
    color: ${Colors.grey_25}
}`;

const Text = styled.p`
    color: ${Colors.grey_25};
}`;

export default VerticalNavbar;
