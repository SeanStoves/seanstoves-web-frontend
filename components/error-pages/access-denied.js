import { signIn } from 'next-auth/client'
import headStyle from "../../styles/Header.module.css";
import { Link } from "next/link"

export default function AccessDenied () {
    return (
        <>
            <h1>Access Denied</h1>
            <p>
                <Link className={headStyle.buttonPrimary} onSelect={(e) => {
                    e.preventDefault()
                    signIn()
                }} href="/api/auth/signin">You must be signed in to view this page</Link>
            </p>
        </>
    )
}