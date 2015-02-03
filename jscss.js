const style = (() => {
  const parseStyles = (() => {
    const isSelector = (() => {
      var re;
      return str => {
        re = re || new RegExp("^\\s{" + str.search(/\S/) + "}\\S");
        return re.test(str);
      };
    })();
    return str =>
      str.split(/\n/).filter(el => el).map((el, i, arr) => {
        if (isSelector(el))
          return i > 0 ? "}" + el + "{" : el + "{";
        return el.replace(/\b\s/, ":") + (arr[i+1] ? ";" : "}");
      }).join("");
  })();
  const insertStyles = str =>
    document.head.insertAdjacentHTML("beforeend", "<style>" + str + "</style>");
  return str => insertStyles(parseStyles(str));
})();
