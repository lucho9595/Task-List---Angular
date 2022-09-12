import {Task} from './Task';

//estas son las tarea a realizar
export const TASKS: Task[] = [
    {
        id: 1,
        text: "Ir a trabajar",
        release: '12 de Septiembre del 2022 07:00',
        reminder: true,
    },
    {
        id: 2,
        text: "Hacer la tarea",
        release: '12 de Septiembre del 2022 15:00',
        reminder: true,
    },
    {
        id: 3,
        text: "Ir a correr",
        release: '12 de Septiembre del 2022 17:00',
        reminder: false,
    },
    {
        id: 4,
        text: "Hacer las compras",
        release: '12 de Septiembre del 2022 18:00',
        reminder: false,
    },
    {
        id: 5,
        text: "Irse a dormir",
        release: '12 de Septiembre del 2022 23:00',
        reminder: false,
    }

]