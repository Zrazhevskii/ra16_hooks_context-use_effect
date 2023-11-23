# Список и детали

Вы решили потренироваться в использовании хука `useEffect` и реализовать следующее приложение — список с пользователями, в котором при клике на пользователя рядом появляется окно, отображающее детальную информацию о нём:

![use-effect](https://github.com/Zrazhevskii/ra16_hooks_context-use_effect/blob/main/src/assets/use-effect.png)

При первой загрузке ни один из элементов не выбран, поэтому отображается только список:

![first-load](https://github.com/Zrazhevskii/ra16_hooks_context-use_effect/blob/main/src/assets/first-load.png)

# Механика

Назовём первый компонент слева `List` , а второй справа — ``Details``.

Реализуйте следующую логику:
редактирование README