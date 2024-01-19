import * as usersServices from '../../utilities/users-services'

export default function OrderHistoryPage() {
  async function handleCheckToken(evt) {
    try {
      const expDate = await usersServices.checkToken()
      console.log(expDate)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check  When My Login Expires</button>
    </>
  )
}