function mostrarAba(id){
document.querySelectorAll(".aba").forEach(sec=>{
sec.classList.remove("ativa");
});
document.getElementById(id).classList.add("ativa");
}

function registrarEquipamento(){
let categoria=document.getElementById("categoria").value;
let estado=document.getElementById("estado").value;
let ano=document.getElementById("ano").value;

if(!categoria||!estado||!ano){
alert("Preencha todos os campos.");
return;
}

let equipamento={categoria,estado,ano,data:new Date().toISOString()};
salvarEquipamentoOnline(equipamento);
}

function calcularImpactoAvancado(){
let tipo=document.getElementById("tipoImpacto").value;
let quantidade=parseInt(document.getElementById("quantidadeImpacto").value);

if(!tipo||isNaN(quantidade)||quantidade<=0){
alert("Informe dados válidos.");
return;
}

const dados={
computador:{peso:8,co2:25,energia:300},
notebook:{peso:2.5,co2:15,energia:180},
monitor:{peso:5,co2:20,energia:220},
celular:{peso:0.3,co2:5,energia:60},
impressora:{peso:6,co2:18,energia:250}
};

let info=dados[tipo];

let pesoTotal=info.peso*quantidade;
let reducaoCO2=info.co2*quantidade;
let economiaEnergia=info.energia*quantidade;
let arvores=(reducaoCO2/22).toFixed(1);

document.getElementById("resultadoImpacto").innerHTML=`
<p><strong>Resíduo evitado:</strong> ${pesoTotal} kg</p>
<p><strong>Redução de CO₂:</strong> ${reducaoCO2} kg</p>
<p><strong>Economia de energia:</strong> ${economiaEnergia} kWh</p>
<p><strong>Equivalente:</strong> ${arvores} árvores preservadas</p>
`;
}

const perguntas=[
{p:"Lixo eletrônico contamina o solo?",r:"Sim"},
{p:"Computadores antigos podem ser reutilizados?",r:"Sim"},
{p:"Devem ser descartados no lixo comum?",r:"Não"},
{p:"Reciclagem reduz emissão de CO₂?",r:"Sim"}
];

function carregarQuiz(){
let c=document.getElementById("quizContainer");
c.innerHTML="";
perguntas.forEach((q,i)=>{
c.innerHTML+=`
<p>${q.p}</p>
<select id="q${i}">
<option value="">Selecione</option>
<option>Sim</option>
<option>Não</option>
</select>`;
});
}

function verificarQuiz(){
let acertos=0;
perguntas.forEach((q,i)=>{
if(document.getElementById("q"+i).value===q.r) acertos++;
});
document.getElementById("resultadoQuiz").innerHTML=
`Você acertou ${acertos} de ${perguntas.length}.`;
}

window.onload=carregarQuiz;