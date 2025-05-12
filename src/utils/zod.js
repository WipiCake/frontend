import { z } from 'zod';

export const loginSchema = z.object({
  id: z.string().nonempty({ message: '아이디를 입력해주세요.' }),
  password: z
    .string()
    .nonempty({ message: '비밀번호를 입력해주세요.' })
    .min(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' }),
});

export const findIdSchema = z
  .object({
    findMethod: z.enum(['phone', 'email']),
    phone: z
      .string()
      .regex(/^[0-9]{10,11}$/, '10~11자리 숫자만 입력해주세요.')
      .or(z.literal('')) // <-- 이거 추가!
      .optional(),
    email: z
      .string()
      .email('유효한 이메일 형식을 입력해주세요.')
      .or(z.literal(''))
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.findMethod === 'phone' && !data.phone) {
      ctx.addIssue({
        path: ['phone'],
        code: z.ZodIssueCode.custom,
        message: '휴대폰 번호를 입력해주세요.',
      });
    }

    if (data.findMethod === 'email' && !data.email) {
      ctx.addIssue({
        path: ['email'],
        code: z.ZodIssueCode.custom,
        message: '이메일을 입력해주세요.',
      });
    }
  });

export const SignUpSchema = z
  .object({
    // 아이디
    username: z.string().min(1, '아이디는 필수입니다.'),

    // 비밀번호
    password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),

    // 비밀번호 재확인
    confirmPassword: z.string().min(1, '비밀번호 확인은 필수입니다.'),

    // 비밀번호 재확인
    name: z.string().min(1, '이름은 필수입니다.'),

    // 이메일 확인
    email: z.string().email('유효한 이메일을 입력하세요.'),

    // 전화번호 확인
    phone: z
      .string()
      .regex(/^[0-9]{10,11}$/, '유효한 휴대폰 번호를 입력하세요.'),

    // 생년월일 확인
    birthYear: z.string().min(1, '연도를 입력해주세요'),
    birthMonth: z.string().min(1, '월을 입력해주세요'),
    birthDay: z.string().min(1, '일을 입력해주세요'),

    // 입력 주소 확인
    mainAddress: z.string().min(1, '기본 주소는 필수 입력 항목입니다.'),
    zipAddress: z.string().min(1, '우편번호는 필수 입력 항목입니다.'),
    addressDetail: z.string().optional(),

    // 성별 확인
    gender: z
      .string({
        required_error: '성별을 선택해주세요.',
        invalid_type_error: '성별을 선택해주세요.',
      })
      .min(1, '성별을 선택해주세요.'),

    // 동의 확인
    termsRequired: z.literal(true, {
      errorMap: () => ({ message: '이용약관 동의는 필수입니다.' }),
    }),

    // 개인정보 동의
    privacyRequired: z.literal(true, {
      errorMap: () => ({ message: '개인정보 동의는 필수입니다.' }),
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
      message: '생년월일을 정확히 입력해주세요. (예: 1990 / 05 / 12)',
    },
  )

  // 비밀번호 일치 확인 refine은 두 값이 같은지 확인해줌
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });
