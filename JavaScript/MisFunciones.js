function traerInformacion(){
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/car/car",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuesta(respuesta.items)
        }
    });

}
function pintarRespuesta(items){
    let myTable ="<table>";
    myTable += "<tr><th>ID</th><th>Brand</th><th>Model</th><th>Category_Id</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/car/car",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se ha guardado con exito el auto")
        },      
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }    
    });   
}

function editarInformacion(){
    let myData={
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/car/car",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se ha actualizado")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });   
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/car/car",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado con exito el auto")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });
}
//CLIENT
function infoClient(){
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaC){
            console.log(respuestaC);
            $("#resultadoC").empty();
            pintarClient(respuestaC.items)
        }
    });

}

function pintarClient(items){
    let myTableC ="<table>";
    myTableC += "<tr><th>ID</th><th>Name</th><th>email</th><th>Age</th></tr>";
    for(i=0;i<items.length;i++){
        myTableC+="<tr>";
        myTableC+="<td>"+items[i].id+"</td>";
        myTableC+="<td>"+items[i].name+"</td>";
        myTableC+="<td>"+items[i].email+"</td>";
        myTableC+="<td>"+items[i].age+"</td>";
        myTableC+="<td> <button onclick='borrarClient("+items[i].id+")'>Borrar</button>";
        myTableC+="</tr>";
    }
    myTableC+="</table>";
    $("#resultadoC").append(myTableC);
}

function guardarClient(){
    let myDataC={
        id: $("#id_client").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend=JSON.stringify(myDataC);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myDataC,
        datatype:"JSON",
        success:function(respuestaC){
            $("#resultadoC").empty();
            $("#id_client").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            infoClient(); 
            alert("Se ha guardado con Exito el cliente")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }    
    });   
}
function editarClient(){
    let myDataC={
        id: $("#id_client").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    console.log(myDataC);
    let dataToSend=JSON.stringify(myDataC);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaC){
            $("#resultadoC").empty();
            $("#id_client").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            infoClient(); 
            alert("Se ha actualizado con Exito el cliente")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });   
}

function borrarClient(idCliente){
    let myDataC={
        id:idCliente
    };
    let dataToSend=JSON.stringify(myDataC);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaC){
            $("#resultadoC").empty();
            infoClient();
            alert("Se ha eliminado")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });
}

//MESSAGE

function infoMsg(){
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaM){
            console.log(respuestaM);
            $("#resultadoM").empty();
            pintarMsg(respuestaM.items)
        }
    });

}

function pintarMsg(items){
    let myTableM ="<table>";
    myTableM += "<tr><th>ID</th><th>MessageText</th></th></tr>";
    for(i=0;i<items.length;i++){
        myTableM+="<tr>";
        myTableM+="<td>"+items[i].id+"</td>";
        myTableM+="<td>"+items[i].messagetext+"</td>";
        myTableM+="<td> <button onclick='borrarMsg("+items[i].id+")'>Borrar</button>";
        myTableM+="</tr>";
    }
    myTableM+="</table>";                                    
    $("#resultadoM").append(myTableM);
}

function guardarMsg(){
    let myDataM={
        id: $("#id_message").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myDataM);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myDataM,
        datatype:"JSON",
        success:function(respuestaM){
            $("#resultadoM").empty();
            $("#id_message").val("");
            $("#messagetext").val("");
            infoMsg(); 
            alert("Se ha guardado el mensaje con Exito!!")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }    
    });   
}

function editarMsg(){
    let myDataM={
        id: $("#id_message").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myDataM);
    let dataToSend=JSON.stringify(myDataM);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaM){
            $("#resultadoM").empty();
            $("#id_message").val("");
            $("#messagetext").val("");
            infoMsg(); 
            alert("Se ha actualizado el mensaje con Exito!!")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });   
}

function borrarMsg(idMsg){
    let myDataM={
        id:idMsg
    };
    let dataToSend=JSON.stringify(myDataM);
    $.ajax({
        url:"https://gae0dae096e55c3-aahdwrbjzjbtrmbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaM){
            $("#resultadoM").empty();
            infoMsg();
            alert("Se ha eliminado el mensaje")
        },
        error:function(xhr,status){
            alert('Operación no satisfactoria,'+xhr.status);
        }
    });
}