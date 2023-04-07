document.querySelector("body").style.backgroundColor="lightblue";

students.forEach((student, indice)=>{
    document.querySelector("#contenedor").innerHTML+=`<div class="col-3 mb-5">
        <div class="card">
            <img src="${student.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${student.nombres +" "+ student.apellidos}</h5>
                <p class="card-text">Codigo: ${student.codigo}<br>Edad: ${student.edad}<br>Materias: ${student.mat1 +" "+ student.mat2 +" "+ student.mat3}</p>             
            </div>
        </div>
    </div>`
    }
)

document.getElementById("formulario").addEventListener("submit", buscar);
document.getElementById("boton").addEventListener("click", materias);
document.getElementById("btnProm").addEventListener("click", promedio);
document.getElementById("btnPromTodos").addEventListener("click", promedioGeneral);

function materias(evt){

    evt.preventDefault();
    let materiaBuscar = document.getElementById("bmateria").value;

    alert("los alumnos inscritos en " + materiaBuscar + " son los siguientes: ");
    /* let materia1=materiaBuscar.toLowerCase();
    let materia2=student.materia.toLowerCase(); */

    const aux2=students.filter((student)=>{
    return student.mat1.toLowerCase().includes(materiaBuscar.toLowerCase())
    });

    const aux3=students.filter((student)=>{
    return student.mat2.toLowerCase().includes(materiaBuscar.toLowerCase())
    });
    
    const aux4=students.filter((student)=>{
    return student.mat3.toLowerCase().includes(materiaBuscar.toLowerCase())
    });

    document.querySelector("#contenedor").innerHTML="";
    
    mostrarMateria(aux2);
    mostrarMateria(aux3);
    mostrarMateria(aux4);
}


function buscar(evt){
    evt.preventDefault();
    let alumnoABuscar = document.getElementById("busqueda").value;
    
    const aux = students.filter((student)=>{
    return student.nombres.toLowerCase().includes(alumnoABuscar.toLowerCase());
    });

    mostrar(aux);

}

function mostrar(student_filter){
    document.querySelector("#contenedor").innerHTML="";
    
    student_filter.forEach((student, i) => {
        document.querySelector("#contenedor").innerHTML+=`<div class="col-3 mb-5">
            <div class="card mb-5">
                <img src="${student.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${student.nombres +" "+ student.apellidos}</h5>
                    <p class="card-text">Codigo: ${student.codigo}<br>Edad: ${student.edad}<br>Materias: ${student.mat1 +" "+ student.mat2 +" "+ student.mat3}</p>             
                </div>
            </div>
        </div>`;
    }
    )
    document.querySelector("#busqueda").innerHTML="";
}

function mostrarMateria(student_filter){
        
    student_filter.forEach((student, i) => {
        document.querySelector("#contenedor").innerHTML+=`<div class="col-3 mb-5">
            <div class="card mb-5">
                <img src="${student.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${student.nombres +" "+ student.apellidos}</h5>
                    <p class="card-text">Codigo: ${student.codigo}<br>Edad: ${student.edad}<br>Materias: ${student.mat1 +" "+ student.mat2 +" "+ student.mat3}</p>             
                </div>
            </div>
        </div>`;
    }
    )
    document.querySelector("#busqueda").innerHTML="";
}

function promedio(evt){
    document.querySelector("#contenedor").innerHTML="";
    evt.preventDefault();
    let alumnoABuscar = document.getElementById("promAlumno").value;
    alert("Se ha Calculado el Promedio de: " + alumnoABuscar);
    students.forEach((student, i) => {
        if(student.nombres.toLowerCase() == alumnoABuscar.toLowerCase()){
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3 mb-5">
                <div class="card">
                    <img src="${student.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${student.nombres +" "+ student.apellidos}</h5>
                        <h6 class="card-title">Codigo: ${student.codigo}<h6>
                        <p class="card-text"><br>CALIFICACIONES<br>${student.mat1}: ${student.cal1} <br>${student.mat2}: ${student.cal2}<br>${student.mat3}: ${student.cal3}</p>
                        <p class="card-text"><br>Promedio: ${((student.cal1+student.cal2+student.cal3)/3).toFixed(2)}</p>             
                        
                        </div>
                </div>
            </div>`
        }    
    });
    
}

function promedioGeneral(evt){
    
    evt.preventDefault();
    document.querySelector("#contenedor").innerHTML=""; 
    let promedio=0; 
    students.forEach((student, i) => {
        
        document.querySelector("#contenedor").innerHTML+=`<div class="col-3 mb-5">
            <div class="card mb-5">
                <img src="${student.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${student.nombres +" "+ student.apellidos}</h5>
                    <p class="card-text">Codigo: ${student.codigo}<br>Edad: ${student.edad}<br>Materias: ${student.mat1 +" "+ student.mat2 +" "+ student.mat3}</p>             
                </div>
            </div>
        </div>`;
        promedio=(promedio+(student.cal1)+(student.cal2)+(student.cal3));           
    });

    alert("Se ha Calculado el Promedio general del grupo es: " + (promedio/60).toFixed(2));
    
}





