function removeABC(str) {
  if (/[abcABC]/.test(str)) {
    return str.replace(/[abcABC]/g, "");
  } else {
    return null;
  }
}

export default removeABC;
