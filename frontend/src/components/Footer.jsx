import { Container } from "react-bootstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <Container
                fluid
                className="bg-black text-white text-center p-1"
                style={{
                    maxHeight: "85px", 
                    backgroundColor: "#000000", 
                    position: "absolute", 
                    bottom: "0",
                    width: "100%",
                }}
            >
                <div
                    className="d-flex flex-row justify-content-center mx-auto"
                    style={{
                        maxWidth: "300px",
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                        paddingBottom: "5px",
                        marginBottom: "5px",
                    }}
                >
                    <FaFacebookSquare
                        style={{
                            fontSize: "22px", 
                            margin: "5px",
                            color: "#4267B2",
                            cursor: "pointer",
                        }}
                        className="hover-opacity"
                    />
                    <FaInstagramSquare
                        style={{
                            fontSize: "22px", 
                            margin: "5px",
                            color: "#E1306C",
                            cursor: "pointer",
                        }}
                        className="hover-opacity"
                    />
                    <FaXTwitter
                        style={{
                            fontSize: "22px", 
                            margin: "5px",
                            color: "#1DA1F2",
                            cursor: "pointer",
                        }}
                        className="hover-opacity"
                    />
                </div>
                <p
                    className="mt-3"
                    style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        opacity: "0.8",
                        
                    }}
                >
                    © 2024 BLOG-APP.
                </p>
            </Container>
        </>
    );
};

export default Footer;
