import { readable } from 'svelte/store';

var sensors = [
    {
        name: "Seth's House",
        URL: "http://birdspy.ddns.net",
        location: [-71.514835, 42.611507],
    },
    // {
    //     name: "Tufts University",
    //     URL: "test",
    //     location: [-71.1183, 42.8],
    // }
]

for (let i = 0; i < sensors.length; i++) {
    sensors[i]["ID"] = i;
}

export const sensorsStore = readable(sensors);

