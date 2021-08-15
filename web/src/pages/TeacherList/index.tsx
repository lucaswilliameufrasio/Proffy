import React, { useState } from 'react'

import FormButton from '../../components/FormButton'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherItem, { ITeacher } from '../../components/TeacherItem'

import smileIcon from '../../assets/images/icons/smile.svg'

import api from '../../services/api'

import './styles.css'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(event: React.FormEvent) {
    event.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time
      }
    })

    setTeachers(response.data)
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        pageTitle="Estudar"
        title="Estes são os proffys disponíveis."
        headerRight={
          <span>
            <img src={smileIcon} alt="Smile" />
            <p>Nós temos 32 professores.</p>
          </span>
        }
      >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' }
            ]}
          />

          <Select
            name="week_day"
            label="Dia da Semana"
            value={weekDay}
            onChange={(event) => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />

          <FormButton text="Buscar" deactivated={false} />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.user.whatsapp} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}

export default TeacherList
