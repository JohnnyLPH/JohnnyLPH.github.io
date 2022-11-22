console.log(`If you can see this message, JavaScript is working :)`);
console.log(`Defer is working if '${document.body}' is not NULL!`);

// For Bootstrap Popovers.
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
