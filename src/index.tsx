import * as React from "react";
import { render } from "react-dom";


import {LoginForm} from "./conditions/LoginForm";

const rootElement = document.getElementById("root");
render(<LoginForm />, rootElement);