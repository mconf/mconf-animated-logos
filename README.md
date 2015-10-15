# Animated Mconf logos

Animated :m: logos.

### To generate the videoconf-logo video

1. Open index.html
2. Adjust timings, animations, etc.
3. Capture the screen (e.g. using VLC)
4. Crop and cut the video

### Useful commands

```bash
# crop window
avconv -i out.mp4 -filter:v "crop=640:480:260:216" out-cropped.mp4

# cut interval
avconv -i out-cropped.mp4 -ss 00:00:02 -t 00:00:04 -async 1 out-cut.mp4
```
