import React, {useState} from "react";
import { Menu } from 'antd';
import {HomeOutlined, SettingOutlined, AppstoreOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Header = ({Home, Login, Register}) => {

    const [current, setCurrent] = useState('home')

    const { SubMenu, Item } = Menu

    const handleClick = (e) =>{
        setCurrent(e.key)
    }
 
   return (
    <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>

        <Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className='float-right'>
            <Link to="/login">Login</Link>
        </Item>

        <Item key="register" icon={<UserAddOutlined />} className='float-right'>
            <Link to="/register">Register</Link>
        </Item>

        <SubMenu key="userName" title="Username" icon={<SettingOutlined />}>
            <Item key="two" icon={<AppstoreOutlined />}>
            hold
            </Item>
            <Item key="three" icon={<AppstoreOutlined />}>
                hold
            </Item>
        </SubMenu>

       

    </Menu>
  );

};
  
  export default Header;