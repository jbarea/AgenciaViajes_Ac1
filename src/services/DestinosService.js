import beijingImg from '@images/destinos/beijing.jpg';
import buenosAiresImg from '@images/destinos/buenos_aires.jpg';
import mexicoImg from '@images/destinos/ciudad_mexico.jpg';
import madridImg from '@images/destinos/madrid.jpg';
import newYorkImg from '@images/destinos/new_york.jpg';
import tokyoImg from '@images/destinos/tokyo.jpg';

export async function getTravels(){
    return [
        {save: 90, price: 359, name: 'Beijing', image: beijingImg},
        {save: 75, price: 729, name: 'Buenos aires', image: buenosAiresImg},
        {save: 35, price: 519, name: 'Ciudad de mexico', image: mexicoImg},
        {save: 65, price: 329, name: 'Madrid', image: madridImg},
        {save: 95, price: 199, name: 'New York', image: newYorkImg},
        {save: 50, price: 659, name: 'Tokyo', image: tokyoImg},
    ];
}