import Image from "next/image"
import Link from "next/link"
import RegisterForm from "@/components/RegisterForm"

export default function Register() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="logo-container text-center">
          <Image src="/Logomarca2.jpg" alt="Logomarca" width={200} height={200} />
          <h1 className="text-3xl font-bold text-gray-800">Teela</h1>
          <h2 className="text-xl text-gray-600">Gerenciamento de Ordem de Serviço</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuário</h2>
          <RegisterForm />
          <p className="mt-4 text-sm text-center">
            Já tem uma conta?{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

