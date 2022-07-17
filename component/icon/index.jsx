import style from "./icon.module.scss";
import {
  HomeFilled, 
  CalendarFilled, 
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
  AliyunOutlined,
  LikeFilled,
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  WarningFilled,
  FieldTimeOutlined,
  EnvironmentFilled,
  MessageFilled,
  FireFilled,
  MailFilled,
  LockFilled,
  SoundFilled,
  VideoCameraFilled,
  CustomerServiceFilled,
  DropboxSquareFilled,
  BookFilled } from "@ant-design/icons"
import Icon from "@ant-design/icons"
import { Sun, Moon, Left, Right, TrunOff, TencentServe, YouPaiYun, BaiDu, Google, $360Browser } from "./svgPath"

const Text = (text) => <aside>{text}</aside>

const SunOutlined = props => <Icon component={Sun} {...props}></Icon>
const MoonOutlined = props => <Icon component={Moon} {...props}></Icon>
const MyLeftOutlined = props => <Icon component={Left} {...props}></Icon>
const MyRightOutlined = props => <Icon component={Right} {...props}></Icon>
const MyTurnOff = props => <Icon component={TrunOff} {...props}></Icon>
const TencentServeIcon = props => <Icon component={TencentServe} {...props}></Icon>
const YouPaiYunServeIcon = props => <Icon component={YouPaiYun} {...props}></Icon>
const BaiDuBro = props => <Icon component={BaiDu} {...props}></Icon>
const GoogleBro = props => <Icon component={Google} {...props}></Icon>
const $360Bro = props => <Icon component={$360Browser} {...props}></Icon>

const testLocation = (location) => {
  if (location == "left" || location == "top") {
    return 1;
  } else if (location == "right" || location == "bottom") {
    return -1;
  } else {
    return 1;
  }
}

const clickMove = (href, target) => {
  if(href) {
    window.open(href, target || '_blank')
  }
  return
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
    case 'home': element = <HomeFilled />; break;
    case 'calendar': element = <CalendarFilled />; break;
    case 'time': element = <FieldTimeOutlined />; break;
    case 'classify': element = <FolderOpenFilled />; break;
    case 'user': element = <UserOutlined />; break;
    case 'link': element = <LinkOutlined />; break;
    case 'describe': element = <AudioOutlined />; break;
    case 'up': element = <UpOutlined />; break;
    case 'daytime': element = <SunOutlined style={{ width: size, height: size }} />; break;
    case 'night': element = <MoonOutlined style={{ width: size, height: size }} />; break;
    case 'eyes': element = <EyeFilled />; break;
    case 'heart': element = <HeartFilled />; break;
    case 'comment': element = <MessageFilled />; break;
    case 'left': element = <MyLeftOutlined style={{ width: size, height: size }} />; break;
    case 'right': element = <MyRightOutlined style={{ width: size, height: size }} />; break;
    case 'hideNav': element = <PicRightOutlined />; break;
    case 'close': element = <CloseOutlined />; break;
    case 'down': element = <DownOutlined />; break;
    case 'NE1': element = <HomeFilled />; break;
    case 'SD1': element = <IeSquareFilled />; break;
    case 'SD2': element = <ProjectFilled />; break;
    case 'SD6': element = <DatabaseFilled />; break;
    case 'ME1': element = <CustomerServiceFilled />; break;
    case 'ME2': element = <VideoCameraFilled />; break;
    case 'TD1': element = <HomeFilled />; break;
    case 'EL1': element = <BookFilled />; break;
    case 'squareLeft': element = <LeftSquareOutlined />; break;
    case 'squareRight': element = <RightSquareOutlined />; break;
    case 'L': element = <LeftOutlined />; break;
    case 'R': element = <RightOutlined />; break;
    case 'Aly': element = <AliyunOutlined />; break;
    case 'qq': element = <QqOutlined />; break;
    case 'wechat': element = <WechatOutlined />; break;
    case 'github': element = <GithubOutlined />; break;
    case 'like': element = <LikeFilled />; break;
    case 'info': element = <InfoCircleFilled />; break;
    case 'success': element = <CheckCircleFilled />; break;
    case 'error': element = <CloseCircleFilled />; break;
    case 'warning': element = <WarningFilled />; break;
    case 'location': element = <EnvironmentFilled />; break;
    case 'email': element = <MailFilled />; break;
    case 'fire': element = <FireFilled />; break;
    case 'password': element = <LockFilled />; break;
    case 'turnOff': element = <MyTurnOff style={{ width: size, height: size }} />; break;
    case 'tencentServe': element = <TencentServeIcon style={{ width: size, height: size }} />; break;
    case 'youpaiyun': element = <YouPaiYunServeIcon style={{ width: size, height: size }} />; break;
    case 'notifiy': element = <SoundFilled />; break;
    case 'baidu': element = <BaiDuBro style={{ width: size, height: size }} />; break;
    case 'google': element = <GoogleBro style={{ width: size, height: size }} />; break;
    case '360bro': element = <$360Bro style={{ width: size, height: size }} />; break;
    default: element = <DropboxSquareFilled />; break;
  }

  return (
    <div className={style.icon}>
      <div className={href ? style.icon_href : {}} onClick={() => clickMove(href, target)}>
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
      </div>
    </div>
  )
}