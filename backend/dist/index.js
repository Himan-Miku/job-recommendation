"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "config/config.env" });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 8000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
