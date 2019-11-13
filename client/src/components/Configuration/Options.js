import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import BrushIcon from "@material-ui/icons/Brush";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 50,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  notification: {
    paddingLeft: 100,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Options() {
  const classes = useStyles();
  // 기존 회원 [설정 data] array 형식으로 DB에서 가져와서 React.useState 로 지정
  const userPreferences = ["lang", "theme"];
  const [checked, setChecked] = React.useState(userPreferences);
  // 설정 페이지에서 toggle 이벤트 발생시 호출되는 함수
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    // notification 옵션 해제하였을때 : 모두 비활성화
    if (value === "notification" && newChecked.includes(value)) {
      console.log(
        "notification 옵션 해제",
        value,
        "index: ",
        newChecked.indexOf(value)
      );
      // DB에서 온 설정
      let arr = ["notification", "project", "chat"];

      for (let i = 0; i < newChecked.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (newChecked[i] === arr[j]) {
            newChecked.splice(newChecked.indexOf(newChecked[i]), 1);
          }
          continue;
        }
      }
    }
    // notification 옵션 활성하였을때 : 모두 활성화
    else if (value === "notification" && !newChecked.includes(value)) {
      console.log(
        "notification 옵션 활성",
        value,
        "index: ",
        newChecked.indexOf(value)
      );
      newChecked.push(value);
      newChecked.push("project", "chat");
    }
    // 나머지 옵션 활성 핸들러
    else if (currentIndex === -1 && !newChecked.includes(value)) {
      console.log(
        "나머지 옵션 활성",
        value,
        "index: ",
        newChecked.indexOf(value)
      );
      newChecked.push(value);
      // 설정에 project 및 chat 옵션이 활성화 되어있을시 notification 옵션 활성
      if (newChecked.includes("project") && newChecked.includes("chat")) {
        newChecked.push("notification");
      }

      // 나머지 옵션 헤제 핸들러
    } else if (value !== "notification" && newChecked.includes(value)) {
      console.log(
        "나머지 옵션 헤제",
        value,
        "index: ",
        newChecked.indexOf(value)
      );
      newChecked.splice(newChecked.indexOf(value), 1);
      // 설정에 project 및 chat 옵션이 비활성화 되어있을시 notification 옵션 비활성
      if (value === "project" || value === "chat") {
        if (!newChecked.includes("project") && !newChecked.includes("chat")) {
          newChecked.splice(newChecked.indexOf("notification"), 1);
        }
      }
    }
    // 옵션 리스트 매개변수로 각 Component에 보내어 반영
    setChecked(newChecked);
    console.log(newChecked);
  };

  return (
    <Card>
      {/* [ Theme ] : 태마 설정 리스트 */}
      <List
        subheader={<ListSubheader>Theme</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemIcon>
            <BrushIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-theme" primary="Light / Dark" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={handleToggle("theme")}
              checked={checked.includes("theme")}
              inputProps={{ "aria-labelledby": "switch-list-label-theme" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      {/* [ Language ] : 언어 설정 리스트 */}
      <List
        subheader={<ListSubheader>Language</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-lang"
            primary="Korean / English"
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={handleToggle("lang")}
              checked={checked.includes("lang")}
              inputProps={{ "aria-labelledby": "switch-list-label-lang" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      {/* [ Alert ] : 전체 알림 설정 대분류 */}
      <List
        subheader={<ListSubheader>Alert</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-notification"
            primary="Notification"
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={handleToggle("notification")}
              checked={checked.indexOf("notification") !== -1}
              inputProps={{
                "aria-labelledby": "switch-list-label-notification"
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>

        {/* [ Alert ] : 알림 설정 소분류 */}
        <List className={classes.notification}>
          <ListItem>
            <ListItemIcon>
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-projectAlert"
              primary="Project notifications"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("project")}
                checked={checked.indexOf("project") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-projectAlert"
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MessageRoundedIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-chatAlert"
              primary="Chat notifications"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("chat")}
                checked={checked.indexOf("chat") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-chatAlert"
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </List>
    </Card>
  );
}
