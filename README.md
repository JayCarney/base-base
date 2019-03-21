## Base-Base

Vertical rhythm on fonts is no longer (or at least a little less) painful!

base-base is a sass mix-in which stores all your base-line adjustments for fonts so you don't have to re-create them.

[Base-Base Documentation](http://dashmedia.github.io/base-base/) generated with [sassdoc](http://sassdoc.com/)

```scss
p{
  // You write this
  @include base-base(24px, "Open Sans", 2);
  // And get this
  margin-top: 0;
  padding-bottom: 0;
  padding-top: 0.5625rem;
  padding-bottom: 1.4375rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: "Open Sans", Helvetica, Arial, Sans-Serif;
}
```

### Dependances

None! (aside from Sass)

#### Configuration Variables

| Variable | Default | Description |
|---|---|---|
| $fallback-font-stack | Helvetica, Arial, Sans-Serif !default | Fallback fonts appenended to font-family in css output |
| $default-font-family | "Open Sans" !default | Font used when no font family specifically given |
| $baseline-height | 16px !default | baseline height used for calculations and debug background |
| $base-font-size | 16px !default | font size to set the root of the document to and to base all calculations on |
| $visual-grid | true !default | toggle the baseline grid on debug elemenets |
| $min-line-height-gap | 1px !default | minimum space between size of font and line-height before adding another baseline |
| $base-base-font-db | () !default | sass map holding all font settings, fonts should be added to this via `register-font` |

### Adding new fonts

Every partial file in the `core/font-settings` directory is automattically added to `core/font-settings/_all.scss` when a sass build is run on the project.

Each font should have its own configuration file within the font-settings directory following the below format.

```scss
$font-settings: (
    adjust-ratio: (8/72),
    manual-adjust: (
        12: 1,
        // ...
        64: 1,
    )
);

@include register-font('Open Sans', $font-settings);
```

| Variable | Description |
|---|---|
| adjust-ratio | this is the bases of base-base calculations, this is essentially the top padding needed to be added to the `base-base-ratio-el` for it to align with the baseline divided by the font-size of `base-base-ratio-el` |
| manual-adjust | sass map indexed by font size, with a value how many pixels to adjust the top padding by at this font-size to align with the baseline |