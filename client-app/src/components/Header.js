import React, { useState, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Button, Dropdown, Space, Menu, Modal, Popover } from "antd";
import { PoweroffOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();
  const showback = () => {
    navigate('/home');
  };
  const register = () => {
    navigate('/register');
  };
  const login = () => {
    navigate('/login');
  };
  const toCate = () => {
    navigate('/managercategory');
  };
  const toTag = () => {
    navigate('/managertag');
  };
  const toPost = () => {
    navigate('/managerpost');
  };
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    let res = await axios.get("https://localhost:5000/getallcategories");
    if (res) {
      setItems(
        res.data.reduce((init, value, index) =>
          [
            ...init,
            {
              label: <NavLink to={`/category/${value.id}`}>{value.categoryName}</NavLink>,
              key: index
            }
          ], []
        )
      )
    }
  }

  const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem("login")));

  const { data: loginContext, setData: setLoginContext } = useAppContext('login');

  useEffect(() => {
    if (loginContext){
      console.log(localStorage.getItem("login"));
      setUserLogin(JSON.parse(localStorage.getItem("login")));
    }
  }, [loginContext])

  useEffect(() => {
    fetchData()
  }, [])
  const content = (
    <div className="user--dropdown">
      <Button onClick={toCate}>Thể Loại</Button>
      <Button onClick={toTag}>Tag</Button>
      <Button onClick={toPost}>Bài viết</Button>
    </div>
  );

  return (
    <div className="header">
      <Button className="header-btn" icon={<HomeOutlined />} onClick={showback}></Button>
      <Popover content={content} trigger={['click']}>
        <Button>Quản lý</Button>
      </Popover>
      {/* </> */}
      {/* <> */}
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <Button>Thể loại</Button>
      </Dropdown>
      {/* </> */}
      <Button className="header-btn">Liên hệ</Button>
      {
        userLogin
          ? <>
            <Button className="header-btn" onClick={register}>Viết bài</Button>
            <Button className="header-btn" onClick={login}>{userLogin.name}</Button>
          </>
          : <>
            <Button className="header-btn" onClick={register}>Đăng kí</Button>
            <Button className="header-btn" onClick={login}>Đăng nhập</Button>
          </>

      }

    </div>
  );
}


export default Header;