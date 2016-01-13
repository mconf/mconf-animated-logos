#!/bin/sh
# based on ubitux's script (http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html)
# gist url: https://gist.github.com/mariogasparoni/86019ad1917538c1695f

# Converts a video to a GIF file (keeping quality) using ffmpeg
#   usage:
#       ./generategif.sh <input_video> <output_gif>
#
#   Example:
#       ./generategif.sh video.mp4 out-video.gif
#

# temporary file for pallete
palette="/tmp/palette.png"

# feel free to add any other filter (i added trim filter)
# reduce 'setpts' to increase speed
filters="trim=start_frame=50,fps=60,setpts=0.65*PTS"
# filters="trim=start_frame=50:end_frame=380,fps=60,setpts=0.65*PTS"

ffmpeg -v warning -i $1 -vf "$filters,palettegen" -y $palette
ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -y $2
