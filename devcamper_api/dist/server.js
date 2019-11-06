"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: "./config/config.env" });
const app = express_1.default();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started in ${process.env.NODE_ENV} mode at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map