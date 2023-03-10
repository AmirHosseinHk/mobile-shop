import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsFillBasket3Fill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to='/'>
            <AiOutlineHome className="sidebar-icon"/>
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to='/products'>
            <MdProductionQuantityLimits className="sidebar-icon"/>
            محصولات
          </Link>
        </li>
        <li>
          <Link to='/comments'>
            <BiCommentDetail className="sidebar-icon"/>
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to='/users'>
            <FiUsers className="sidebar-icon"/>
            کاربران
          </Link>
        </li>
        <li>
          <Link to='/orders'>
            <BsFillBasket3Fill className="sidebar-icon"/>
            سفارشات
          </Link>
        </li>
        <li>
          <Link to='/offs'>
            <BsCurrencyDollar className="sidebar-icon"/>
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;