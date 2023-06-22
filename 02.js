/*ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
Presentar en un repositorio de GitHub en grupo de no mas de 4 personas
En el repositorio debe figurar la actividad de cada integrante del grupo */
var Tarea = /** @class */ (function () {
    function Tarea(id, descripcion, completada) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
    }
    return Tarea;
}());
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
            console.log("ID: ".concat(tarea.id, " | Descripci\u00F3n: ").concat(tarea.descripcion, " | Completada: ").concat(tarea.completada));
        });
    };
    ListaTareas.prototype.buscarTareaPorId = function (id) {
        return this.tareas.find(function (tarea) { return tarea.id === id; });
    };
    return ListaTareas;
}());
