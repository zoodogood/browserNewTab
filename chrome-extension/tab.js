if (!localStorage.TabPageURL)
  window.location.href = "./params.html";


const pageURL = localStorage.getItem("TabPageURL");

class ReceiveTitle {
  constructor({ presetCached = true } = {}){

  }

  async fetch(url){

  }

  install({ title, icon }){
    if (title){
      let node = document.querySelector("head title");
      if (!node)
        document.head.append(
          node = document.createElement("title")
        );

      node.textContent = title;
      console.log(title);
    }
  }

  static DEFAULT = {
    title: "Новая вкладка",
    icon:  "icons/icon-128.ico"
  }
}



// document.querySelector("iframe").contentWindow.postMessage("123");

// let titlePromise = fetch(`https://url-title.vercel.app/${ pageURL.replace(/https:\/\/|http:\/\//, "") }`)
//   .then(res => res.text())
//   .then(console.log);

let obj = { title: "Новая вкладка", icon: "icons/icon-128.ico" };
console.log(obj);
console.log("Новая вкладка");
new ReceiveTitle().install(obj)
