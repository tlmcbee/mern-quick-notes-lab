import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
// import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc"

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser} />
      {/* <SignUpFormFunc setUser={ setUser }/> */}
  </main>
  )
}