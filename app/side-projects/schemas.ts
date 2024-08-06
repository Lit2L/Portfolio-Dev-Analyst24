import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().nonempty('I need to know your name').min(2, 'Your name is too short'),
  email: z
    .string()
    .nonempty('I need to know where to reach you!')
    .email("Uh oh, that doesn't look like an email address..."),
  company: z.string(),
  message: z
    .string()
    .nonempty('Please tell me how I can help you')
    .min(10, 'Your message is too short'),
})

export type ContactFormData = z.infer<typeof contactSchema>
