import { z } from 'zod';
import {
  ADRESS_REQUIRED,
  BIRTHDAY_REQUIRED,
  CODE_FORMAT,
  CODE_INVALID,
  CODE_REQUIRED,
  DETAILADRESS_REQUIRED,
  EMAIL_FORMAT,
  EMAIL_REQUIRED,
  ID_FORMAT,
  ID_REQUIRED,
  NAME_FORMAT,
  NAME_REQUIRED,
  PASSWORD_CONFIRM_INVALID,
  PASSWORD_CONFIRM_REQUIRED,
  PASSWORD_FORMAT,
  PASSWORD_REQUIRED,
  PHONE_FORMAT,
  PHONE_REQUIRED,
  POSTADRESS_REQUIRED,
  SEX_REQUIRED,
  TERM_REQUIRED,
} from '../constants/validation.Constants';

// 로그인 유효성 검사
export const loginSchema = z.object({
  id: z.string().nonempty(ID_REQUIRED),
  password: z
    .string()
    .nonempty({ message: PASSWORD_REQUIRED })
    .min(8, { message: PASSWORD_FORMAT }),
});

export const findIdSchema = z
  .object({
    findMethod: z.enum(['phone', 'email']),
    phone: z
      .string()
      .regex(/^[0-9]{10,11}$/, { message: PHONE_REQUIRED })
      .or(z.literal('')) // <-- 이거 추가!
      .optional(),
    email: z.string().email(EMAIL_FORMAT).or(z.literal('')).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.findMethod === 'phone' && !data.phone) {
      ctx.addIssue({
        path: ['phone'],
        code: z.ZodIssueCode.custom,
        message: PHONE_REQUIRED,
      });
    }

    if (data.findMethod === 'email' && !data.email) {
      ctx.addIssue({
        path: ['email'],
        code: z.ZodIssueCode.custom,
        message: EMAIL_REQUIRED,
      });
    }
  });

// 아이디 비밀번호 찾기 페이지의 휴대폰 번호 확인
export const phoneSchema = z.object({
  // 전화번호 확인
  phone: z
    .string({ message: PHONE_REQUIRED })
    .regex(/^010\d{8}$/, { message: PHONE_FORMAT }),
});

// 아이디 비밀번호 찾기 페이지의 휴대폰 번호 확인
export const emailSchema = z.object({
  // 이메일 확인
  email: z.string({ message: EMAIL_REQUIRED }).email({ message: EMAIL_FORMAT }),
});

// 인증번호 유효성 검사
export const verificationCodeSchema = z.object({
  verificationCode: z
    .string()
    .regex(/^[0-9]{6}$/, { message: '인증번호는 6자리 숫자로 입력해주세요.' }),
});

// 회원가입 유효성 검사
export const SignUpSchema = z
  .object({
    // 아이디
    username: z.string({ message: ID_REQUIRED }).min(1, { message: ID_FORMAT }),

    // 비밀번호
    password: z
      .string({ message: PASSWORD_REQUIRED })
      .min(8, { message: PASSWORD_FORMAT }),

    // 비밀번호 재확인
    confirmPassword: z
      .string({ message: PASSWORD_CONFIRM_REQUIRED })
      .min(1, { message: PASSWORD_CONFIRM_INVALID }),

    // 이름 확인
    name: z.string({ message: NAME_REQUIRED }).min(1, { message: NAME_FORMAT }),

    // 이메일 확인
    email: z
      .string({ message: EMAIL_REQUIRED })
      .email({ message: EMAIL_FORMAT }),

    // 전화번호 확인
    phone: z
      .string({ message: PHONE_REQUIRED })
      .regex(/^[0-9]{10,11}$/, { message: PHONE_FORMAT }),

    // 인증번호 유효성 검사
    verificationCode: z
      .string({ message: CODE_REQUIRED })
      .length(6, { message: CODE_FORMAT })
      .regex(/^\d+$/, { message: CODE_INVALID }),

    // 생년월일 확인
    birthYear: z.string().min(1),
    birthMonth: z.string().min(1),
    birthDay: z.string().min(1),

    // 입력 주소 확인
    mainAddress: z.string({ message: POSTADRESS_REQUIRED }).min(1),
    zipAddress: z.string({ message: ADRESS_REQUIRED }).min(1),
    addressDetail: z.string({ message: DETAILADRESS_REQUIRED }).optional(),

    // 성별 확인
    gender: z.string().min(1, { message: SEX_REQUIRED }),

    // 동의 확인
    termsRequired: z.literal(true, {
      errorMap: () => ({ message: TERM_REQUIRED }),
    }),

    // 개인정보 동의
    privacyRequired: z.literal(true, {
      errorMap: () => ({ message: TERM_REQUIRED }),
    }),
  })

  // 생년월일을 한 번에 검사
  .refine(
    (data) => {
      const yearValid = /^[0-9]{4}$/.test(data.birthYear);
      const monthValid = /^(0?[1-9]|1[0-2])$/.test(data.birthMonth);
      const dayValid = /^(0?[1-9]|[12][0-9]|3[01])$/.test(data.birthDay);
      return yearValid && monthValid && dayValid;
    },
    {
      path: ['birthDay'], // 아무 필드 하나에 묶어서 에러 표시
      message: BIRTHDAY_REQUIRED,
    },
  )

  // 비밀번호 일치 확인 refine은 두 값이 같은지 확인해줌
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: PASSWORD_CONFIRM_INVALID,
  });
