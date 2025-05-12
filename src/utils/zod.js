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
