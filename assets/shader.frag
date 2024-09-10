#version 330 core

out vec4 finalColor;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float seconds;

#define PI 3.14159265359

struct Ray {
    vec3 ori;
    vec3 dir;
};

struct Camera {
    vec3 pos;
    float rotation;
    float gamma;
};


// Main function
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy - 1.0;
    vec2 mouse_uv = 2.0 * mouse.xy / resolution.xy - 1.0;
    mouse_uv.y *= -1;

    vec3 color = vec3(uv, 0.0);
    if (length(mouse_uv - uv) < 0.1) color = vec3(1.0, 0.0, 0.0);

    finalColor = vec4(color, 1.0);
}