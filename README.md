# Dashboard
![Снимок экрана 2023-04-16 в 14 07 39](https://user-images.githubusercontent.com/16574140/232305423-08d5bc31-6ee6-4440-bc74-d658888ff04e.png)

**Используемые технологии**

- TypeScript
- React
- Redux (Redux-toolkit)
- SCSS
- Django
- Django RestFramework

### Как запустить проект локально

1. Клонируем репозиторий

```
git clone https://github.com/Filin1985/dashboard_domrf.git
```

2. Устанавливаем виртуальное окружение

```
python3 -m venv venv
```

3. Устанавливаем зависимости из файла requirements.txt

```
pip install -r requirements.txt
```

4. Активируем виртуальное окружение

```
source venv/bin/activate
```

5. Заходим в папку с backend

```
cd backend/domrf
```

6. Выполняем миграции

```
python3 manage.py migrate
```

7. Загружаем данные по квартирам

```
python manage.py loaddatatobase
```

```
python manage.py loadregionstobase
```

8. Запускаем backend

```
python3 manage.py runserver
```

9. Заходим в папку с frontend

```
cd frontend/
```

10. Устанавливаем необходимые пакеты npm

```
npm install
```

11. Запускаем frontend

```
npm run dev
```

12. Открываем проект по адресу

```
http://127.0.0.1:5174/
```

[Ссылка на видео функциональности](https://youtu.be/zwDjCwNTCVo)
