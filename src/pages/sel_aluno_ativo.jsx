import { Button } from 'primereact/button';
import React, {useState} from 'react';
import {Dropdown} from 'primereact/dropdown';
import { Card } from 'primereact/card';
        

export default function SelAlunoAtivo() {
    const [selectedAluno, setSelectedAluno] = useState(null);
    const alunos = [
        {name: 'João', code: 'AL1'},
        {name: 'Maria', code: 'AL2'},
        {name: 'José', code: 'AL3'},
        {name: 'Ana', code: 'AL4'},
        {name: 'Pedro', code: 'AL5'}
    ];


    const [selectedCurso, setSelectedCurso] = useState(null);
    const cursos = [
        {name: 'Computação', code: 'CC'},
        {name: 'Matemática', code: 'MT'},
        {name: 'Física', code: 'FS'},
        {name: 'Química', code: 'QM'},
        {name: 'Biologia', code: 'BL'}
    ]
    
    return (
        <>  
            <Card title="Aluno Ativo">
            <form>
                <label>
                    Curso
                    <Dropdown value={selectedCurso} onChange={(e) => setSelectedCurso(e.value)} options={cursos} optionLabel="name" 
                editable placeholder="Selecione o curso" className="w-full md:w-14rem" />
                    </label>
                <label>
                    Aluno
                    <Dropdown value={selectedAluno} onChange={(e) => setSelectedAluno(e.value)} options={alunos} optionLabel="name" 
                editable placeholder="Selecione o aluno" className="w-full md:w-14rem" />
                </label>

                <Button label="OK"/>
                <Button label="Cancela"/>
            </form>
            </Card>
        </>
    )    
}