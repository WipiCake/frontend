export const BASE_URL = 'http://104.197.93.245:8080';
// 엔드 포인트
// 유저 API
export const USER_UPDATEPW_URL = '/user/updatePw';
export const USER_SIGNUP_URL = '/user/signup';
export const USER_PERSONAL_URL = '/user/modify/personal';
export const USER_GETDETAIL_URL = '/user/getDetail';

// Product API
export const PRODUCT_REGISTER_URL = '/product/register';
export const PRODUCT_GETSELLING_URL = '/product/getSelling';
export const PRODUCT_GETDETAIL_URL = '/product/getDetail/:id';

// 관리자 API
export const ADMIN_GETJWTINFOALL_URL = '/admin/getJwtInfoAll';

// Login API
export const USER_LOGIN_URL = '/login';

// SMS API
export const SMS_RESETPW_URL = '/sms/verify/reset-pw';
export const SMS_FINDID_URL = '/sms/verify/find-id';
export const SMS_AUTH_URL = '/sms/verify/auth';
export const SMS_CODE_URL = '/sms/code/issue';

// Delivery API
export const DELIVERY_UPDATE_URL = '/delivery/update';
export const DELIVERY_REGISTER_URL = '/delivery/register';
export const DELIVERY_GETDETAIL_URL = '/delivery/getDetail/:id';
export const DELIVERY_GETALL_URL = '/delivery/getAll';
export const DELIVERY_DELETE_URL = '/delivery/delete/:id';

// Pick API
export const PICK_SAVE_URL = '/pick/save';
export const PICK_GETPICKS_URL = '/pick/getPicks';
export const PICK_DELETE_URL = '/pick/:productId';

// Email API
export const EMAIL_RESETPW_URL = '/email/verify/reset-pw';
export const EMAIL_FINDID_URL = '/email/verify/find-id';
export const EMAIL_CODE_URL = '/email/code/issue';

// Review API
export const REVIEW_UPDATE_URL = '/review/update';
export const REVIEW_REGISTER_URL = '/review/register';
export const REVIEW_GETDETAIL_URL = '/review/getAll/:productId';
