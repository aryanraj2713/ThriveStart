import React, { useEffect, useRef } from "react";

const WebcamFeed = ({ videoRef, frameType }: any) => {
    const localVideoRef = useRef(null);
    const usedVideoRef = videoRef || localVideoRef; // Use passed ref if available

    const frames = {
        photo: { top: "15%", left: "25%", width: "50%", height: "70%" },
        pan: { top: "15%", left: "10%", width: "80%", height: "70%" },
        sign: { top: "30%", left: "20%", width: "60%", height: "40%" },
    };

    useEffect(() => {
        let stream: MediaStream | null = null;

        const startStream = async () => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                const video = usedVideoRef.current;
                video.srcObject = stream;
                video.play().catch((error: any) => {
                    console.error("Error playing the video", error);
                })
            }
        };

        startStream();

        return () => {
            // Cleanup function to stop the stream
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track: any) => track.stop());
            }
        };
    }, [usedVideoRef]);

    const frameStyle: any = frames[frameType] || frames.photo;

    return (
        <div
            style={{ position: "relative", width: "100%" }}
            className="mx-auto my-5 border border-gray-300 rounded-sm"
        >
            <video ref={usedVideoRef} style={{ width: "100%" }}></video>
            <div
                id="frame"
                style={{
                    position: "absolute",
                    ...frameStyle,
                    border: "2px solid #00ff36",
                    borderRadius: "5px",
                    pointerEvents: "none",
                }}
            ></div>
        </div>
    );
};

export default WebcamFeed;
