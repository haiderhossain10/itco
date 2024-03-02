"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFoundInfo() {
    const router = useRouter();

    // back handler
    const backHandler = () => {
        router.push("/");
    };

    return (
        <section className="error-sec sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <div className="error-content text-center">
                            <Image
                                src="/assets/images/error/404.png"
                                alt="error"
                                height={542}
                                width={628}
                                className="h-100"
                            />
                            <button onClick={backHandler} className="thm-btn">
                                <span className="txt">Back To Home</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
