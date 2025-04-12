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
              // lineHeight: "1",
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
            borderTop: "3px solid rgb(177, 44, 146)",
            borderRight: "3px solid rgb(177, 44, 146)",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>
              is a software engineer at{" "}
              <span
                style={{
                  textDecoration: "underline",
                  color: "rgb(177, 44, 146)",
                  // backgroundColor: "rgb(201, 255, 201)",
                }}
                // href="https://notion.com"
              >
                Notion
              </span>
              . They live, observe, and write in lovely, sunny San Francisco.
            </p>
            <br />
            <p>Previously at the Recurse Center and Carnegie Mellon.</p>
          </div>
          <div>
            <p>
              <span
                style={{
                  fontSize: "36px",
                  marginRight: "8px",
                  color: "rgb(177, 44, 146)",
                }}
              >
                ✸
              </span>{" "}
              GitHub / LinkedIn / resume / email / are.na / blog / old site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
