import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import FormButton from '../../components/FormButton'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import UserBadge from '../../components/UserBadge'

import rocketIcon from '../../assets/images/icons/rocket.svg'
import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

import './styles.css'

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const history = useHistory()

  const [scheduleItems, addScheduleItem] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  const scheduleItemModel = { week_day: 0, from: '', to: '' }

  function addNewScheduleItem() {
    addScheduleItem([...scheduleItems, scheduleItemModel])
  }

  function removeScheduleItem(index: number) {
    if (scheduleItems.length > 1) {
      scheduleItems.splice(index, 1)
      addScheduleItem([...scheduleItems])
    }
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    addScheduleItem(updateScheduleItems)
  }

  async function handleCreateClass(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule: scheduleItems
      })

      history.push('/')

      alert('Cadastro realizado com sucesso')
    } catch (error) {
      alert('Deu mierda')
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        pageTitle="Dar aulas"
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        headerRight={
          <span>
            <img src={rocketIcon} alt="Rocket" />
            <p>Prepare-se! vai ser o máximo.</p>
          </span>
        }
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <div className="profile-phone-container">
              <UserBadge
                name="Lucas William"
                source="https://github.com/lucaswilliameufrasio.png"
                alt="Lucas William"
              />

              <Input
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
              />
            </div>

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
            <Input
              name="cost"
              label="Custo da sua hora/aula"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(event) =>
                      setScheduleItemValue(
                        index,
                        'week_day',
                        event.target.value
                      )
                    }
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
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(event) =>
                      setScheduleItemValue(index, 'from', event.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(event) =>
                      setScheduleItemValue(index, 'to', event.target.value)
                    }
                  />

                  <button
                    type="button"
                    onClick={() => removeScheduleItem(index)}
                  >
                    Excluir horário
                  </button>
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <FormButton text="Salvar cadastro" deactivated={false} />
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
