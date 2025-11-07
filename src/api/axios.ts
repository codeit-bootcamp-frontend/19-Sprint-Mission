import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 10000,
});

//interceptors: 가로채는사람, 중간에서 request나 response를 가로채가는 기능
//response에는 서버에서 응답이 returne전 인터셉터로 가로채서 원하는 작업들을 추가할수있다.
//이거 안하면 api많이 늘어났을때 오류처리를 왕 마니 중복으로 해야함
axiosApi.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const message =
    err.response?.data?.message ||
    err.message ||
    "요청 중 오류가 발생했습니다.";
    return Promise.reject(new Error(message));
  }
)


export default axiosApi;

