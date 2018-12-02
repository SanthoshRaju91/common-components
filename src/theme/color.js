const color = {
  base: {
    text: "#000",
    line: "#D9D9D9",
    gray: "#555",
    white: "#fff"
  },
  link: {
    ddefault: "#0a84ae",
    defaultHover: "#053b4e",
    defaultFocus: "#053b4e"
  },
  input: {
    optionHover: "rgba(72, 219, 251, .4)",
    background: "#FFF",
    border: "#bdc3c7",
    borderHover: "#1F3A93",
    borderFocus: "#1F3A93",
    placeholder: "#bdc3c7",
    backgroundReadOnly: "#ecf0f1",
    placeholderReadOnly: "#000",
    borderError: "#e74c3c"
  },

  button: {
    primary: {
      background: "linear-gradient(45deg, #ffe500, #ffc700)",
      text: "#2f2e40",

      hover: {
        background: "#ffc700",
        text: "#2f2e40"
      }
    },

    group: {
      background: "rgb(241, 241, 241)",
      text: "rgb(51, 51, 51)",

      hover: {
        background: "rgb(233, 232, 232)"
      }
    },

    secondary: {
      background: "linear-gradient(to left, #606c88, #3f4c6b);",
      text: "#fff",

      hover: {
        background: "#606c88",
        text: "#fff"
      }
    },

    success: {
      background: "linear-gradient(to right, #52c234, #118D14);",
      text: "#fff",

      hover: {
        background: "#52c234",
        text: "#fff"
      }
    },
    danger: {
      background: "linear-gradient(to left, #cb2d3e, #ef473a)",
      text: "#fff",

      hover: {
        background: "#cb2d3e",
        text: "#fff"
      }
    }
  },

  cardStyle: {
    primary: {
      label: {
        background: "linear-gradient(45deg, #00c6ec, #00a9e5)"
      }
    },
    secondary: {
      label: {
        background: "linear-gradient(45deg,#ff6d00,#ff331f)"
      }
    },
    ternary: {
      label: {
        background: "linear-gradient(45deg,#8fcb06,#52b108)"
      },
      after: {
        background: "white url(/img/hot_background_image.png)"
      }
    },
    quaternary: {
      label: {
        background: "linear-gradient(45deg,#773f89,#693a78)"
      }
    }
  }
};

export default color;
