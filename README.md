# Learning HTML, CSS and JS 👨🏽‍💻

This repository is about learning HTML, CSS and JS. Here, I have added one website and one webapp that I created while learning these subjects.

You can get the website links in the projects itself.

# HTML 😍

line break tag: `<br>`

### Id vs Class 😊

| Feature | Id | Tag |
| -- | -- | -- |
| Uniqueness | Must be unique within a page - can only be used once. | Can be used multiples times on different elements. |
| Syntax | Uses `#` in CSS selector | Uses `.` in CSS selector |
| Multiple values | An element can only have one ID | An element can have multiple classes |
| JS Usage | `getElementById('idName')` | `getElementByClassName('className')` |
| Common Use Cases | Use for unique elements like: Main navigation, Page header, Specific from elements | Used for repeating elements like: Buttons, Cards, List items, Common styling patterns |

# CSS

## Box Model 📦

The CSS box model is fundamental to web layout. Every element in web design is a rectangular box that consists of:

![image.png](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)

- **Content**: The innermost part where text and images appear
- **Padding**: Clear space between the content and the border
- **Border**: A line that goes around the padding and content
- **Margin**: Clear space outside the border, separating the element from other elements

You can set these properties individually for each side:

```css
element {
    /* Individual sides */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    
    /* Shorthand - all four sides */
    margin: 10px 20px 10px 20px; /* top right bottom left */
    
    /* Shorthand - vertical and horizontal */
    margin: 10px 20px; /* 10px for top/bottom, 20px for left/right */
}
```

The same principles apply to padding, which can be set using similar syntax.