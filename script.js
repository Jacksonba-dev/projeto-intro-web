// usar Number() para tranformar strings em numeros e faer o cálculo

const cursos = ["HTML e CSS", "JavaScript", "APIsREST"];

const curso = [
    {
        "cursos": "HTML e CSS",
        "descricao": "Você vai aprender HTML e CSS",
        "duracao": "1 mês",
        "valor": 500 
    },

    {
        "cursos": "javaScript",
        "descricao": "Aprenda JS do zero",
        "duracao": "2 meses",
        "valor": 900
    },

    {
        "cursos": "APIsRest",
        "descricao": "Aprenda APIsRest do zero",
        "duracao": "6 meses",
        "valor": 2000
    }
]


const turma = [
    {
        "turma": "Hipátia",
        "curso": "JavaScript",
        "inicio": " 30/11/2022",
        "termino": "30/01/2023", 
        "numero de alunos": 150,
        "periodo": "noturno",
        "concluida": false
    },

    {
        "turma": "Sibyla",
        "curso": "JavaScript",
        "inicio": " 30/10/2022",
        "termino": "30/12/2023", 
        "numero de alunos": 200,
        "periodo": "integral",
        "concluida": false
    },

    {
        "turma": "Curie",
        "curso": "HTML e CSS",
        "inicio": " 15/09/2022",
        "termino": "15/10/2022", 
        "numero de alunos": 180,
        "periodo": "noturno",
        "concluida": true
    },

    {
        "turma": "Zhenyi",
        "curso": "HTML e CSS",
        "inicio": " 01/11/2022",
        "termino": "01/01/2023", 
        "numero de alunos": 80,
        "periodo": "integral",
        "concluida": false
    },

    {
        "turma": "Clarke",
        "curso": "HTML e CSS",
        "inicio": " 04/07/2022",
        "termino": "04/09/2022", 
        "numero de alunos": 200,
        "periodo": "noturno",
        "concluida": true
    },

    {
        "turma": "Blackwell",
        "curso": "APIsRest",
        "inicio": " 20/03/2022",
        "termino": "20/06/2022", 
        "numero de alunos": 100,
        "periodo": "integral",
        "concluida": true
    },

    {
        "turma": "Elion",
        "curso": "APIsRest",
        "inicio": " 12/01/2022",
        "termino": "12/06/2022", 
        "numero de alunos": 200,
        "periodo": "noturno",
        "concluida": true
    },

    {
        "turma": "Burnell",
        "curso": "APIsRest",
        "inicio": " 18/10/2022",
        "termino": "18/04/2023", 
        "numero de alunos": 90,
        "periodo": "integral",
        "concluida": false
    }
] 

const estudantes = [
    {
        "estudante": "Chris Evans",
        "turma": "Hipátia",
        "curso": "JavaScript",
        "valor": 100,
        "nParcelas": 9,
        "desconto": "0",
        "parcelas": 100
    },

    {
        "estudante": "Halle Berry",
        "turma": "Burnell",
        "curso": "APIsRest",
        "valor": "100 reais",
        "nParcelas": 9,
        "desconto": "0",
        "parcelas": 100
    },

    {
        "estudante": "Lashana Lynch",
        "turma": "Zhenyi",
        "curso": "HTML e CSS",
        "valor": "500 reais",
        "nParcelas": 1,
        "desconto": "20",
        "parcelas": 1
    }
]


function buscarCurso(qualCurso){
    //let qualCurso = ""
    if(qualCurso === "HTML e CSS"){
        return curso[0]
    }
    else if(qualCursos === "javaScript"){
        return curso[1]
    }
    else{
        return curso[2]
    }
}
buscarCurso("HTML e CSS")




function buscarTurma(qualTurma){
    //let qualTurma = ""
    if(qualTurma === "Hipátia"){
        return turma[0]
    }
    else if(qualTurma === "Sibyla"){
        return turma[1]
    }
    else if(qualTurma === "Curie"){
        return turma[2]
    }
    else if(qualTurma === "Zhenyi"){
        return turma[3]
    }
    else if(qualTurma === "Clarke"){
        return turma[4]
    }
    else if(qualTurma === "Blackwell"){
        return turma[5]
    }
    else if(qualTurma === "Elion"){
        return turma[6]
    }
    else if(qualTurma === "Burnell"){
        return turma[7]
    }
}   
buscarTurma("Hipátia")



function buscarEstudante(qualEstudante){
    //let qualEstudante = ""
    if (qualEstudante === "Chris Evans"){
        return estudantes[0]
    }
    if(qualEstudante ==="Halle Berry"){
        return estudantes[1]
    }
    if(qualEstudante === "Lashana Lynch"){
        return estudantes[2]
    }
}
buscarEstudante("Chris Evans")       



function matricular(estudante, turma, curso, nParcelas){
    /*estudante.push(matricular) - obs: Descubrir como inserir as 
    informações dentro de um objt de fato*/
    estudantes.push(estudante, turma, curso, nParcelas)
    console.log(estudantes)
    console.log(`O aluno ${estudante} foi matriculado com sucesso no curso ${curso} 
    e turma ${turma}.`)
}
matricular("joao", "A", "HTML", "1")

//declarar "parcelarCuso"
function parcelarCurso(){
    let totalCursos = undefined
    if(estudantes.parcelas <= 2){
        desconto = "20%"
    }else if(totalCursos > 2){
        desconto = "15%"
    }else if(totalCursos === 1 || totalCursos === 2){
        desconto = "10%"
    }
}

function parcelarCurso(parcelas, carrinhoCusos){
    let carrinhoCusos = undefined
    // fazer valor da soma de carrinhoCursos
    console.log(`O valor total do curso é a`)
    if (estudantes[0].parcelas < 2) {
        let totalDivididoParcela = estudantes[0].valor / estudantes[0].parcelas
        desconto = "20%"
        console.log(`O curso ${curso} ficou no valor total de ${valor}.
        Em ${parcelas}x de ${totalDivididoParcela} `) 
    }
    else{
        let totalDivididoParcela = Number(estudantes[0].valor) / estudantes[0].parcelas 
        console.log(`O curso ${estudantes[0].curso} ficou no valor
        de R$ ${estudantes[0].valor}. Em ${estudantes[0].parcelas}x de R$ 
        ${(totalDivididoParcela)}.  `)
    }
}
parcelarCurso(estudantes[0].parcelas)


