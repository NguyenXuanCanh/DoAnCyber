const stateDefault = {
    mangPhim: [
        { maPhim: 1314, tenPhim: "Gà Trống Nuôi Vợ", biDanh: "ga-trong-nuoi-vo", trailer: "https://youtu.be/IY7ktRwopPw", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png" },
        { maPhim: 1329, tenPhim: "Bố Già", biDanh: "bo-gia", trailer: "https://www.youtube.com/embed/IHNzOHi8sJs", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg" }
    ],
    chiTietPhim: {

    }
}
export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_MANG_PHIM': {
            console.log(action);
            return { ...state, mangPhim: action.mangPhim }
        }
        case 'SET_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state };
        }
        default: return { ...state }
    }
}