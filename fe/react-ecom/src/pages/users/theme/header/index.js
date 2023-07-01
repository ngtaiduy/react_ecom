import { memo } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

const Header = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top_box header__top_left">
            <ul>
              <li>
                <AiOutlineMail />
                <span>hello@gmail.com</span>
              </li>
              <li>Miễn phí Ship đơn từ {formatter(200000)}</li>
            </ul>
          </div>
          <div className="col-6 header__top_box header__top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                  <span>Đăng nhập</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
