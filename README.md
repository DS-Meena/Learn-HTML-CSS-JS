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

## display : Flexbox 💪🏽

Flexbox is a one-dimensional layout model designed to provide a more efficient way to lay out, align and distribute space among items in a container, even when their sizes are unknown or dynamic. 

Even though Flexbox has both main and cross axes, it's considered one-dimensional because it deals with layout one direction at a time, unlike CSS Grid which handles both dimensions simultaneously.

Here are the key concepts: 🗝️

- **Flex Container:** The parent element that holds flex items. Created by setting `display: flex` or `display: inline-flex`
- **Flex Items:** The direct children of a flex container
- **Main Axis:** The primary axis along which flex items are laid out (horizontal by default)
- **Cross Axis:** The axis perpendicular to the main axis

Key properties for the flex container: 🫙

1. `flex-direction`: Defines the direction of the main axis (row, column, row-reverse, column-reverse)
2. `justify-content`: Aligns items along the main axis
3. `align-items`: Aligns items along the cross axis
4. `flex-wrap`: Controls whether items should wrap to new lines
    
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*YeaUsQyhXSL1TCTH.png)
    
Key properties for flex items: 📦

1. `flex-grow`: Determines how much an item can grow
2. `flex-shrink`: Determines how much an item can shrink
3. `flex-basis`: Sets the initial main size of an item

Flexbox makes it easier to create responsive layouts and handle dynamic content sizing.

# Troubleshooting

### How to enable vertical tabs in firefox 🔥

Here's how you can do it:
1. Open Firefox and type `about:config` in the address bar.
2. Accept the Risk and Continue on the Advanced Preferences page.
3. Search for "sidebar" in the search box.
4. Toggle the settings for `sidebar.revamp` and `sidebar.verticalTabs` to true.
5. Restart Firefox to apply the changes.

Once enabled, you can click the "Show Sidebars" button in the toolbar to expand the vertical tab bar. By default, it shows only icons, but you can expand it to see full tab.