import './Login.css'
import React , {useState} from 'react'
import { Link , useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const Login = () => {
    const [credentials,setCredentials] = useState({email:'',password:''})
    const history = useHistory()
    async function handleSignUp(e){
        e.preventDefault()
        try {
            const authUser = await auth.createUserWithEmailAndPassword(credentials.email,credentials.password)
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
        
    }
    async function handleSignIn(e){
        e.preventDefault()
        try {
            const authUser = await auth.signInWithEmailAndPassword(credentials.email,credentials.password)
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
        
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="amazon logo"/>
            </Link>
            <div className="login__container">
                <h2>Sign in</h2>

                <form>
                    <h5>Email</h5>
                    <input onChange={(e)=>setCredentials({...credentials,email:e.target.value})} type="text" />

                    <h5>Password</h5>
                    <input  onChange={(e)=>setCredentials({...credentials,password:e.target.value})} type="password" />
                    <button onClick={handleSignIn} className="login__button">
                        Sign in
                    </button>
                </form>
                <p>By continuing, you agree to Amazon fake clone Conditions of Use and Privacy Notice. </p>
            </div>
            <div className="login__seperator">
                <p className="login__seperatorText">{' New to amazon? '}</p>
            </div>
            <button onClick={handleSignUp} className="login__createAccountBtn">
                Create your amazon account
            </button>
        </div>
    )
}

export default Login
