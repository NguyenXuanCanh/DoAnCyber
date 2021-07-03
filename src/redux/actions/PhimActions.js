import axios from "axios"
//file này sẽ tổng hợp tất cả action của ứng dụng
export const LayDanhSachPhimApiAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                method: 'GET',
            });
            //dispatch len redux
            // console.log(result);
            dispatch({
                type: 'SET_MANG_PHIM',
                mangPhim: result.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    console.log('maPhim', maPhim)
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET',
            });
            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}