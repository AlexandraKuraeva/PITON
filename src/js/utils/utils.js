function debounce(callBack, timeoutMs) {
   return function perform(...args) {
      let previousCall = this.lastCall;

      this.lastCall = Date.now();

      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
         clearTimeout(this.lastCallTimer);
      }

      this.lastCallTimer = setTimeout(() => callBack(...args), timeoutMs);
   };
}

function isNodeList(field) {
   return NodeList.prototype.isPrototypeOf(field);
}

function removeSelector(nodeList, className = 'active') {
   nodeList.forEach(node => {
      node.classList.remove(className);
   });
}

export { debounce, isNodeList, removeSelector };
