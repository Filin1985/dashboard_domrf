# Dashboard

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

7. Запускаем backend

```
python3 manage.py runserver
```

8. Заходим в папку с frontend

```
cd frontend/
```

9. Устанавливаем необходимые пакеты npm

```
npm install
```

10. Запускаем frontend

```
npm run dev
```

11. Открываем проект по адресу

```
http://127.0.0.1:5174/
```
