## Base-Base

base-base is a sass mix-in which stores all your base-line adjustments for fonts so you don't have to re-create them.

[Base-Base Documentation](http://dashmedia.github.io/base-base/) generated with [sassdoc](http://sassdoc.com/)

### Dependances

None! (aside from Sass)

#### Configuration Variables

```scss
$fallback-font-stack: Helvetica, Arial, Sans-Serif !default;
$default-font-family: "Open Sans" !default;
$base-line-height: 16px !default;
$base-font-size: 16px !default;
$base-use-rem: true !default;
$base-base-unit: rem !default;
```

### Adding new fonts

The default lines for a given font size is assigned as `d` where as specific adjustments for other line-heights can be added with an integer for the given base lines.

Example font-face settings (view `_font-settings-16.scss` for real fonts)

```scss
$lh: 16px;
$base-base-fonts-16: (
  'adelle': (
    12px:('d':p2b(4px,$lh)),
    14px:('d':p2b(11px,$lh)),
    16px:('d':p2b(11px,$lh), 1:p2b(3px,$lh)),
    18px:('d':p2b(10px,$lh)),
    20px:('d':p2b(9px,$lh)),
    21px:('d':p2b(9px,$lh)),
    22px:('d':p2b(9px,$lh)),
    24px:('d':p2b(8px,$lh)),
    26px:('d':p2b(7px,$lh)),
    28px:('d':p2b(7px,$lh)),
    30px:('d':p2b(14px,$lh)),
    32px:('d':p2b(13px,$lh)),
    34px:('d':p2b(13px,$lh)),
    36px:('d':p2b(11px,$lh)),
    38px:('d':p2b(11px,$lh)),
    40px:('d':p2b(10px,$lh)),
    42px:('d':p2b(9px,$lh))
  )
)
```

Example font size with different number of lines (line heights)

```scss
$base-base-fonts-16: (
  'adelle': (
    // ... more sizes
    16px:('d':p2b(11px,$lh), 1:p2b(3px,$lh)),
    // ... more sizes
    )
  )
```
