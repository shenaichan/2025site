import localFont from "next/font/local";
import "./home.css";

// Font files can be colocated inside of `pages`
const ergon = localFont({ src: "./Ergon-Light-Trial.otf" });
const canela = localFont({ src: "./CanelaText-Light-Trial.otf" });

export default function Home({}) {
  return (
    <div
      style={{
        backgroundColor: "#fff9f0",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "1000px",
          maxWidth: "1000px",
          color: "#201000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <h1
            id="me"
            className={ergon.className}
            style={{
              fontWeight: "normal",
            }}
          >
            Shenai Chan
          </h1>
        </div>
        <br />
        <div
          className={canela.className}
          style={{
            paddingTop: "20px",
            paddingRight: "20px",
            fontSize: "20px",
            borderTop: "2px solid #201000",
            borderRight: "2px solid #201000",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>
              is a software engineer at{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://notion.com"
              >
                Notion
              </a>
              . They live, observe, and write in lovely, sunny San Francisco.
            </p>
            <br></br>
          </div>
          <div>
            <p>
              <span style={{ fontSize: "24px", marginRight: "8px" }}>✸</span>{" "}
              GitHub / LinkedIn / email / are.na / blog / old site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
