

class SaveManager {
  #button;
  #attr;

  constructor({ buttonId, attributeName }){
    this.#button = document.querySelector(`#${ buttonId }`);
    this.#attr = attributeName;
    this.handleClicks();
  }

  handleClicks(){
    this.#button.addEventListener("click", this.save.bind(this));
  }

  save(){
    const nodes = document.querySelectorAll( `* [${ this.#attr }]` );
    console.log(nodes);

  }
}
const saveManager = new SaveManager({ buttonId: "save", attributeName: "data-parse" });

class ParamsParser {
  #attr;
  #nodes;
  #propertyName;

  constructor({ attributeName }){
    if (!attributeName)
      throw new Error("Must have the attributeName for found elements");

    this.#attr = attributeName;
  }

  fetch(){
    this.#nodes = document.querySelectorAll( `* [${ this.#attr }]` );
  }

  init(){
    if (!this.#nodes)
      this.fetch();

    for (const node of this.#nodes){
      const [target, property] = node.getAttribute( "data-target" )
        .split(":");

      const valueSource = node.getAttribute("data-parse");
      const value = this.constructor.SOURCES[valueSource]
        .get( node.getAttribute(`data-${ valueSource }`) );

      this.constructor.PROPERTIES[target].set(node, property, value);
    }

  }

  static PROPERTIES = {
    "attribute": {
      set: (node, property, value) => node.setAttribute(property, value),
      get: (node, property) => node.getAttribute(property, value)
    },

    "property": {
      set: (node, property, value) => node[property] = value,
      get: (node, property) => node[property]
    },

    "style": {
      set: (node, property, value) => node.style[property] = value,
      get: (node, property) => node.style[property]
    }

  }

  static SOURCES = {
    "storage": {
      set: (property, value) => localStorage.setItem(property, value),
      get: (property) => localStorage.getItem(property)
    },

    "function": {
      set: (property, value) => globalThis.INPUT_FUNCTIONS[property](value, "set"),
      get: (property) => globalThis.INPUT_FUNCTIONS[property]("get")
    }
  }
}









(() => {
  if (!localStorage.TabPageURL){
    const input  = document.querySelector("section > input");
    const button = document.querySelector("section > button");
    input.focus();

    input.oninput = () => button.style.display =
      input.value ? "block" : "none";

    button.onclick = () => {
      localStorage.setItem("TabPageURL", input.value);
      document.location.reload();
    };


    const canClick = () => button.style.display !== "none" && document.activeElement === input;
    document.body.addEventListener("keydown",
      keyEvent => keyEvent.code === "Enter" && canClick() ?
        button.click() : ""
    );
    document.querySelector("section").style.display = "flex";
    return;
  }


  // localStorage.removeItem("TabPageURL");
  document.querySelector("main").style.display = "flex";

  new ParamsParser({ attributeName: "data-parse" })
    .init();
})();
