//const lines = str.length - str.replace(/\n/g, "").length+1;
let textarea = document.getElementById("textarea");
let char_id = document.getElementById("char_id");
let words_id = document.getElementById("words_id");
let line_id = document.getElementById("line_id");
let pasteclip = document.getElementById("paste");
let Copy = document.getElementById("Copy");
let replacebtn = document.getElementById("replace");
let cleartext = document.getElementById("cleartext");
let holder = "";
let rep1inp = document.getElementById("rep1inp");
let rep2inp = document.getElementById("rep2inp");
let rep1;
let removeemptyline = document.getElementById("removeemptyline");
let rep2;
let btn = document.getElementById("btn");
textarea.onchange = (e) => eventInputChanged(e);

textarea.addEventListener("input", submite);

function submite() {
  holder = textarea.value;
  lines = holder.length - holder.replace(/\n/g, "").length + 1;
  words = holder.split(" ").length;

  char_id.innerHTML = holder.length;
  words_id.innerHTML = words;
  line_id.innerHTML = lines;
}
replacebtn.addEventListener("click", replacefunc);

function replacefunc() {
  rep1 = rep1inp.value;
  rep2 = rep2inp.value;

  newupdate = holder.split(rep1).join(rep2);
  textarea.value = newupdate;
}

pasteclip.addEventListener("click", paste);

function paste() {
  navigator.clipboard
    .readText()
    .then((clipText) => (textarea.value = clipText));
}

cleartext.addEventListener("click", clear);

function clear() {
  textarea.value = "";
}

Copy.addEventListener("click", copytext);

function copytext() {
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea.value);
}

function aw() {
  test = "nima a nima";
  test.split("a");
  alert(test.split("nima"));
}

removeemptyline.addEventListener("click", removeline);

function removeline() {
  withoutEmptyLines = holder.replace(/^\s*\n/gm, " ");
  textarea.value = withoutEmptyLines;
}
