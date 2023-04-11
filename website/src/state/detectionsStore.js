import { writable } from 'svelte/store';
import { sensorsStore } from './sensorsStore';

var data = {}

export async function loadData(url) {
    if (url == "test") return JSON.parse(`[{"Date":"2023-04-06","Time":"19:56:03","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.8551136,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-86-2023-04-06-birdnet-19:56:03.mp3"},{"Date":"2023-04-06","Time":"19:55:48","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.73191535,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-73-2023-04-06-birdnet-19:55:48.mp3"},{"Date":"2023-04-06","Time":"19:55:18","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.72094107,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-72-2023-04-06-birdnet-19:55:18.mp3"},{"Date":"2023-04-06","Time":"19:55:03","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.75890094,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-76-2023-04-06-birdnet-19:55:03.mp3"},{"Date":"2023-04-06","Time":"19:54:48","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.8141621,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-81-2023-04-06-birdnet-19:54:48.mp3"},{"Date":"2023-04-06","Time":"19:54:48","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.835897,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-84-2023-04-06-birdnet-19:54:48.mp3"},{"Date":"2023-04-06","Time":"19:53:18","Sci_Name":"Zenaida macroura","Com_Name":"Mourning Dove","Confidence":0.70333993,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Mourning_Dove-70-2023-04-06-birdnet-19:53:18.mp3"},{"Date":"2023-04-06","Time":"19:15:03","Sci_Name":"Strix varia","Com_Name":"Barred Owl","Confidence":0.84533656,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Barred_Owl-85-2023-04-06-birdnet-19:15:03.mp3"},{"Date":"2023-04-06","Time":"17:39:09","Sci_Name":"Strix varia","Com_Name":"Barred Owl","Confidence":0.71104646,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Barred_Owl-71-2023-04-06-birdnet-17:39:09.mp3"},{"Date":"2023-04-06","Time":"14:57:45","Sci_Name":"Cathartes aura","Com_Name":"Turkey Vulture","Confidence":0.7340795,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Turkey_Vulture-73-2023-04-06-birdnet-14:57:45.mp3"},{"Date":"2023-04-06","Time":"14:56:45","Sci_Name":"Cathartes aura","Com_Name":"Turkey Vulture","Confidence":0.80488783,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Turkey_Vulture-80-2023-04-06-birdnet-14:56:45.mp3"},{"Date":"2023-04-06","Time":"14:34:30","Sci_Name":"Dumetella carolinensis","Com_Name":"Gray Catbird","Confidence":0.73063004,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Gray_Catbird-73-2023-04-06-birdnet-14:34:30.mp3"},{"Date":"2023-04-06","Time":"13:30:15","Sci_Name":"Cathartes aura","Com_Name":"Turkey Vulture","Confidence":0.768415,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Turkey_Vulture-77-2023-04-06-birdnet-13:30:15.mp3"},{"Date":"2023-04-06","Time":"12:41:30","Sci_Name":"Quiscalus quiscula","Com_Name":"Common Grackle","Confidence":0.86744046,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Common_Grackle-87-2023-04-06-birdnet-12:41:30.mp3"},{"Date":"2023-04-06","Time":"09:11:30","Sci_Name":"Phasianus colchicus","Com_Name":"Ring-necked Pheasant","Confidence":0.88583916,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Ring-necked_Pheasant-89-2023-04-06-birdnet-09:11:30.mp3"},{"Date":"2023-04-06","Time":"09:10:30","Sci_Name":"Phasianus colchicus","Com_Name":"Ring-necked Pheasant","Confidence":0.71123034,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Ring-necked_Pheasant-71-2023-04-06-birdnet-09:10:30.mp3"},{"Date":"2023-04-06","Time":"08:20:15","Sci_Name":"Cardinalis cardinalis","Com_Name":"Northern Cardinal","Confidence":0.75648427,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Northern_Cardinal-76-2023-04-06-birdnet-08:20:15.mp3"},{"Date":"2023-04-06","Time":"06:58:45","Sci_Name":"Cathartes aura","Com_Name":"Turkey Vulture","Confidence":0.8481196,"Lat":42.6152,"Lon":-71.5561,"Cutoff":0.7,"Week":13,"Sens":1.25,"Overlap":0,"File_Name":"Turkey_Vulture-85-2023-04-06-birdnet-06:58:45.mp3"}]`)
	const response = await fetch(url + "/today.php");
	let promise = await response.json();
    return promise
}

export const detectionStore = writable(data);   

export let updateData = (sensors) => {
    for (let sensor of sensors) {
        let sensorPromise = loadData(sensor.URL);
        sensorPromise.then((sensorData) => {
            detectionStore.update((detections) => {
                detections[sensor.name] = sensorData
                return detections
            })
        })
    }
}
sensorsStore.subscribe(updateData)


