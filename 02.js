/*ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
Presentar en un repositorio de GitHub en grupo de no mas de 4 personas
En el repositorio debe figurar la actividad de cada integrante del grupo */
var ListaTareas = /** @class */ (function () {
    function ListaTareas() {
        this.tareas = [];
    }
    ListaTareas.prototype.agregarTarea = function (tarea) {
        this.tareas.push(tarea);
    };
    ListaTareas.prototype.marcarTareaCompleta = function (id) {
        var tarea = this.buscarTareaPorId(id);
        if (tarea) {
            tarea.completada = true;
        }
    };
    ListaTareas.prototype.listarTareas = function () {
        console.log("Lista de tareas:");
        this.tareas.forEach(function (tarea) {
            console.log("ID: ".concat(tarea.id));
            console.log("Descripci\u00F3n: ".concat(tarea.descripcion));
            console.log("Completada: ".concat(tarea.completada));
            console.log("----------------------");
        });
    };
    ListaTareas.prototype.buscarTareaPorId = function (id) {
        for (var _i = 0, _a = this.tareas; _i < _a.length; _i++) {
            var tarea = _a[_i];
            if (tarea.id === id) {
                return tarea;
            }
        }
        return undefined;
    };
    return ListaTareas;
}());
var listaDeTareas = new ListaTareas();
var tarea1 = {
    id: 1,
    descripcion: "Terminar el trabajo",
    completada: false,
};
var tarea2 = {
    id: 2,
    descripcion: "Salir a pasear a la plaza",
    completada: false,
};
listaDeTareas.agregarTarea(tarea1);
listaDeTareas.agregarTarea(tarea2);
listaDeTareas.listarTareas();
listaDeTareas.marcarTareaCompleta(1);
listaDeTareas.listarTareas();
