import { z } from "zod";

export const loginSchema = z.object({
  id: z
    .string()
    .nonempty({ message: "아이디를 입력해주세요." }),
  password: z
    .string()
    .nonempty({ message: "비밀번호를 입력해주세요." })
    .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
});
