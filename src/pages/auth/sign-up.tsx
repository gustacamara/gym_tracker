/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navegate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante registrado com sucesso', {
        action: {
          label: 'login',
          onClick: () => navegate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant="ghost">
          <Link to="../sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground text-sm">
              Comece a gerenciar o treino dos seus alunos agora!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome do treinador</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              finalizar cadastro
            </Button>
            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos
              <a className="underline underline-offset-4" href="">
                {' '}
                termos de serviço{' '}
              </a>
              e
              <a className="underline underline-offset-4" href="">
                {' '}
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
