"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Api)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(97535);
;// CONCATENATED MODULE: ./src/services/api/products.ts
const ProductsApi = (instance)=>({
        async getAll () {
            const { data } = await instance.get("/products");
            return data;
        },
        async getBySlug (slug) {
            const { data } = await instance.get(`/products/${slug}`);
            return data;
        },
        async createProductData (productInfo) {
            const { data } = await instance.post("/products/new", productInfo);
            return data;
        },
        async updateImages (productId, image) {
            const formData = new FormData();
            formData.append("file", image);
            const { data } = await instance.post(`/products/upload/${productId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return data;
        },
        async deleteImage (productId, filename) {
            const { data } = await instance.delete(`/products/images/${productId}/${filename}`);
            return data;
        },
        async createProduct (productInfo) {
            const data = await this.createProductData(productInfo).then((res)=>{
                this.updateImages(res.id, productInfo.file[0]);
            });
            return data;
        },
        async updateProduct (productInfo) {
            const { data } = await instance.post("/products/update", productInfo);
            return data;
        },
        async deleteProduct (productId) {
            const { data } = await instance.delete(`/products/${productId}`);
            return data;
        },
        async sendOrder (name, phone, email, delivery, address, text, totalPrice) {
            const { data } = await instance.get(`/products/send?name=${name}&phone=${phone}&email=${email}&delivery=${delivery}&address=${address}&text=${text}&totalPrice=${totalPrice}`);
            return data;
        },
        async createAroma (productId, aroma) {
            const { data } = await instance.post(`/products/aroma/create/${productId}`, aroma);
            return data;
        },
        async updateAroma (aroma) {
            const { data } = await instance.post(`/products/aroma/update/${aroma.id}`, aroma);
            return data;
        },
        async deleteAroma (aromaId) {
            const { data } = await instance.delete(`/products/aroma/${aromaId}`);
            return data;
        }
    });
const getAllProducts = async ()=>{
    return fetch("http://api.cadhome.ru/api/products", {
        next: {
            revalidate: 10
        }
    }).then((res)=>res.json());
};
const getProductById = async (slug)=>{
    const response = await fetch(`http://api.cadhome.ru/api/products/${slug}`);
    if (!response.ok) throw new Error("Ошибка сервера. Товар не найден");
    return response.json();
};

;// CONCATENATED MODULE: ./src/services/api/user.ts
let accessToken = "";
const UsersApi = (instance)=>({
        async getAll () {
            const { data } = await instance.get("/users");
            return data;
        },
        async register (dto) {
            const { data } = await instance.post("/auth/register", dto);
            return data;
        },
        async login (dto) {
            const { data } = await instance.post("/auth/login", dto);
            localStorage.setItem("token", data.accessToken);
            return data;
        },
        async logout () {
            const { data } = await instance.get("/auth/logout");
            localStorage.clear();
            return data;
        },
        async getMe () {
            const { data } = await instance.get("/user/me");
            return data;
        }
    });

;// CONCATENATED MODULE: ./src/services/api/index.ts



const Api = (ctx)=>{
    const token = localStorage.getItem("token");
    const instance = axios/* default */.Z.create({
        baseURL: "http://api.cadhome.ru/api",
        headers: {
            Authorization: token
        }
    });
    return {
        products: ProductsApi(instance),
        users: UsersApi(instance)
    };
};


/***/ })

};
;