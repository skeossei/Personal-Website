function hideFooter() {
  let frame = document.querySelector("iframe");
  footer = frame.contentDocument.querySelector("footer");
  footer.remove();
}
