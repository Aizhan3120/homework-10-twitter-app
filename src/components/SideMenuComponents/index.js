import {
  BOOKMARKS_SVG,
  HASHTAG_SVG,
  HOMEPAGE_SVG,
  LIST_SVG,
  MESSAGE_SVG,
  MORE_SVG,
  NOTIFICATION_SVG,
} from "./images ";
import MenuItem from "./MenuItem";
import "./style.css";

export default function SideMenu() {
  const menu = [
    {
      icon: HOMEPAGE_SVG,
      name: "Home",
    },
    {
      icon: HASHTAG_SVG,
      name: "Explore",
    },
    {
      icon: NOTIFICATION_SVG,
      name: "Notivication",
    },
    {
      icon: MESSAGE_SVG,
      name: "Messages",
    },
    {
      icon: BOOKMARKS_SVG,
      name: "Bookmarks",
    },
    {
      icon: LIST_SVG,
      name: "List",
    },
    {
      icon: MORE_SVG,
      name: "More",
    },
  ];

  return (
    <div classname="w-25 mt-3 mx-5">
      <img src={require("./images/twitter-logo.png")} className="logo-icon" />

      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
}
