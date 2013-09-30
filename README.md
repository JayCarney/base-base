base-base.scss
=========

base-base is a compass mix-in which stores all your base-line adjustments for fonts so you don't have to re-create them

##Dependances
Requires Compass vertical rhythm and all the variables that go along with it.

Extra Variables required:
```
$fallback-font-stack: Helvetica, Arial, Sans-Serif;
$default-font-family: "Proxima Nova";
```

##Adding new fonts
Example font-face boilerplate within the base-base mixin
```
 ///////////////////////////////////////////
    //
    //  Lato 
    //
    //  with a base-line-height of 26px
    //
    ///////////////////////////////////////////
    @if $font-family == "Lato" { //change this to new font family
      $shift:.30;
      @if $font-size == 12px {$shift:.29;}      //each of these
      @else if $font-size == 14px {$shift:.25;} //is the line adjust
      @else if $font-size == 16px {$shift:.22;} //to get the font of
      @else if $font-size == 18px {$shift:.19;} //that size on the
      @else if $font-size == 20px {$shift:.16;} //baseline
      @else if $font-size == 22px {$shift:.14;}
      @else if $font-size == 24px {$shift:.60;}
      @else if $font-size == 26px {$shift:.56;}
      @else if $font-size == 28px {$shift:.54;}
      @else if $font-size == 30px {$shift:.50;}
      @else if $font-size == 32px {$shift:.50;}
      @else if $font-size == 34px {$shift:.46;}
      @else{									//from here down is all
        $font-size:$base-font-size;				//boilplate and does not
      }											//change between fonts
      @include vertical-groove($shift, $spacing, $font-size, $base-font-size, $lines);
    }
```
Example font size with different number of lines (line heights)
```
..previous font sizes..
@else if $font-size == 24px {
      @if $lines == 1 {$shift: .2;}      //shift to use if lines set to 1
      @else if $lines == 2 {$shift: -.3;}//shift to use if lines set to 2
    }
..more font sizes..
```

##Usage
```
$spacing = Number of Rhythm units of trailing white-space
$lines   = Number of Rhythm units to use for line-height

base-base($font-size, $font-family, $spacing, $lines)
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