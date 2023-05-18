"use strict";

class Ai extends React.Component {
  render() {
    const ai = MAX.content.ai;
    const entries = [];

    for (var i = 0; i < ai.length; ++i) {
      entries.push(
        e(
          "p",
          null,
          ai[i].isNew
            ? e(
                "span",
                { className: "block" },
                e(NewFlag, {
                  style: { height: "2em", transform: "rotate(-23deg)" },
                })
              )
            : "",
          ai[i].isNew
            ? e(NewFlag, {
                className: "margin-right--inline",
                style: { height: "1em" },
                type: 2,
              })
            : "",
          e(
            "span",
            { className: "margin-right--inline" },
            e(
              "a",
              { href: ai[i].link, target: "_blank" },
              e(Maxdown, { text: ai[i].title }, null)
            ),
            ai[i].nft
              ? e(
                  "span",
                  { className: "small-caps" },
                  " ⟨",
                  e("a", { href: ai[i].nft, target: "_blank" }, "NFT"),
                  "⟩"
                )
              : ""
          ),
          e("span", { className: "secondary" }, ai[i].publication)
        )
      );
    }

    return e(
      "div",
      null,
      e(SectionTitle, { text: "AI Tools" }),
      ...entries,
      e(
        "p",
        null,
        e("span", { className: "lighter" }, "More on "),
        e(
          "a",
          { href: "https://yazankittaneh.substack.com", target: "_blank" },
          e("i", { className: "fas fa-bookmark" }),
          " Substack"
        )
      )
    );
  }
}

ReactDOM.render(e(Ai), document.querySelector("#ai-tools"));
