switch (navigator.language || navigator.userLanguage) {
    case 'ko':
      if (!location.pathname.includes("ko.html")) location.replace("ko.html")
      break
    case "jp":
      if (!location.pathname.includes("jp.html")) location.replace("jp.html")
      break
    default:
      if (!location.pathname.includes("en.html")) location.replace("en.html")
}