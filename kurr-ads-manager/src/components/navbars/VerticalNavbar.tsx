import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { Default, Menu } from '../../styles/Text';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  navBarNumber: number;
  active: boolean;
  title: string;
}

const VerticalNavbar: React.FC = () => {
  const [navBarArray, setNavBarArray] = useState<NavBarProps[]>([
    {
      navBarNumber: 1,
      active: true,
      title: 'Skapa kampanj',
    },
    {
      navBarNumber: 2,
      active: false,
      title: 'Skapa målgrupp',
    },
    {
      navBarNumber: 3,
      active: false,
      title: 'Skapa annons',
    },
    {
      navBarNumber: 4,
      active: false,
      title: 'Publicera',
    },
  ]);

  const navigate = useNavigate();
  const navigations = [
    { navigation: '/' },
    { navigation: '/TargetGroupPage' },
    { navigation: '/AdPage' },
    { navigation: '/PreviewPage' },
  ];

  const handleNavBar = (number: number) => {
    setNavBarArray((prevArray) =>
      prevArray
        .map((navBarItem) => ({
          ...navBarItem,
          active: false,
        }))
        .map((navBarItem) =>
          navBarItem.navBarNumber <= number ? { ...navBarItem, active: true } : navBarItem,
        ),
    );

    const index = number - 1;
    if (index >= 0 && index < navigations.length) {
      navigate(navigations[index].navigation);
    }
  };

  return (
    <NavBar>
      {navBarArray.map((navBarItem) => (
        <div>
          <Items onClick={() => handleNavBar(navBarItem.navBarNumber)} active={navBarItem.active}>
            <Circle>
              <Default>
                <Text>{navBarItem.navBarNumber}</Text>
              </Default>
            </Circle>
            <TextStyle>
              <Menu>{navBarItem.title}</Menu>
            </TextStyle>
          </Items>

          {navBarItem.navBarNumber < 4 && (
            <Line>
              <PinkLine active={navBarItem.active} />
            </Line>
          )}
        </div>
      ))}
    </NavBar>
  );
};

const NavBar = styled.div`
    display: flex;  
    flex-direction: column;
    gap: 6px;
    padding-left:5%;
    position: fixed;
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

const PinkLine = styled.div<{ active: boolean }>`
    width: 3px;
    height: 39px;
    background-color: ${(props) =>
      props.active ? Colors.kurr_primary_piglet_peach : Colors.light_grey}; 
    border-radius: 4px;
}`;

const TextStyle = styled.p`
    color: ${Colors.grey_25}
}`;

const Text = styled.p`
    color: ${Colors.grey_25};
}`;

export default VerticalNavbar;
