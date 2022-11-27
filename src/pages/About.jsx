import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './About.scss'

export default function SimpleAccordion() {
  return (
    <div className='About'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Урок 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol className='About__list'>
              <li className='About__item'>Развернуть новый проект с использованием create-react-app</li>
              <li className='About__item'>Создать компонент Message, отображающий переданный ему пропсом текст.</li>
              <li className='About__item'>Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).</li>
              <li className='About__item'>Стилизовать компоненты через css (при желании можно использовать less или sass, однакодля sass нужно дополнительно установить node-sass: документация CRA).</li>
              <li className='About__item'>Установить расширение React Devtools.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Урок 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol className='About__list'>
              <li className='About__item'>Добавить в компонент App поле стейта messageList. В нем хранить массив объектов - сообщений (объект должен содержать, как минимум, поля text и author). Начальное значение - пустой массив.</li>
              <li className='About__item'>Рендерить список сообщений через map.</li>
              <li className='About__item'> Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения. При отправке сообщения обновление UI должно происходить за счет обновления стейта App.</li>
              <li className='About__item'>Добавить в App useEffect - на каждое отправленное пользователем сообщение должен отвечать робот (должно автоматически отправляться сообщение с фиксированным текстом) - для этого необходимо проверять автора последнего сообщения.</li>
              <li className='About__item'>* Сделать задержку ответа робота - сообщение от него должно отправляться через некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Урок 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol className='About__list'>
              <li className='About__item'>Установить material-ui. Переделать форму с использованием компонентов из material-ui.</li>
              <li className='About__item'>Добавить автофокус на текстовое поле при открытии страницы и после отправки сообщения.</li>
              <li className='About__item'>Исправить ошибку в консоли, связанную с отсутствием key у сообщений.</li>
              <li className='About__item'>Добавить “массив чатов” - массив объектов с полями name и id (в качестве id можно выбратьлюбую уникальную строку). Добавить список чатов - он должен отображаться слева от списка сообщений. Используйте List и ListItem из material-ui (список пока не несет никакой функциональности).</li>
              <li className='About__item'>* Добавить тему material-ui</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Урок 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol className='About__list'>
              <li className='About__item'>Установить react-router-dom. Добавить домашнюю страницу по адресу “/” со списком ссылок на страницу чатов и страницу профиля.</li>
              <li className='About__item'>Добавить страницу профиля (пока не несет никакой функциональности, можно сделать еепустой).</li>
              <li className='About__item'>Настроить разделение приложения на чаты с помощью роутера (использовать параметры url). Приложение должно корректно работать, если пользователь вводит идентификатор несуществующего чата или если идентификатора чата нет (т.е. адрес “/chats/”).</li>
              <li className='About__item'>* Добавить возможность удаления и добавления чатов.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Урок 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol className='About__list'>
              <li className='About__item'>Установить redux, react-redux.</li>
              <li className='About__item'>Создать редьюсер профиля.Подключить страницу профиля к redux.</li>
              <li className='About__item'>Добавить на странице профиля чекбокс и сохранение его состояния в сторе.</li>
              <li className='About__item'>Установить и настроить redux devtools.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}