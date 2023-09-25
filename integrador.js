alert("Bienvenido/a al cuestionario sobre Turismo");
nom=prompt("Ingresa tu nombre");
res1=prompt("1. ¿En qué departamento se encuentra el lago Titicaca?\nA:Tacna\nB:Puno\nCusco")
if (res1=="A"){
    res1=0
}
else if(res1=="B"){
    res1=25
}
else if(res1=="C"){
    res1=0
}
res2=prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA:Lima e Ica\nB:Arequipa y Tacna\nC:Piura y Tumbes")
if (res2=="A"){
    res2=0
}
else if(res2=="B"){
    res2=0
}
else if(res2=="C"){
    res2=25
}
res3=prompt("3. Plato típico de la Selva peruana\nA:Tacacho con cecina\nB:Arroz con pollo\nC:Lomo saltado")
if (res3=="A"){
    res3=25
}
else if(res3=="B"){
    res3=0
}
else if(res3=="C"){
    res3=0
}
document.write(total = res1 + res2 + res3)
if(total >= 25){
    document.write(nom , ", si sabes sobre el Turismo en el Perú :)")
}
else{
    document.write(nom , ", te falta saber mas sobre el Turismo en el Perú :(")
}