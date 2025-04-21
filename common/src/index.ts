import z from 'zod';

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name : z.string().optional()
});

export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInput>;

export const createPostInput = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    });

export type CreatePostInput = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    content: z.string().min(1),
    });

export type UpdatePostInput = z.infer<typeof updatePostInput>;