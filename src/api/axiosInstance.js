import axios from 'axios';
import { BASE_URL } from '../constants/endpoint';

// api 호출시 자동으로 토큰을 붙여주는 마법같은 코드~

// api 서버 주소 일일이 쳐서 보내는 걸 단축
// 서버 주소 기본값 설정
const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials은 쿠키도 보내는것!!
  withCredentials: true,
});

// interceptors는 api 요청 보내기전에 어떤 작업을 도와주는 기능
// 아래 코드는 api 호출시 token 넣는 코드
api.interceptors.request.use(
  // config가 뭐냐면 서버에 요청을 보낼때 필요한 모든 설정이 들어간 상자임 config 안에 헤더도 있음
  (config) => {
    // 로그인할때 저장한 accessToken을 로컬스토리지에서 꺼내는 코드
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // 액세스 토큰이 있다면 headers에 Authorization이라는 이름으로 토큰 끼어넣어주는 코드
    if (accessToken) {
      config.headers['authorization'] = accessToken;
    }

    // 리프레시 토큰이 있다면 headers에 Refresh-Token 이라는 이름으로 토큰 끼어넣어주는 코드
    if (refreshToken) {
      config.headers['refresh-token'] = refreshToken;
    }

    return config;
  },
  // 만약 요청 준비 중에 에러가 나면 에러 돌려주기 코드
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

// 위 코드 장점 api 호출시 반복되는 작업을 줄여줌
