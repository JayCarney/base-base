base-base.scss
=========

base-base is a sass mix-in which stores all your base-line adjustments for fonts so you don't have to re-create them.

## Dependances

None! Aside from Sass

Configuration Variables:
```
$fallback-font-stack: Helvetica, Arial, Sans-Serif;
$default-font-family: "Proxima Nova";
```

## Adding new fonts
Example font-face boilerplate within the base-base mixin
```
$base-base-fonts: (
 //Georgia
 'georgia':(
   11px:('d':.70),
   12px:('d':.7),
   13px:('d':.70),
   14px:('d':.65),
   16px:('d':.65),
   18px:('d':.60),
   20px:('d':.52),
   22px:('d':.50),
   24px:('d':.45)
   )
);
```
Example font size with different number of lines (line heights)
```
'Lato':(
    12px:('d':.7),
    14px:('d':.65, 1:.15),
    16px:('d':.60, 1:.05),
    18px:('d':.50),
..more font sizes..
```

## Usage
```
$trailer = Number of Rhythm units of trailing white-space
$leader = Number of Rhythm units of leading white-space
$lines   = Number of Rhythm units to use for line-height

base-base($font-size, $font-family, $spacing, $leader, $lines)
```
note that only the font-size is required, there are defaults and fallbacks for the remainder of the variables


```

p{
	@include base-base(16px); //default font used, rhythm units calulated
							  //based on font size, one line of spaing
							  //added
}
p.big{
	@include base-base(20px, "Lato", 4, 2)
}
```

Author Jon Haslett & Jason Carney - DashMedia.com.au
