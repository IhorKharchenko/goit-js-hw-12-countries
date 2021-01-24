import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/Material.css";

import { defaults } from "@pnotify/core";

defaults.delay = 2000;

const { alert, info, success, error } = require("@pnotify/core");

defaults.styling = "material";
defaults.icons = "material";

function emptyNotification() {
  alert("Entry some letters");
}

function errorNotification() {
  error("There is no matches");
}

function preciseRequestNotification() {
  info("More specific please");
}

function succsessNotification() {
  success("Good choice!");
}

export default {
  succsessNotification,
  preciseRequestNotification,
  errorNotification,
  emptyNotification,
};
