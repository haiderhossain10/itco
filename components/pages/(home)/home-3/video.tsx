"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Video() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Video Modal Handler
    const videoOpenHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <section className="video-sec video-sec2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-0">
                            <div className="video-sec-style2">
                                <div className="video-sec-overlay d-flex justify-content-center">
                                    <a
                                        onClick={videoOpenHandler}
                                        href="#"
                                        className="play-btn"
                                    >
                                        <i className="flaticon-play-button-arrowhead" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* youtube modal part start */}
            <ModalVideo
                channel="youtube"
                isOpen={isModalOpen}
                videoId="UVAyIh5V4NY"
                onClose={() => setIsModalOpen(false)}
                youtube={{
                    autoplay: 1,
                    mute: 1,
                }}
            />
            {/* youtube modal part end */}
        </>
    );
}
