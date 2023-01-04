"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3780);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_2__]);
_services_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function AuthProvider({ children  }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const isAuthenticated = !!user;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { "next.token": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
        if (token) {
            (0,_services_auth__WEBPACK_IMPORTED_MODULE_2__/* .recoverUserInformation */ .R)().then((response)=>{
                setUser(response.user);
            });
        }
    }, []);
    async function signIn({ email , password  }) {
        const { token , user  } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_2__/* .signInRequest */ .n)({
            email,
            password
        });
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, "next.token", token, {
            maxAge: 60 * 60 * 24
        });
        setUser(user);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/dashboard");
    }
    async function signOut() {
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, "next.token");
        setUser(null);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            signIn,
            isAuthenticated,
            signOut,
            user
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://nextjs-login.netlify.app/api"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ recoverUserInformation),
/* harmony export */   "n": () => (/* binding */ signInRequest)
/* harmony export */ });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_API__WEBPACK_IMPORTED_MODULE_0__]);
_API__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function signInRequest(data) {
    try {
        const response = await _API__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/sessions", data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
async function recoverUserInformation() {
    try {
        const response = await _API__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/sessions");
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;