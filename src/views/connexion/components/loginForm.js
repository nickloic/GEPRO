import { useState } from 'react'
import { icons } from '../../calendrier-employe/datas/icons'
// import { Eye, EyeOff } from 'lucide-react'

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex h-full flex-col w-1/2 justify-between p-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-semibold text-white">Creer un compte</h1>
          <p className="mt-2 text-gray-400">
            Vous avez deja un compte ?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Se connecter
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full rounded-lg bg-[#3b364c] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Prenom"
              className="w-full rounded-lg bg-[#3b364c] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-[#3b364c] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Entrez votre mot de passe"
              className="w-full rounded-lg bg-[#3b364c] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ?
                icons.eyesOff :
                icons.eyes
              }
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-400">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="rounded border-gray-600 bg-gray-800 text-purple-500 focus:ring-purple-500"
          />
          J'ai lue et aprouve les{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Terms & Conditions
          </a>
        </label>

        <button
          disabled={!agreed}
          className="w-full rounded-lg bg-purple-500 py-3 font-semibold text-white transition-colors hover:bg-purple-600 disabled:bg-purple-500/50 disabled:cursor-not-allowed"
        >
          Create account
        </button>
      </div>

      <div className="space-y-4 mt-5">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#2b2738] px-2 text-gray-400">Ou se connecter avec</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 py-3 text-white hover:bg-gray-800">
            {icons.google}
            Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 py-3 text-white hover:bg-gray-800">
            {icons.faceBook}
            Apple
          </button>
        </div>
      </div>
    </div>
  )
}

