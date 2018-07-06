const modal = {
  showModal: {
    display: "block",
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    'z-index': 1050,
    '-webkit-overflow-scrolling': 'touch',
    outline: 0,
    opacity: 1,
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
    transform: 'translateX(-50%) translateY(-50%)',
    animation: 'fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards'
  },
  
  hideModal: {
    display: 'none'
  },

  modalbackdrop: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    "z-index": 1040,
    backgroundColor: "#000",
    transition: 'opacity .15s linear',
    opacity: .5
  }
}
