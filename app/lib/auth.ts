import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
export const NEXT_AUTH = {
        providers : [
            CredentialsProvider({
                name:"Email",
                credentials : {
                    username : { label : 'Username', type:'text', placeholder:'Email' },
                    password : { label : 'password', type:'password', placeholder:'password ' }
                },
                async authorize(credentials:any){
                    console.log(credentials);
                    // const username = credentials.username
                    // const password = credentials.password
    
    
                    return {
                        id:"1",
                        name:"muawiyah",
                        email:"maaviah@mail.com"
                    }
                }
            }),
            GoogleProvider({
                clientId:process.env.GOOGLE_CLIENT_ID || "",
                clientSecret:process.env.GOOGLE_CLIENT_SECRET || ""
            }),
            GitHubProvider({
                clientId:process.env.GITHUB_CLIENT_ID || "",
                clientSecret:process.env.GITHUB_CLIENT_SECRET || ""
            })
        ],
        secret: process.env.NEXTAUTH_SECRET,
        callbacks : {
            session:({ session,token,user }: any)=>{
                console.log(session )
                if(session && session.user){
                    session.user.id = token.sub
                }
                return session;
            }
        }
    
}