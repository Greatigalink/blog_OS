import style from "./icon.module.scss";
import { 
  CalendarOutlined, 
  FolderOpenFilled, 
  UserOutlined, 
  LinkOutlined, 
  AudioOutlined, 
  UpOutlined, 
  EyeFilled, 
  HeartFilled, 
  PicRightOutlined, 
  CloseOutlined,
  DownOutlined,
  IeSquareFilled,
  ProjectFilled,
  DatabaseFilled,
  LeftSquareOutlined,
  RightSquareOutlined,
  LeftOutlined,
  RightOutlined,
  QqOutlined,
  WechatOutlined,
  GithubOutlined,
  AliyunOutlined } from "@ant-design/icons"
import Icon from "@ant-design/icons"
import { Sun, Moon, Comment, Left, Right } from "./svgPath"

const Text = (text) => <aside>{text}</aside>

const SunOutlined = props => <Icon component={Sun} {...props}></Icon>
const MoonOutlined = props => <Icon component={Moon} {...props}></Icon>
const CommentOutlined = props => <Icon component={Comment} {...props}></Icon>
const MyLeftOutlined = props => <Icon component={Left} {...props}></Icon>
const MyRightOutlined = props => <Icon component={Right} {...props}></Icon>

const testLocation = (location) => {
  if (location == "left" || location == "top") {
    return 1;
  } else if (location == "right" || location == "bottom") {
    return -1;
  } else {
    return 1;
  }
}

export default function MyIcon({
  iconName,
  text = "",
  location = "right",
  size = 12,
  color,
  fontColor = null,
  href = null,
  target = "_self",
  fontFamily = "" }) {

  let element;

  switch (iconName) {
    case 'calendar': element = <CalendarOutlined />; break;
    case 'classify': element = <FolderOpenFilled />; break;
    case 'user': element = <UserOutlined />; break;
    case 'link': element = <LinkOutlined />; break;
    case 'describe': element = <AudioOutlined />; break;
    case 'up': element = <UpOutlined />; break;
    case 'daytime': element = <SunOutlined style={{ width: size, height: size }} />; break;
    case 'night': element = <MoonOutlined style={{ width: size, height: size }} />; break;
    case 'eyes': element = <EyeFilled />; break;
    case 'like': element = <HeartFilled />; break;
    case 'comment': element = <CommentOutlined style={{ width: size, height: size }} />; break;
    case 'left': element = <MyLeftOutlined style={{ width: size, height: size }} />; break;
    case 'right': element = <MyRightOutlined style={{ width: size, height: size }} />; break;
    case 'hideNav': element = <PicRightOutlined />; break;
    case 'close': element = <CloseOutlined />; break;
    case 'down': element = <DownOutlined />; break;
    case 'web': element = <IeSquareFilled />; break;
    case 'reat': element = <ProjectFilled />; break;
    case 'sql': element = <DatabaseFilled />; break;
    case 'squareLeft': element = <LeftSquareOutlined />; break;
    case 'squareRight': element = <RightSquareOutlined />; break;
    case 'L': element = <LeftOutlined />; break;
    case 'R': element = <RightOutlined />; break;
    case 'Aly': element = <AliyunOutlined />; break;
    case 'qq': element = <QqOutlined />; break;
    case 'wechat': element = <WechatOutlined />; break;
    case 'github': element = <GithubOutlined />; break;
  }

  return (
    <div className={style.icon}>
      <a href={href} target={target} className={href ? style.icon_href : {}}>
        <div
          className={style[location]}
          style={{ fontSize: `${size}px`, color: fontColor == null ? color : fontColor, fontFamily: fontFamily }}
        >
          {
            testLocation(location) == 1
              ? Text(text)
              : ""
          }
          <main style={{ color: color }}>{element}</main>
          {
            testLocation(location) == -1
              ? Text(text)
              : ""
          }
        </div>
      </a>
    </div>

  )
}