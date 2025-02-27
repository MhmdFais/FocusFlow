import "./style.css";
import { createHeader } from "./script/header.js";
import {createFocus} from "./script/focus.js";
import {createShortBreak} from './script/shortBreak.js';
import {createLongBreakCard} from './script/longBreak.js';
import {createFooter} from './script/footer.js'

document.addEventListener("DOMContentLoaded", () => {

  createHeader();

  createFocus();

  createShortBreak();

  createLongBreakCard();

  createFooter();

});



