import "./style.css";
import { createHeader } from "./script/header.js";
import {createFocus} from "./script/focus.js";
import {createShortBreak} from './script/shortBreak.js';

document.addEventListener("DOMContentLoaded", () => {

  createHeader();

  createFocus();

  createShortBreak();

});



