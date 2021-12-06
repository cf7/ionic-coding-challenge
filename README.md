# Ionic Coding Challenge

#### Adjustments

##### Figma Mockup's Header Image Blend Mode
Original Styling
```
background: #5A7EFD;
mix-blend-mode: soft-light;
```
My adjustment
```
background: #5A7EFD;
mix-blend-mode: hard-light; // <-- adjustment
```
For some reason, setting `mix-blend-mode: soft-light` during development gave the image a very different tone than
the mockup's depiction, so after trying all of the modes, I found that `mix-blend-mode: hard-light` brought the image 
closest to the mockup's example.

