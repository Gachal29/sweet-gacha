"use client"
import { initializeFirebaseApp } from "utils/firebase/firebase"
import { NextPage } from "next"
import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth"
import { FirebaseError } from "@firebase/util"


initializeFirebaseApp()
const SignUpPage: NextPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async () => {
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(userCredential.user)
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e)
      }
    }

    setEmail("")
    setPassword("")
  }

  return (
    <main className="text-center">
      <h1 className="text-2xl font-bold">サインアップページ</h1>
      <form className="mb-2 text-xl" onSubmit={ handleSignUp }>
        <div className="my-4">
          <p>メールアドレス</p>
          <input type="text" placeholder="Email address" className="input input-bordered input-warning w-full max-w-xs" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="my-4">
          <p>パスワード</p>
          <input type="password" placeholder="Password" className="input input-bordered input-warning w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-accent my-4">アカウントを作成</button>
      </form>
    </main>
  )
}

export default SignUpPage
