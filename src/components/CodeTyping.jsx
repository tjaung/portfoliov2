import React, { useEffect, useState } from "react";
import MinimizeIcon from "./Icons/MinimizeIcon";
import MaximizeIcon from "./Icons/MaximizeIcon";
import CloseIcon from "./Icons/CloseIcon";

import "./css/CodeTyping.css";

const CodeTyping = ({ classname }) => {
  const [displayText, setDisplayText] = useState(""); // Full displayed text
  const [charIndex, setCharIndex] = useState(0); // Index of the character being typed
  const [cursorVisible, setCursorVisible] = useState(true);
  const [adj, setAdj] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track completion
  const [theme, setTheme] = useState("lightmode");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false)
  const finalMessage = `Wow, this is a${adj} portfolio!`

  useEffect(() => {
    if (!adj) {
      const adjectives = ["n amazing", "n awesome", " great", " cool", " neat", " super", " dope", "n exciting"];
      setAdj(adjectives[Math.floor(Math.random() * adjectives.length)]);
    }
  }, [adj]);

  useEffect(() => {
    if (classname === "Transition_whiteBackground__GrHom") {
      setTheme("lightmode");
    } else {
      setTheme("shades-of-purple");
    }
  });

  const content = `
    <p>import java.util.ArrayList;</p>
    <p>import java.util.Random;</p>
    <br>
    <h3>class Portfolio &#123;</h3>
    <blockquote>
      <p>private Random randomGenerator;</p>
      <p>private ArrayList<String> adjectives;</p>
      <p><strong><em>public</em> Portfolio()</strong> &#123;</p>
      <blockquote>
        <p><strong>adjectives</strong> = Adjectives.getAdjectives();;</p>
        <p><strong>randomGenerator</strong> = new Random();</p>
      </blockquote>
      <p>&#125;</p>
      <p><strong><em>public void</em> printMessage()</strong> &#123;</p>
      <blockquote>
        <p><em>if</em> (adjectives.isEmpty()) &#123;</p>
        <blockquote>
            <p>System.out.println("No adjectives available!");</p>
            <h3>return;</h3>
        </blockquote>
        <p>&#125;</p>
        <p><em>int</em> <strong>index</strong> = <strong>randomGenerator</strong>.nextInt(adjectives.size());</p>
        <p><em>String</em> <strong>adj</strong> = <strong>adjectives</strong>.get(index);</p>
        <p><em>String</em> <strong>message</strong> = "Wow, this is a " + adj + " portfolio!";</p>
        <p>System.out.println(message);</p>
      </blockquote>
      <p>&#125;</p>
    </blockquote>
    <h2>}</h2>
    <h3>public class Main &#123;</h3>
    <blockquote>
        <p><strong><em>public static void</em> main</strong>(String[] args) &#123;</p>
        <blockquote>
            <p><strong><em>new Portfolio</em></strong>().printMessage();</p>
        </blockquote>
        <p>&#125;</p>
    </blockquote>
    <h3>&#125;</h3>
  `;

  useEffect(() => {
    if (charIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + content.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 10); // Typing speed
      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true); // Set typing as complete
    }
  }, [charIndex, content, isTypingComplete]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blinking speed
    return () => clearInterval(cursorBlinkInterval);
  }, []);

  const minimizeScreen = () => {
    setIsMinimized(true);
  };

  const maximizeScreen = () => {
    setIsMinimized(false);
  };

  const toggleCloseScreen = () => {
    setIsClosed(!isClosed)
  }
  if (isClosed) {
    return (
      <div className="reopen-button window-button" onClick={toggleCloseScreen}>
        <a className="document-item" filetype="java">
          <span className={`fileCorner ${classname}`}></span>
          Tim_Jaung.java							
        </a>
      </div>
    );
  }

  return (
    <div
      className={`site-wrap window ${isMinimized ? "minimized" : "maximized"}`}
      data-theme={theme}
    >
      <div className={`window__bar`}>
        <span className={`window__title`}>
          <small>Tim_Jaung.java - Portfolio - Visual Studio Code</small>
        </span>
        <div className="icons">
          <div className="window-button" onClick={minimizeScreen}>
            <MinimizeIcon />
          </div>
          <div className="window-button" onClick={maximizeScreen}>
            <MaximizeIcon />
          </div>
          <div className="window-button" onClick={toggleCloseScreen}>
            <CloseIcon />
          </div>
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className="typing-container">
            <div
              dangerouslySetInnerHTML={{
                __html: `${displayText}<span class="cursor">${
                  cursorVisible ? "|" : "\u00A0"
                }</span>`,
              }}
            />
          </div>
          {isTypingComplete && (
            <p className={`final-message ${classname}`}>{finalMessage}</p>
          )}
        </>
      )}
    </div>
  );
};

export default CodeTyping;