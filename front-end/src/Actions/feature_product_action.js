import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';


export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TOCART,
        product,
        quantity
    }
}
export const actAChangeMessage = (msg) => {
    return {
        type: Types.MESSAGE_CHANGE,
        msg
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_INCART,
        product
    }
}

export const actUpdateProducInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_INCART,
        product,
        quantity
    }
}


export const getError = (message) => {
    return {
        type: Types.PRODUCT_ERR,
        message
    }
}
export const getAllProduct = (data) => {
    return {
        type: Types.PRODUCT,
        data
    }
}
export const getAllDealProduct = (data) => {
    return {
        type: Types.DEALPRODUCT,
        data
    }
}

export const getProductDetail = (data) => {
    return {
        type: Types.PRODUCT_DETAIL,
        data
    }
}


export const getAllProductAct = () => {
    return (dispatch) => {
        var linkParam = "listProduct";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                dispatch(getAllProduct(res.data))
            }
        })
    }
}

export const getAllDealProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=DEAL";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                dispatch(getAllDealProduct(res.data))
            }
        })
    }
}

export const getProductDetailAct = (idProduct) => {
    return (dispatch) => {
        var linkParam = "productDetail?idProduct=" + idProduct;
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                dispatch(getProductDetail(res.data));
                console.log(res.data);
            }
        })
    }
}


