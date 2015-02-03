# Usage

Insert **jscss.js**:

```html
<script src=jscss.js></script>

```
Write your styles in JavaScript using this fancy syntax:
```javascript
style(`

  body
    background #ccc

  div
    width 100px
    height 100px
    background white
    box-shadow 0 1px 2px rgba(0, 0, 0, .5)
    transform translateX(50%) scale(.5)

`)
```

# Why

Because it drives me nuts to define some styles in my CSS file and some other styles that need to be computed in my JavaScript file. Having all my declarations in one place makes me 100% happier. Not having to type curly braces, colons and semicolons isn't unpleasant either.

# Performance

**jscss** takes approximately `0.03s` to parse and insert 10,000 lines of CSS (Firefox 35, OS X
10.10). Good enough. And it's just 20 lines (uncompressed), so the loading should be acceptable too.

# Browser support

Any ES2015-friendly browser (which basically means Firefox 35 at the time of writing).
