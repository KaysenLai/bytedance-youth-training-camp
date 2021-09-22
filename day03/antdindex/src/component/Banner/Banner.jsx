import React, { useMemo, useState } from "react";
import "./Banner.scss";
import { MobileOutlined } from "@ant-design/icons";
import { Button } from "antd";

const iconList = [
  "https://gw.alipayobjects.com/zos/basement_prod/8737ccb7-3b5d-40ca-ae36-6a904047caa4.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/ba0958ce-b194-4910-84de-7e3274742dbb.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/fef2f3d5-9326-48e3-a8f3-a99584efd425.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/7002f57b-bf16-4640-8373-2c4cfcfa7f8c.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/1fdf5981-2d9d-4315-bb84-4590d5c5b989.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/dcb1b8f8-becd-4f90-ba32-574260a7b18d.svg",
  "https://gw.alipayobjects.com/zos/basement_prod/b9d17ebc-2af1-4926-ba1b-c1376ddaa479.svg",
];
const iconListLength = iconList.length;
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = { iconNum: 0 };
  }
  changeIcon() {
    this.setState((props) => ({
      iconNum: (props.iconNum + 1) % iconListLength,
    }));
  }
  onMouseEnter = () => {
    this.interval = setInterval(() => {
      this.changeIcon();
    }, 100);
  };

  onMouseLeave = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="banner">
        <img
          className="banner__bg"
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ"
          alt="background"
        />
        <div className="banner__content">
          <div
            className="banner__content-logo-wrap"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <img
              className="banner__logo-icon"
              src={iconList[this.state.iconNum]}
              alt="antd logo icon"
            />
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"
              alt="antd logo"
            />
          </div>
          <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
          <a href="#">
            <MobileOutlined />
            4.0 正式版发布(demo by: 赖朝凯)
          </a>
          <div className="banner__btn-wrap">
            <Button size="large" type="primary" shape="round">
              开始使用
            </Button>
            <Button size="large" shape="round">
              设计语言
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
