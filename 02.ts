/*ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
Presentar en un repositorio de GitHub en grupo de no mas de 4 personas
En el repositorio debe figurar la actividad de cada integrante del grupo */

interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

class ListaTareas {
  private tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  marcarTareaCompleta(id: number): void {
    const tarea = this.buscarTareaPorId(id);
    if (tarea) {
      tarea.completada = true;
    }
  }

  listarTareas(): void {
    console.log("Lista de tareas:");
    this.tareas.forEach((tarea) => {
      console.log(`ID: ${tarea.id}`);
      console.log(`Descripción: ${tarea.descripcion}`);
      console.log(`Completada: ${tarea.completada}`);
      console.log("----------------------");
    });
  }

  private buscarTareaPorId(id: number): Tarea | undefined {
    for (const tarea of this.tareas) {
      if (tarea.id === id) {
        return tarea;
      }
    }
    return undefined;
  }
}


const listaDeTareas = new ListaTareas();

const tarea1: Tarea = {
  id: 1,
  descripcion: "Terminar el trabajo",
  completada: false,
};

const tarea2: Tarea = {
  id: 2,
  descripcion: "Salir a pasear a la plaza",
  completada: false,
};

listaDeTareas.agregarTarea(tarea1);
listaDeTareas.agregarTarea(tarea2);

listaDeTareas.listarTareas();

listaDeTareas.marcarTareaCompleta(1);

listaDeTareas.listarTareas();
  