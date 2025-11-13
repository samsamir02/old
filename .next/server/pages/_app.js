/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_VERSION\": () => (/* binding */ API_VERSION),\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL)\n/* harmony export */ });\nconst BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT || \"http://localhost:8000\";\nconst API_VERSION = \"v1.0\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxXQUNYQyxRQUFRQyxHQUFHLENBQUNDLHdCQUF3QixJQUFJLHdCQUF3QjtBQUMzRCxNQUFNQyxjQUFjLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83N3NzLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XG5leHBvcnQgY29uc3QgQVBJX1ZFUlNJT04gPSBcInYxLjBcIjtcbiJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJBUElfVkVSU0lPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./contexts/auth.contexts.js":
/*!***********************************!*\
  !*** ./contexts/auth.contexts.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/axios */ \"./helpers/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"./config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_axios__WEBPACK_IMPORTED_MODULE_1__]);\n_helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\"use client\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    user: undefined,\n    setUser: async ()=>null\n});\nconst AuthProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const storeUser = ()=>{\n        (0,_helpers_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${_config__WEBPACK_IMPORTED_MODULE_3__.API_VERSION}/user/details/`).then((res)=>{\n            setUser(res.data);\n        }).catch((err)=>{\n            setUser(undefined);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        storeUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            setUser: storeUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/project/contexts/auth.contexts.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoLmNvbnRleHRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUU0QztBQUN5QjtBQUNwQjtBQUUxQyxNQUFNTyw0QkFBY04sb0RBQWFBLENBQUM7SUFDdkNPLE1BQU1DO0lBQ05DLFNBQVMsVUFBWSxJQUFJO0FBQzNCLEdBQUc7QUFFSSxNQUFNQyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDMUMsTUFBTSxDQUFDSixNQUFNRSxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDTTtJQUVuQyxNQUFNSSxZQUFZLElBQU07UUFDdEJiLDBEQUFhQSxDQUFDLENBQUMsRUFBRUssZ0RBQVdBLENBQUMsY0FBYyxDQUFDLEVBQUVTLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ3hETCxRQUFRSyxJQUFJQyxJQUFJO1FBQ3BCLEdBQUdDLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1lBQ2RSLFFBQVFEO1FBQ1o7SUFDRjtJQUNFTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pTO0lBQ0osR0FBRyxFQUFFO0lBQ1AscUJBQ0UsOERBQUNOLFlBQVlZLFFBQVE7UUFDbkJDLE9BQU87WUFDTFo7WUFDQUUsU0FBU0c7UUFDWDtrQkFFQ0Q7Ozs7OztBQUdQLEVBQUU7QUFFRixNQUFNUyxVQUFVLElBQU1uQixpREFBVUEsQ0FBQ0s7QUFDakMsaUVBQWVjLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83N3NzLy4vY29udGV4dHMvYXV0aC5jb250ZXh0cy5qcz8zMGZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tIFwiQC9oZWxwZXJzL2F4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1ZFUlNJT04sIEJBU0VfVVJMIH0gZnJvbSBcIkAvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB1c2VyOiB1bmRlZmluZWQsXG4gIHNldFVzZXI6IGFzeW5jICgpID0+IG51bGwsXG59KTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IHN0b3JlVXNlciA9ICgpID0+IHtcbiAgICBheGlvc0luc3RhbmNlKGAke0FQSV9WRVJTSU9OfS91c2VyL2RldGFpbHMvYCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgc2V0VXNlcih1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHN0b3JlVXNlcigpO1xuICAgIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXI6IHN0b3JlVXNlcixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoO1xuIl0sIm5hbWVzIjpbImF4aW9zSW5zdGFuY2UiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQVBJX1ZFUlNJT04iLCJCQVNFX1VSTCIsIkF1dGhDb250ZXh0IiwidXNlciIsInVuZGVmaW5lZCIsInNldFVzZXIiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0b3JlVXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/auth.contexts.js\n");

/***/ }),

/***/ "./helpers/axios.js":
/*!**************************!*\
  !*** ./helpers/axios.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ \"./config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: _config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL,\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Accept\": \"application/json\"\n    }\n});\naxiosInstance.interceptors.request.use((config)=>{\n    // Modify the request config here (add headers, authentication tokens)\n    const accessToken = localStorage.getItem(\"access_token\");\n    // If token is present add it to request's Authorization Header\n    if (accessToken) {\n        if (config.headers) config.headers.Authorization = \"Bearer \" + accessToken;\n    }\n    return config;\n}, (error)=>{\n    // Handle request errors here\n    return Promise.reject(error);\n});\naxiosInstance.interceptors.response.use((response)=>{\n    return response;\n}, async function(error) {\n    const originalRequest = error.config;\n    if (typeof error.response === \"undefined\") {\n        alert(\"A server/network error occurred. \" + \"Looks like CORS might be the problem. \" + \"Sorry about this - we will get it fixed shortly.\");\n        return Promise.reject(error);\n    }\n    if (error.response.status === 401 && originalRequest.url === _config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + `${_config__WEBPACK_IMPORTED_MODULE_1__.API_VERSION}/user/refresh/`) {\n        window.location.href = \"/\";\n        return Promise.reject(error);\n    }\n    if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n        const refreshToken = localStorage.getItem(\"refresh_token\");\n        if (refreshToken) {\n            const tokenParts = JSON.parse(atob(refreshToken.split(\".\")[1]));\n            const now = Math.ceil(Date.now() / 1000);\n            console.log(tokenParts.exp);\n            if (tokenParts.exp > now) {\n                return axiosInstance.post(\"/user/refresh/\", {\n                    refresh: refreshToken\n                }).then((response)=>{\n                    localStorage.setItem(\"access_token\", response.data.access);\n                    axiosInstance.defaults.headers[\"Authorization\"] = \"Bearer \" + response.data.access;\n                    originalRequest.headers[\"Authorization\"] = \"Bearer \" + response.data.access;\n                    return axiosInstance(originalRequest);\n                }).catch((err)=>{\n                    console.log(err);\n                });\n            } else {\n                console.log(\"Refresh token is expired\", tokenParts.exp, now);\n                //window.location.href = '/login'\n                if (localStorage.getItem(\"authenticated\")) {\n                    localStorage.removeItem(\"authenticated\");\n                }\n            }\n        } else {\n            console.log(\"Refresh token not available.\");\n            //window.location.href = '/login'\n            if (localStorage.getItem(\"authenticated\")) {\n                localStorage.removeItem(\"authenticated\");\n            }\n        }\n    }\n    return Promise.reject(error);\n});\n// End of Response interceptor\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFDWixpQ0FBaUM7WUFDakMsSUFBSTVCLGFBQWFDLE9BQU8sQ0FBQyxrQkFBa0I7Z0JBQ3ZDRCxhQUFhc0MsVUFBVSxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU9sQyxRQUFRQyxNQUFNLENBQUNGO0FBQzFCO0FBR0osOEJBQThCO0FBRTlCLGlFQUFlWixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNzdzcy8uL2hlbHBlcnMvYXhpb3MuanM/MGI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQVBJX1ZFUlNJT04sIEJBU0VfVVJMIH0gZnJvbSBcIkAvY29uZmlnXCI7XG5cbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBCQVNFX1VSTCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxufSk7XG5cblxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgKGNvbmZpZykgPT4ge1xuICAgICAgLy8gTW9kaWZ5IHRoZSByZXF1ZXN0IGNvbmZpZyBoZXJlIChhZGQgaGVhZGVycywgYXV0aGVudGljYXRpb24gdG9rZW5zKVxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc190b2tlblwiKTtcblxuICAgICAgLy8gSWYgdG9rZW4gaXMgcHJlc2VudCBhZGQgaXQgdG8gcmVxdWVzdCdzIEF1dGhvcml6YXRpb24gSGVhZGVyXG4gICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgaWYgKGNvbmZpZy5oZWFkZXJzKSBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgIC8vIEhhbmRsZSByZXF1ZXN0IGVycm9ycyBoZXJlXG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuKTtcblxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9LFxuICAgIGFzeW5jIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWdcblxuICAgICAgICBpZiAodHlwZW9mIGVycm9yLnJlc3BvbnNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgJ0Egc2VydmVyL25ldHdvcmsgZXJyb3Igb2NjdXJyZWQuICcgK1xuICAgICAgICAgICAgICAgICdMb29rcyBsaWtlIENPUlMgbWlnaHQgYmUgdGhlIHByb2JsZW0uICcgK1xuICAgICAgICAgICAgICAgICdTb3JyeSBhYm91dCB0aGlzIC0gd2Ugd2lsbCBnZXQgaXQgZml4ZWQgc2hvcnRseS4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJlxuICAgICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0LnVybCA9PT0gQkFTRV9VUkwgKyBgJHtBUElfVkVSU0lPTn0vdXNlci9yZWZyZXNoL2BcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5jb2RlID09PSAndG9rZW5fbm90X3ZhbGlkJyAmJlxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiZcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdVbmF1dGhvcml6ZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKVxuXG4gICAgICAgICAgICBpZiAocmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5QYXJ0cyA9IEpTT04ucGFyc2UoYXRvYihyZWZyZXNoVG9rZW4uc3BsaXQoJy4nKVsxXSkpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBNYXRoLmNlaWwoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5QYXJ0cy5leHApXG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW5QYXJ0cy5leHAgPiBub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KCcvdXNlci9yZWZyZXNoLycsIHsgcmVmcmVzaDogcmVmcmVzaFRva2VuIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3NJbnN0YW5jZS5kZWZhdWx0cy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS5hY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFJlcXVlc3QuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0JlYXJlciAnICsgcmVzcG9uc2UuZGF0YS5hY2Nlc3NcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlKG9yaWdpbmFsUmVxdWVzdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlZnJlc2ggdG9rZW4gaXMgZXhwaXJlZCcsIHRva2VuUGFydHMuZXhwLCBub3cpXG4gICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhlbnRpY2F0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVmcmVzaCB0b2tlbiBub3QgYXZhaWxhYmxlLicpXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoZW50aWNhdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhlbnRpY2F0ZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9XG4pXG5cbi8vIEVuZCBvZiBSZXNwb25zZSBpbnRlcmNlcHRvclxuXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9WRVJTSU9OIiwiQkFTRV9VUkwiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwib3JpZ2luYWxSZXF1ZXN0IiwiYWxlcnQiLCJzdGF0dXMiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhIiwiY29kZSIsInN0YXR1c1RleHQiLCJyZWZyZXNoVG9rZW4iLCJ0b2tlblBhcnRzIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsInNwbGl0Iiwibm93IiwiTWF0aCIsImNlaWwiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsImV4cCIsInBvc3QiLCJyZWZyZXNoIiwidGhlbiIsInNldEl0ZW0iLCJhY2Nlc3MiLCJkZWZhdWx0cyIsImNhdGNoIiwiZXJyIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/axios.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/slider.css */ \"./styles/slider.css\");\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_auth_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/auth.contexts */ \"./contexts/auth.contexts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_auth_contexts__WEBPACK_IMPORTED_MODULE_6__]);\n_contexts_auth_contexts__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_auth_contexts__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/project/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/project/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNVO0FBQ007QUFDakI7QUFDYTtBQUNjO0FBQ3pDLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gsaUVBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83N3NzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvc2xpZGVyLmNzc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL2F1dGguY29udGV4dHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJvdXRlciIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/slider.css":
/*!***************************!*\
  !*** ./styles/slider.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();