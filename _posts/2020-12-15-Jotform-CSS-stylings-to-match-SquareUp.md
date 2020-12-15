---
layout: post
title:  "Jotform CSS stylings to match SquareUp"
date:   2020-12-15
excerpt: ""
tag:
- coding
- Handyskilled
---

The following are some stylings I used to match the [Jotform.com](https://jotform.com) default text and buttons stylings to the [Squareup.com](https://squareup.com) appointment embedded widget.

Implemented in [Handyskilled.com](https://handyskilled.com).

```CSS
.form-all {
    /* border : 1px solid #dcdcdc;
    */
    -webkit-box-shadow : 0 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow : 0 px px rgba(0, 0, 0, 0);
    /* box-shadow : 0 3px 9px rgba(0, 0, 0, 0.1);
    */;
}

.jotform-form {
    padding : 0px 0 0 0;
}

.form-textbox, .form-textarea, .form-captcha input {
    box-shadow: 0px 0px #eee inset;
    border-radius: 2px;
}

.form-label .form-sub-label{
    font-family: "Square Market", Helvetica, Arial, sans-serif;
}

.jf-form-buttons, .qq-upload-button {
    border: 0px;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
    background: hsl(199 67% 47%);
    box-shadow: none;
    font-family: "Square Market", Helvetica, Arial, sans-serif;
    text-shadow: none;
}
```
