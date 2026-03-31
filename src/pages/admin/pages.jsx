import { FaUsers } from 'react-icons/fa'
import { MdAdminPanelSettings, MdAssignment } from 'react-icons/md'

export const pages = [
    {
        'url': 'users',
        'icon': <FaUsers />,
        'title': 'Пользователи'
    },
    {
        'url': 'roles',
        'icon': <MdAdminPanelSettings />,
        'title': 'Роли'
    },
    {
        'url': 'applications',
        'icon': <MdAssignment />,
        'title': 'Заявки'
    }
]