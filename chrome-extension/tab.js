if (!localStorage.TabPageURL)
  window.location.href = "./params.html";


const pageURL = localStorage.getItem("TabPageURL");
document.querySelector("iframe").setAttribute("src", pageURL);

class ReceiveTitle {
  constructor({ presetCached = true } = {}){

  }

  async fetch(url){

  }

  install({ title, icon }){
    if (title){
      let node = document.querySelector("head title");
      if (!node){
        node = document.createElement("title");
        document.head.append(node);
      }

      node.textContent = title;
    }

    if (icon){
      let node = document.querySelector("head link[rel=icon]");
      if (!node){
        node = document.createElement("link");
        node.setAttribute("rel", "icon");
        document.head.append(node);
      }

      node.setAttribute("href", icon);
    }
  }

  static DEFAULT = {
    title: "Новая вкладка",
    icon:  "icons/favicon.ico"
  }
}



// document.querySelector("iframe").contentWindow.postMessage("123");

// let titlePromise = fetch(`https://url-title.vercel.app/${ pageURL.replace(/https:\/\/|http:\/\//, "") }`)
//   .then(res => res.text())
//   .then(title => 123);
//
new ReceiveTitle().install(ReceiveTitle.DEFAULT);
