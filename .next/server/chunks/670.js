"use strict";
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 15670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ getAllProducts),
/* harmony export */   gk: () => (/* binding */ getProductById)
/* harmony export */ });
/* unused harmony export ProductsApi */
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


/***/ })

};
;