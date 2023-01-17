import React,{ useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'
import * as S from './styles';
import api from '../../services/api';

const titles = [
    {label:"Hoje"  , estado:"today"},
    {label:"Todos" , estado:"all" },
    {label:"Semana", estado:"week"},
    {label:"Mês"   , estado:"month"},
    {label:"Ano"   , estado:"year"}
];

function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [taskApi, setTaskApi] = useState([]);

    useEffect(()=>{
        api.get(`/task/filter/${filterActived}/321654`)
            .then(response => {
                setTaskApi(response.data)
            })
    },[filterActived])

    return (
        <S.Container>
            {/* Header */}
            <Header/>
            <S.FilterArea>
            {/* FilterCard */}
                {titles.map((title,i) => 
                    <button onClick={() => setFilterActived(title.estado)}>
                        <FilterCard key={title.label+i} title={title.label} actived={filterActived === title.estado }>
                            
                        </FilterCard>
                    </button>
                )}
            </S.FilterArea>
            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {/* TaskCard */}
                {taskApi.map((task,i) => <TaskCard key={task+i} type={task.type} title={task.title} when={task.when} done={task.done}/>)}
            </S.Content>
            {/* |Footer */}
                <Footer/>
        </S.Container>
    )
}

export default Home;
