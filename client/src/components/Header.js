import React, {useState} from "react";
import { Menu } from 'antd';
import {HomeOutlined, SettingOutlined, AppstoreOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';


const Header = ({Home, Login, Register}) => {

    const [current, setCurrent] = useState('home')

    const { SubMenu, Item } = Menu

    const handleClick = (e) =>{
        setCurrent(e.key)
    }
 
   return (
    <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>

        <Item key="home" icon={<HomeOutlined />}>
        Home
        </Item>

        <Item key="login" icon={<UserOutlined />} className='float-right'>
        Login
        </Item>

        <Item key="register" icon={<UserAddOutlined />} className='float-right'>
        Register
        </Item>

        <SubMenu key="userName" title="Username" icon={<SettingOutlined />}>
            <Item key="two" icon={<AppstoreOutlined />}>
            hold
            </Item>
            <Item key="three" icon={<AppstoreOutlined />}>
                hold
            </Item>
            <Menu.ItemGroup title="Item Group">
                <Item key="four" icon={<AppstoreOutlined />}>
                Navigation Four
                </Item>
                <Item key="five" icon={<AppstoreOutlined />}>
                Navigation Five
                </Item>
            </Menu.ItemGroup>
        </SubMenu>

       

    </Menu>
  );

};
  
  export default Header;