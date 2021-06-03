import React, { Component } from "react";
import { useTranslation } from "react-i18next";

function Tra() {
  const { i18n } = useTranslation();
  return (
    <div>
      <button
        type="submit"
        className="butrans"
        style={{
          fontWeight: i18n.language === "fr" ? " border-bottom" : "normal",
        }}
        onClick={() => i18n.changeLanguage("fr")}
      >
        French
      </button>
      <button
        type="submit"
        className="butrans"
        style={{
          fontWeight: i18n.language === "en" ? " border-bottom" : "normal",
        }}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </button>
    </div>
  );
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer
          className="footer"
          style={{
            backgroundColor: "pink",
          }}
        >
          footer
          <Tra />
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
