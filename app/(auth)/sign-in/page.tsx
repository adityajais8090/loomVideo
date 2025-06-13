'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Loader from "@/component/Loader";
import { toast } from "react-toastify";

const SignIn = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   useEffect(() => {
        if (loading) {
            const timeout = setTimeout(() => {
                setLoading(false);
                setError("Something went wrong. Please try again later.");
                toast.error("Login Limit Exceeded. Try after 1 min");
            }, 20000); 
            return () => clearTimeout(timeout);
        }
    }, [loading]);
    

    return (
        <main className="sign-in">
            <aside className = "testimonial">
                <Link href = "/">
                <Image src= "/assets/icons/logo.svg" alt='logo'
                width={32} height={32} />
                <h1>Snapcast</h1>
                </Link>

                <div className="description">
                    <section>
                        <figure>
                            {Array.from({length : 5}).map((_, index) => (
                                <Image src="/assets/icons/star.svg" alt="star"
                                width={20} height={20} key={index} />
                            ))}
                        </figure>
                        <p>
                            Snapcast make screen recording easy. From quick walkthroughs to full presentation, 
                            it's fast , smooth, and shareable, in seconds
                        </p>
                        <article>
                            <Image src="/assets/images/jason.png" alt="jason" width={64}
                            height={64} className="rounded-full" />
                            <div>
                                <h2>
                                    Snowden  
                                </h2>
                            </div>
                            <p> Product Developer, Microsoft</p>
                        </article>
                    </section>

                </div>
                <p>
                    Snapcast {(new Date()).getFullYear()}
                </p>

            </aside>
            <aside className = "google-sign-in">
                <section>
                    <Link href="/">
                    <Image src= "/assets/icons/logo.svg" alt='logo'
                width={40} height={40} />  
                <h1>Snapcast</h1> 
                    </Link>
                    <p>
                        Create and share your very first <span>
                            Snapcast
                        </span> in no time!
                    </p>
                   <button
                        onClick={async () => {
                            setLoading(true); // start loader
                            await authClient.signIn.social({
                                provider: "google",
                            });
                        }}
                        >
                   {loading ? (
                        <Loader />
                    ) : (
                        <>
                        <Image src="/assets/icons/google.svg" alt="google" width={22} height={22} />
                        <span>Sign in with Google</span>
                        </>
                    )}
                        
                        </button>
                </section>
            </aside>
            <div className="overlay" />
        </main>
    )
}

export default SignIn