import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsFillBasket3Fill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to='/'>
            <AiOutlineHome className="sidebar-icon"/>
            صفحه اصلی
        </NavLink>
        <NavLink  to='/products'>
            <MdProductionQuantityLimits className="sidebar-icon"/>
            محصولات
        </NavLink>
        <NavLink to='/comments'>
            <BiCommentDetail className="sidebar-icon"/>
            کامنت ها
        </NavLink>
        <NavLink to='/users'>
            <FiUsers className="sidebar-icon"/>
            کاربران
        </NavLink>
        <NavLink to='/orders'>
            <BsFillBasket3Fill className="sidebar-icon"/>
            سفارشات
        </NavLink>
        <NavLink to='/offs'>
            <BsCurrencyDollar className="sidebar-icon"/>
            تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
