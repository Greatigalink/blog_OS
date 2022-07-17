const homeHeadHotPost = (clock) => ({
  borderColor: clock == "night" ? "#212121" : "white",
});
const homeHotClassify = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});
const homeNewPostBorder = (clock) => ({
  borderColor: clock == "night" ? "#212121" : "white",
})
const homeNewPost = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "white" : "#212121",
});
const homeComment = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "white" : "#212121",
});

const post = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
});
const markdown = (clock) => ({
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const about = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const classify = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const navList = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const buildHistory = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const link = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const footer = (clock) => ({
  backgroundColor: clock == "night" ? "#212121" : "white",
  color: clock == "night" ? "#bdbdbd" : "#212121",
});

const dayOrNight = function (element = "", clock = "daytime") {
  switch (element) {
    case "home_head_hot_post":
      return homeHeadHotPost(clock);
    case "home_hotClassify":
      return homeHotClassify(clock);
    case "home_newPostBorder":
      return homeNewPostBorder(clock);
    case "home_newPost":
      return homeNewPost(clock);
    case "home_comment":
      return homeComment(clock);
    case "post":
      return post(clock);
    case "markdown":
      return markdown(clock);
    case "about":
      return about(clock);
    case "classify":
      return classify(clock);
    case "navList":
      return navList(clock);
    case "buildHistory":
      return buildHistory(clock);
    case "link":
      return link(clock);
    case "footer":
      return footer(clock);
    default:
      return {
        backgroundColor: clock == "night" ? "#212121" : "white",
        color: clock == "night" ? "#bdbdbd" : "#212121",
      };
  }
};

export { dayOrNight };
